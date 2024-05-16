import { CharStream, CommonTokenStream } from "antlr4";     
import { describe, expect, test } from "@jest/globals";   
import SmartSyncLexer from "../Syntax Analysis/SmartSyncLexer.ts";


describe("SmartSyncLexer Integration Tests", () => {
    it("should tokenize a valid arithmetic expression", () => {
        const input = "1 + 2 * 3";
        const charStream = CharStream.fromString(input);
        const lexer = new SmartSyncLexer(CharStream);
        const tokenStream = new CommonTokenStream(lexer);


        const expectedTokens = [
            {type: SmartSyncLexer.NUMBER, text: "1"},
            {type: SmartSyncLexer.ARITHMETIC_OP, text: "+"},
            {type: SmartSyncLexer.NUMBER, text: "2"},
            {type: SmartSyncLexer.ARITHMETIC_OP, text: "*"},
            {type: SmartSyncLexer.NUMBER, text: "3"},
            {type: SmartSyncLexer.EOF, text: "<EOF>"}
        ];

        tokenStream.fill();
        const actualTokens = tokenStream.getTokens();

        expect(actualTokens.length).toBe(expectedTokens.length);
        for (let i = 0; i < actualTokens.length; i++) {
            expect(actualTokens[i].type).toBe(expectedTokens[i].type);
            expect(actualTokens[i].text).toBe(expectedTokens[i].text);
        }
    });

});
