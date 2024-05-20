import { assertStrictEquals, assertThrows } from "https://deno.land/std@0.224.0/assert/mod.ts";
import { CommonTokenStream, CharStream, ParserRuleContext } from "antlr4"; // Include ParserRuleContext
import SmartSyncLexer from "../Syntax Analysis/SmartSyncLexer.ts";
import SmartSyncParser from "../Syntax Analysis/SmartSyncParser.ts";
import {ThrowingErrorListener, CustomBailErrorStragety} from "../customError.ts";


Deno.test("SmartSync Parser - Valid Input", () => {
  const testCases = [
    {
      input: "Number a = 10;",
      expectedRuleInvocations: ["declaration"]
    },
    {
      input: "y = 'Hello';",
      expectedRuleInvocations: ["assignments"]
    },
    {
      input: "IF x GREATER 5 { OUTPUT \"x is greater than 5\"; }",
      expectedRuleInvocations: ["ifStm", "condition", "output"]
    },
    // Add more test cases here for other language constructs
    // ...
  ];

  for (const testCase of testCases) {
    const chars = new CharStream(testCase.input);
    const lexer = new SmartSyncLexer(chars);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new SmartSyncParser(tokenStream);
    parser._errHandler = new BailErrorStrategy();

    const errorListener = new ThrowingErrorListener();
    parser.addErrorListener(errorListener);

    // Custom Listener to Track Rule Invocations
    class RuleInvocationListener extends SmartSyncListener {
      ruleInvocations: string[] = [];
      enterEveryRule(ctx: ParserRuleContext) {
        this.ruleInvocations.push(SmartSyncParser.ruleNames[ctx.ruleIndex]);
      }
    }
    const ruleInvocationListener = new RuleInvocationListener();
    parser.addParseListener(ruleInvocationListener);

    parser.program(); // Parse the program

    assertStrictEquals(errorListener.hasErrors(), false, `Parsing should not have produced errors for: ${testCase.input}`);
    assertStrictEquals(ruleInvocationListener.ruleInvocations, testCase.expectedRuleInvocations, `Rule invocations mismatch for input: ${testCase.input}`);
  }
});
