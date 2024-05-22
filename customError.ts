import { BailErrorStrategy, ErrorListener, Parser, RecognitionException, Recognizer } from "antlr4";

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
            let token = e.offendingToken?.text;
            if (token === "<EOF>") {
                token = ";";
            }
            throw new Error("Parser Error: mismatched character '" + token + "' at line " + e.offendingToken?.line + ":" + e.offendingToken?.stop);
        }
    }
    recover(_recognizer: Parser, e: RecognitionException): void {
        // Te is an error that is thrown when a token is missing
        let token = e.offendingToken?.text;
        if (token === "<EOF>") {
            token = ";";
        }
        if (e.constructor.name === "Te") {
            throw new Error("Parser Error: missing or wrongly placed '" + token + "' at line " + e.offendingToken?.line + ":" + e.offendingToken?.stop);
        }

        throw new Error("Parser Error: mismatched character '" + token + "' at line " + e.offendingToken?.line + ":" + e.offendingToken?.stop);
    }
}