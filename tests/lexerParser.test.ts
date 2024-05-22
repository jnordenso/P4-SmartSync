import { assertEquals, assertThrows, assertStrictEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";
import { CharStream, CommonTokenStream, ParserRuleContext, Token } from "antlr4";
import SmartSyncLexer from "../Syntax Analysis/SmartSyncLexer.ts";
import SmartSyncParser from "../Syntax Analysis/SmartSyncParser.ts";
import { ThrowingErrorListener, CustomBailErrorStrategy } from "../customError.ts";

Deno.test("SmartSync Lexer/Parser - Integration Test", () => {
    const testCases = [
        {
            input: "Number x = 5;",
            expectedTokens: [
                { type: SmartSyncLexer.TYPE, text: "Number" },
                { type: SmartSyncLexer.ID, text: "x" },
                { type: SmartSyncLexer.T__7, text: "=" },
                { type: SmartSyncLexer.NUMBER, text: "5" },
                { type: SmartSyncLexer.T__8, text: ";" },
                { type: SmartSyncLexer.EOF, text: "<EOF>" }, 
            ],
            expectedRuleInvocations: ["program", "line", "declaration"],
            expectedError: null,
        },
        {
            input: "x = \"Hello\";",
            expectedTokens: [
                { type: SmartSyncLexer.ID, text: "x" },
                { type: SmartSyncLexer.T__7, text: "=" },
                { type: SmartSyncLexer.STRING, text: "'Hello'" },
                { type: SmartSyncLexer.T__8, text: ";" },
                { type: SmartSyncLexer.EOF, text: "<EOF>" }, 
            ],
            expectedRuleInvocations: ["program", "line", "assignments"],
            expectedError: null,
        },

        {
            input: "IF x GREATER 5 { OUTPUT \"x is greater than 5\"; }",
            expectedTokens: [
                { type: SmartSyncLexer.T__12, text: "IF" },
                { type: SmartSyncLexer.ID, text: "x" },
                { type: SmartSyncLexer.T__22, text: "GREATER" },
                { type: SmartSyncLexer.NUMBER, text: "5" },
                { type: SmartSyncLexer.T__10, text: "{" },
                { type: SmartSyncLexer.T__26, text: "OUTPUT" },
                { type: SmartSyncLexer.STRING, text: "\"x is greater than 5\"" },
                { type: SmartSyncLexer.T__8, text: ";" },
                { type: SmartSyncLexer.T__11, text: "}" },
                { type: SmartSyncLexer.EOF, text: "<EOF>" }, 
            ],
            expectedRuleInvocations: ["program", "line", "statements", "ifStm", "condition", "output"],
            expectedError: null,
        },
        {
            input: "Number x = 56", 
            expectedTokens: [], 
            expectedRuleInvocations: [], 
            expectedError: "missing ';' at '4'"
        },
    ];

    testCases.forEach((testCase) => {
        const charStream = new CharStream(testCase.input);
        const lexer = new SmartSyncLexer(charStream);
        lexer.removeErrorListeners(); 
        lexer.addErrorListener(new ThrowingErrorListener());

        const tokenStream = new CommonTokenStream(lexer);
        tokenStream.fill(); 
        
        const actualTokens = collectTokens(tokenStream);
        assertEquals(actualTokens, testCase.expectedTokens, `Token mismatch for input: ${testCase.input}`);

        tokenStream.reset(); 

        const parser = new SmartSyncParser(tokenStream);
        parser._errHandler = new CustomBailErrorStrategy();
        const ruleInvocationListener = new RuleInvocationListener();
        parser.addParseListener(ruleInvocationListener);

        if (testCase.expectedError) {
            // Invalid Input
            assertThrows(() => parser.program(), Error, testCase.expectedError, `Program: ${testCase.input} should have thrown an error`);
        } else {
            // Valid Input
            parser.program(); 
            assertStrictEquals(ruleInvocationListener.ruleInvocations, testCase.expectedRuleInvocations, `Rule invocations mismatch for input: ${testCase.input}`);
        }
    });
});

function collectTokens(tokenStream: CommonTokenStream): { type: number; text?: string }[] {
    const tokens: { type: number; text?: string }[] = [];
    let token: Token | undefined;
    do {
        token = tokenStream.LT(1); // Look ahead one token
        tokens.push({
            type: token.type,
            text: token.text, // Include text if available
        });
        tokenStream.consume(); // Move to the next token
    } while (token.type !== Token.EOF); // Loop until end of file
    return tokens;
}

