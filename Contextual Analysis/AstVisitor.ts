import {
	Line,
	Program,
    Statement,
    Declaration,
    IfStm,
    ElseStm,
    WhileStm,
    ArrayStm,
    IndexOf,
    IndexAssignment,
    Push,
    Pull,
    Size,
    Assignment,
    Function,
    Output,
    Expression,
    Value,
    Array,
    StringConcatenation,
    Identifier,
    BinaryOperation,
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
    ArrayDeclaration,
    ReturnValue,
} from "../Syntax Analysis/AST.ts";


export default class AstVisitor<Result> {
    /**
	 * Visit the Program node in the Abstraxt Syntax Tree.
     * This node is the root of the AST and recursively visits all other nodes.
	 * @param ctx the AST
	 * @return the visitor result
	 */
	visitProgram?: (ctx: Program) => Result;
    /**
     * Visit the Line node in the Abstract Syntax Tree.
     * @param ctx the AST
     * @return the visitor result
     */
	visitLine?: (ctx: Line) => Result;
    /**
     * Visit the Declaration node in the Abstract Syntax Tree.
     * @param ctx the AST
     * @return the visitor result
     */
    visitDeclaration?: (ctx: Declaration) => Result;
    /**
     * Visit the ArrayDeclaration node in the Abstract Syntax Tree.
     * @param ctx the AST
     * @return the visitor result
     */
    visitArrayDeclaration?: (ctx: ArrayDeclaration) => Result;
    /**
     * Visit the Statement node in the Abstract Syntax Tree.
     * @param ctx the AST
     * @return the visitor result
     */
    visitStatement?: (ctx: Statement) => Result;
    /**
     * Visit the IfStm node in the Abstract Syntax Tree.
     * @param ctx the AST
     * @return the visitor result
     */
    visitIfStm?: (ctx: IfStm) => Result;
    /**
     * Visit the ElseStm node in the Abstract Syntax Tree.
     * @param ctx the AST
     * @return the visitor result
     */
    visitElseStm?: (ctx: ElseStm) => Result;
    /**
     * Visit the WhileStm node in the Abstract Syntax Tree.
     * @param ctx the AST
     * @return the visitor result
     */
    visitWhileStm?: (ctx: WhileStm) => Result;
    /**
     * Visit the ArrayStm node in the Abstract Syntax Tree.
     * @param ctx the AST
     * @return the visitor result
     */
    visitArrayStm?: (ctx: ArrayStm) => Result;
    /**
     * Visit the IndexOf node in the Abstract Syntax Tree.
     * @param ctx the AST
     * @return the visitor result
     */
    visitIndexOf?: (ctx: IndexOf) => Result;
    /**
     * Visit the IndexAssignment node in the Abstract Syntax Tree.
     * @param ctx the AST
     * @return the visitor result
     */
    visitIndexAssignment?: (ctx: IndexAssignment) => Result;
    /**
     * Visit the Push node in the Abstract Syntax Tree.
     * @param ctx the AST
     * @return the visitor result
     */
    visitPush?: (ctx: Push) => Result;
    /**
     * Visit the Pull node in the Abstract Syntax Tree.
     * @param ctx the AST
     * @return the visitor result
     */
    visitPull?: (ctx: Pull) => Result;
    /**
     * Visit the Size node in the Abstract Syntax Tree.
     * @param ctx the AST
     * @return the visitor result
     */
    visitSize?: (ctx: Size) => Result;
    /**
     * Visit the Assignment node in the Abstract Syntax Tree.
     * @param ctx the AST
     * @return the visitor result
     */
    visitAssignment?: (ctx: Assignment) => Result;
    /**
     * Visit the Function node in the Abstract Syntax Tree.
     * @param ctx the AST
     * @return the visitor result
     */
    visitFunction?: (ctx: Function) => Result;
    /**
     * Visit the Output node in the Abstract Syntax Tree.
     * @param ctx the AST
     * @return the visitor result
     */
    visitOutput?: (ctx: Output) => Result;
    /**
     * Visit the Delay node in the Abstract Syntax Tree.
     * @param ctx the AST
     * @return the visitor result
     */
    visitExpression?: (ctx: Expression) => Result;
    /**
     * Visit the returnValue node in the Abstract Syntax Tree.
     * @param ctx the AST
     * @return the visitor result
     */
    visitReturnValue?: (ctx: ReturnValue) => Result;
    /**
     * Visit the Value node in the Abstract Syntax Tree.
     * @param ctx the AST
     * @return the visitor result
     */
    visitValue?: (ctx: Value) => Result;
    /**
     * Visit the Array node in the Abstract Syntax Tree.
     * @param ctx the AST
     * @return the visitor result
     */
    visitArray?: (ctx: Array) => Result;
    /**
     * Visit the StringConcatenation node in the Abstract Syntax Tree.
     * @param ctx the AST
     * @return the visitor result
     */
    visitStringConcatenation?: (ctx: StringConcatenation) => Result;
    /**
     * Visit the Identifier node in the Abstract Syntax Tree.
     * @param ctx the AST
     * @return the visitor result
     */
    visitIdentifier?: (ctx: Identifier) => Result;
    /**
     * Visit the BinaryOperation node in the Abstract Syntax Tree.
     * @param ctx the AST
     * @return the visitor result
     */
    visitBinaryOperation?: (ctx: BinaryOperation) => Result;
    /**
     * Visit the Addition node in the Abstract Syntax Tree.
     * @param ctx the AST
     * @return the visitor result
     */
    visitAddition?: (ctx: Addition) => Result;
    /**
     * Visit the Subtraction node in the Abstract Syntax Tree.
     * @param ctx the AST
     * @return the visitor result
     */
    visitSubtraction?: (ctx: Subtraction) => Result;
    /**
     * Visit the Multiplication node in the Abstract Syntax Tree.
     * @param ctx the AST
     * @return the visitor result
     */
    visitMultiplication?: (ctx: Multiplication) => Result;
    /**
     * Visit the Division node in the Abstract Syntax Tree.
     * @param ctx the AST
     * @return the visitor result
     */
    visitDivision?: (ctx: Division) => Result;
    /**
     * Visit the Equal node in the Abstract Syntax Tree.
     * @param ctx the AST
     * @return the visitor result
     */
    visitEqual?: (ctx: Equal) => Result;
    /**
     * Visit the NotEqual node in the Abstract Syntax Tree.
     * @param ctx the AST
     * @return the visitor result
     */
    visitNotEqual?: (ctx: NotEqual) => Result;
    /**
     * Visit the And node in the Abstract Syntax Tree.
     * @param ctx the AST
     * @return the visitor result
     */
    visitAnd?: (ctx: And) => Result;
    /**
     * Visit the Or node in the Abstract Syntax Tree.
     * @param ctx the AST
     * @return the visitor result
     */
    visitOr?: (ctx: Or) => Result;
    /**
     * Visit the Greater node in the Abstract Syntax Tree.
     * @param ctx the AST
     * @return the visitor result
     */
    visitGreater?: (ctx: Greater) => Result;
    /**
     * Visit the Less node in the Abstract Syntax Tree.
     * @param ctx the AST
     * @return the visitor result
     */
    visitLess?: (ctx: Less) => Result;
}