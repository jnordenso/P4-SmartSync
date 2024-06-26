import {
	Declaration,
	Expression,
	Line,
	types,
	Program,
	IfStm,
	ElseStm,
	WhileStm,
	IndexOf,
	IndexAssignment,
	Push,
	Pull,
	Size,
	Assignment,
	Output,
	Identifier,
	BinaryOperation,
	Array,
	Function,
  ArrayDeclaration,
  ReturnValue,
} from "../Syntax Analysis/AST.ts";
import AstVisitor from "./AstVisitor.ts";

/**
 * This interface defines a symbol in the Symbol Table.
 * @param name the name of the symbol
 * @param type the type of the symbol
 * @param reference the reference to the declared node in the AST
 */
interface Symbol {
	name: string; // ID (name) of the variable
	type: types; // Type of the variable
	reference: Line; // Reference to the declared node in the AST
}

/**
 * This interface defines a function symbol in the Symbol Table.
 * @param name the name of the function
 * @param type the type of the function
 * @param reference the reference to the declared node in the AST
 * @param parameters the parameters of the function
 * @param body the block of lines in the function
 */
interface FunctionSymbol {
	name: string;
	type: types;
	reference: Line;
	parameters: Symbol[];
	body: Line[];
}

/**
 * This interface defines a scope in the Symbol Table.
 * @param parent the parent scope
 * @param symbols the symbols in the scope
 * @param block the block of lines in the scope
 * @param IsFunctionScope a boolean to check if the scope is a function scope
 */
interface Scope {
	parent: Scope | null; // Parent scope (outer scope) or null if it is the global scope
	symbols: Map<string, Symbol>; // Map of symbols in the scope (key: ID, value: Symbol)
	functionSymbols: Map<string, FunctionSymbol>; // Map of function symbols in the scope (key: ID, value: FunctionSymbol)
	block: Line[]; // Block of lines in the scope
	IsFunctionScope: boolean; // Boolean to check if the scope is a function scope
}

export default class SymbolTable extends AstVisitor<void> {
	scopes: Map<Line[], Scope> = new Map(); // Map of scopes in the Symbol Table (key: block of lines, value: Scope)
	stackScopes: Scope[] = []; // Stack of scopes in the Symbol Table
	currentBlock: Line[] = []; // Current block of lines in the Symbol Table

	reserverdWords: string[] = [
		"TRUE",
		"FALSE",
		"IF",
		"ELSE",
		"WHILE",
		"RETURN",
		"Number",
		"Text",
		"Boolean",
		"AND",
		"OR",
		"EQUAL",
		"NOT EQUAL",
		"GREATER",
		"LESS",
		"SIZE",
		"PULL",
		"PUSH",
		"OUTPUT",
		"FUNCTION",
	];

	/**
	 * Builds the Symbol Table by visiting the Program node in the Abstract Syntax Tree.
	 * @param ast the Abstract Syntax Tree
	 * @return the Decorated Abstract Syntax Tree
	 */
	BuildSymbolTable = (ast: Program): SymbolTable => {
		this.visitProgram(ast); // Visits the Program node in the AST
        return this;
	};

	/**
	 * Adds the scope to the scopes map, pushes the scope to the stack of scopes,
	 * and sets the current block to the block of lines in the scope.
	 * @param block the block of lines in the scope
	 */
	NewScope = (block: Line[], IsFunctionScope?: boolean): void => {
		// Creates a new scope
		const scope: Scope = {
			parent: this.stackScopes[this.stackScopes.length - 1] || null,
			symbols: new Map(),
			functionSymbols: new Map(),
			block: block,
			IsFunctionScope: IsFunctionScope || false,
		};

		this.scopes.set(block, scope); // Adds the scope to the scopes map
		this.stackScopes.push(scope); // Pushes the scope to the stack of scopes
		this.currentBlock = this.stackScopes[this.stackScopes.length - 1].block; // Sets the current block to the block of lines in the scope
	};

	/**
	 * Removes the scope from the stack of scopes.
	 */
	ExitScope = (): void => {
		this.stackScopes.pop(); // Removes the scope from the stack of scopes
        if (this.stackScopes.length > 0) {
		    this.currentBlock = this.stackScopes[this.stackScopes.length - 1].block; // Sets the current block to the block of lines in the scope
        }
	};

	/**
	 * Adds the symbol to the current scope.
	 * @param name the name of the symbol
	 * @param type the type of the symbol
	 * @param reference the reference to the declared node in the AST
	 */
	AddSymbol = (name: string, type: types, reference: Line): void => {
		if (this.stackScopes[this.stackScopes.length - 1].symbols.has(name)) {
			throw new Error(`ERROR: Line: ${reference.line}, Variable '${name}' has already been declared in this scope`);
		}

		if (this.stackScopes[this.stackScopes.length - 1].functionSymbols.has(name)) {
			throw new Error(`ERROR: Line: ${reference.line}, Function '${name}' has already been declared in this scope`);
		}

		const symbol: Symbol = { name, type, reference }; // Creates a new symbol

		// Adds the symbol to the current scope
		this.stackScopes[this.stackScopes.length - 1].symbols.set(name, symbol);
	};

	AddFunctionSymbol = (name: string, type: types, reference: Line, parameters: Symbol[], body: Line[]): void => {
		if (this.stackScopes[this.stackScopes.length - 1].symbols.has(name)) {
			throw new Error(`ERROR:Line: ${reference.line}, Variable '${name}' has already been declared in this scope`);
		}

		if (this.stackScopes[this.stackScopes.length - 1].functionSymbols.has(name)) {
			throw new Error(`ERROR: Line: ${reference.line}, Function '${name}' has already been declared in this scope`);
		}

		// Creates a new function symbol
		const functionSymbol: FunctionSymbol = { name, type, reference, parameters, body };
		// Adds the function symbol to the current scope
		this.stackScopes[this.stackScopes.length - 1].functionSymbols.set(name, functionSymbol);
	}

	/**
	 * Looks up the symbol in the Symbol Table.
	 * @param name the name of the symbol
	 * @param reference the reference to the node in the AST
	 * @return the symbol in the Symbol Table or null if the symbol is not found
	 */
	LookupSymbol = (name: string, reference: Line[]): Symbol | null => {
		let scope = this.scopes.get(reference); // Gets the current scope

		// Loops through the scopes
		while (scope) {
			if (scope.symbols.has(name)) {
				// If the scope has the symbol
				const symbol = scope.symbols.get(name); // Gets the symbol
				if (symbol) {
					return symbol;
				}
			}
			if (scope.parent === null) {
				// If the scope is the global scope
				break;
			}
			scope = scope.parent; // Moves to the parent scope
		}
		return null;
	};

	LookupFunctionSymbol = (name: string, reference: Line[]): FunctionSymbol | null => {
		let scope = this.scopes.get(reference); // Gets the current scope

		// Loops through the scopes
		while (scope) {
			if (scope.functionSymbols.has(name)) {
				// If the scope has the function symbol
				const functionSymbol = scope.functionSymbols.get(name); // Gets the function symbol
				if (functionSymbol) {
					return functionSymbol;
				}
			}
			if (scope.parent === null) {
				// If the scope is the global scope
				break;
			}
			scope = scope.parent; // Moves to the parent scope
		}
		return null;
	
	}

	visitProgram = (ctx: Program): void => {
		this.NewScope(ctx.body); // Adds the global scope

		if (ctx.body.length > 0) {
			ctx.body.forEach((line) => {
				this.visitLine(line);
			});
		}

		this.ExitScope(); // Removes the global scope
	};

	visitLine = (ctx: Line): void => {
		switch (ctx.kind) {
			case "Declaration":
				this.visitDeclaration(ctx as Declaration);
				break;
            case "ArrayDeclaration":
                this.visitArrayDeclaration(ctx as ArrayDeclaration);
                break;
            case "IfStm":
                this.visitIfStm(ctx as IfStm);
                break;
            case "ElseStm":
                this.visitElseStm(ctx as ElseStm);
                break;
            case "WhileStm":
                this.visitWhileStm(ctx as WhileStm);
                break;
            case "IndexOf":
                this.visitIndexOf(ctx as IndexOf);
                break;
            case "IndexAssignment":
                this.visitIndexAssignment(ctx as IndexAssignment);
                break;
            case "Push":
                this.visitPush(ctx as Push);
                break;
            case "Pull":
                this.visitPull(ctx as Pull);
                break;
            case "Size":
                this.visitSize(ctx as Size);
                break;
            case "Assignment":
                this.visitAssignment(ctx as Assignment);
                break;
            case "Function":
                this.visitFunction(ctx as Function);
                break;
            case "Output":
                this.visitOutput(ctx as Output);
                break;
			case "Array":
				this.visitArray(ctx as Array);
				break;
			case "Return":
				this.visitReturnValue(ctx as ReturnValue);
				break;
			default:
				throw new Error(`ERROR: Line ${ctx.line}, Unknown line kind: ${ctx.kind}`);
		}
	};

	visitDeclaration = (ctx: Declaration): void => {
		// Checks if the variable name is a reserved keyword
		if (this.reserverdWords.includes(ctx.identifier.name)) {
			throw new Error(`ERROR: Line: ${ctx.line}, Variable name '${ctx.identifier.name}' is a reserved keyword`);
		}
		// Checks if the variable has already been declared in this scope
		if (this.LookupSymbol(ctx.identifier.name, this.currentBlock)) {
			throw new Error(
				`ERROR: Line: ${ctx.line}, Variable '${ctx.identifier.name}' has already been declared in this scope`
			);
		}
		// Adds the symbol to the Symbol Table
		this.AddSymbol(ctx.identifier.name, ctx.type, ctx);
        // Visits the identifier node in the AST
        this.visitIdentifier(ctx.identifier);
		// Visits the expression node in the AST
		this.visitExpression(ctx.value);
	};

    visitArrayDeclaration = (ctx: ArrayDeclaration): void => {
        // Checks if the variable name is a reserved keyword
        if (this.reserverdWords.includes(ctx.identifier.name)) {
            throw new Error(`ERROR: Line: ${ctx.line}, Variable name '${ctx.identifier.name}' is a reserved keyword`);
        }

        // Checks if the variable has already been declared in this scope
        if (this.LookupSymbol(ctx.identifier.name, this.currentBlock)) {
            throw new Error(
                `ERROR: Line: ${ctx.line}, Variable '${ctx.identifier.name}' has already been declared in this scope`
            );
        }

        // Adds the symbol to the Symbol Table
        this.AddSymbol(ctx.identifier.name, ctx.type, ctx);
        // Visits the identifier node in the AST
        this.visitIdentifier(ctx.identifier);
        // Visits the expression node in the AST
        if (ctx.value) {
            ctx.value.forEach((expression) => {
                this.visitExpression(expression);
            });
        }
    }

	visitIfStm = (ctx: IfStm): void => {
		this.visitExpression(ctx.condition);
        this.NewScope(ctx.body);
        ctx.body.forEach((line) => {
            this.visitLine(line);
        });
        this.ExitScope();
        if (ctx.else) {
            if (ctx.else.kind === "IfStm") {
                this.visitIfStm(ctx.else);
            } else {
                this.visitElseStm(ctx.else);
            }
        }
	};

	visitElseStm = (ctx: ElseStm): void => {
		this.NewScope(ctx.body);
        ctx.body.forEach((line) => {
            this.visitLine(line);
        });
        this.ExitScope();
	};

	visitWhileStm = (ctx: WhileStm): void => {
		this.visitExpression(ctx.condition);
        this.NewScope(ctx.body);
        ctx.body.forEach((line) => {
            this.visitLine(line);
        });
        this.ExitScope();
	};

	visitIndexOf = (ctx: IndexOf): void => {
        this.visitIdentifier(ctx.identifier);
		this.visitExpression(ctx.index);
	};

	visitIndexAssignment = (ctx: IndexAssignment): void => {
		this.visitIdentifier(ctx.identifier);
        this.visitExpression(ctx.index);
        this.visitExpression(ctx.value);
	};

	visitPush = (ctx: Push): void => {
		this.visitIdentifier(ctx.identifier);
        this.visitExpression(ctx.value);
	};

	visitPull = (ctx: Pull): void => {
		this.visitIdentifier(ctx.identifier);
	};

	visitSize = (ctx: Size): void => {
		this.visitIdentifier(ctx.identifier);
	};

	visitAssignment = (ctx: Assignment): void => {
		this.visitIdentifier(ctx.identifier);
        this.visitExpression(ctx.value);
	};

	visitFunction = (ctx: Function): void => {
        if (ctx.body) {

			if (ctx.type !== undefined) {
				const parameters: Symbol[] = [];
				ctx.parameters.forEach((parameter) => {
					if (parameter.type !== undefined) {
						parameters.push({ name: parameter.name, type: parameter.type, reference: ctx });
					}
				});
				
				this.AddFunctionSymbol(ctx.identifier.name, ctx.type, ctx, parameters, ctx.body);
				
				this.NewScope(ctx.body, true);
				ctx.parameters.forEach((parameter) => {
					if (parameter.type !== undefined) {
						this.AddSymbol(parameter.name, parameter.type, ctx);
					}
				});
			}

            ctx.body.forEach((line) => {
                this.visitLine(line);
            });
            this.ExitScope();
        } else {
			const functionSymbol = this.LookupFunctionSymbol(ctx.identifier.name, this.currentBlock);
			if (functionSymbol === null) {
				throw new Error(`ERROR: Line: ${ctx.line}, Function '${ctx.identifier.name}' has not been declared`);
			} else {
				// check if the called function has the same number of parameters as the declared function
				if (ctx.parameters.length !== functionSymbol.parameters.length) {
					throw new Error(`ERROR: Line: ${ctx.line}, Function '${ctx.identifier.name}' has the wrong number of parameters, expected ${functionSymbol.parameters.length} but got ${ctx.parameters.length}`);
				}
			}
		}
	};

	visitOutput = (ctx: Output): void => {
		this.visitExpression(ctx.value);
	};

	visitReturnValue = (ctx: ReturnValue): void => {
		// check if the return statement is inside a function by looping through the stack of scopes
		let isFunctionScope = false;
		for (let i = this.stackScopes.length - 1; i >= 0; i--) {
			if (this.stackScopes[i].IsFunctionScope === true) {
				isFunctionScope = true;
				break;
			}
		}
		// if the return statement is inside a function scope, visit the expression node in the AST
		if (isFunctionScope) {
			this.visitExpression(ctx.value);
		// else throw an error
		} else {
			throw new Error(`ERROR: Line: ${ctx.line}, Return statement is not allowed outside of a function`);
		}
	};

	visitExpression = (ctx: Expression): void => {
		switch (ctx.kind) {
			case "Array":
				this.visitArray(ctx as Array);
				break;
			case "Identifier":
				this.visitIdentifier(ctx as Identifier);
				break;
			case "BinaryOperation":
				this.visitBinaryOperation(ctx as BinaryOperation);
				break;
			case "Function":
				this.visitFunction(ctx as Function);
				break;
			default:
                // visits such as value and string concatenation does nothing and therefore does not need to be implemented
				break;
		}
	};

	visitArray = (ctx: Array): void => {
		if (ctx.identifier) {
			if (!this.LookupSymbol(ctx.identifier.name, this.currentBlock)) {
				throw new Error(`ERROR: Line: ${ctx.line}, Variable '${ctx.identifier.name}' has not been declared`);
			}
		}
		if (ctx.value) {
			ctx.value.forEach((expression) => {
				this.visitExpression(expression);
			});
		}
	};

	visitIdentifier = (ctx: Identifier): void => {
		if (!this.LookupSymbol(ctx.name, this.currentBlock)) {
			throw new Error(`ERROR: Line: ${ctx.line}, Variable '${ctx.name}' has not been declared`);
		}
	};

	visitBinaryOperation = (ctx: BinaryOperation): void => {
		this.visitExpression(ctx.left);
		this.visitExpression(ctx.right);
	};
}