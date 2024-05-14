import { Array, ArrayDeclaration, Assignment, BinaryOperation, Declaration, Delay, ElseStm, Expression, Function, Identifier, IfStm, IndexAssignment, IndexOf, Line, Output, Program, Pull, Push, Size, StringConcatenation, Value, WhileStm, types } from "../Syntax Analysis/AST.ts";
import AstVisitor from "./AstVisitor.ts";
import SymbolTable from "./SymbolTable.ts";

export default class TypeChecker extends AstVisitor<void> {

    symbolTable: SymbolTable;
    currentBlock: Line[] = [];

    constructor(st: SymbolTable) {
        super();
        this.symbolTable = st;
    }

    visitProgram = (ctx: Program): void => {
        this.currentBlock = ctx.body;

        if (ctx.body.length > 0) {
            ctx.body.forEach((line) => {
                this.visitLine(line);
            });
        }
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
			default:
				throw new Error(`Unknown line kind: ${ctx.kind}`);
		}
    }

    visitDeclaration = (ctx: Declaration): void => {
        // get the symbol from the symbol table 
        const symbol = this.symbolTable.LookupSymbol(ctx.identifier.name, this.currentBlock);

        // if the symbol is found
        if (symbol !== null) {
            const expressionType = this.visitExpression(ctx.value);

            // if the expression type is not the same as the symbol type
            if (expressionType !== symbol.type) {
                throw new Error(`Line: ${ctx.line}, Expected ${ctx.identifier.name} to be of type ${symbol.type}, but got ${expressionType}`);
            }
        } else {
            throw new Error(`Line: ${ctx.line}, Undeclared variable: ${ctx.identifier.name}`);
        }
    }

    visitArrayDeclaration =(ctx: ArrayDeclaration): void => {
        throw new Error("1. Method not implemented.");
    }

    visitIfStm = (ctx: IfStm): void => {
        throw new Error("2. Method not implemented.");
    }

    visitElseStm = (ctx: ElseStm): void => {
        throw new Error("3. Method not implemented.");
    }

    visitWhileStm = (ctx: WhileStm): void => {
        throw new Error("4. Method not implemented.");
    }

    visitIndexAssignment = (ctx: IndexAssignment): void => {
        throw new Error("5. Method not implemented.");
    }

    visitPush = (ctx: Push): void => {
        throw new Error("6. Method not implemented.");
    }

    visitPull = (ctx: Pull): void => {
        throw new Error("7. Method not implemented.");
    }

    visitAssignment = (ctx: Assignment): void => {
        throw new Error("Method not implemented.");
    }

    visitFunction = (ctx: Function): void => {
        throw new Error("8. Method not implemented.");
    }

    visitOutput = (ctx: Output): void => {
        throw new Error("9. Method not implemented.");
    }

    visitDelay = (ctx: Delay): void => {
        throw new Error("10. Method not implemented.");
    }

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
            default:
                throw new Error(`Unknown expression kind: ${ctx.kind}`);
        }
    }

    visitValue = (ctx: Value): types => {

        return ctx.type;
    }

    visitArray = (ctx: Array): types => {
        throw new Error("12. Method not implemented.");
    }

    visitIndexOf = (ctx: IndexOf): types => {
        throw new Error("13. Method not implemented.");
    }

    visitSize = (ctx: Size): types => {
        throw new Error("14. Method not implemented.");
    }

    visitStringConcatenation = (ctx: StringConcatenation): types => {
        throw new Error("15. Method not implemented.");
    }

    visitIdentifier = (ctx: Identifier): types => {
        throw new Error("16. Method not implemented.");
    }

    visitBinaryOperation = (ctx: BinaryOperation): types => {
        throw new Error("17. Method not implemented.");
    }
}