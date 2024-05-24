import AstVisitor from "./AstVisitor.ts";
import {
	Array as IArray,
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
import SymbolTable from "./SymbolTable.ts";

type FinalValue = number | string | boolean | FinalValue[];
export default class Interpreter extends AstVisitor<FinalValue | FinalValue[] | void> {
	symbolTable: SymbolTable;
	currentBlock: Line[] = [];

	environment: Map<string, FinalValue | FinalValue[]> = new Map(); // Environment for keeping track of variable values

	constructor(st: SymbolTable) {
		super();
		this.symbolTable = st;
	}

	visitProgram = (ctx: Program): void => {
		this.currentBlock = ctx.body;

		ctx.body.forEach((line) => {
			this.visitLine(line);
		});
	};

	visitLine = (ctx: Line): void | FinalValue => {
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
				this.visitPull(ctx as Pull);
				break;
			case "Assignment":
				return this.visitAssignment(ctx as Assignment);
			case "Function":
				this.visitFunction(ctx as Function);
				return; // Function should not return anything
			case "Output":
				return this.visitOutput(ctx as Output);
			case "Array":
				this.visitArray(ctx as IArray);
				return; // Array should not return anything
			case "Return":
				return this.visitReturnValue(ctx as ReturnValue);
			default:
				throw new Error(`Unknown line kind: ${ctx.kind}.`);
		}
	};

	visitDeclaration = (ctx: Declaration): void => {
		// get the symbol from the symbol table
		const symbol = this.symbolTable.LookupSymbol(ctx.identifier.name, this.currentBlock);

		// if the symbol is found
		if (symbol !== null) {
			const value = this.visitExpression(ctx.value);
			this.environment.set(ctx.identifier.name, value);
		} else {
			throw new Error(`Symbol ${ctx.identifier.name} not found.`);
		}
	};

	visitArrayDeclaration = (ctx: ArrayDeclaration): void => {
		// get the symbol from the symbol table
		const symbol = this.symbolTable.LookupSymbol(ctx.identifier.name, this.currentBlock);

		// if the symbol is found
		if (symbol !== null) {
			const arrayValue: FinalValue[] = [];
			if (ctx.value.length === 0) {
				this.environment.set(ctx.identifier.name, arrayValue);
				return;
			}

			for (let i = 0; i < ctx.value.length; i++) {
				const value = this.visitExpression(ctx.value[i]);
				arrayValue.push(value as FinalValue);

				this.environment.set(ctx.identifier.name, arrayValue);
			}
		} else {
			throw new Error(`Symbol ${ctx.identifier.name} not found.`);
		}
	};

	visitIfStm = (ctx: IfStm): void | FinalValue => {
		// get the condition value
		const condition = this.visitExpression(ctx.condition);

		if (typeof condition !== "boolean") {
			throw new Error(`Line: ${ctx.line}, Condition is not a boolean.`);
		}

		// if the condition is true
		if (condition) {
			// save the current block
			const previousBlock = this.currentBlock;
			// set the current block to the if block
			this.currentBlock = ctx.body;

			// visit the body
			let returnValue: FinalValue | undefined = undefined;
			ctx.body.forEach((line) => {
				if (line.kind === "Return") {
					const value = this.visitReturnValue(line as ReturnValue);
					if (returnValue === undefined) {
						returnValue = value;
					}
				} else {
					this.visitLine(line);
				}
			});

			if (returnValue !== undefined) {
				return returnValue;
			}

			// reset the current block
			this.currentBlock = previousBlock;
		} else {
			// if there is an else statement
			if (ctx.else) {
				if (ctx.else.kind === "IfStm") {
					// visit the else if statement
					return this.visitIfStm(ctx.else);
				} else {
					// visit the else statement
					return this.visitElseStm(ctx.else);
				}
			}
		}
	};

	visitElseStm = (ctx: ElseStm): void | FinalValue => {
		// save the current block
		const previousBlock = this.currentBlock;
		// set the current block to the else block
		this.currentBlock = ctx.body;

		// visit the body
		let returnValue: FinalValue | undefined = undefined;
		ctx.body.forEach((line) => {
			if (line.kind === "Return") {
				const value = this.visitReturnValue(line as ReturnValue);
				if (returnValue === undefined) {
					returnValue = value;
				}
			} else {
				this.visitLine(line);
			}
		});

		if (returnValue !== undefined) {
			return returnValue;
		}

		// reset the current block
		this.currentBlock = previousBlock;
	};

	visitWhileStm = (ctx: WhileStm): void | FinalValue => {
		// save the current block
		const previousBlock = this.currentBlock;
		// set the current block to the while block
		this.currentBlock = ctx.body;

		// get the condition value
		let condition = this.visitExpression(ctx.condition);

		if (typeof condition !== "boolean") {
			throw new Error(`Line: ${ctx.line}, Condition is not a boolean.`);
		}

		// while the condition is true
		while (condition) {
			// visit the body
			let returnValue: FinalValue | undefined = undefined;
			ctx.body.forEach((line) => {
				if (returnValue === undefined) {
					if (line.kind === "Return") {
						const value = this.visitReturnValue(line as ReturnValue);
						if (returnValue === undefined) {
							returnValue = value;
						}
					} else {
						const value = this.visitLine(line);
						if (value) {
							returnValue = value;
						}
					}
				}
			});

			if (returnValue !== undefined) {
				return returnValue;
			}

			// get the condition value
			condition = this.visitExpression(ctx.condition);
		}

		// reset the current block
		this.currentBlock = previousBlock;
	};

	visitIndexOf = (ctx: IndexOf): FinalValue => {
		// get the symbol from the symbol table
		const symbol = this.symbolTable.LookupSymbol(ctx.identifier.name, this.currentBlock);

		// if the symbol is found
		if (symbol !== null) {
			const index = this.visitExpression(ctx.index);
			const array = this.environment.get(ctx.identifier.name);

			if (array) {
				if (!Array.isArray(array)) {
					throw new Error(`Line: ${ctx.line}, ${ctx.identifier.name} is not an array.`);
				}

				if (typeof index === "number") {
					if (index < 0 || index >= array.length) {
						throw new Error(
							`Line: ${ctx.line}, Index out of bounds. Expected index to be between 0 and ${
								array.length - 1
							}, but got ${index}.`
						);
					}

					return array[index];
				} else {
					throw new Error(`Line: ${ctx.line}, Index value is not a number.`);
				}
			} else {
				throw new Error(`Line: ${ctx.line}, Array ${ctx.identifier.name} not found.`);
			}
		} else {
			throw new Error(`Symbol ${ctx.identifier.name} not found.`);
		}
	};

	visitIndexAssignment = (ctx: IndexAssignment): void => {
		// get the symbol from the symbol table
		const symbol = this.symbolTable.LookupSymbol(ctx.identifier.name, this.currentBlock);

		// if the symbol is found
		if (symbol !== null) {
			const index = this.visitExpression(ctx.index);
			const array = this.environment.get(ctx.identifier.name);

			if (array) {
				if (!Array.isArray(array)) {
					throw new Error(`Line: ${ctx.line}, ${ctx.identifier.name} is not an array.`);
				}

				if (typeof index === "number") {
					if (index < 0 || index >= array.length) {
						throw new Error(
							`Line: ${ctx.line}, Index out of bounds. Expected index to be between 0 and ${
								array.length - 1
							}, but got ${index}.`
						);
					}

					const value = this.visitExpression(ctx.value);
					array[index] = value;
					this.environment.set(ctx.identifier.name, array);
				} else {
					throw new Error(`Line: ${ctx.line}, Index value is not a number.`);
				}
			} else {
				throw new Error(`Line: ${ctx.line}, Array ${ctx.identifier.name} not found.`);
			}
		} else {
			throw new Error(`Symbol ${ctx.identifier.name} not found.`);
		}
	};

	visitPush = (ctx: Push): void => {
		// get the symbol from the symbol table
		const symbol = this.symbolTable.LookupSymbol(ctx.identifier.name, this.currentBlock);
		// get the variable value from the environment
		const variableValue = this.environment.get(ctx.identifier.name);

		// if the symbol is found
		if (symbol !== null && variableValue) {
			// check if the variable is an array
			if (!Array.isArray(variableValue)) {
				throw new Error(`Line: ${ctx.line}, ${ctx.identifier.name} is not an array.`);
			}
			// push the value to the array
			variableValue.push(this.visitExpression(ctx.value));
			// update the value in the environment
			this.environment.set(ctx.identifier.name, variableValue);
		} else {
			throw new Error(`Symbol ${ctx.identifier.name} not found.`);
		}
	};

	visitPull = (ctx: Pull): void => {
		// get the symbol from the symbol table
		const symbol = this.symbolTable.LookupSymbol(ctx.identifier.name, this.currentBlock);
		// get the variable value from the environment
		const variableValue = this.environment.get(ctx.identifier.name);

		// if the symbol is found
		if (symbol !== null && variableValue) {
			// check if the variable is an array
			if (!Array.isArray(variableValue)) {
				throw new Error(`Line: ${ctx.line}, ${ctx.identifier.name} is not an array.`);
			}
			// remove the last value from the array
			variableValue.pop();
			// update the value in the environment
			this.environment.set(ctx.identifier.name, variableValue);
		} else {
			throw new Error(`Symbol ${ctx.identifier.name} not found.`);
		}
	};

	visitSize = (ctx: Size): number => {
		// get the symbol from the symbol table
		const symbol = this.symbolTable.LookupSymbol(ctx.identifier.name, this.currentBlock);
		// get the variable value from the environment
		const variableValue = this.environment.get(ctx.identifier.name);

		// if the symbol is found
		if (symbol !== null && variableValue) {
			// check if the variable is an array
			if (!Array.isArray(variableValue)) {
				throw new Error(`Line: ${ctx.line}, ${ctx.identifier.name} is not an array.`);
			}
			// return the size of the array
			return variableValue.length;
		} else {
			throw new Error(`Symbol ${ctx.identifier.name} not found.`);
		}
	};

	visitAssignment = (ctx: Assignment): void => {
		// get the symbol from the symbol table
		const symbol = this.symbolTable.LookupSymbol(ctx.identifier.name, this.currentBlock);

		// if the symbol is found
		if (symbol !== null) {
			const value = this.visitExpression(ctx.value);

			this.environment.set(ctx.identifier.name, value);
		} else {
			throw new Error(`Symbol ${ctx.identifier.name} not found.`);
		}
	};

	visitFunction = (ctx: Function): FinalValue => {
		// get the symbol from the symbol table
		const symbol = this.symbolTable.LookupFunctionSymbol(ctx.identifier.name, this.currentBlock);

		// if the symbol is found
		if (symbol !== null) {
			// function declaration
			if (this.environment.get(ctx.identifier.name) === undefined) {
				if (ctx.body) {
					// save the current block
					const previousBlock = this.currentBlock;
					// set the current block to the function block
					this.currentBlock = ctx.body;

					// save the function in the environment with "Placeholder"
					// we use placeholder just to ensure that it is declared.
					this.environment.set(ctx.identifier.name, "Placeholder");
					// reset the current block
					this.currentBlock = previousBlock;

					return "Placeholder";
				} else {
					throw new Error(`Line: ${ctx.line}, Function ${ctx.identifier.name} missing body.`);
				}
				// function call
			} else {
				const previousBlock = this.currentBlock;
				if (ctx.body) {
					this.currentBlock = ctx.body;

					for (let i = 0; i < symbol.parameters.length; i++) {
						const value = this.visitExpression(ctx.parameters[i]);
						this.environment.set(symbol.parameters[i].name, value);
					}
					let returnValue: FinalValue | undefined = undefined;
					ctx.body.forEach((line) => {
						if (returnValue === undefined) {
							if (line.kind === "Return") {
								returnValue = this.visitReturnValue(line as ReturnValue);
							} else {
								const value = this.visitLine(line);
								if (value) {
									returnValue = value;
								}
							}
						}
					});

					this.currentBlock = previousBlock;

					if (returnValue !== undefined) {
						return returnValue;
					} else {
						throw new Error(`Line: ${ctx.line}, Function ${ctx.identifier.name} missing return statement.`);
					}
				} else {
					throw new Error(`Line: ${ctx.line}, Function ${ctx.identifier.name} missing body.`);
				}
			}
		} else {
			throw new Error(`Symbol ${ctx.identifier.name} not found.`);
		}
	};

	visitReturnValue = (ctx: ReturnValue): FinalValue => {
		const value = this.visitExpression(ctx.value);
		return value;
	};

	visitOutput = (ctx: Output): void => {
		const value = this.visitExpression(ctx.value);
		console.log(value);
	};

	visitExpression = (ctx: Expression): FinalValue | FinalValue[] => {
		switch (ctx.kind) {
			case "Value":
				return this.visitValue(ctx as Value);
			case "Array":
				return this.visitArray(ctx as IArray);
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
				throw new Error(`Unknown expression kind: ${ctx.kind}.`);
		}
	};

	visitValue = (ctx: Value): FinalValue => {
		switch (ctx.type) {
			case "Number":
				return Number(ctx.value); // Convert to number
			case "Text":
				return ctx.value.replaceAll('"', ""); // Remove quotes
			case "Boolean":
				return ctx.value === "TRUE"; // Convert to boolean
			default:
				throw new Error(`Unknown value type: ${ctx.type}.`);
		}
	};

	visitArray = (ctx: IArray): FinalValue[] => {
		if (ctx.value === undefined) {
			throw new Error(`Line: ${ctx.line}, Array value is undefined.`);
		}

		const array: (FinalValue[] | FinalValue)[] = [];
		ctx.value.forEach((value) => {
			array.push(this.visitExpression(value));
		});

		return array;
	};

	visitStringConcatenation = (ctx: StringConcatenation): string => {
		const strings: string[] = [];

		ctx.values.forEach((value) => {
			strings.push(this.visitExpression(value) as string);
		});

		return strings.join("");
	};

	visitIdentifier = (ctx: Identifier): FinalValue | FinalValue[] => {
		const value = this.environment.get(ctx.name);

		if (value !== undefined) {
			return value;
		} else {
			throw new Error(`Line: ${ctx.line}, Identifier ${ctx.name} not found.`);
		}
	};

	visitBinaryOperation = (ctx: BinaryOperation): FinalValue => {
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
					throw new Error(`Line: ${ctx.line}, Unknown operator: ${ctx.operator}.`);
			}
		} else {
			throw new Error(`Line: ${ctx.line}, BinaryOperation missing operator.`);
		}
	};

	visitAddition = (ctx: Addition): number => {
		const left = this.visitExpression(ctx.left);
		const right = this.visitExpression(ctx.right);

		if (typeof left === "number" && typeof right === "number") {
			if (left + right >= Number.MAX_SAFE_INTEGER) {
				throw new Error(`Line: ${ctx.line}, result is too large. Maximum value is ${Number.MAX_SAFE_INTEGER}.`);
			} else if (left + right <= Number.MIN_SAFE_INTEGER) {
				throw new Error(`Line: ${ctx.line}, result is too small. Minimum value is ${Number.MIN_SAFE_INTEGER}.`);
			}
			return left + right;
		} else {
			throw new Error(`Line: ${ctx.line}, Cannot add ${left} and ${right}.`);
		}
	};

	visitSubtraction = (ctx: Subtraction): number => {
		const left = this.visitExpression(ctx.left);
		const right = this.visitExpression(ctx.right);

		if (typeof left === "number" && typeof right === "number") {
			if (left - right >= Number.MAX_SAFE_INTEGER) {
				throw new Error(`Line: ${ctx.line}, result is too large. Maximum value is ${Number.MAX_SAFE_INTEGER}.`);
			} else if (left - right <= Number.MIN_SAFE_INTEGER) {
				throw new Error(`Line: ${ctx.line}, result is too small. Minimum value is ${Number.MIN_SAFE_INTEGER}.`);
			}
			return left - right;
		} else {
			throw new Error(`Line: ${ctx.line}, Cannot add ${left} and ${right}.`);
		}
	};

	visitMultiplication = (ctx: Multiplication): number => {
		const left = this.visitExpression(ctx.left);
		const right = this.visitExpression(ctx.right);

		if (typeof left === "number" && typeof right === "number") {
			if (left * right >= Number.MAX_SAFE_INTEGER) {
				throw new Error(`Line: ${ctx.line}, result is too large. Maximum value is ${Number.MAX_SAFE_INTEGER}.`);
			} else if (left * right <= Number.MIN_SAFE_INTEGER) {
				throw new Error(`Line: ${ctx.line}, result is too small. Minimum value is ${Number.MIN_SAFE_INTEGER}.`);
			}
			// Get the decimal amount of the left and right values
			const leftDecimalAmount = left.toString().split(".")[1]?.length || 0;
			const rightDecimalAmount = right.toString().split(".")[1]?.length || 0;
			// Get the max decimal amount by adding the left and right decimal amounts and 2 for extra precision
			const decimalAmount = leftDecimalAmount + rightDecimalAmount + 2;
			// Multiply the left and right values and round to the max decimal amount
			// this is to prevent floating point errors
			return Number((left * right).toFixed(decimalAmount));
		} else {
			throw new Error(`Line: ${ctx.line}, Cannot add ${left} and ${right}.`);
		}
	};

	visitDivision = (ctx: Division): number => {
		const left = this.visitExpression(ctx.left);
		const right = this.visitExpression(ctx.right);

		if (typeof left === "number" && typeof right === "number") {
			if (left === 0 || right === 0) {
				throw new Error(`Line: ${ctx.line}, Division by zero is not allowed.`);
			} else if (left / right >= Number.MAX_SAFE_INTEGER) {
				throw new Error(`Line: ${ctx.line}, result is too large. Maximum value is ${Number.MAX_SAFE_INTEGER}.`);
			} else if (left / right <= Number.MIN_SAFE_INTEGER) {
				throw new Error(`Line: ${ctx.line}, result is too small. Minimum value is ${Number.MIN_SAFE_INTEGER}.`);
			}
			// Get the decimal amount of the left and right values
			const leftDecimalAmount = left.toString().split(".")[1]?.length || 0;
			const rightDecimalAmount = right.toString().split(".")[1]?.length || 0;
			// Get the max decimal amount by adding the left and right decimal amounts and 2 for extra precision
			const decimalAmount = leftDecimalAmount + rightDecimalAmount + 2;
			// Multiply the left and right values and round to the max decimal amount
			// this is to prevent floating point errors
			return Number((left / right).toFixed(decimalAmount));
			//return left / right;
		} else {
			throw new Error(`Line: ${ctx.line}, Cannot add ${left} and ${right}.`);
		}
	};

	visitEqual = (ctx: Equal): boolean => {
		const left = this.visitExpression(ctx.left);
		const right = this.visitExpression(ctx.right);

		if (typeof left === typeof right) {
			return left === right;
		} else {
			throw new Error(`Line: ${ctx.line}, Cannot compare ${left} and ${right}.`);
		}
	};

	visitNotEqual = (ctx: NotEqual): boolean => {
		const left = this.visitExpression(ctx.left);
		const right = this.visitExpression(ctx.right);

		if (typeof left === typeof right) {
			return left !== right;
		} else {
			throw new Error(`Line: ${ctx.line}, Cannot compare ${left} and ${right}.`);
		}
	};

	visitAnd = (ctx: And): boolean => {
		const left = this.visitExpression(ctx.left);
		const right = this.visitExpression(ctx.right);

		if (typeof left === "boolean" && typeof right === "boolean") {
			return left && right;
		} else {
			throw new Error(`Line: ${ctx.line}, Cannot compare ${left} and ${right}.`);
		}
	};

	visitOr = (ctx: Or): boolean => {
		const left = this.visitExpression(ctx.left);
		const right = this.visitExpression(ctx.right);

		if (typeof left === "boolean" && typeof right === "boolean") {
			return left || right;
		} else {
			throw new Error(`Line: ${ctx.line}, Cannot compare ${left} and ${right}.`);
		}
	};

	visitGreater = (ctx: Greater): boolean => {
		const left = this.visitExpression(ctx.left);
		const right = this.visitExpression(ctx.right);

		if (typeof left === "number" && typeof right === "number") {
			return left > right;
		} else {
			throw new Error(`Line: ${ctx.line}, Cannot compare ${left} and ${right}.`);
		}
	};

	visitLess = (ctx: Less): boolean => {
		const left = this.visitExpression(ctx.left);
		const right = this.visitExpression(ctx.right);

		if (typeof left === "number" && typeof right === "number") {
			return left < right;
		} else {
			throw new Error(`Line: ${ctx.line}, Cannot compare ${left} and ${right}.`);
		}
	};
}
