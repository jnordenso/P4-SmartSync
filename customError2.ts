import { ErrorListener, Recognizer } from "antlr4";

export class SmartSyncError extends Error {
    constructor(public line: number, public charPositionInLine: number, message: string) {
        super(message);
        this.name = "SmartSyncError";
    }
}

export default class ThrowingErrorListener extends ErrorListener<number> {
    syntaxError<T extends Recognizer<number>>(
        recognizer: T,
        offendingSymbol: number | undefined,
        line: number,
        charPositionInLine: number,
        msg: string,
        e?: any
    ): void {
        throw new SmartSyncError(line, charPositionInLine, msg); // Or use Error if no custom class
    }
}