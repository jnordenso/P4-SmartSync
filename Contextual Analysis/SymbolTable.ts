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
	Delay,
	Identifier,
	BinaryOperation,
	Array,
	Function,
  ArrayDeclaration,
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
	type: types | undefined; // Type of the variable
	reference: Line; // Reference to the declared node in the AST
}

/**
 * This interface defines a scope in the Symbol Table.
 * @param parent the parent scope
 * @param symbols the symbols in the scope
 * @param block the block of lines in the scope
 */
interface Scope {
	parent: Scope | null; // Parent scope (outer scope) or null if it is the global scope
	symbols: Map<string, Symbol>; // Map of symbols in the scope (key: ID, value: Symbol)
	block: Line[];
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
		"DELAY",
		"FUNCTION",
	];

	/**
	 * Builds the Symbol Table by visiting the Program node in the Abstract Syntax Tree.
	 * @param ast the Abstract Syntax Tree
	 * @return the Decorated Abstract Syntax Tree
	 */
	BuildSymbolTable = (ast: Program): void => {
		this.visitProgram(ast); // Visits the Program node in the AST
	};

	/**
	 * Adds the scope to the scopes map, pushes the scope to the stack of scopes,
	 * and sets the current block to the block of lines in the scope.
	 * @param block the block of lines in the scope
	 */
	NewScope = (block: Line[]): void => {
		// Creates a new scope
		const scope: Scope = {
			parent: this.stackScopes[this.stackScopes.length - 1] || null,
			symbols: new Map(),
			block: block,
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
	AddSymbol = (name: string, type: types | undefined, reference: Line): void => {
		if (this.stackScopes[this.stackScopes.length - 1].symbols.has(name)) {
			// TODO: Maybe we should make some error handling in another way
			throw new Error(`Variable '${name}' has already been declared in this scope`);
		}

		const symbol: Symbol = { name, type, reference }; // Creates a new symbol

		// Adds the symbol to the current scope
		this.stackScopes[this.stackScopes.length - 1].symbols.set(name, symbol);
	};

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
            case "Delay":
                this.visitDelay(ctx as Delay);
                break;
			default:
				break;
		}
	};

	visitDeclaration = (ctx: Declaration): void => {
		// Checks if the variable name is a reserved keyword
		if (this.reserverdWords.includes(ctx.identifier.name)) {
			throw new Error(`Line: ${ctx.line}, Variable name '${ctx.identifier.name}' is a reserved keyword`);
		}
		// Checks if the variable has already been declared in this scope
		if (this.LookupSymbol(ctx.identifier.name, this.currentBlock)) {
			throw new Error(
				`Line: ${ctx.line}, Variable '${ctx.identifier.name}' has already been declared in this scope`
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
            throw new Error(`Line: ${ctx.line}, Variable name '${ctx.identifier.name}' is a reserved keyword`);
        }

        // Checks if the variable has already been declared in this scope
        if (this.LookupSymbol(ctx.identifier.name, this.currentBlock)) {
            throw new Error(
                `Line: ${ctx.line}, Variable '${ctx.identifier.name}' has already been declared in this scope`
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
            this.NewScope(ctx.body);

            ctx.parameters.forEach((parameter) => {
                this.AddSymbol(parameter.name, parameter.type, ctx);
            });

            ctx.body.forEach((line) => {
                this.visitLine(line);
            });
            this.ExitScope();
        }
	};

	visitOutput = (ctx: Output): void => {
		this.visitExpression(ctx.value);
	};

	visitDelay = (ctx: Delay): void => {
        this.visitExpression(ctx.value);
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
			default:
                // visits such as value and string concatenation does nothing and therefore does not need to be implemented
				break;
		}
	};

	visitArray = (ctx: Array): void => {
		if (ctx.identifier) {
			if (!this.LookupSymbol(ctx.identifier.name, this.currentBlock)) {
				throw new Error(`Line: ${ctx.line}, Variable '${ctx.identifier.name}' has not been declared`);
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
			throw new Error(`Line: ${ctx.line}, Variable '${ctx.name}' has not been declared`);
		}
	};

	visitBinaryOperation = (ctx: BinaryOperation): void => {
		this.visitExpression(ctx.left);
		this.visitExpression(ctx.right);
	};
}
