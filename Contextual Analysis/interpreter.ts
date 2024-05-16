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

export default class TypeChecker extends AstVisitor<any> {
    visitProgram = (ctx: Program): void => {
        throw new Error("1. Method not implemented.");
    }

    visitLine = (ctx: Line): void => {
        throw new Error("2. Method not implemented.");
    }

    visitDeclaration = (ctx: Declaration): void => {
        throw new Error("3. Method not implemented.");
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
        throw new Error("13. Method not implemented.");
    }

    visitFunction = (ctx: Function): void => {
        throw new Error("14. Method not implemented.");
    }

    visitOutput = (ctx: Output): void => {
        throw new Error("15. Method not implemented.");
    }

    visitDelay = (ctx: Delay): void => {
        throw new Error("16. Method not implemented.");
    }

    visitExpression = (ctx: Expression): void => {
        throw new Error("17. Method not implemented.");
    }

    visitValue = (ctx: Value): void => {
        throw new Error("18. Method not implemented.");
    }

    visitArray = (ctx: Array): void => {
        throw new Error("19. Method not implemented.");
    }

    visitStringConcatenation = (ctx: StringConcatenation): void => {
        throw new Error("20. Method not implemented.");
    }

    visitIdentifier = (ctx: Identifier): void => {
        throw new Error("21. Method not implemented.");
    }

    visitBinaryOperation = (ctx: BinaryOperation): void => {
        throw new Error("22. Method not implemented.");
    }

    visitAddition = (ctx: Addition): void => {
        throw new Error("23. Method not implemented.");
    }

    visitSubtraction = (ctx: Subtraction): void => {
        throw new Error("24. Method not implemented.");
    }

    visitMultiplication = (ctx: Multiplication): void => {
        throw new Error("25. Method not implemented.");
    }

    visitDivision = (ctx: Division): void => {
        throw new Error("26. Method not implemented.");
    }

    visitEqual = (ctx: Equal): void => {
        throw new Error("27. Method not implemented.");
    }

    visitNotEqual = (ctx: NotEqual): void => {
        throw new Error("28. Method not implemented.");
    }

    visitAnd = (ctx: And): void => {
        throw new Error("29. Method not implemented.");
    }

    visitOr = (ctx: Or): void => {
        throw new Error("30. Method not implemented.");
    }

    visitGreater = (ctx: Greater): void => {
        throw new Error("31. Method not implemented.");
    }

    visitLess = (ctx: Less): void => {
        throw new Error("32. Method not implemented.");
    }

}