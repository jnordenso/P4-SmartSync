import { assertEquals, assertThrows, assertStrictEquals, assert } from "https://deno.land/std@0.224.0/assert/mod.ts";
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
			input: 'x = "Hello";',
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
			input: 'IF x GREATER 5 { OUTPUT "x is greater than 5"; }',
			expectedTokens: [
				{ type: SmartSyncLexer.T__12, text: "IF" },
				{ type: SmartSyncLexer.ID, text: "x" },
				{ type: SmartSyncLexer.T__22, text: "GREATER" },
				{ type: SmartSyncLexer.NUMBER, text: "5" },
				{ type: SmartSyncLexer.T__10, text: "{" },
				{ type: SmartSyncLexer.T__26, text: "OUTPUT" },
				{ type: SmartSyncLexer.STRING, text: '"x is greater than 5"' },
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
			expectedError: "Parser Error: missing or wrongly placed ';' at line 1:12",
		},
	];

	testCases.forEach((testCase) => {
		const charStream = new CharStream(testCase.input);
		const lexer = new SmartSyncLexer(charStream);
		lexer.removeErrorListeners();
		lexer.addErrorListener(new ThrowingErrorListener());

		const tokens = new CommonTokenStream(lexer);

		const parser = new SmartSyncParser(tokens);

		parser._errHandler = new CustomBailErrorStrategy();

		if (testCase.expectedError) {
			assertThrows(
				() => parser.program(),
				Error,
				testCase.expectedError,
				`Program: ${testCase.input} should have thrown an error`
			);
		} else {
			assert(parser.program(), `Program: ${testCase.input} should have returned a ParserRuleContext`);
		}
	});
});