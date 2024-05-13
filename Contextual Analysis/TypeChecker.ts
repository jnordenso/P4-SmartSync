import { Line, Program } from "../Syntax Analysis/AST.ts";
import AstVisitor from "./AstVisitor.ts";
import SymbolTable from "./SymbolTable.ts";

export default class TypeChecker extends AstVisitor<void> {

    symbolTable: SymbolTable;
    currentBlock: Line[] = [];

    constructor(st: SymbolTable) {
        super();
        this.symbolTable = st;
    }

    visitProgram(ctx: Program): void {
        this.visitStatements(ctx.statements());
        return null;
    }


}