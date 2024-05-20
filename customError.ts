import { ErrorListener, Recognizer } from "antlr4";

// Error listener that throws an error on syntax and tokenization errors
export default class ThrowingErrorListener extends ErrorListener<number> {
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