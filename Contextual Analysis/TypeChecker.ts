import {
	Array,
	ArrayDeclaration,
	Assignment,
	BinaryOperation,
	Declaration,
	Delay,
	ElseStm,
	Expression,
	Function,
	Identifier,
	IfStm,
	IndexAssignment,
	IndexOf,
	Line,
	Output,
	Program,
	Pull,
	Push,
	Size,
	StringConcatenation,
	Value,
	WhileStm,
	types,
    Addition,
    Subtraction,
    Multiplication,
    Division,
    Equal,
    NotEqual,
    And,
    Or,
    Greater,
    Less
} from "../Syntax Analysis/AST.ts";
import AstVisitor from "./AstVisitor.ts";
import SymbolTable from "./SymbolTable.ts";

export default class TypeChecker extends AstVisitor<void> {
	symbolTable: SymbolTable;
	currentBlock: Line[] = [];

	constructor(st: SymbolTable) {
		super();
		this.symbolTable = st;
	}

	visitProgram = (ctx: Program): Program => {
		this.currentBlock = ctx.body;

        // Save the AST
        const AST = ctx;

		if (AST.body.length > 0) {
			AST.body.forEach((line) => {
				this.visitLine(line);
			});
		}
        // Return the AST with updated types (Decorated AST)
        return AST;
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
			case "IndexAssignment":
				this.visitIndexAssignment(ctx as IndexAssignment);
				break;
			case "Push":
				this.visitPush(ctx as Push);
				break;
			case "Pull":
				this.visitPull(ctx as Pull);
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
				throw new Error(`Unknown line kind: ${ctx.kind}`);
		}
	};

	visitDeclaration = (ctx: Declaration): void => {
		// get the symbol from the symbol table
		const symbol = this.symbolTable.LookupSymbol(ctx.identifier.name, this.currentBlock);

		// if the symbol is found
		if (symbol !== null) {
			const expressionType = this.visitExpression(ctx.value);

			// if the expression type is not the same as the symbol type
			if (expressionType !== symbol.type) {
				throw new Error(
					`Line: ${ctx.line}, Expected ${ctx.identifier.name} to be of type ${symbol.type}, but got ${expressionType}`
				);
			}
		} else {
			throw new Error(`Line: ${ctx.line}, Undeclared variable: ${ctx.identifier.name}`);
		}
	};

	visitArrayDeclaration = (ctx: ArrayDeclaration): void => {
		throw new Error("1. Method not implemented.");
	};

	visitIfStm = (ctx: IfStm): void => {
		const conditionType = this.visitExpression(ctx.condition);
        if (conditionType !== "Boolean") {
            throw new Error(`Line: ${ctx.line}, Expected condition to be of type Boolean, but got ${conditionType}`);
        }

        // save the current block
        const previousBlock = this.currentBlock;
        // set the current block to the if statement body
        this.currentBlock = ctx.body;
        // visit the if statement body
        ctx.body.forEach((line) => {
            this.visitLine(line);
        });
        // set the current block back to the previous block
        this.currentBlock = previousBlock;
	};

	visitElseStm = (ctx: ElseStm): void => {
		throw new Error("3. Method not implemented.");
	};

	visitWhileStm = (ctx: WhileStm): void => {
		throw new Error("4. Method not implemented.");
	};

	visitIndexAssignment = (ctx: IndexAssignment): void => {
		throw new Error("5. Method not implemented.");
	};

	visitPush = (ctx: Push): void => {
		throw new Error("6. Method not implemented.");
	};

	visitPull = (ctx: Pull): void => {
		throw new Error("7. Method not implemented.");
	};

	visitAssignment = (ctx: Assignment): void => {
        if (ctx.identifier.type === undefined) {
            const symbol = this.symbolTable.LookupSymbol(ctx.identifier.name, this.currentBlock);
            if (symbol !== null && symbol.type !== undefined) {
                ctx.identifier.type = symbol.type;
            } else {
                throw new Error(`Line: ${ctx.line}, Undeclared variable: ${ctx.identifier.name}`);
            }

            const expressionType = this.visitExpression(ctx.value);

            if (expressionType !== ctx.identifier.type) {
                throw new Error(`Line: ${ctx.line}, Expected ${ctx.identifier.name} to be of type ${ctx.identifier.type}, but got ${expressionType}`);
            }
        }
	};

	visitFunction = (ctx: Function): types => {
        // if its a function declaration
        if (ctx.type !== undefined) {
            if (ctx.type !== ctx.identifier.type) {
                throw new Error(`Line: ${ctx.line}, Expected function ${ctx.identifier.name} to be of type ${ctx.type}, but got ${ctx.identifier.type}`);
            }
            if (ctx.return === undefined) {
                throw new Error(`Line: ${ctx.line}, Expected function ${ctx.identifier.name} to have a return type, but got none`);
            }
            if (ctx.body === undefined) {
                throw new Error(`Line: ${ctx.line}, Expected function ${ctx.identifier.name} to have a body, but got none`);
            }
            // save the current block
            const previousBlock = this.currentBlock;
            // set the current block to the function body
            this.currentBlock = ctx.body;
            // visit the function body
            ctx.body.forEach((line) => {
                this.visitLine(line);
            });
            // get the return type of the function
            const returnType = this.visitExpression(ctx.return);
            // set the current block back to the previous block
            this.currentBlock = previousBlock;

            if (returnType !== ctx.type) {
                throw new Error(`Line: ${ctx.line}, Expected function ${ctx.identifier.name} to return type ${ctx.type}, but got ${returnType}`);
            } else {
				return ctx.type;
			}
        // if its a function call
        } else {
            const symbol = this.symbolTable.LookupFunctionSymbol(ctx.identifier.name, this.currentBlock);
			console.log("symbol", symbol)
            if (symbol !== null && symbol.type !== undefined && symbol.body !== undefined) {
                ctx.type = symbol.type;
                ctx.identifier.type = symbol.type;

				// save the current block
                const previousBlock = this.currentBlock;
				// set the current block to the function body
                this.currentBlock = symbol.body;

				// visit the function parameters
				ctx.parameters.forEach((parameter) => {
					this.visitIdentifier(parameter);
				});
				// visit the function body
				ctx.body = symbol.body;
				ctx.body.forEach((line) => {
					this.visitLine(line);
				});
				if (ctx.return === undefined) {
					ctx.return = symbol.returnExpression;
				}
				
				// get the return type of the function
				const returnType = this.visitExpression(ctx.return);
				// set the current block back to the previous block
				this.currentBlock = previousBlock;

				// check if the return type of the function is the same as the function type
				if (returnType !== ctx.type) {
					throw new Error(`Line: ${ctx.line}, Expected function ${ctx.identifier.name} to return type ${ctx.type}, but got ${returnType}`);
				} else {
					return ctx.type;
				}
            } else {
                throw new Error(`Line: ${ctx.line}, Undeclared function: ${ctx.identifier.name}`);
            }
        }
	};

	visitOutput = (ctx: Output): void => {
		this.visitExpression(ctx.value);
	};

	visitDelay = (ctx: Delay): void => {
		throw new Error("10. Method not implemented.");
	};

	visitExpression = (ctx: Expression): types => {
		switch (ctx.kind) {
			case "Value":
				return this.visitValue(ctx as Value);
			case "Array":
				return this.visitArray(ctx as Array);
			case "Size":
				return this.visitSize(ctx as Size);
			case "StringConcatenation":
				return this.visitStringConcatenation(ctx as StringConcatenation);
			case "Identifier":
				return this.visitIdentifier(ctx as Identifier);
			case "BinaryOperation":
				return this.visitBinaryOperation(ctx as BinaryOperation);
			case "Function":
				return this.visitFunction(ctx as Function);
			default:
				throw new Error(`Unknown expression kind: ${ctx.kind}`);
		}
	};

	visitValue = (ctx: Value): types => {
		return ctx.type;
	};

	visitArray = (ctx: Array): types => {
		throw new Error("12. Method not implemented.");
	};

	visitIndexOf = (ctx: IndexOf): types => {
		throw new Error("13. Method not implemented.");
	};

	visitSize = (ctx: Size): types => {
		throw new Error("14. Method not implemented.");
	};

	visitStringConcatenation = (ctx: StringConcatenation): types => {
		return ctx.type;
	};

	visitIdentifier = (ctx: Identifier): types => {
		if (ctx.type === undefined) {
			const symbol = this.symbolTable.LookupSymbol(ctx.name, this.currentBlock);
			if (symbol !== null && symbol.type !== undefined) {
				return symbol.type;
			} else {
				throw new Error(`Line: ${ctx.line}, Undeclared variable: ${ctx.name}`);
			}
		}
		return ctx.type;
	};

	visitBinaryOperation = (ctx: BinaryOperation): types => {
        console.log("binary operation")
		const left = this.visitExpression(ctx.left);
		const right = this.visitExpression(ctx.right);

		if ('operator' in ctx) {
            switch (ctx.operator as string) {
                case '+':
                    return this.visitAddition(ctx as Addition);
                case '-':
                    return this.visitSubtraction(ctx as Subtraction);
                case '*':
                    return this.visitMultiplication(ctx as Multiplication);
                case '/':
                    return this.visitDivision(ctx as Division);
                case 'EQUAL':
                    return this.visitEqual(ctx as Equal);
                case 'NOT EQUAL':
                    return this.visitNotEqual(ctx as NotEqual);
                case 'AND':
                    return this.visitAnd(ctx as And);
                case 'OR':
                    return this.visitOr(ctx as Or);
                case 'GREATER':
                    return this.visitGreater(ctx as Greater);
                case 'LESS':
                    return this.visitLess(ctx as Less);
                default:
                    throw new Error(`Line: ${ctx.line}, Unknown operator: ${ctx.operator}`);
            }
        }

		if (left !== right) {
			throw new Error(
				`Line: ${ctx.line}, Expected both sides of the binary operation to be of the same type, but got ${left} and ${right}`
			);
		} else {
			return left;
		}
	};

    visitAddition = (ctx: Addition): types => {
        const left = this.visitExpression(ctx.left);
        const right = this.visitExpression(ctx.right);

        if (left === "Number" && right === "Number") {
            return "Number";
        } else {
            throw new Error(`Line: ${ctx.line}, Expected both sides of the binary operation to be of type Number, but got ${left} and ${right}`);
        }
    }

    visitSubtraction = (ctx: Subtraction): types => {
        throw new Error("17. Method not implemented.");
    }

    visitMultiplication = (ctx: Multiplication): types => {
        const left = this.visitExpression(ctx.left);
        const right = this.visitExpression(ctx.right);
        
        if (left === "Number" && right === "Number") {
            return "Number";
        } else {
            throw new Error(`Line: ${ctx.line}, Expected both sides of the MULTIPLICATION operator to be of type Number, but got ${left} and ${right}`);
        }
    }

    visitDivision = (ctx: Division): types => {
		const left = this.visitExpression(ctx.left);
		const right = this.visitExpression(ctx.right);

		if (left === "Number" && right === "Number") {
			return "Number";
		} else {
			throw new Error(`Line: ${ctx.line}, Expected both sides of the DIVISION operator to be of type Number, but got ${left} and ${right}`);
		}
    }

    visitEqual = (ctx: Equal): types => {
        const left = this.visitExpression(ctx.left);
        const right = this.visitExpression(ctx.right);

        if (left === right) {
            return "Boolean";
        } else {
            throw new Error(`Line: ${ctx.line}, Expected both sides of the EQUAL operator to be of the same type, but got ${left} and ${right}`);
        }
    }

    visitNotEqual = (ctx: NotEqual): types => {
        throw new Error("21. Method not implemented.");
    }

    visitAnd = (ctx: And): types => {
        const left = this.visitExpression(ctx.left);
        const right = this.visitExpression(ctx.right);

        if (left === "Boolean" && right === "Boolean") {
            return "Boolean";
        } else {
            throw new Error(`Line: ${ctx.line}, Expected both sides of the AND operator to be of type Boolean, but got ${left} and ${right}`);
        }
    }

    visitOr = (ctx: Or): types => {
        const left = this.visitExpression(ctx.left);
        const right = this.visitExpression(ctx.right);

        if (left === "Boolean" && right === "Boolean") {
            return "Boolean";
        } else {
            throw new Error(`Line: ${ctx.line}, Expected both sides of the OR operator to be of type Boolean, but got ${left} and ${right}`);
        }
    }

    visitGreater = (ctx: Greater): types => {
        const left = this.visitExpression(ctx.left);
        const right = this.visitExpression(ctx.right);

        if (left === "Number" && right === "Number") {
            return "Boolean";
        } else {
            throw new Error(`Line: ${ctx.line}, Expected both sides of the binary operation to be of type Number, but got ${left} and ${right}`);
        }
    }

    visitLess = (ctx: Less): types => {

        throw new Error("25. Method not implemented.");
    }


}
