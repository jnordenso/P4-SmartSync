import { assertEquals, assertThrows } from "https://deno.land/std@0.224.0/assert/mod.ts";
import { CharStream } from "antlr4"; 
import SmartSyncLexer from "../Syntax Analysis/SmartSyncLexer.ts";
import {ThrowingErrorListener} from "../customError.ts";

Deno.test("SmartSyncLexer - Unit Test - Keywords", () => {
    const testCases = [
        { input: "TRUE", expectedToken: { type: SmartSyncLexer.BOOL, text: "TRUE"} },
        { input: "FALSE", expectedToken: { type: SmartSyncLexer.BOOL, text: "FALSE"} },
        { input: "Number", expectedToken: { type: SmartSyncLexer.TYPE, text: "Number"} },
        { input: "Text", expectedToken: { type: SmartSyncLexer.TYPE, text: "Text"} },
        { input: "Boolean", expectedToken: { type: SmartSyncLexer.TYPE, text: "Boolean"} },
        { input: "IF", expectedToken: { type: SmartSyncLexer.T__13, text: "IF"} },
        { input: "ELSE", expectedToken: { type: SmartSyncLexer.T__14, text: "ELSE"} },
        { input: "WHILE", expectedToken: { type: SmartSyncLexer.T__10, text: "WHILE"} },
        { input: "FUNCTION", expectedToken: { type: SmartSyncLexer.T__25, text: "FUNCTION"} },
        { input: "RETURN", expectedToken: { type: SmartSyncLexer.T__4, text: "RETURN"} },
        { input: "OUTPUT", expectedToken: { type: SmartSyncLexer.T__26, text: "OUTPUT"} },
        { input: "PUSH", expectedToken: { type: SmartSyncLexer.T__27, text: "PUSH"} },
        { input: "PULL", expectedToken: { type: SmartSyncLexer.T__28, text: "PULL"} },
        { input: "SIZE", expectedToken: { type: SmartSyncLexer.T__6, text: "SIZE"} },
        { input: "EQUAL", expectedToken: { type: SmartSyncLexer.T__21, text: "EQUAL"} },
        { input: "NOT EQUAL", expectedToken: { type: SmartSyncLexer.T__22, text: "NOT EQUAL"} },
        { input: "AND", expectedToken: { type: SmartSyncLexer.T__19, text: "AND"} },
        { input: "OR", expectedToken: { type: SmartSyncLexer.T__20, text: "OR"} },
        { input: "GREATER", expectedToken: { type: SmartSyncLexer.T__23, text: "GREATER"} },
        { input: "LESS", expectedToken: { type: SmartSyncLexer.T__24, text: "LESS"} },
    ]
    

    for (const testCase of testCases) {
        const chars = new CharStream(testCase.input);
        const lexer = new SmartSyncLexer(chars);
        const token = lexer.nextToken();

        assertEquals(token.type, testCase.expectedToken.type, `Token type mismatch. Expected ${testCase.expectedToken.type}, got ${token.type}`);
        assertEquals(token.text, testCase.expectedToken.text, `Token text mismatch. Expected ${testCase.expectedToken.text}, got ${token.text}`);
    }
});

Deno.test("SmartSyncLexer - Unit Test - Identifiers", () => {
    const testCases = [
        { input: "x", expectedToken: { type: SmartSyncLexer.ID, text: "x"} },
        { input: "variable", expectedToken: { type: SmartSyncLexer.ID, text: "variable"} },
        { input: "variable1", expectedToken: { type: SmartSyncLexer.ID, text: "variable1"} },
        { input: "variable_1", expectedToken: { type: SmartSyncLexer.ID, text: "variable_1"} },
        { input: "variable_1_", expectedToken: { type: SmartSyncLexer.ID, text: "variable_1_"} },
        { input: "IF_", expectedToken: { type: SmartSyncLexer.ID, text: "IF_"} },
        { input: "WHILE_", expectedToken: { type: SmartSyncLexer.ID, text: "WHILE_"} },
        { input: "ELSE_", expectedToken: { type: SmartSyncLexer.ID, text: "ELSE_"} },

    ]

    
    for (const testCase of testCases) {
        const chars = new CharStream(testCase.input);
        const lexer = new SmartSyncLexer(chars);
        const token = lexer.nextToken();
        
        assertEquals(token.type, testCase.expectedToken.type, `Token type mismatch. Expected ${testCase.expectedToken.type}, got ${token.type}`);
        assertEquals(token.text, testCase.expectedToken.text, `Token text mismatch. Expected ${testCase.expectedToken.text}, got ${token.text}`);
    }
    
    // invalid identifiers
    const invalidTestCases = [
        { input: "_variable", expectedError: "Lexer error: token recognition error at: '_' at line 1:0" },
        { input: "_", expectedError: "Lexer error: token recognition error at: '_' at line 1:0" },
        { input: "var$1", expectedError: "Lexer error: token recognition error at: '$' at line 1:3" },
        { input: "var.name", expectedError: "Lexer error: token recognition error at: '.' at line 1:3" },
        { input: "!bad", expectedError: "Lexer error: token recognition error at: '!' at line 1:0" },
        { input: "1variable_", expectedToken: { type: SmartSyncLexer.ID, text: "variable_"} },
    ]


    for (const testCase of invalidTestCases) {
        const chars = new CharStream(testCase.input);
        const lexer = new SmartSyncLexer(chars);
        lexer.removeErrorListeners();
        lexer.addErrorListener(new ThrowingErrorListener());
        

        if (testCase.expectedError) {
            assertThrows(() => lexer.getAllTokens(), Error, testCase.expectedError);
        } else if (testCase.expectedToken) {
            // lexer reads 1 and assumes it is just a number (parser will throw an error later on)
            const tokens = lexer.getAllTokens();
            // tokens should be 2 because lexer reads 1 as a number and then stops at 'variable_'
            assertEquals(tokens.length, 2, `Token length mismatch. Expected 2, got ${tokens.length}`);
            assertEquals(tokens[0].type, SmartSyncLexer.NUMBER, `Token type mismatch. Expected ${SmartSyncLexer.NUMBER}, got ${tokens[0].type}`);
            assertEquals(tokens[0].text, "1", `Token text mismatch. Expected 1, got ${tokens[0].text}`);
            assertEquals(tokens[1].type, testCase.expectedToken.type, `Token type mismatch. Expected ${testCase.expectedToken.type}, got ${tokens[1].type}`);
            assertEquals(tokens[1].text, testCase.expectedToken.text, `Token text mismatch. Expected variable_, got ${tokens[1].text}`);
        }
    }
});

Deno.test("SmartSyncLexer - Unit Test - Literals", () => {
    const testCases = [
        { input: "123", expectedToken: { type: SmartSyncLexer.NUMBER, text: "123"} },
        { input: "-123", expectedToken: { type: SmartSyncLexer.NUMBER, text: "-123"} },
        { input: " -123 ", expectedToken: { type: SmartSyncLexer.NUMBER, text: "-123"} }, // spaces before and after number
        { input: "0", expectedToken: { type: SmartSyncLexer.NUMBER, text: "0"} },
        { input: "123.456", expectedToken: { type: SmartSyncLexer.NUMBER, text: "123.456"} },
        { input: "  -123.456    ", expectedToken: { type: SmartSyncLexer.NUMBER, text: "-123.456"} }, // tabs before and after number
        { input: "0.0", expectedToken: { type: SmartSyncLexer.NUMBER, text: "0.0"} },
        { input: "\n0.0", expectedToken: { type: SmartSyncLexer.NUMBER, text: "0.0"} }, // newline before number
        { input: "0.123", expectedToken: { type: SmartSyncLexer.NUMBER, text: "0.123"} },
        { input: "0005", expectedToken: { type: SmartSyncLexer.NUMBER, text: "0005"} },
        { input: `"text"`, expectedToken: { type: SmartSyncLexer.STRING, text: `"text"`} },
        { input: `""`, expectedToken: { type: SmartSyncLexer.STRING, text: `""`} },
        { input: `"text with spaces"`, expectedToken: { type: SmartSyncLexer.STRING, text: `"text with spaces"`} },
        { input: `"text with spaces and numbers 123"`, expectedToken: { type: SmartSyncLexer.STRING, text: `"text with spaces and numbers 123"`} },
        { input: `"text with spaces and numbers 123.456"`, expectedToken: { type: SmartSyncLexer.STRING, text: `"text with spaces and numbers 123.456"`} },
        { input: `"text with spaces 'and' quotes"`, expectedToken: { type: SmartSyncLexer.STRING, text: `"text with spaces 'and' quotes"`} },
        { input: "-1-23", expectedToken: [{ type: SmartSyncLexer.NUMBER, text: "-1"}, {type: SmartSyncLexer.NUMBER, text: "-23"}] },
        { input: "1.2.3", expectedError: "Lexer error: token recognition error at: '.' at line 1:3" },
        { input: "123.", expectedError: "Lexer error: token recognition error at: '.' at line 1:3" },
    ]

    for (const testCase of testCases) {
        const chars = new CharStream(testCase.input);
        const lexer = new SmartSyncLexer(chars);
        lexer.removeErrorListeners();
        lexer.addErrorListener(new ThrowingErrorListener());

        if (testCase.expectedToken && !Array.isArray(testCase.expectedToken)) {
            const token = lexer.getAllTokens();
            assertEquals(token[0].type, testCase.expectedToken.type, `Token type mismatch. Expected ${testCase.expectedToken.type}, got ${token[0].type}`);
            assertEquals(token[0].text, testCase.expectedToken.text, `Token text mismatch. Expected ${testCase.expectedToken.text}, got ${token[0].text}`);
        } else if (testCase.expectedToken && Array.isArray(testCase.expectedToken)) {
            const tokens = lexer.getAllTokens();
            for (let i = 0; i < testCase.expectedToken.length; i++) {
                assertEquals(tokens[i].type, testCase.expectedToken[i].type, `Token type mismatch. Expected ${testCase.expectedToken[i].type}, got ${tokens[i].type}`);
                assertEquals(tokens[i].text, testCase.expectedToken[i].text, `Token text mismatch. Expected ${testCase.expectedToken[i].text}, got ${tokens[i].text}`);
            }
        } else if (testCase.expectedError) {
            assertThrows(() => lexer.getAllTokens(), Error, testCase.expectedError);
        }
    }
});

Deno.test("SmartSyncLexer - Unit Test - Operators", () => {
    const testCases = [
        { input: "+", expectedToken: { type: SmartSyncLexer.T__15, text: "+"} },
        { input: "-", expectedToken: { type: SmartSyncLexer.T__16, text: "-"} },
        { input: "*", expectedToken: { type: SmartSyncLexer.T__17, text: "*"} },
        { input: "/", expectedToken: { type: SmartSyncLexer.T__18, text: "/"} },
        { input: "=", expectedToken: { type: SmartSyncLexer.T__9, text: "="} },
        { input: "[]", expectedToken: { type: SmartSyncLexer.T__5, text: "[]"} },
        { input: "[", expectedToken: { type: SmartSyncLexer.T__7, text: "["} },
        { input: "]", expectedToken: { type: SmartSyncLexer.T__8, text: "]"} },
        { input: "(", expectedToken: { type: SmartSyncLexer.T__0, text: "("} },
        { input: ")", expectedToken: { type: SmartSyncLexer.T__2, text: ")"} },
        { input: ",", expectedToken: { type: SmartSyncLexer.T__1, text: ","} },
        { input: ";", expectedToken: { type: SmartSyncLexer.T__3, text: ";"} }
    ]

    for (const testCase of testCases) {
        const chars = new CharStream(testCase.input);
        const lexer = new SmartSyncLexer(chars);
        const token = lexer.nextToken();

        assertEquals(token.type, testCase.expectedToken.type, `Token type mismatch. Expected ${testCase.expectedToken.type}, got ${token.type}`);
        assertEquals(token.text, testCase.expectedToken.text, `Token text mismatch. Expected ${testCase.expectedToken.text}, got ${token.text}`);
    }
});

Deno.test("SmartSyncLexer - Unit Test - White Space and Comments", () => {
    const testCases = [
        { input: "grade=10;", expectedToken: [{ type: SmartSyncLexer.ID, text: "grade"}, { type: SmartSyncLexer.T__9, text: "="}, { type: SmartSyncLexer.NUMBER, text: "10"}, { type: SmartSyncLexer.T__3, text: ";"}] },
        // spaces, tabs, newlines
        { input: "\t grade\t= \n10;\t\n", expectedToken: [{ type: SmartSyncLexer.ID, text: "grade"}, { type: SmartSyncLexer.T__9, text: "="}, { type: SmartSyncLexer.NUMBER, text: "10"}, { type: SmartSyncLexer.T__3, text: ";"}] },
        { input: "grade = 10;", expectedToken: [{ type: SmartSyncLexer.ID, text: "grade"}, { type: SmartSyncLexer.T__9, text: "="}, { type: SmartSyncLexer.NUMBER, text: "10"}, { type: SmartSyncLexer.T__3, text: ";"}] },
        { input: "IF 10+20{grade=10;}", expectedToken: [{ type: SmartSyncLexer.T__13, text: "IF"}, { type: SmartSyncLexer.NUMBER, text: "10"}, { type: SmartSyncLexer.T__15, text: "+"}, { type: SmartSyncLexer.NUMBER, text: "20"}, { type: SmartSyncLexer.T__11, text: "{"}, { type: SmartSyncLexer.ID, text: "grade"}, { type: SmartSyncLexer.T__9, text: "="}, { type: SmartSyncLexer.NUMBER, text: "10"}, { type: SmartSyncLexer.T__3, text: ";"}, { type: SmartSyncLexer.T__12, text: "}"}] },
        // single line comments
        { input: "grade = 10; # this is a comment #", expectedToken: [{ type: SmartSyncLexer.ID, text: "grade"}, { type: SmartSyncLexer.T__9, text: "="}, { type: SmartSyncLexer.NUMBER, text: "10"}, { type: SmartSyncLexer.T__3, text: ";"}] },
        // multi line comments
        { input: "# this \n is a \n multi line \n comment # grade = 10;", expectedToken: [{ type: SmartSyncLexer.ID, text: "grade"}, { type: SmartSyncLexer.T__9, text: "="}, { type: SmartSyncLexer.NUMBER, text: "10"}, { type: SmartSyncLexer.T__3, text: ";"}] },
    ]

    for (const testCase of testCases) {
        const chars = new CharStream(testCase.input);
        const lexer = new SmartSyncLexer(chars);
        const tokens = lexer.getAllTokens();

        for (let i = 0; i < testCase.expectedToken.length; i++) {
            assertEquals(tokens[i].type, testCase.expectedToken[i].type, `Token type mismatch. Expected ${testCase.expectedToken[i].type}, got ${tokens[i].type}`);
            assertEquals(tokens[i].text, testCase.expectedToken[i].text, `Token text mismatch. Expected ${testCase.expectedToken[i].text}, got ${tokens[i].text}`);
        }        
    }
});