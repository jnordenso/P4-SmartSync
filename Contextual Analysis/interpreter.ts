import AstVisitor from "./AstVisitor.ts";
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
	Less,
} from "../Syntax Analysis/AST.ts";
import SymbolTable from "./SymbolTable.ts";

type FinalValue = number | string | boolean;
export default class Interpreter extends AstVisitor<any> {
    symbolTable: SymbolTable;
	currentBlock: Line[] = [];

    environment: Map<string, FinalValue> = new Map(); // Environment for keeping track of variable values

	constructor(st: SymbolTable) {
		super();
		this.symbolTable = st;
	}

    visitProgram = (ctx: Program): void => {
        this.currentBlock = ctx.body;

        ctx.body.forEach((line) => {
            this.visitLine(line);
        });
    }

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
			case "Array":
				this.visitArray(ctx as Array);
				break;
			default:
				throw new Error(`Unknown line kind: ${ctx.kind}.`);
		}
    }

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
    }

    visitArrayDeclaration = (ctx: ArrayDeclaration): void => {
        throw new Error("4. Method not implemented.");
    }

    visitIfStm = (ctx: IfStm): void => {
        throw new Error("5. Method not implemented.");
    }

    visitElseStm = (ctx: ElseStm): void => {
        throw new Error("6. Method not implemented.");
    }

    visitWhileStm = (ctx: WhileStm): void => {
        throw new Error("7. Method not implemented.");
    }

    visitIndexOf = (ctx: IndexOf): void => {
        throw new Error("8. Method not implemented.");
    }

    visitIndexAssignment = (ctx: IndexAssignment): void => {
        throw new Error("9. Method not implemented.");
    }

    visitPush = (ctx: Push): void => {
        throw new Error("10. Method not implemented.");
    }

    visitPull = (ctx: Pull): void => {
        throw new Error("11. Method not implemented.");
    }

    visitSize = (ctx: Size): void => {
        throw new Error("12. Method not implemented.");
    }

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
    }

    visitFunction = (ctx: Function): void => {
        throw new Error("14. Method not implemented.");
    }

    visitOutput = (ctx: Output): void => {
        const value = this.visitExpression(ctx.value);
        console.log(value);
    }

    visitDelay = (ctx: Delay): void => {
        throw new Error("16. Method not implemented.");
    }

    visitExpression = (ctx: Expression): FinalValue => {
        switch (ctx.kind) {
			case "Value":
				return this.visitValue(ctx as Value);
			/* case "Array":
				return this.visitArray(ctx as Array);
			case "Size":
				return this.visitSize(ctx as Size);
			case "StringConcatenation":
				return this.visitStringConcatenation(ctx as StringConcatenation); */
			case "Identifier":
				return this.visitIdentifier(ctx as Identifier);
			case "BinaryOperation":
				return this.visitBinaryOperation(ctx as BinaryOperation);
			/* case "Function":
				return this.visitFunction(ctx as Function);
			case "IndexOf":
				return this.visitIndexOf(ctx as IndexOf); */
			default:
				throw new Error(`Unknown expression kind: ${ctx.kind}.`);
        }
    }

    visitValue = (ctx: Value): FinalValue => {
        switch (ctx.type) {
            case "Number":
                return Number(ctx.value); // Convert to number
            case "Text":
                return ctx.value.replaceAll('"', '') // Remove quotes
            case "Boolean":
                return ctx.value === "TRUE"; // Convert to boolean
            default:
                throw new Error(`Unknown value type: ${ctx.type}.`);
        }

    }

    visitArray = (ctx: Array): void => {
        throw new Error("19. Method not implemented.");
    }

    visitStringConcatenation = (ctx: StringConcatenation): void => {
        throw new Error("20. Method not implemented.");
    }

    visitIdentifier = (ctx: Identifier): FinalValue => {
        const value = this.environment.get(ctx.name);

        if (value !== undefined) {
            return value;
        } else {
            throw new Error(`Line: ${ctx.line}, Identifier ${ctx.name} not found.`);
        }
    }

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
    }

    visitAddition = (ctx: Addition): number => {
        const left = this.visitExpression(ctx.left);
        const right = this.visitExpression(ctx.right);

        if (typeof left === "number" && typeof right === "number") {
            return left + right;
        } else {
            throw new Error(`Line: ${ctx.line}, Cannot add ${left} and ${right}.`);
        }
    }

    visitSubtraction = (ctx: Subtraction): number => {
        throw new Error("24. Method not implemented.");
    }

    visitMultiplication = (ctx: Multiplication): number => {
        const left = this.visitExpression(ctx.left);
        const right = this.visitExpression(ctx.right);

        if (typeof left === "number" && typeof right === "number") {
            return left * right;
        } else {
            throw new Error(`Line: ${ctx.line}, Cannot add ${left} and ${right}.`);
        }
    }

    visitDivision = (ctx: Division): number => {
        const left = this.visitExpression(ctx.left);
        const right = this.visitExpression(ctx.right);

        if (typeof left === "number" && typeof right === "number") {
            if (left === 0 || right === 0) {
                throw new Error(`Line: ${ctx.line}, Division by zero.`);
            }
            return left / right;
        } else {
            throw new Error(`Line: ${ctx.line}, Cannot add ${left} and ${right}.`);
        }
    }

    visitEqual = (ctx: Equal): boolean => {
        throw new Error("27. Method not implemented.");
    }

    visitNotEqual = (ctx: NotEqual): boolean => {
        throw new Error("28. Method not implemented.");
    }

    visitAnd = (ctx: And): boolean => {
        throw new Error("29. Method not implemented.");
    }

    visitOr = (ctx: Or): boolean => {
        throw new Error("30. Method not implemented.");
    }

    visitGreater = (ctx: Greater): boolean => {
        throw new Error("31. Method not implemented.");
    }

    visitLess = (ctx: Less): boolean => {
        throw new Error("32. Method not implemented.");
    }

}