import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";
import { CharStream, CommonTokenStream } from "antlr4"; // Assuming ANTLR4 is installed
import SmartSyncLexer from "../Syntax Analysis/SmartSyncLexer.ts"; // Replace with your path



Deno.test("SmartSyncLexer Integration Tests", () => {
    const testCases = [
      {
        input: "55 + 54 * 300",
        expectedTokens: [
          { type: SmartSyncLexer.NUMBER, text: "55" },
          { type: SmartSyncLexer.T__15, text: "+" },
          { type: SmartSyncLexer.NUMBER, text: "54" },
          { type: SmartSyncLexer.T__17, text: "*" },
          { type: SmartSyncLexer.NUMBER, text: "300" },
          { type: SmartSyncLexer.EOF, text: "<EOF>" },
        ],
      },
      {
        input: "x = y",
        expectedTokens: [
          { type: SmartSyncLexer.ID, text: "x" },
          { type: SmartSyncLexer.T__9, text: "=" },
          { type: SmartSyncLexer.ID, text: "y" },
          { type: SmartSyncLexer.EOF, text: "<EOF>" },
        ],
      },
      {
        input: "OUTPUT grade1;",
        expectedTokens: [
          { type: SmartSyncLexer.T__26, text: "OUTPUT" },
          { type: SmartSyncLexer.ID, text: "grade1" },
          { type: SmartSyncLexer.T__1, text: ";" },
          { type: SmartSyncLexer.EOF, text: "<EOF>" },
        ],
      },
      {
        input: "Boolean isgradeGreaterThan90 = grade GREATER 90;",
        expectedTokens: [
          { type: SmartSyncLexer.TYPE, text: "Boolean" },
          { type: SmartSyncLexer.ID, text: "isgradeGreaterThan90" },
          { type: SmartSyncLexer.T__9, text: "=" },
          { type: SmartSyncLexer.ID, text: "grade" },
          { type: SmartSyncLexer.T__23, text: "GREATER" },
          { type: SmartSyncLexer.NUMBER, text: "90" },
          { type: SmartSyncLexer.T__1, text: ";" },
          { type: SmartSyncLexer.EOF, text: "<EOF>" },
        ],
      },
      {
        input: "Text grades[] = [A, B, C, D, F];",
        expectedTokens: [
          { type: SmartSyncLexer.TYPE, text: "Text" },
          { type: SmartSyncLexer.ID, text: "grades" },
          { type: SmartSyncLexer.T__2, text: "[]" },
          { type: SmartSyncLexer.T__9, text: "=" },
          { type: SmartSyncLexer.T__4, text: "[" },
          { type: SmartSyncLexer.ID, text: "A" },
          { type: SmartSyncLexer.T__7, text: "," },
          { type: SmartSyncLexer.ID, text: "B" },
          { type: SmartSyncLexer.T__7, text: "," },
          { type: SmartSyncLexer.ID, text: "C" },
          { type: SmartSyncLexer.T__7, text: "," },
          { type: SmartSyncLexer.ID, text: "D" },
          { type: SmartSyncLexer.T__7, text: "," },
          { type: SmartSyncLexer.ID, text: "F" },
          { type: SmartSyncLexer.T__5, text: "]" },
          { type: SmartSyncLexer.T__1, text: ";" },
          { type: SmartSyncLexer.EOF, text: "<EOF>" },
        ],
      },
      {
        input: "Number FUNCTION add(Number a, Number b) { RETURN grade[];}",
        expectedTokens: [
          { type: SmartSyncLexer.TYPE, text: "Number" },
          { type: SmartSyncLexer.T__25, text: "FUNCTION" },
          { type: SmartSyncLexer.ID, text: "add" },
          { type: SmartSyncLexer.T__6, text: "(" },
          { type: SmartSyncLexer.TYPE, text: "Number" },
          { type: SmartSyncLexer.ID, text: "a" },
          { type: SmartSyncLexer.T__7, text: "," },
          { type: SmartSyncLexer.TYPE, text: "Number" },
          { type: SmartSyncLexer.ID, text: "b" },
          { type: SmartSyncLexer.T__8, text: ")" },
          { type: SmartSyncLexer.T__11, text: "{" },
          { type: SmartSyncLexer.T__0, text: "RETURN" },
          { type: SmartSyncLexer.ID, text: "grade" },
          { type: SmartSyncLexer.T__2, text: "[]" },
          { type: SmartSyncLexer.T__1, text: ";" },
          { type: SmartSyncLexer.T__12, text: "}" },
          { type: SmartSyncLexer.EOF, text: "<EOF>" },
        ],
      },
      {
        input: "IF grade GREATER 60 {Math = Pass;} ELSE {Math = Fail;}",
        expectedTokens: [
          { type: SmartSyncLexer.T__13, text: "IF" },
          { type: SmartSyncLexer.ID, text: "grade" },
          { type: SmartSyncLexer.T__23, text: "GREATER" },
          { type: SmartSyncLexer.NUMBER, text: "60" },
          { type: SmartSyncLexer.T__11, text: "{" },
          { type: SmartSyncLexer.ID, text: "Math" },
          { type: SmartSyncLexer.T__9, text: "=" },
          { type: SmartSyncLexer.ID, text: "Pass" },
          { type: SmartSyncLexer.T__1, text: ";" },
          { type: SmartSyncLexer.T__12, text: "}" },
          { type: SmartSyncLexer.T__14, text: "ELSE" },
          { type: SmartSyncLexer.T__11, text: "{" },
          { type: SmartSyncLexer.ID, text: "Math" },
          { type: SmartSyncLexer.T__9, text: "=" },
          { type: SmartSyncLexer.ID, text: "Fail" },
          { type: SmartSyncLexer.T__1, text: ";" },
          { type: SmartSyncLexer.T__12, text: "}" },
          { type: SmartSyncLexer.EOF, text: "<EOF>" },
        ],
      },
      {
        input: "# This is a comment # x = 5;", 
        expectedTokens: [
         { type: SmartSyncLexer.ID, text: "x" },
         { type: SmartSyncLexer.T__9, text: "=" },
         { type: SmartSyncLexer.NUMBER, text: "5" },
         { type: SmartSyncLexer.T__1, text: ";" },
         { type: SmartSyncLexer.EOF, text: "<EOF>" },
        ],
       },
    ];
  
    // Iterate over test cases
    for (const testCase of testCases) {
      const chars = new CharStream(testCase.input);
      const lexer = new SmartSyncLexer(chars);
      const tokenStream = new CommonTokenStream(lexer);
  
      // Fill the token stream to generate tokens
      tokenStream.fill();
  
      const filteredTokens = tokenStream.tokens.map((token) => ({
        type: token.type,
        text: token.text,
      }));
  
      // Assert on the number of tokens
      assertEquals(
        filteredTokens.length,
        testCase.expectedTokens.length,
        "Unexpected number of tokens. Expected " +
          JSON.stringify(testCase.expectedTokens) +
          ", but got: " +
          JSON.stringify(filteredTokens)
      );
      console.log(filteredTokens);
      // Assert on individual token types and texts (using filteredTokens)
      filteredTokens.forEach((filteredToken, i) => {
        assertEquals(
          filteredToken.type,
          testCase.expectedTokens[i].type,
          `Token type mismatch at position ${i}. Expected ${testCase.expectedTokens[i].type}, but got ${filteredToken.type}`
        );
        assertEquals(
          filteredToken.text,
          testCase.expectedTokens[i].text,
          `Token text mismatch at position ${i}. Expected ${testCase.expectedTokens[i].text}, but got ${filteredToken.text}`
          
        );
      });
    }
    
  });