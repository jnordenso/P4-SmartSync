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
} from "./AST.ts";

// the result of visiting a node in the AST
type Result = Line | Declaration | Expression;

export default class AstVisitor extends SmartSyncVisitor<Result> {
	visitProgram: (ctx: ProgramContext) => Result = (ctx: ProgramContext): Result => {
		console.log("Visiting program");
		const lines: Line[] = [];
		const startLine = ctx.start.line;

		if (!ctx.children) {
			throw new Error("No children found");
		}

		for (const child of ctx.children) {
			const astLine = this.visit(child);
			if (astLine) {
				lines.push(astLine);
			}
		}

		const program: Program = {
			kind: "Program",
			line: startLine,
			body: lines,
		};

		return program;
	};

	visitLine: (ctx: LineContext) => Result = (ctx: LineContext): Result => {
		console.log("Visiting line");
		console.log("Line: ", ctx.getText(), ctx.getChildCount());

		if (ctx.getChildCount() > 1) {
			throw new Error("Not implemented here");
		} else {
			return this.visit(ctx.getChild(0));
		}
	};

	visitValue: (ctx: ValueContext) => Result = (ctx: ValueContext): Result => {
		console.log("Visiting value");
		let result: Value | Identifier;

		switch (true) {
			case !!ctx.BOOL(): {
				result = {
					kind: "Value",
					Type: "Boolean",
					line: ctx.start.line,
					value: ctx.BOOL().getText(),
				};
				break;
			}
			case !!ctx.STRING(): {
				result = {
					kind: "Value",
					Type: "Text",
					line: ctx.start.line,
					value: ctx.STRING().getText(),
				};
				break;
			}
			case !!ctx.NUMBER(): {
				result = {
					kind: "Value",
					Type: "Number",
					line: ctx.start.line,
					value: ctx.NUMBER().getText(),
				};
				break;
			}
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
				throw new Error("Not implemented");
			}
			// case for ID[value]
			case !!ctx.ID() &&
				ctx.getChildCount() === 4 &&
				ctx.getChild(1).getText() === "[" &&
				ctx.getChild(3).getText() === "]": {
				throw new Error("Not implemented");
			}
			// case for ID(funcReturn)
			case !!ctx.ID() &&
				ctx.getChildCount() >= 3 &&
				ctx.getChild(1).getText() === "(" &&
				ctx.getChild(ctx.getChildCount() - 1).getText() === ")": {
				throw new Error("Not implemented");
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

		if (this.visitExpression) {
			const value = this.visitExpression(ctx.expression());

			const identifier: Identifier = {
				kind: "Identifier",
				line: startLine,
				Type: type,
				name: identifierName,
			};

			const declaration: Declaration = {
				kind: "Declaration",
				line: startLine,
				Type: type,
				identifier,
				value: value as Expression,
			};

			return declaration;
		}

		return null as unknown as Result;
	};

	visitStatements: (ctx: StatementsContext) => Result = (ctx: StatementsContext): Result => {
		console.log("Visiting statements");

		console.log("Statements: ", ctx.getText(), ctx.getChildCount(), ctx.getChild(0).getText());

		switch (true) {
			case !!ctx.ifStm(): {
				return this.visitIfStm(ctx.ifStm());
			}
			case ctx.getChild(0).getText() === "WHILE" && !!ctx.condition: {
				console.log("While statement");

				const condition = this.visitCondition(ctx.condition());

				const body: Line[] = [];

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
			case !!ctx.arrayStm(): {
				console.log("Array statement");
				throw new Error("Not implemented");
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

		ctx.line_list().forEach((line) => {
			const astLine = this.visit(line);
			if (astLine) {
				body.push(astLine);
			}
		});

		switch (true) {
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

	visitElse: (ctx: ElseContext) => Result = (ctx: ElseContext): Result => {
		console.log("Visiting else");

		const body: Line[] = [];

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
		// Check if the expression is a stringArithmetic, arithmetic, value or expression
		// used !! to convert the value to a boolean and then check if it is true

		console.log("Expression: ", ctx.getText());

		switch (true) {
			// case for ( expression )
			/* case ctx.getText().startsWith("(") && ctx.getText().endsWith(")"): {
                console.log("Expression: ", ctx);
                return this.visitExpression(ctx.);
            } */
			case !!ctx.stringArithmetic():
				return this.visitStringArithmetic(ctx.stringArithmetic());
			case !!ctx.arithmetic():
				return this.visitArithmetic(ctx.arithmetic());
			case !!ctx.value():
				return this.visitValue(ctx.value());
			default:
				throw new Error("Unknown expression");
		}
	};

	visitStringArithmetic: (ctx: StringArithmeticContext) => Result = (ctx: StringArithmeticContext): Result => {
		console.log("Visiting stringArithmetic");
		const values: string[] = [];

		if (!ctx.children) {
			throw new Error("No children found");
		}

		const text = ctx.getText();
		const splitValues = text.split("+");

		for (const value of splitValues) {
			// remove quotes from string and push to values array
			values.push(value.slice(1, -1));
		}

		if (values.length === 1) {
			const value: Value = {
				kind: "Value",
				Type: "Text",
				line: ctx.start.line,
				value: values[0],
			};
			return value;
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
		console.log("Arithmetic: ", ctx.getText());

		let left = this.visitMultExpr(ctx.multExpr(0));

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
		console.log("MultExpr: ", ctx.getText(), ctx.getChildCount());
		let left = this.visitAtom(ctx.atom(0));
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
		console.log("Atom: ", ctx.getText(), ctx.getChildCount());

		switch (true) {
			case ctx.getChildCount() === 3 && ctx.getChild(0).getText() === "(" && ctx.getChild(2).getText() === ")":
				return this.visitArithmetic(ctx.arithmetic());
			case !!ctx.NUMBER(): {
				const value: Value = {
					kind: "Value",
					Type: "Number",
					line: ctx.start.line,
					value: ctx.NUMBER().getText(),
				};

				return value;
			}
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

		console.log("Condition: ", ctx.getText(), ctx.getChildCount());

		let left = this.visitMultConExpr(ctx.multConExpr(0));

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
		console.log("MultConExpr: ", ctx.getText(), ctx.getChildCount());

		let left = this.visitAtomCon(ctx.atomCon(0));
		let y = 1;

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
		console.log("AtomCon: ", ctx.getText(), ctx.getChildCount());

		switch (true) {
			case ctx.getChildCount() === 3 && ctx.getChild(0).getText() === "(" && ctx.getChild(2).getText() === ")":
				return this.visitCondition(ctx.condition());
			case !!ctx.NUMBER(): {
				const value: Value = {
					kind: "Value",
					Type: "Number",
					line: ctx.start.line,
					value: ctx.NUMBER().getText(),
				};
				return value;
			}
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
		console.log("Assignments: ", ctx.getText(), ctx.getChildCount());
		switch (true) {
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
			default:
				throw new Error("Unknown assignment");
		}
	};

	visitFuncReturn: (ctx: FuncReturnContext) => Result = (ctx: FuncReturnContext): Result => {
		console.log("Visiting funcReturn");

		console.log("FuncReturn: ", ctx.getText(), ctx.getChildCount());

		switch (true) {
			case !!ctx.value(): {
				return this.visitValue(ctx.value());
			}
			case !!ctx.ID() && ctx.getChild(1).getText() === "[]": {
				throw new Error("Not implemented");
			}
			case !!ctx.arithmetic(): {
				return this.visitArithmetic(ctx.arithmetic());
			}
			case ctx.getChild(0).getText() === "[]" || !!ctx.arrayValue: {
				if (ctx.getChild(0).getText() === "[]") {
					const array: Array = {
						kind: "Array",
						line: ctx.start.line,
						Type: undefined,
						value: [],
					};
					return array;
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

		console.log("Functions: ", ctx.getText(), ctx.getChildCount(), ctx.TYPE_list().length, ctx.ID_list().length);

		const identifier: Identifier = {
			kind: "Identifier",
			line: ctx.start.line,
			Type: ctx.TYPE(0).getText() as types,
			name: ctx.ID(0).getText(),
		};

		const parameters: Identifier[] = [];

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

		ctx.line_list().forEach((line) => {
			const astLine = this.visit(line);
			console.log("AST Line: ", astLine);
			if (astLine) {
				body.push(astLine);
			}
		});

		const returnVal = this.visitFuncReturn(ctx.funcReturn());

		console.log("Function: ", identifier, parameters, body);

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

		console.log("ArrayValue: ", ctx.getText(), ctx.getChildCount());

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
		throw new Error("Not implemented");
	};
}
