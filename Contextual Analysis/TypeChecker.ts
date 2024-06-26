import {
	Array,
	ArrayDeclaration,
	Assignment,
	BinaryOperation,
	Declaration,
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
	Less,
	ReturnValue,
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

	visitLine = (ctx: Line): types | void => {
		// each line returns a boolean if it has a return statement (used by functions only)
		switch (ctx.kind) {
			case "Declaration":
				return this.visitDeclaration(ctx as Declaration);
			case "ArrayDeclaration":
				return this.visitArrayDeclaration(ctx as ArrayDeclaration);
			case "IfStm":
				return this.visitIfStm(ctx as IfStm);
			case "ElseStm":
				return this.visitElseStm(ctx as ElseStm);
			case "WhileStm":
				return this.visitWhileStm(ctx as WhileStm);
			case "IndexAssignment":
				return this.visitIndexAssignment(ctx as IndexAssignment);
			case "Push":
				return this.visitPush(ctx as Push);
			case "Pull":
				return this.visitPull(ctx as Pull);
			case "Assignment":
				return this.visitAssignment(ctx as Assignment);
			case "Function":
				return this.visitFunction(ctx as Function);
			case "Output":
				return this.visitOutput(ctx as Output);
			case "Array":
				return this.visitArray(ctx as Array);
			case "Return":
				return this.visitReturnValue(ctx as ReturnValue);
			default:
				throw new Error(`ERROR: Line: ${ctx.line}, Unknown line kind: ${ctx.kind}.`);
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
					`‼️  ERROR: Line: ${ctx.line}, Expected ${ctx.identifier.name} to be of type ${symbol.type}, but got ${expressionType}. ‼️`
				);
			}
		} else {
			throw new Error(`ERROR: Line: ${ctx.line}, Undeclared variable: ${ctx.identifier.name}.`);
		}
	};

	visitArrayDeclaration = (ctx: ArrayDeclaration): void => {
		// get the symbol from the symbol table
		const symbol = this.symbolTable.LookupSymbol(ctx.identifier.name, this.currentBlock);

		// if the symbol is found
		if (symbol !== null) {
			for (let i = 0; i < ctx.value.length; i++) {
				const expressionType = this.visitExpression(ctx.value[i]);

				// if the expression type is not the same as the symbol type
				if (expressionType !== symbol.type) {
					throw new Error(
						`ERROR: Line: ${ctx.line}, Expected all elements in ${ctx.identifier.name}[] to be of type ${symbol.type}, but got type ${expressionType} for element ${i}.`
					);
				}
			}
		} else {
			throw new Error(`ERROR: Line: ${ctx.line}, Undeclared variable: ${ctx.identifier.name}.`);
		}
	};

	visitIfStm = (ctx: IfStm): types | void => {
		const conditionType = this.visitExpression(ctx.condition);
		if (conditionType !== "Boolean") {
			throw new Error(
				`ERROR: Line: ${ctx.line}, Expected IF condition to be of type Boolean, but got ${conditionType}.`
			);
		}

		// save the current block
		const previousBlock = this.currentBlock;
		// set the current block to the if statement body
		this.currentBlock = ctx.body;
		// visit the if statement body and check if there is a return statement
		const returnTypes: types[] = [];
		ctx.body.forEach((line) => {
			if (line.kind === "Return") {
				returnTypes.push(this.visitReturnValue(line as ReturnValue));
			} else {
				if (line.kind === "IfStm") {
					const returnTypeIf = this.visitIfStm(line as IfStm);
					if (returnTypeIf) {
						returnTypes.push(returnTypeIf);
					}
				} else {
					this.visitLine(line);
				}
			}
		});

		// set the current block back to the previous block
		this.currentBlock = previousBlock;

		if (ctx.else !== undefined) {
			if (ctx.else.kind === "IfStm") {
				const returnTypeElse = this.visitIfStm(ctx.else);
				if (returnTypeElse) {
					returnTypes.push(returnTypeElse);
				}
			} else {
				const returnTypeElse = this.visitElseStm(ctx.else);
				if (returnTypeElse) {
					returnTypes.push(returnTypeElse);
				}
			}
		}
		// check if all return statements are of the same type
		returnTypes.forEach((type) => {
			if (type !== returnTypes[0]) {
				throw new Error(`ERROR: Line: ${ctx.line}, Expected all return statements to be of the same type.`);
			}
		});
		// return the type of the return statement
		return returnTypes[0];
	};

	visitElseStm = (ctx: ElseStm): types | void => {
		// save the current block
		const previousBlock = this.currentBlock;
		// set the current block to the else statement body
		this.currentBlock = ctx.body;
		// visit the else statement body and check if there is a return statement
		const returnTypes: types[] = [];
		ctx.body.forEach((line) => {
			if (line.kind === "Return") {
				returnTypes.push(this.visitReturnValue(line as ReturnValue));
			} else {
				if (line.kind === "IfStm") {
					const returnTypeIf = this.visitIfStm(line as IfStm);
					if (returnTypeIf !== undefined) {
						returnTypes.push(returnTypeIf);
					}
				} else {
					this.visitLine(line);
				}
			}
		});
		// set the current block back to the previous block
		this.currentBlock = previousBlock;

		// check if all return statements are of the same type
		returnTypes.forEach((type) => {
			if (type !== returnTypes[0]) {
				throw new Error(`ERROR: Line: ${ctx.line}, Expected all return statements to be of the same type.`);
			}
		});
		// return the type of the return statement
		return returnTypes[0];
	};

	visitWhileStm = (ctx: WhileStm): types | void => {
		const conditionType = this.visitExpression(ctx.condition);
		if (conditionType !== "Boolean") {
			throw new Error(
				`ERROR: Line: ${ctx.line}, Expected WHILE condition to be of type Boolean, but got ${conditionType}.`
			);
		}

		// save the current block
		const previousBlock = this.currentBlock;
		// set the current block to the while statement body
		this.currentBlock = ctx.body;
		// visit the while statement body and check if there is a return statement
		const returnTypes: types[] = [];
		ctx.body.forEach((line) => {
			this.visitLine(line);

			if (line.kind === "Return") {
				returnTypes.push(this.visitReturnValue(line as ReturnValue));
			} else {
				if (line.kind === "IfStm") {
					const returnTypeIf = this.visitIfStm(line as IfStm);
					if (returnTypeIf !== undefined) {
						returnTypes.push(returnTypeIf);
					}
				} else {
					this.visitLine(line);
				}
			}
		});
		// set the current block back to the previous block
		this.currentBlock = previousBlock;

		// check if all return statements are of the same type
		returnTypes.forEach((type) => {
			if (type !== returnTypes[0]) {
				throw new Error(`ERROR: Line: ${ctx.line}, Expected all return statements to be of the same type.`);
			}
		});
		// return the type of the return statement
		return returnTypes[0];
	};

	visitIndexAssignment = (ctx: IndexAssignment): void => {
		const symbol = this.symbolTable.LookupSymbol(ctx.identifier.name, this.currentBlock);

		if (symbol !== null) {
			if (symbol.reference.kind !== "ArrayDeclaration") {
				throw new Error(
					`ERROR: Line: ${ctx.line}, Array features are not allowed on non array: ${ctx.identifier.name}.`
				);
			}

			const indexType = this.visitExpression(ctx.index);
			if (indexType !== symbol.type) {
				throw new Error(
					`ERROR: Line: ${ctx.line}, Expected index of ${ctx.identifier.name}[] to be of type Number, but got type ${indexType}.`
				);
			}

			const expressionType = this.visitExpression(ctx.value);
			if (expressionType !== symbol.type) {
				throw new Error(
					`ERROR: Line: ${ctx.line}, Expected to assign an expression of type ${symbol.type} to ${ctx.identifier.name}[] but got type ${expressionType}.`
				);
			}
		} else {
			throw new Error(`ERROR: Line: ${ctx.line}, Undeclared variable: ${ctx.identifier.name}.`);
		}
	};

	visitPush = (ctx: Push): void => {
		const symbol = this.symbolTable.LookupSymbol(ctx.identifier.name, this.currentBlock);

		if (symbol !== null) {
			if (symbol.reference.kind !== "ArrayDeclaration") {

				// case where the reference is from a function parameter
				if (symbol.reference.kind === "Function") {
					const func = symbol.reference as Function;
					for (let i = 0; i < func.parameters.length; i++) {
						if (
							func.parameters[i].name === ctx.identifier.name &&
							func.parameters[i].kind === "ArrayIdentifier"
						) {
							return;
						}
					}
				}

				throw new Error(
					`ERROR: Line: ${ctx.line}, Array features are not allowed on non array: ${ctx.identifier.name}.`
				);
			}

			const expressionType = this.visitExpression(ctx.value);

			if (expressionType !== symbol.type) {
				throw new Error(
					`ERROR: Line: ${ctx.line}, Expected to push an expression of type ${symbol.type} to ${ctx.identifier.name}[] but got type ${expressionType}.`
				);
			}
		} else {
			throw new Error(`ERROR: Line: ${ctx.line}, Undeclared variable: ${ctx.identifier.name}.`);
		}
	};

	visitPull = (ctx: Pull): void => {
		const symbol = this.symbolTable.LookupSymbol(ctx.identifier.name, this.currentBlock);

		if (symbol !== null) {
			if (symbol.reference.kind !== "ArrayDeclaration") {

				// case where the reference is from a function parameter
				if (symbol.reference.kind === "Function") {
					const func = symbol.reference as Function;
					for (let i = 0; i < func.parameters.length; i++) {
						if (
							func.parameters[i].name === ctx.identifier.name &&
							func.parameters[i].kind === "ArrayIdentifier"
						) {
							return;
						}
					}
				}

				throw new Error(
					`ERROR: Line: ${ctx.line}, Array features are not allowed on non array: ${ctx.identifier.name}.`
				);
			}
		} else {
			throw new Error(`ERROR: Line: ${ctx.line}, Undeclared variable: ${ctx.identifier.name}.`);
		}
	};

	visitAssignment = (ctx: Assignment): void => {
		if (ctx.identifier.type === undefined) {
			const symbol = this.symbolTable.LookupSymbol(ctx.identifier.name, this.currentBlock);
			if (symbol !== null && symbol.type !== undefined) {
				ctx.identifier.type = symbol.type;
			} else {
				throw new Error(`ERROR: Line: ${ctx.line}, Undeclared variable: ${ctx.identifier.name}.`);
			}

			const expressionType = this.visitExpression(ctx.value);

			if (expressionType !== ctx.identifier.type) {
				throw new Error(
					`ERROR: Line: ${ctx.line}, Expected ${ctx.identifier.name} to be of type ${ctx.identifier.type}, but got type ${expressionType}.`
				);
			}
		}
	};

	visitFunction = (ctx: Function): types => {
		// if its a function declaration
		if (ctx.type !== undefined) {
			if (ctx.type !== ctx.identifier.type) {
				throw new Error(
					`ERROR: Line: ${ctx.line}, Expected function ${ctx.identifier.name} to be of type ${ctx.type}, but got type ${ctx.identifier.type}.`
				);
			}
			if (ctx.body === undefined) {
				throw new Error(
					`ERROR: Line: ${ctx.line}, Expected function ${ctx.identifier.name} to have a body, but got none.`
				);
			}
			// save the current block
			const previousBlock = this.currentBlock;
			// set the current block to the function body
			this.currentBlock = ctx.body;
			// visit the function body and check if there is a return statement
			const returnType: types[] = [];
			ctx.body.forEach((line) => {
				const type = this.visitLine(line);
				if (type !== undefined) {
					returnType.push(type);
				}
			});

			// if return type is undefined throw an error
			if (returnType.length === 0) {
				throw new Error(
					`ERROR: Line: ${ctx.line}, Expected function ${ctx.identifier.name} to have a return statement.`
				);
			}

			// if the return type of the function is not the same as the function type
			returnType.forEach((type) => {
				if (type !== ctx.type) {
					throw new Error(
						`ERROR: Line: ${ctx.line}, Expected function ${ctx.identifier.name} to return type ${ctx.type}, but got type ${type}.`
					);
				}
			});

			// set the current block back to the previous block
			this.currentBlock = previousBlock;

			return ctx.type;

			// if its a function call
		} else {
			const symbol = this.symbolTable.LookupFunctionSymbol(ctx.identifier.name, this.currentBlock);
			if (symbol !== null && symbol.type !== undefined && symbol.body !== undefined) {
				ctx.type = symbol.type;
				ctx.identifier.type = symbol.type;

				// visit the function parameters
				for (let i = 0; i < symbol.parameters.length; i++) {
					const parameter = symbol.parameters[i].type;
					// check if the function has the same amount of parameters as the function call
					if (ctx.parameters[i] === undefined) {
						throw new Error(
							`ERROR: Line: ${ctx.line}, Expected function ${symbol.name} to have ${symbol.parameters.length} parameter(s), but got ${ctx.parameters.length}.`
						);
					}
					const argument = this.visitIdentifier(ctx.parameters[i]);
					if (parameter !== argument) {
						throw new Error(
							`ERROR: Line: ${ctx.line}, Expected parameter ${symbol.parameters[i].name} to be of type ${parameter}, but got type ${argument}.`
						);
					}
				}

				// save the current block
				const previousBlock = this.currentBlock;
				// set the current block to the function body
				this.currentBlock = symbol.body;

				// visit the function body
				ctx.body = symbol.body;
				ctx.body.forEach((line) => {
					this.visitLine(line);
				});

				// set the current block back to the previous block
				this.currentBlock = previousBlock;

				// check if the return type of the function is the same as the function type
				return ctx.type;
			} else {
				throw new Error(`ERROR: Line: ${ctx.line}, Undeclared function: ${ctx.identifier.name}.`);
			}
		}
	};

	visitOutput = (ctx: Output): void => {
		this.visitExpression(ctx.value);
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
			case "ArrayIdentifier":
				return this.visitIdentifier(ctx as Identifier);
			case "BinaryOperation":
				return this.visitBinaryOperation(ctx as BinaryOperation);
			case "Function":
				return this.visitFunction(ctx as Function);
			case "IndexOf":
				return this.visitIndexOf(ctx as IndexOf);
			default:
				throw new Error(`ERROR: Unknown expression kind: ${ctx.kind}.`);
		}
	};

	visitReturnValue = (ctx: ReturnValue): types => {
		const expressionType = this.visitExpression(ctx.value);
		if (ctx.type === undefined) {
			ctx.type = expressionType;
		}
		return ctx.type;
	};

	visitValue = (ctx: Value): types => {
		return ctx.type;
	};

	visitArray = (ctx: Array): types => {
		if (ctx.identifier === undefined) {
			// if the array is used as a value without a variable ex = [1, 2, 3] or RETURN [1, 2, 3]
			if (ctx.value !== undefined) {
				const expressionTypes = ctx.value.map((expression) => {
					return this.visitExpression(expression);
				});

				if (expressionTypes.length > 0) {
					const firstType = expressionTypes[0];
					for (let i = 1; i < expressionTypes.length; i++) {
						if (expressionTypes[i] !== firstType) {
							throw new Error(
								`ERROR: Line: ${ctx.line}, Expected all elements in array to be of the same type, but got type ${firstType} and ${expressionTypes[i]}.`
							);
						}
					}
					return firstType;
				} else {
					throw new Error(`ERROR: Line: ${ctx.line}, Expected array to have at least one element.`);
				}
			} else {
				throw new Error(`ERROR: Line: ${ctx.line}, Expected array to have at least one element.`);
			}
		} else {
			const symbol = this.symbolTable.LookupSymbol(ctx.identifier.name, this.currentBlock);

			if (symbol !== null) {
				if (symbol.reference.kind !== "ArrayDeclaration") {
					// case where the reference is from a function parameter
					if (symbol.reference.kind === "Function") {
						const func = symbol.reference as Function;
						for (let i = 0; i < func.parameters.length; i++) {
							if (
								func.parameters[i].name === ctx.identifier.name &&
								func.parameters[i].kind === "ArrayIdentifier"
							) {
								return "Number";
							}
						}
					}

					throw new Error(
						`ERROR: Line: ${ctx.line}, Array features are not allowed on non array: ${ctx.identifier.name}.`
					);
				}

				// if the type of the array is not set yet set it to the type of the symbol
				if (ctx.type === undefined) {
					ctx.type = symbol.type;
				}
				// if the type of the identifier is not set yet set it to the type of the symbol
				if (ctx.identifier.type === undefined) {
					ctx.identifier.type = symbol.type;
				}

				if (ctx.value !== undefined) {
					for (let i = 0; i < ctx.value.length; i++) {
						const expressionType = this.visitExpression(ctx.value[i]);
						if (expressionType !== symbol.type) {
							throw new Error(
								`ERROR: Line: ${ctx.line}, Expected all elements in ${ctx.identifier.name}[] to be of type ${symbol.type}, but got type ${expressionType} for element ${i}.`
							);
						}
					}
				}
				return symbol.type;
			} else {
				throw new Error(`ERROR: Line: ${ctx.line}, Undeclared variable: ${ctx.identifier.name}.`);
			}
		}
	};

	visitIndexOf = (ctx: IndexOf): types => {
		// get the symbol from the symbol table
		const symbol = this.symbolTable.LookupSymbol(ctx.identifier.name, this.currentBlock);

		// if the symbol is found
		if (symbol !== null) {
			if (symbol.reference.kind !== "ArrayDeclaration") {
				// case where the reference is from a function parameter
				if (symbol.reference.kind === "Function") {
					const func = symbol.reference as Function;
					for (let i = 0; i < func.parameters.length; i++) {
						if (
							func.parameters[i].name === ctx.identifier.name &&
							func.parameters[i].kind === "ArrayIdentifier"
						) {
							return "Number";
						}
					}
				}

				throw new Error(
					`ERROR: Line: ${ctx.line}, Array features are not allowed on non array: ${ctx.identifier.name}.`
				);
			}

			const expressionType = this.visitExpression(ctx.index);
			if (expressionType !== "Number") {
				throw new Error(
					`ERROR: Line: ${ctx.line}, Expected index of ${ctx.identifier.name}[] to be of type Number, but got type ${expressionType}.`
				);
			}
			return symbol.type;
		} else {
			throw new Error(`ERROR: Line: ${ctx.line}, Undeclared variable: ${ctx.identifier.name}.`);
		}
	};

	visitSize = (ctx: Size): types => {
		// get the symbol from the symbol table
		const symbol = this.symbolTable.LookupSymbol(ctx.identifier.name, this.currentBlock);

		// if the symbol is found
		if (symbol !== null) {
			if (symbol.reference.kind !== "ArrayDeclaration") {
				// case where the reference is from a function parameter
				if (symbol.reference.kind === "Function") {
					const func = symbol.reference as Function;
					for (let i = 0; i < func.parameters.length; i++) {
						if (
							func.parameters[i].name === ctx.identifier.name &&
							func.parameters[i].kind === "ArrayIdentifier"
						) {
							return "Number";
						}
					}
				}

				throw new Error(
					`ERROR: Line: ${ctx.line}, Array features are not allowed on non array: ${ctx.identifier.name}.`
				);
			}
			return "Number";
		} else {
			throw new Error(`ERROR: Line: ${ctx.line}, Undeclared variable: ${ctx.identifier.name}.`);
		}
	};

	visitStringConcatenation = (ctx: StringConcatenation): types => {
		return ctx.type;
	};

	visitIdentifier = (ctx: Identifier): types => {
		if (ctx.type === undefined) {
			const symbol = this.symbolTable.LookupSymbol(ctx.name, this.currentBlock);
			if (symbol !== null && symbol.type !== undefined) {
				ctx.type = symbol.type;

				if (symbol.reference.kind === "ArrayDeclaration" && ctx.kind !== "ArrayIdentifier") {
					throw new Error(`ERROR: Line: ${ctx.line}, ${ctx.name} is an Array and has to be called: ${ctx.name}[].`);
				}

				return symbol.type;
			} else {
				throw new Error(`ERROR: Line: ${ctx.line}, Undeclared variable: ${ctx.name}.`);
			}
		}
		return ctx.type;
	};

	visitBinaryOperation = (ctx: BinaryOperation): types => {
		const left = this.visitExpression(ctx.left);
		const right = this.visitExpression(ctx.right);

		if ("operator" in ctx) {
			switch (ctx.operator as string) {
				case "+":
					return this.visitAddition(ctx as Addition);
				case "-":
					return this.visitSubtraction(ctx as Subtraction);
				case "*":
					return this.visitMultiplication(ctx as Multiplication);
				case "/":
					return this.visitDivision(ctx as Division);
				case "EQUAL":
					return this.visitEqual(ctx as Equal);
				case "NOT EQUAL":
					return this.visitNotEqual(ctx as NotEqual);
				case "AND":
					return this.visitAnd(ctx as And);
				case "OR":
					return this.visitOr(ctx as Or);
				case "GREATER":
					return this.visitGreater(ctx as Greater);
				case "LESS":
					return this.visitLess(ctx as Less);
				default:
					throw new Error(`ERROR: Line: ${ctx.line}, Unknown operator: ${ctx.operator}.`);
			}
		}

		if (left !== right) {
			throw new Error(
				`ERROR: Line: ${ctx.line}, Expected both sides of the binary operation to be of the same type, but got type ${left} and ${right}.`
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
			throw new Error(
				`ERROR: Line: ${ctx.line}, Expected both sides of the ADDITION operator to be of type Number, but got type ${left} and ${right}.`
			);
		}
	};

	visitSubtraction = (ctx: Subtraction): types => {
		const left = this.visitExpression(ctx.left);
		const right = this.visitExpression(ctx.right);

		if (left === "Number" && right === "Number") {
			return "Number";
		} else {
			throw new Error(
				`ERROR: Line: ${ctx.line}, Expected both sides of the SUBTRACTION operator to be of type Number, but got type ${left} and ${right}.`
			);
		}
	};

	visitMultiplication = (ctx: Multiplication): types => {
		const left = this.visitExpression(ctx.left);
		const right = this.visitExpression(ctx.right);

		if (left === "Number" && right === "Number") {
			return "Number";
		} else {
			throw new Error(
				`ERROR: Line: ${ctx.line}, Expected both sides of the MULTIPLICATION operator to be of type Number, but got type ${left} and ${right}.`
			);
		}
	};

	visitDivision = (ctx: Division): types => {
		const left = this.visitExpression(ctx.left);
		const right = this.visitExpression(ctx.right);

		if (left === "Number" && right === "Number") {
			return "Number";
		} else {
			throw new Error(
				`ERROR: Line: ${ctx.line}, Expected both sides of the DIVISION operator to be of type Number, but got type ${left} and ${right}.`
			);
		}
	};

	visitEqual = (ctx: Equal): types => {
		const left = this.visitExpression(ctx.left);
		const right = this.visitExpression(ctx.right);

		if (left === right) {
			return "Boolean";
		} else {
			throw new Error(
				`ERROR: Line: ${ctx.line}, Expected both sides of the EQUAL operator to be of the same type, but got type ${left} and ${right}.`
			);
		}
	};

	visitNotEqual = (ctx: NotEqual): types => {
		const left = this.visitExpression(ctx.left);
		const right = this.visitExpression(ctx.right);

		if (left === right) {
			return "Boolean";
		} else {
			throw new Error(
				`ERROR: Line: ${ctx.line}, Expected both sides of the NOT EQUAL operator to be of the same type, but got type ${left} and ${right}.`
			);
		}
	};

	visitAnd = (ctx: And): types => {
		const left = this.visitExpression(ctx.left);
		const right = this.visitExpression(ctx.right);

		if (left === "Boolean" && right === "Boolean") {
			return "Boolean";
		} else {
			throw new Error(
				`ERROR: Line: ${ctx.line}, Expected both sides of the AND operator to be of type Boolean, but got type ${left} and ${right}.`
			);
		}
	};

	visitOr = (ctx: Or): types => {
		const left = this.visitExpression(ctx.left);
		const right = this.visitExpression(ctx.right);

		if (left === "Boolean" && right === "Boolean") {
			return "Boolean";
		} else {
			throw new Error(
				`ERROR: Line: ${ctx.line}, Expected both sides of the OR operator to be of type Boolean, but got type ${left} and ${right}.`
			);
		}
	};

	visitGreater = (ctx: Greater): types => {
		const left = this.visitExpression(ctx.left);
		const right = this.visitExpression(ctx.right);

		if (left === "Number" && right === "Number") {
			return "Boolean";
		} else {
			throw new Error(
				`ERROR: Line: ${ctx.line}, Expected both sides of the binary operation to be of type Number, but got type ${left} and ${right}.`
			);
		}
	};

	visitLess = (ctx: Less): types => {
		const left = this.visitExpression(ctx.left);
		const right = this.visitExpression(ctx.right);

		if (left === "Number" && right === "Number") {
			return "Boolean";
		} else {
			throw new Error(
				`ERROR: Line: ${ctx.line}, Expected both sides of the binary operation to be of type Number, but got type ${left} and ${right}.`
			);
		}
	};
}
