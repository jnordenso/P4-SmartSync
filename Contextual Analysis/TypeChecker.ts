import { Declaration, Line, Program } from "../Syntax Analysis/AST.ts";
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
				throw new Error(`Unknown line kind: ${ctx.kind}`);
		}
    }

    visitDeclaration = (ctx: Declaration): void => {
        const symbol = this.symbolTable.LookupSymbol(ctx.identifier.name, this.currentBlock);

        if (symbol !== null) {
            
        }
    }


}