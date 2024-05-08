import SmartSyncVisitor from './SmartSyncVisitor.ts';
import { DeclarationContext, ExpressionContext, MultExprContext, ProgramContext, AtomContext } from './SmartSyncParser.ts';
import { Line, Program, Identifier, Declaration, Expression, StringConcatenation, Addition, Value, Multiplication, Subtraction, Division, types } from './AST.ts';
import { StringArithmeticContext } from './SmartSyncParser.ts';
import { ArithmeticContext } from './SmartSyncParser.ts';
import { ValueContext } from './SmartSyncParser.ts';

// the result of visiting a node in the AST
type Result = Line | Declaration | Expression;

export default class AstVisitor extends SmartSyncVisitor<Result> {

    visitProgram: (ctx: ProgramContext) => Result = (ctx: ProgramContext): Result => {
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
            body: lines
        }

        return program;
    }

    visitDeclaration: (ctx: DeclarationContext) => Result = (ctx: DeclarationContext): Result => {
        const type: types = ctx.TYPE().getText() as types;
        const identifierName = ctx.ID().getText();
        const startLine = ctx.start.line;

        if (this.visitExpression) {
            const value = this.visitExpression(ctx.expression());

            const identifier: Identifier = {
                kind: "Identifier",
                line: startLine,
                Type: type,
                name: identifierName
            }

            const declaration: Declaration = {
                kind: "Declaration",
                line: startLine,
                Type: type,
                identifier,
                value: value as Expression
            }

            return declaration;
        }

        return null as unknown as Result;
    }
    
    visitExpression: (ctx: ExpressionContext) => Result = (ctx: ExpressionContext): Result => {
        // Check if the expression is a stringArithmetic, arithmetic, value or expression
        // used !! to convert the value to a boolean and then check if it is true
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
    }

    visitStringArithmetic: (ctx: StringArithmeticContext) => Result = (ctx: StringArithmeticContext): Result => {
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
                value: values[0]
            }
            return value;
        } else {
            const StringConcatenation: StringConcatenation = {
                kind: "StringConcatenation",
                line: ctx.start.line,
                values
            }
            return StringConcatenation;
        }
    }

    visitArithmetic: (ctx: ArithmeticContext) => Result = (ctx: ArithmeticContext): Result => {
        let left = this.visitMultExpr(ctx.multExpr(0));

        let y = 1;
        for (let i = 1; i < ctx.getChildCount() - 1; i += 2) { // Skip multExpr children
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
                        operator: "+"
                    }
                    left = addition;
                    break;
                }
                case "-": {
                    const subtraction: Subtraction = {
                        kind: "BinaryOperation",
                        line: ctx.start.line,
                        left: left as Expression,
                        right: right as Expression,
                        operator: "-"
                    }
                    left = subtraction;
                    break;
                }
                default:
                    throw new Error("Unknown operator: " + operator);
            }
        }
        return left;
    }

    visitMultExpr: (ctx: MultExprContext) => Result = (ctx: MultExprContext): Result => {
        let left = this.visitAtom(ctx.atom(0));
        let y = 1;
        for (let i = 1; i < ctx.getChildCount() - 1; i += 2) { // Skip multExpr children
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
                        operator: "*"
                    }
                    left = multiplication;
                    break;
                }
                case "/": {
                    const division: Division = {
                        kind: "BinaryOperation",
                        line: ctx.start.line,
                        left: left as Expression,
                        right: right as Expression,
                        operator: "/"
                    }
                    left = division;
                    break;
                }
                default:
                    throw new Error("Unknown operator: " + operator);
            }
        }
        return left;
    }

    visitAtom: (ctx: AtomContext ) => Result = (ctx: AtomContext): Result => {

        switch (true) {
            // case for ( atom ) probably not the best way to check for this 
            case ctx.getChildCount() === 3 && ctx.getChild(0).getText() === "(" && ctx.getChild(2).getText() === ")": {
                const atom = ctx.getChild(1).getText();
                console.log("Atom: ", atom);
                console.log("is number: ", !isNaN(Number(atom)));

                switch (true) {
                    // atom is a number
                    case !isNaN(Number(atom)): {
                        const value: Value = {
                            kind: "Value",
                            Type: "Number",
                            line: ctx.start.line,
                            value: atom
                        }
                        return value;
                    }
                    // atom is a string
                    case atom.startsWith("\"") && atom.endsWith("\""): {
                        const value: Value = {
                            kind: "Value",
                            Type: "Text",
                            line: ctx.start.line,
                            value: atom
                        }
                        return value;
                    }
                    default:
                        throw new Error("Unknown atom");
                }
            }
            case !!ctx.NUMBER(): {
                const value: Value = {
                    kind: "Value",
                    Type: "Number",
                    line: ctx.start.line,
                    value: ctx.NUMBER().getText()
                }
    
                return value;
            }
            case !!ctx.ID(): {
                const identifier: Identifier = {
                    kind: "Identifier",
                    line: ctx.start.line,
                    Type: "Number",
                    name: ctx.ID().getText()
                }
    
                return identifier;
            }
            default:
                throw new Error("Unknown atom");
        }
    }

    visitValue: (ctx: ValueContext) => Result = (ctx: ValueContext): Result => {
        let result: Value | Identifier;
        
        switch (true) {
            case !!ctx.BOOL(): {
                result = {
                    kind: "Value",
                    Type: "Boolean",
                    line: ctx.start.line,
                    value: ctx.BOOL().getText()
                }
                break;
            }
            case !!ctx.STRING(): {
                result = {
                    kind: "Value",
                    Type: "Text",
                    line: ctx.start.line,
                    value: ctx.STRING().getText()
                }
                break;
            }
            case !!ctx.NUMBER(): {
                result = {
                    kind: "Value",
                    Type: "Number",
                    line: ctx.start.line,
                    value: ctx.NUMBER().getText()
                }
                break;
            }
            case !!ctx.ID() && ctx.getChildCount() === 1: {
                result = {
                    kind: "Identifier",
                    line: ctx.start.line,
                    Type: undefined,
                    name: ctx.ID().getText()
                }
                break;
            }
            // case for ID[] SIZE
            case !!ctx.ID() && ctx.getChildCount() === 3 && ctx.getChild(1).getText() === "[]" && ctx.getChild(2).getText() === "SIZE": {
                throw new Error("Not implemented");
            }
            // case for ID[value]
            case !!ctx.ID() && ctx.getChildCount() === 4 && ctx.getChild(1).getText() === "[" && ctx.getChild(3).getText() === "]": {
                throw new Error("Not implemented");
            }
            // case for ID(funcReturn)
            case !!ctx.ID() && ctx.getChildCount() >= 3 && ctx.getChild(1).getText() === "(" && ctx.getChild(ctx.getChildCount() - 1).getText() === ")": {
                throw new Error("Not implemented");
            }
            default:
                throw new Error("Unknown value");


        }
        return result;

    }
}

