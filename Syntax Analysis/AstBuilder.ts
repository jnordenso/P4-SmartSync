import SmartSyncVisitor from "./SmartSyncVisitor.ts";
import {
	DeclarationContext,
	ExpressionContext,
	MultExprContext,
	ProgramContext,
	AtomContext,
	AssignmentsContext,
	FuncReturnContext,
	FunctionsContext,
	OutputContext,
	DelayContext,
	ArrayValueContext,
	ArrayStmContext,
	ElseContext,
	StringArithmeticContext,
	ArithmeticContext,
	ValueContext,
	StatementsContext,
	IfStmContext,
	ElsesContext,
	ConditionContext,
	MultConExprContext,
	AtomConContext,
	LineContext,
} from "./SmartSyncParser.ts";
import {
	Line,
	Program,
	Identifier,
	Declaration,
	Expression,
	StringConcatenation,
	Addition,
	Value,
	Multiplication,
	Subtraction,
	Division,
	types,
	And,
	Or,
	Equal,
	NotEqual,
	Greater,
	Less,
	Delay,
	Output,
	Function,
	Array,
	Assignment,
	ElseStm,
	IfStm,
	WhileStm,
	IndexOf,
	Size,
  IndexAssignment,
} from "./AST.ts";
import { Pull } from "./AST.ts";
import { Push } from "./AST.ts";

// the result of visiting a node in the AST
type Result = Line | Declaration | Expression;

/**
 * This class defines the Concrete Syntax Tree Visitor.
 * It visits the nodes in the Concrete Syntax Tree and returns the result of visiting each node.
 * @param <Result> The return type of the visit operation.
 * @example const cstVisitor = new cstVisitor();
 * const ast = cstVisitor.visitProgram(ctx);
 * @returns the Abstract Syntax Tree by visiting the Program node and its children
 */
export default class cstVisitor extends SmartSyncVisitor<Result> {
	/**
	 * Visit the Program node in the Concrete Syntax Tree.
	 * This node is the root of the CST and recursively visits all other nodes.
	 * @param ctx the CST
	 * @return the visitor result
	 */
	visitProgram: (ctx: ProgramContext) => Result = (ctx: ProgramContext): Result => {
		console.log("Visiting program");
		const lines: Line[] = [];
		const startLine = ctx.start.line;
		// Check if the CST has children
		if (!ctx.children) {
			throw new Error("No children found");
		}

		// Visit each child node in the CST
		for (const child of ctx.children) {
			const astLine = this.visit(child);
			if (astLine) {
				lines.push(astLine);
			}
		}
		// Create the Program node in the AST
		const program: Program = {
			kind: "Program",
			line: startLine,
			body: lines,
		};
		// Return the Program node
		return program;
	};

	visitLine: (ctx: LineContext) => Result = (ctx: LineContext): Result => {
		console.log("Visiting line");
		console.log("Line: ", ctx.getText(), ctx.getChildCount());
		// The line node has only one child node
		if (ctx.getChildCount() === 1) {
			return this.visit(ctx.getChild(0));
		} else {
			throw new Error("SHOULD NOT HAPPEN"); // This should not happen as the CST should have only one child node
		}
	};

	visitValue: (ctx: ValueContext) => Result = (ctx: ValueContext): Result => {
		console.log("Visiting value");
		let result: Value | Identifier | IndexOf | Size | Function;

		// Check if the value is a boolean, string, number or identifier
		switch (true) {
			// case for boolean
			case !!ctx.BOOL(): {
				result = {
					kind: "Value",
					Type: "Boolean",
					line: ctx.start.line,
					value: ctx.BOOL().getText(),
				};
				break;
			}
			// case for string
			case !!ctx.STRING(): {
				result = {
					kind: "Value",
					Type: "Text",
					line: ctx.start.line,
					value: ctx.STRING().getText(),
				};
				break;
			}
			// case for number
			case !!ctx.NUMBER(): {
				result = {
					kind: "Value",
					Type: "Number",
					line: ctx.start.line,
					value: ctx.NUMBER().getText(),
				};
				break;
			}
			// case for ID
			case !!ctx.ID() && ctx.getChildCount() === 1: {
				result = {
					kind: "Identifier",
					line: ctx.start.line,
					Type: undefined,
					name: ctx.ID().getText(),
				};
				break;
			}
			// case for ID[] SIZE
			case !!ctx.ID() &&
				ctx.getChildCount() === 3 &&
				ctx.getChild(1).getText() === "[]" &&
				ctx.getChild(2).getText() === "SIZE": {
				const identifier: Identifier = {
					kind: "Identifier",
					line: ctx.start.line,
					Type: undefined,
					name: ctx.ID().getText(),
				};

				result = {
					kind: "Size",
					line: ctx.start.line,
					identifier,
				};
				break;
			}
			// case for ID[value]
			case !!ctx.ID() &&
				ctx.getChildCount() === 4 &&
				ctx.getChild(1).getText() === "[" &&
				ctx.getChild(3).getText() === "]": {
				const identifier: Identifier = {
					kind: "Identifier",
					line: ctx.start.line,
					Type: undefined,
					name: ctx.ID().getText(),
				};

				result = {
					kind: "IndexOf",
					line: ctx.start.line,
					identifier,
					index: this.visitValue(ctx.value()),
				};
				break;
			}
			// case for ID(funcReturn)
			case !!ctx.ID() &&
				ctx.getChildCount() >= 3 &&
				ctx.getChild(1).getText() === "(" &&
				ctx.getChild(ctx.getChildCount() - 1).getText() === ")": {
                    
                const identifier: Identifier = {
                    kind: "Identifier",
                    line: ctx.start.line,
                    Type: undefined,
                    name: ctx.ID().getText(),
                };

                const parameters: Identifier[] = [];

				// Visit each parameter in the function call
                ctx.funcReturn_list().forEach((funcReturn) => {
                    const parameter = this.visitFuncReturn(funcReturn);
                    if (parameter) {
                        parameters.push(parameter as Identifier);
                    }
                });

                const func: Function = {
                    kind: "Function",
                    line: ctx.start.line,
                    Type: undefined,
                    identifier,
                    parameters,
                    body: undefined,
                    return: undefined,
                };

                result = func;
                break;
			}
			default:
				throw new Error("Unknown value");
		}
		return result;
	};

	visitDeclaration: (ctx: DeclarationContext) => Result = (ctx: DeclarationContext): Result => {
		console.log("Visiting declaration");
		const type: types = ctx.TYPE().getText() as types;
		const identifierName = ctx.ID().getText();
		const startLine = ctx.start.line;

        const identifier: Identifier = {
            kind: "Identifier",
            line: startLine,
            Type: type,
            name: identifierName,
        };

        switch (true) {
			// case for Type ID[] = [value, value, value]
            case !!ctx.ID() && ctx.getChild(2).getText() === "[]": {

                const arrayValues: Expression[] = [];
				// Visit each value in the array
                ctx.arrayValue_list().forEach((arrayValue) => {
                    const value = this.visitArrayValue(arrayValue);
                    if (value) {
                        arrayValues.push(value as Expression);
                    }
                });

                const array: Array = {
                    kind: "Array",
                    line: startLine,
                    Type: type,
                    Identifier: identifier,
                    value: arrayValues,
                };

                return array;
                
            }
			// case for Type ID = value
            case !!ctx.ID() && ctx.getChild(2).getText() !== "[]": {
                const value = this.visitExpression(ctx.expression());

                const declaration: Declaration = {
                    kind: "Declaration",
                    line: startLine,
                    Type: type,
                    identifier,
                    value: value as Expression,
                };

                return declaration;
            }
            default:
                throw new Error("Unknown declaration");
        }
	};

	visitStatements: (ctx: StatementsContext) => Result = (ctx: StatementsContext): Result => {
		console.log("Visiting statements");

		switch (true) {
			// case for if statement
			case !!ctx.ifStm(): {
				return this.visitIfStm(ctx.ifStm());
			}
			// case for while statement
			case ctx.getChild(0).getText() === "WHILE" && !!ctx.condition: {
				console.log("While statement");

				const condition = this.visitCondition(ctx.condition());

				const body: Line[] = [];

				// Visit each line in the while statement
				ctx.line_list().forEach((line) => {
					const astLine = this.visit(line);
					if (astLine) {
						body.push(astLine);
					}
				});

				const whileStm: WhileStm = {
					kind: "WhileStm",
					line: ctx.start.line,
					condition: condition as Expression,
					body,
				};

				return whileStm;
			}
			// case for array statement
			case !!ctx.arrayStm(): {
                return this.visitArrayStm(ctx.arrayStm());
			}
			default:
				throw new Error("Unknown statement");
		}
	};

	visitIfStm: (ctx: IfStmContext) => Result = (ctx: IfStmContext): Result => {
		console.log("Visiting ifStm");

		const condition = this.visitCondition(ctx.condition());

		const body: Line[] = [];

		ctx.line_list().forEach((line) => {
			const astLine = this.visit(line);
			console.log("AST Line: ", astLine);
			if (astLine) {
				body.push(astLine);
			}
		});

		switch (true) {
			// case for else statement
			case !!ctx.else_(): {
				const elseBody = this.visitElse(ctx.else_());
				console.log("Else body: ", elseBody);

				const ifStm: IfStm = {
					kind: "ifStm",
					line: ctx.start.line,
					condition: condition as Expression,
					body,
					else: elseBody as ElseStm,
				};
				return ifStm;
			}
			// case for else if... statement
			case !!ctx.elses(): {
				const elses = this.visitElses(ctx.elses());

				const ifStm: IfStm = {
					kind: "ifStm",
					line: ctx.start.line,
					condition: condition as Expression,
					body,
					else: elses as IfStm, // elses is an if else statement
				};
				return ifStm;
			}
			default: {
				const ifStm: IfStm = {
					kind: "ifStm",
					line: ctx.start.line,
					condition: condition as Expression,
					body,
				};
				return ifStm;
			}
		}
	};

	visitElses: (ctx: ElsesContext) => Result = (ctx: ElsesContext): Result => {
		console.log("Visiting elses");

		const condition = this.visitCondition(ctx.condition());

		const body: Line[] = [];

		// Visit each line in the else if statement
		ctx.line_list().forEach((line) => {
			const astLine = this.visit(line);
			if (astLine) {
				body.push(astLine);
			}
		});

		switch (true) {
			// case for else statement
			case !!ctx.else_(): {
				const elseBody = this.visitElse(ctx.else_());

				const ifStm: IfStm = {
					kind: "ifStm",
					line: ctx.start.line,
					condition: condition as Expression,
					body,
					else: elseBody as ElseStm,
				};
				return ifStm;
			}
			// case for else if... statement
			case !!ctx.elses(): {
				const elses = this.visitElses(ctx.elses());

				const ifStm: IfStm = {
					kind: "ifStm",
					line: ctx.start.line,
					condition: condition as Expression,
					body,
					else: elses as IfStm, // elses is an if else statement
				};
				return ifStm;
			}
			// case for a simple if statement without else
			default: {
				const ifStm: IfStm = {
					kind: "ifStm",
					line: ctx.start.line,
					condition: condition as Expression,
					body,
				};
				return ifStm;
			}
		}
	};

	visitElse: (ctx: ElseContext) => Result = (ctx: ElseContext): Result => {
		console.log("Visiting else");

		const body: Line[] = [];
		// Visit each line in the else statement
		ctx.line_list().forEach((line) => {
			const astLine = this.visit(line);
			if (astLine) {
				body.push(astLine);
			}
		});

		const elseBody: ElseStm = {
			kind: "elseStm",
			line: ctx.start.line,
			body,
		};

		return elseBody;
	};

	visitExpression: (ctx: ExpressionContext) => Result = (ctx: ExpressionContext): Result => {
		console.log("Visiting expression");

		switch (true) {
			// case for stringArithmetic
			case !!ctx.stringArithmetic():
				return this.visitStringArithmetic(ctx.stringArithmetic());
			// case for arithmetic
			case !!ctx.arithmetic():
				return this.visitArithmetic(ctx.arithmetic());
			// case for value
			case !!ctx.value():
				return this.visitValue(ctx.value());
			default:
				throw new Error("Unknown expression");
		}
	};

	visitStringArithmetic: (ctx: StringArithmeticContext) => Result = (ctx: StringArithmeticContext): Result => {
		console.log("Visiting stringArithmetic");
		const values: string[] = [];

		// Check if the CST has children nodes to visit
		if (!ctx.children) {
			throw new Error("No children found");
		}

		// Split the string into values 
		const text = ctx.getText();
		const splitValues = text.split("+");

		for (const value of splitValues) {
			// remove quotes from string and push to values array
			values.push(value.slice(1, -1));
		}

		// if there is only one value, return a Value node
		if (values.length === 1) {
			const value: Value = {
				kind: "Value",
				Type: "Text",
				line: ctx.start.line,
				value: values[0],
			};
			return value;
		// if there are multiple values, return a StringConcatenation node
		} else {
			const StringConcatenation: StringConcatenation = {
				kind: "StringConcatenation",
				line: ctx.start.line,
				values,
			};
			return StringConcatenation;
		}
	};

	visitArithmetic: (ctx: ArithmeticContext) => Result = (ctx: ArithmeticContext): Result => {
		console.log("Visiting arithmetic");

		// first get the left operand
		let left = this.visitMultExpr(ctx.multExpr(0));

		// then iterate through the rest of the children to get the right operand and operator
		let y = 1;
		for (let i = 1; i < ctx.getChildCount() - 1; i += 2) {
			// Skip multExpr children
			const operator = ctx.getChild(i).getText(); // Get operator
			const right = this.visitMultExpr(ctx.multExpr(y)); // Get right operand
			y++;

			switch (operator) {
				case "+": {
					const addition: Addition = {
						kind: "BinaryOperation",
						line: ctx.start.line,
						left: left as Expression,
						right: right as Expression,
						operator: "+",
					};
					left = addition;
					break;
				}
				case "-": {
					const subtraction: Subtraction = {
						kind: "BinaryOperation",
						line: ctx.start.line,
						left: left as Expression,
						right: right as Expression,
						operator: "-",
					};
					left = subtraction;
					break;
				}
				default:
					throw new Error("Unknown operator: " + operator);
			}
		}
		return left;
	};

	visitMultExpr: (ctx: MultExprContext) => Result = (ctx: MultExprContext): Result => {
		console.log("Visiting multExpr");

		// first get the left operand
		let left = this.visitAtom(ctx.atom(0));

		// then iterate through the rest of the children to get the right operand and operator
		let y = 1;
		for (let i = 1; i < ctx.getChildCount() - 1; i += 2) {
			// Skip multExpr children
			const operator = ctx.getChild(i).getText(); // Get operator
			const right = this.visitAtom(ctx.atom(y)); // Get right operand
			y++;

			switch (operator) {
				case "*": {
					const multiplication: Multiplication = {
						kind: "BinaryOperation",
						line: ctx.start.line,
						left: left as Expression,
						right: right as Expression,
						operator: "*",
					};
					left = multiplication;
					break;
				}
				case "/": {
					const division: Division = {
						kind: "BinaryOperation",
						line: ctx.start.line,
						left: left as Expression,
						right: right as Expression,
						operator: "/",
					};
					left = division;
					break;
				}
				default:
					throw new Error("Unknown operator: " + operator);
			}
		}
		return left;
	};

	visitAtom: (ctx: AtomContext) => Result = (ctx: AtomContext): Result => {
		console.log("Visiting atom");

		switch (true) {
			// case for (arithmetic)
			case ctx.getChildCount() === 3 && ctx.getChild(0).getText() === "(" && ctx.getChild(2).getText() === ")":
				return this.visitArithmetic(ctx.arithmetic());
			// case for number
			case !!ctx.NUMBER(): {
				const value: Value = {
					kind: "Value",
					Type: "Number",
					line: ctx.start.line,
					value: ctx.NUMBER().getText(),
				};

				return value;
			}
			// case for ID
			case !!ctx.ID(): {
				const identifier: Identifier = {
					kind: "Identifier",
					line: ctx.start.line,
					Type: undefined,
					name: ctx.ID().getText(),
				};

				return identifier;
			}
			default:
				throw new Error("Unknown atom");
		}
	};

	visitCondition: (ctx: ConditionContext) => Result = (ctx: ConditionContext): Result => {
		console.log("Visiting condition");

		// first get the left operand
		let left = this.visitMultConExpr(ctx.multConExpr(0));

		// then iterate through the rest of the children to get the right operand and operator
		let y = 1;
		for (let i = 1; i < ctx.getChildCount() - 1; i += 2) {
			// Skip multExpr children
			const operator = ctx.getChild(i).getText(); // Get operator
			const right = this.visitMultConExpr(ctx.multConExpr(y)); // Get right operand
			y++;

			switch (operator) {
				case "AND": {
					const and: And = {
						kind: "BinaryOperation",
						line: ctx.start.line,
						left: left as Expression,
						right: right as Expression,
						operator: "AND",
					};
					left = and;
					break;
				}
				case "OR": {
					const or: Or = {
						kind: "BinaryOperation",
						line: ctx.start.line,
						left: left as Expression,
						right: right as Expression,
						operator: "OR",
					};
					left = or;
					break;
				}
				default:
					throw new Error("Unknown Logical operator: " + operator);
			}
		}
		return left;
	};

	visitMultConExpr: (ctx: MultConExprContext) => Result = (ctx: MultConExprContext): Result => {
		console.log("Visiting multConExpr");

		// first get the left operand
		let left = this.visitAtomCon(ctx.atomCon(0));
		let y = 1;

		// then iterate through the rest of the children to get the right operand and operator
		for (let i = 1; i < ctx.getChildCount() - 1; i += 2) {
			// Skip multExpr children
			const operator = ctx.getChild(i).getText(); // Get operator
			const right = this.visitAtomCon(ctx.atomCon(y)); // Get right operand
			y++;

			switch (operator) {
				case "EQUAL": {
					const equal: Equal = {
						kind: "BinaryOperation",
						line: ctx.start.line,
						left: left as Expression,
						right: right as Expression,
						operator: "EQUAL",
					};
					left = equal;
					break;
				}
				case "NOT EQUAL": {
					const notEqual: NotEqual = {
						kind: "BinaryOperation",
						line: ctx.start.line,
						left: left as Expression,
						right: right as Expression,
						operator: "NOT EQUAL",
					};
					left = notEqual;
					break;
				}
				case "GREATER": {
					const greater: Greater = {
						kind: "BinaryOperation",
						line: ctx.start.line,
						left: left as Expression,
						right: right as Expression,
						operator: "GREATER",
					};
					left = greater;
					break;
				}
				case "LESS": {
					const less: Less = {
						kind: "BinaryOperation",
						line: ctx.start.line,
						left: left as Expression,
						right: right as Expression,
						operator: "LESS",
					};
					left = less;
					break;
				}
				default:
					throw new Error("Unknown operator: " + operator);
			}
		}
		return left;
	};

	visitAtomCon: (ctx: AtomConContext) => Result = (ctx: AtomConContext): Result => {
		console.log("Visiting atomCon");

		switch (true) {
			// case for (condition)
			case ctx.getChildCount() === 3 && ctx.getChild(0).getText() === "(" && ctx.getChild(2).getText() === ")":
				return this.visitCondition(ctx.condition());
			// case for number
			case !!ctx.NUMBER(): {
				const value: Value = {
					kind: "Value",
					Type: "Number",
					line: ctx.start.line,
					value: ctx.NUMBER().getText(),
				};
				return value;
			}
			// case for ID
			case !!ctx.ID(): {
				const identifier: Identifier = {
					kind: "Identifier",
					line: ctx.start.line,
					Type: undefined,
					name: ctx.ID().getText(),
				};
				return identifier;
			}
			default:
				throw new Error("Unknown atom");
		}
	};

	visitAssignments: (ctx: AssignmentsContext) => Result = (ctx: AssignmentsContext): Result => {
		console.log("Visiting assignments");

		switch (true) {
			// case for ID = expression ;
			case !!ctx.ID() && ctx.getChildCount() === 4: {
				const identifier: Identifier = {
					kind: "Identifier",
					line: ctx.start.line,
					Type: undefined,
					name: ctx.ID().getText(),
				};

				const value = this.visitExpression(ctx.expression());

				const assignment: Assignment = {
					kind: "Assignment",
					line: ctx.start.line,
					identifier,
					value: value as Expression,
				};

				return assignment;
			}
			// case for ID[value] = expression ;
            case !!ctx.ID() && ctx.getChild(1).getText() === "[" && !!ctx.value() && ctx.getChild(3).getText() === "]": {
                const identifier: Identifier = {
                    kind: "Identifier",
                    line: ctx.start.line,
                    Type: undefined,
                    name: ctx.ID().getText(),
                };

                const index = this.visitValue(ctx.value());

                const indexAssignment: IndexAssignment = {
                    kind: "IndexAssignment",
                    line: ctx.start.line,
                    identifier,
                    index: index as Expression,
                    value: this.visitExpression(ctx.expression()) as Expression,
                };
                return indexAssignment;
            }
			// case for ID[] = [value, value, value] ;
            case !!ctx.ID() && ctx.getChild(1).getText() === "[]" && !!ctx.arrayValue: {
                const identifier: Identifier = {
                    kind: "Identifier",
                    line: ctx.start.line,
                    Type: undefined,
                    name: ctx.ID().getText(),
                };

                const arrayValues: Expression[] = [];
                ctx.arrayValue_list().forEach((arrayValue) => {
                    const value = this.visitArrayValue(arrayValue);
                    if (value) {
                        arrayValues.push(value as Expression);
                    }
                });

                const array: Array = {
                    kind: "Array",
                    line: ctx.start.line,
                    Type: undefined,
                    Identifier: identifier,
                    value: arrayValues,
                };

                return array;
            }
			default:
				throw new Error("Unknown assignment");
		}
	};

	visitFuncReturn: (ctx: FuncReturnContext) => Result = (ctx: FuncReturnContext): Result => {
		console.log("Visiting funcReturn");

		switch (true) {
			// case for value
			case !!ctx.value(): {
				return this.visitValue(ctx.value());
			}
			// case for ID[]
			case !!ctx.ID() && ctx.getChild(1).getText() === "[]": {
				const identifier: Identifier = {
                    kind: "Identifier",
                    line: ctx.start.line,
                    Type: undefined,
                    name: ctx.ID().getText(),
                };

                const array: Array = {
                    kind: "Array",
                    line: ctx.start.line,
                    Type: undefined,
                    Identifier: identifier,
                    value: undefined,
                };
                return array;
			}
			// case for arithmetic
			case !!ctx.arithmetic(): {
				return this.visitArithmetic(ctx.arithmetic());
			}
			// case for [] or [value, value, value]
			case ctx.getChild(0).getText() === "[]" || !!ctx.arrayValue: {
				// case for []
				if (ctx.getChild(0).getText() === "[]") {
					const array: Array = {
						kind: "Array",
						line: ctx.start.line,
						Type: undefined,
						value: [],
					};
					return array;
				// case for [value, value, value]
				} else {
					const arrayValues: Expression[] = [];
					ctx.arrayValue_list().forEach((arrayValue) => {
						const value = this.visitArrayValue(arrayValue);
						if (value) {
							arrayValues.push(value as Expression);
						}
					});

					const array: Array = {
						kind: "Array",
						line: ctx.start.line,
						Type: undefined,
						value: arrayValues,
					};
					return array;
				}
			}
			default:
				throw new Error("Unknown return value");
		}
	};

	visitFunctions: (ctx: FunctionsContext) => Result = (ctx: FunctionsContext): Result => {
		console.log("Visiting functions");

		const identifier: Identifier = {
			kind: "Identifier",
			line: ctx.start.line,
			Type: ctx.TYPE(0).getText() as types,
			name: ctx.ID(0).getText(),
		};

		const parameters: Identifier[] = [];

		// Visit each parameter in the function declaration to get the type and identifier
		for (let i = 1; i < ctx.TYPE_list().length; i++) {
			const parameter: Identifier = {
				kind: "Identifier",
				line: ctx.start.line,
				Type: ctx.TYPE(i).getText() as types,
				name: ctx.ID(i).getText(),
			};
			parameters.push(parameter);
		}

		const body: Line[] = [];

		// Visit each line in the function
		ctx.line_list().forEach((line) => {
			const astLine = this.visit(line);
			console.log("AST Line: ", astLine);
			if (astLine) {
				body.push(astLine);
			}
		});

		// Get the return value of the function
		const returnVal = this.visitFuncReturn(ctx.funcReturn());

		const func: Function = {
			kind: "Function",
			line: ctx.start.line,
			Type: ctx.TYPE(0).getText() as types,
			identifier,
			parameters,
			body,
			return: returnVal as Expression,
		};

		return func;
	};

	visitOutput: (ctx: OutputContext) => Result = (ctx: OutputContext): Result => {
		console.log("Visiting output");

		let value: Value | Identifier;
		// Check if the output is an identifier or a value
		if (ctx.ID()) {
			const identifierName = ctx.ID().getText();
			const identifier: Identifier = {
				kind: "Identifier",
				line: ctx.start.line,
				Type: undefined,
				name: identifierName,
			};

			value = identifier;
		} else {
			value = this.visitValue(ctx.value()) as Value;
		}

		const output: Output = {
			kind: "Output",
			line: ctx.start.line,
			value: value,
		};

		return output;
	};

	visitDelay: (ctx: DelayContext) => Result = (ctx: DelayContext): Result => {
		console.log("Visiting delay");

		// Get the value of the delay
		const value = this.visitValue(ctx.value());

		const delay: Delay = {
			kind: "Delay",
			line: ctx.start.line,
			value: value,
		};
		return delay;
	};

	visitArrayValue: (ctx: ArrayValueContext) => Result = (ctx: ArrayValueContext): Result => {
		console.log("Visiting arrayValue");

		// case for [value, value, value]
		if (ctx.getChild(0).getText() === "[" && ctx.getChild(ctx.getChildCount() - 1).getText() === "]") {
			const value = this.visitValue(ctx.value());

			const array: Array = {
				kind: "Array",
				line: ctx.start.line,
				Type: undefined,
				value: [value as Expression],
			};
			return array;
		} else {
			return this.visitValue(ctx.value());
		}
	};

	visitArrayStm: (ctx: ArrayStmContext) => Result = (ctx: ArrayStmContext): Result => {
		console.log("Visiting arrayStm");

        switch (true) {
			// case for ID[] PULL
            case ctx.getChild(2).getText() === "PULL": {
                const identifier: Identifier = {
                    kind: "Identifier",
                    line: ctx.start.line,
                    Type: undefined,
                    name: ctx.ID().getText(),
                };

                const pull: Pull = {
                    kind: "Pull",
                    line: ctx.start.line,
                    identifier,
                };
                return pull;
            }	
			// case for ID[] PUSH value
            case ctx.getChild(2).getText() === "PUSH" && !!ctx.value(): {
                const identifier: Identifier = {
                    kind: "Identifier",
                    line: ctx.start.line,
                    Type: undefined,
                    name: ctx.ID().getText(),
                };

                const value = this.visitValue(ctx.value());

                const push: Push = {
                    kind: "Push",
                    line: ctx.start.line,
                    identifier,
                    value: value as Expression,
                };
                return push;
            }
            default:
                throw new Error("Unknown array statement");
        }
	};
}
