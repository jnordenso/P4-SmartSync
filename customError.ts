import { BailErrorStrategy, ErrorListener, Parser, RecognitionException, Recognizer } from "antlr4";
import SmartSyncParser from "./Syntax Analysis/SmartSyncParser.ts";

// Error listener that throws an error on syntax and tokenization errors
export class ThrowingErrorListener extends ErrorListener<number> {
    syntaxError<T extends Recognizer<number>>(
        _recognizer: T,
        _offendingSymbol: number | undefined,
        line: number,
        charPositionInLine: number,
        msg: string,
    ): void {
        throw new Error(`Lexer error: ${msg} at line ${line}:${charPositionInLine}`);
        
    }
}
export class CustomBailErrorStrategy extends BailErrorStrategy {
    reportError(_recognizer: Parser, e: RecognitionException): void {
        // Check if the error is a NoViableAltException based on its name
        if (e.constructor.name === "NoViableAltException") { 
            const errorToken = e.offendingToken;
            const message = `Parser Error: unexpected token '${errorToken?.text}' at line ${errorToken?.line}:${errorToken?.tokenIndex}`;
            throw new Error(message); 
        } else {
            //console.log("Error in CustomBailErrorStrategy", e.offendingToken?.text, e.cause, e.message, e.name, e.stack, e.toString(), e.ctx.getText());
            throw new Error("Parser Error: mismatched character '" + e.offendingToken?.text + "' at line " + e.offendingToken?.line + ":" + e.offendingToken?.stop);
        }
    }
}