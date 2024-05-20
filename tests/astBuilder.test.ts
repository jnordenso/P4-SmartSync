import { assertEquals, assertThrows } from "https://deno.land/std@0.224.0/assert/mod.ts";
import { CharStream, CommonTokenStream } from "antlr4";
import SmartSyncLexer from "../Syntax Analysis/SmartSyncLexer.ts";
import {ThrowingErrorListener, CustomBailErrorStrategy} from "../customError.ts";
import SmartSyncParser from "../Syntax Analysis/SmartSyncParser.ts";
import AstVisitor from "../Syntax Analysis/AstBuilder.ts";

Deno.test("AST Builder - Integration test - Literals", () => {
	const testCases = [
		{
			input: "Number grade = 1;",
			expected: {
				kind: "Program",
				line: 1,
				body: [
					{
						kind: "Declaration",
						line: 1,
						type: "Number",
						identifier: { kind: "Identifier", line: 1, type: "Number", name: "grade" },
						value: { 
                            kind: "Value", 
                            type: "Number", 
                            line: 1, 
                            value: "1" 
                        },
					},
				],
			},
		},
		{
			input: "Number grade = -1;",
			expected: {
				kind: "Program",
				line: 1,
				body: [
					{
						kind: "Declaration",
						line: 1,
						type: "Number",
						identifier: { kind: "Identifier", line: 1, type: "Number", name: "grade" },
						value: { 
                            kind: "Value", 
                            type: "Number", 
                            line: 1, 
                            value: "-1" 
                        },
					},
				],
			},
		},
		{
			input: "Number grade = 123.0;",
			expected: {
				kind: "Program",
				line: 1,
				body: [
					{
						kind: "Declaration",
						line: 1,
						type: "Number",
						identifier: { kind: "Identifier", line: 1, type: "Number", name: "grade" },
						value: { 
                            kind: "Value", 
                            type: "Number", 
                            line: 1, 
                            value: "123.0" 
                        },
					},
				],
			},
		},
		{
			input: "Number grade = 123.567;",
			expected: {
				kind: "Program",
				line: 1,
				body: [
					{
						kind: "Declaration",
						line: 1,
						type: "Number",
						identifier: { kind: "Identifier", line: 1, type: "Number", name: "grade" },
						value: { 
                            kind: "Value", 
                            type: "Number", 
                            line: 1, 
                            value: "123.567" 
                        },
					},
				],
			},
		},
		{
			input: "Number grade = -123.567;",
			expected: {
				kind: "Program",
				line: 1,
				body: [
					{
						kind: "Declaration",
						line: 1,
						type: "Number",
						identifier: { kind: "Identifier", line: 1, type: "Number", name: "grade" },
						value: { 
                            kind: "Value", 
                            type: "Number", 
                            line: 1, 
                            value: "-123.567" 
                        },
					},
				],
			},
		},
		{
			input: "Number grade = 0.567;",
			expected: {
				kind: "Program",
				line: 1,
				body: [
					{
						kind: "Declaration",
						line: 1,
						type: "Number",
						identifier: { kind: "Identifier", line: 1, type: "Number", name: "grade" },
						value: { 
                            kind: "Value", 
                            type: "Number", 
                            line: 1, 
                            value: "0.567" 
                        },
					},
				],
			},
		},
        {
			input: 'Text letterGrade = "A";',
			expected: {
				kind: "Program",
				line: 1,
				body: [
					{
						kind: "Declaration",
						line: 1,
						type: "Text",
						identifier: { kind: "Identifier", line: 1, type: "Text", name: "letterGrade" },
						value: { 
                            kind: "Value", 
                            type: "Text", 
                            line: 1, 
                            value: "A" 
                        },
					},
				],
			},
		},
        {
			input: 'Text letterGrade = "Hello World!";',
			expected: {
				kind: "Program",
				line: 1,
				body: [
					{
						kind: "Declaration",
						line: 1,
						type: "Text",
						identifier: { kind: "Identifier", line: 1, type: "Text", name: "letterGrade" },
						value: { 
                            kind: "Value", 
                            type: "Text", 
                            line: 1, 
                            value: "Hello World!" 
                        },
					},
				],
			},
		},
        {
			input: 'Text letterGrade = "Hello\n World!";',
			expected: {
				kind: "Program",
				line: 1,
				body: [
					{
						kind: "Declaration",
						line: 1,
						type: "Text",
						identifier: { kind: "Identifier", line: 1, type: "Text", name: "letterGrade" },
						value: { 
                            kind: "Value", 
                            type: "Text", 
                            line: 1, 
                            value: "Hello\n World!" 
                        },
					},
				],
			},
		},
        {
			input: 'Text letterGrade = "";',
			expected: {
				kind: "Program",
				line: 1,
				body: [
					{
						kind: "Declaration",
						line: 1,
						type: "Text",
						identifier: { kind: "Identifier", line: 1, type: "Text", name: "letterGrade" },
						value: { 
                            kind: "Value", 
                            type: "Text", 
                            line: 1, 
                            value: "" 
                        },
					},
				],
			},
		},
        {
			input: 'Boolean isGrade = TRUE;',
			expected: {
				kind: "Program",
				line: 1,
				body: [
					{
						kind: "Declaration",
						line: 1,
						type: "Boolean",
						identifier: { kind: "Identifier", line: 1, type: "Boolean", name: "isGrade" },
						value: { 
                            kind: "Value", 
                            type: "Boolean", 
                            line: 1, 
                            value: "TRUE" 
                        },
					},
				],
			},
		},
        {
			input: 'Boolean isGrade = FALSE;',
			expected: {
				kind: "Program",
				line: 1,
				body: [
					{
						kind: "Declaration",
						line: 1,
						type: "Boolean",
						identifier: { kind: "Identifier", line: 1, type: "Boolean", name: "isGrade" },
						value: { 
                            kind: "Value", 
                            type: "Boolean", 
                            line: 1, 
                            value: "FALSE" 
                        },
					},
				],
			},
		},

	];

	testCases.forEach((testCase) => {
		const input = testCase.input;
		const expected = testCase.expected;

		const chars = new CharStream(input);
		const lexer = new SmartSyncLexer(chars);
		lexer.removeErrorListeners();
		lexer.addErrorListener(new ThrowingErrorListener());

		const tokens = new CommonTokenStream(lexer);
		const parser = new SmartSyncParser(tokens);

		parser._errHandler = new CustomBailErrorStrategy();

		const astVisitor = new AstVisitor();

		const cst = parser.program();

		const ast = astVisitor.visitProgram(cst);

		const astJson = JSON.stringify(ast);

		assertEquals(astJson, JSON.stringify(expected));
	});
});

Deno.test("AST Builder - Integration test - Identifers", () => {
    const testCases = [
		{
			input: "Number x = 1;",
			expected: {
				kind: "Program",
				line: 1,
				body: [
					{
						kind: "Declaration",
						line: 1,
						type: "Number",
						identifier: { kind: "Identifier", line: 1, type: "Number", name: "x" },
						value: { 
                            kind: "Value", 
                            type: "Number", 
                            line: 1, 
                            value: "1" 
                        },
					},
				],
			},
		},
		{
			input: "Number x1 = 1;",
			expected: {
				kind: "Program",
				line: 1,
				body: [
					{
						kind: "Declaration",
						line: 1,
						type: "Number",
						identifier: { kind: "Identifier", line: 1, type: "Number", name: "x1" },
						value: { 
                            kind: "Value", 
                            type: "Number", 
                            line: 1, 
                            value: "1" 
                        },
					},
				],
			},
		},
		{
			input: "Number var_x = 1;",
			expected: {
				kind: "Program",
				line: 1,
				body: [
					{
						kind: "Declaration",
						line: 1,
						type: "Number",
						identifier: { kind: "Identifier", line: 1, type: "Number", name: "var_x" },
						value: { 
                            kind: "Value", 
                            type: "Number", 
                            line: 1, 
                            value: "1" 
                        },
					},
				],
			},
		},
		{
			input: "Number IF_ = 1;",
			expected: {
				kind: "Program",
				line: 1,
				body: [
					{
						kind: "Declaration",
						line: 1,
						type: "Number",
						identifier: { kind: "Identifier", line: 1, type: "Number", name: "IF_" },
						value: { 
                            kind: "Value", 
                            type: "Number", 
                            line: 1, 
                            value: "1" 
                        },
					},
				],
			},
		},
        {
			input: "Number WHILE_ = 1;",
			expected: {
				kind: "Program",
				line: 1,
				body: [
					{
						kind: "Declaration",
						line: 1,
						type: "Number",
						identifier: { kind: "Identifier", line: 1, type: "Number", name: "WHILE_" },
						value: { 
                            kind: "Value", 
                            type: "Number", 
                            line: 1, 
                            value: "1" 
                        },
					},
				],
			},
		},
        {
			input: "Number ELSE_ = 1;",
			expected: {
				kind: "Program",
				line: 1,
				body: [
					{
						kind: "Declaration",
						line: 1,
						type: "Number",
						identifier: { kind: "Identifier", line: 1, type: "Number", name: "ELSE_" },
						value: { 
                            kind: "Value", 
                            type: "Number", 
                            line: 1, 
                            value: "1" 
                        },
					},
				],
			},
		},
    ];

    testCases.forEach((testCase) => {
		const input = testCase.input;
		const expected = testCase.expected;

		const chars = new CharStream(input);
		const lexer = new SmartSyncLexer(chars);
		lexer.removeErrorListeners();
		lexer.addErrorListener(new ThrowingErrorListener());

		const tokens = new CommonTokenStream(lexer);
		const parser = new SmartSyncParser(tokens);

		parser._errHandler = new CustomBailErrorStrategy();

		const astVisitor = new AstVisitor();

		const cst = parser.program();

		const ast = astVisitor.visitProgram(cst);

		const astJson = JSON.stringify(ast);

		assertEquals(astJson, JSON.stringify(expected));
	});

    const invalidTestCases = [
		{
			input: "Number 1x = 1;",
			expectedError: "Parser Error: mismatched character '1' at line 1:7",
		},
        {
            input: "Number 1 = 1;",
            expectedError: "Parser Error: mismatched character '1' at line 1:7",
        },
        {
            input: "Number _var = 1;",
            expectedError: "Lexer error: token recognition error at: '_' at line 1:7",
        },
        {
            input: "Number my-var = 1;",
            expectedError: "Parser Error: mismatched character '-' at line 1:9",
        },
    ];

    invalidTestCases.forEach((testCase) => {
        const input = testCase.input;
        const expectedError = testCase.expectedError;

        const chars = new CharStream(input);
        const lexer = new SmartSyncLexer(chars);
        lexer.removeErrorListeners();
        lexer.addErrorListener(new ThrowingErrorListener());

        const tokens = new CommonTokenStream(lexer);
        const parser = new SmartSyncParser(tokens);

        parser._errHandler = new CustomBailErrorStrategy();

        assertThrows(() => {
            parser.program()
        }, Error, expectedError);
    });
});

Deno.test("AST Builder - Integration test - Operators", () => {
    const testCases = [
		{
			input: "x = 1 + 2;",
			expected: {
				kind: "Program",
				line: 1,
				body: [
					{
						kind: "Assignment",
						line: 1,
						identifier: { kind: "Identifier", line: 1, name: "x" },
						value: { 
                            kind: "BinaryOperation", 
                            line: 1, 
                            left: { kind: "Value", type: "Number", line: 1, value: "1" },
                            right: { kind: "Value", type: "Number", line: 1, value: "2" },
                            operator: "+"
                        },
					},
				],
			},
		},
		{
			input: "x = 1 - 2;",
			expected: {
				kind: "Program",
				line: 1,
				body: [
					{
						kind: "Assignment",
						line: 1,
						identifier: { kind: "Identifier", line: 1, name: "x" },
						value: { 
                            kind: "BinaryOperation", 
                            line: 1, 
                            left: { kind: "Value", type: "Number", line: 1, value: "1" },
                            right: { kind: "Value", type: "Number", line: 1, value: "2" },
                            operator: "-"
                        },
					},
				],
			},
		},
        {
			input: "x = 1 * 2;",
			expected: {
				kind: "Program",
				line: 1,
				body: [
					{
						kind: "Assignment",
						line: 1,
						identifier: { kind: "Identifier", line: 1, name: "x" },
						value: { 
                            kind: "BinaryOperation", 
                            line: 1, 
                            left: { kind: "Value", type: "Number", line: 1, value: "1" },
                            right: { kind: "Value", type: "Number", line: 1, value: "2" },
                            operator: "*"
                        },
					},
				],
			},
		},
        {
			input: "x = 1 / 2;",
			expected: {
				kind: "Program",
				line: 1,
				body: [
					{
						kind: "Assignment",
						line: 1,
						identifier: { kind: "Identifier", line: 1, name: "x" },
						value: { 
                            kind: "BinaryOperation", 
                            line: 1, 
                            left: { kind: "Value", type: "Number", line: 1, value: "1" },
                            right: { kind: "Value", type: "Number", line: 1, value: "2" },
                            operator: "/"
                        },
					},
				],
			},
		},
        {
			input: "x = 1 + 2 / 3;",
			expected: {
				kind: "Program",
				line: 1,
				body: [
					{
						kind: "Assignment",
						line: 1,
						identifier: { kind: "Identifier", line: 1, name: "x" },
						value: { 
                            kind: "BinaryOperation", 
                            line: 1, 
                            left: { kind: "Value", type: "Number", line: 1, value: "1" },
                            right: { 
                                kind: "BinaryOperation", 
                                line: 1, 
                                left: { kind: "Value", type: "Number", line: 1, value: "2" },
                                right: { kind: "Value", type: "Number", line: 1, value: "3" },
                                operator: "/"
                            },
                            operator: "+"
                        },
					},
				],
			},
		},
        {
			input: "x = 1 EQUAL 2;",
			expected: {
				kind: "Program",
				line: 1,
				body: [
					{
						kind: "Assignment",
						line: 1,
						identifier: { kind: "Identifier", line: 1, name: "x" },
						value: { 
                            kind: "BinaryOperation", 
                            line: 1, 
                            left: { kind: "Value", type: "Number", line: 1, value: "1" },
                            right: { kind: "Value", type: "Number", line: 1, value: "2" },
                            operator: "EQUAL"
                        },
					},
				],
			},
		},
        {
			input: "x = 1 NOT EQUAL 2;",
			expected: {
				kind: "Program",
				line: 1,
				body: [
					{
						kind: "Assignment",
						line: 1,
						identifier: { kind: "Identifier", line: 1, name: "x" },
						value: { 
                            kind: "BinaryOperation", 
                            line: 1, 
                            left: { kind: "Value", type: "Number", line: 1, value: "1" },
                            right: { kind: "Value", type: "Number", line: 1, value: "2" },
                            operator: "NOT EQUAL"
                        },
					},
				],
			},
		},
        {
			input: "x = 1 GREATER 2;",
			expected: {
				kind: "Program",
				line: 1,
				body: [
					{
						kind: "Assignment",
						line: 1,
						identifier: { kind: "Identifier", line: 1, name: "x" },
						value: { 
                            kind: "BinaryOperation", 
                            line: 1, 
                            left: { kind: "Value", type: "Number", line: 1, value: "1" },
                            right: { kind: "Value", type: "Number", line: 1, value: "2" },
                            operator: "GREATER"
                        },
					},
				],
			},
		},
        {
			input: "x = 1 LESS 2;",
			expected: {
				kind: "Program",
				line: 1,
				body: [
					{
						kind: "Assignment",
						line: 1,
						identifier: { kind: "Identifier", line: 1, name: "x" },
						value: { 
                            kind: "BinaryOperation", 
                            line: 1, 
                            left: { kind: "Value", type: "Number", line: 1, value: "1" },
                            right: { kind: "Value", type: "Number", line: 1, value: "2" },
                            operator: "LESS"
                        },
					},
				],
			},
		},
        {
			input: "x = (1 GREATER 2) OR (1 LESS 2);",
			expected: {
				kind: "Program",
				line: 1,
				body: [
					{
						kind: "Assignment",
						line: 1,
						identifier: { kind: "Identifier", line: 1, name: "x" },
						value: { 
                            kind: "BinaryOperation", 
                            line: 1, 
                            left: { 
                                kind: "BinaryOperation", 
                                line: 1, 
                                left: { kind: "Value", type: "Number", line: 1, value: "1" },
                                right: { kind: "Value", type: "Number", line: 1, value: "2" },
                                operator: "GREATER"
                            },
                            right: { 
                                kind: "BinaryOperation", 
                                line: 1, 
                                left: { kind: "Value", type: "Number", line: 1, value: "1" },
                                right: { kind: "Value", type: "Number", line: 1, value: "2" },
                                operator: "LESS"
                            },
                            operator: "OR"
                        },
					},
				],
			},
		},
        {
			input: "x = (1 GREATER 2) AND (1 LESS 2)",
			expected: {
				kind: "Program",
				line: 1,
				body: [
					{
						kind: "Assignment",
						line: 1,
						identifier: { kind: "Identifier", line: 1, name: "x" },
						value: { 
                            kind: "BinaryOperation", 
                            line: 1, 
                            left: { 
                                kind: "BinaryOperation", 
                                line: 1, 
                                left: { kind: "Value", type: "Number", line: 1, value: "1" },
                                right: { kind: "Value", type: "Number", line: 1, value: "2" },
                                operator: "GREATER"
                            },
                            right: { 
                                kind: "BinaryOperation", 
                                line: 1, 
                                left: { kind: "Value", type: "Number", line: 1, value: "1" },
                                right: { kind: "Value", type: "Number", line: 1, value: "2" },
                                operator: "LESS"
                            },
                            operator: "AND"
                        },
					},
				],
			},
		},

    ];

    testCases.forEach((testCase) => {
        const input = testCase.input;
        const expected = testCase.expected;
        
        const chars = new CharStream(input);
        const lexer = new SmartSyncLexer(chars);
        lexer.removeErrorListeners();
        lexer.addErrorListener(new ThrowingErrorListener());

        const tokens = new CommonTokenStream(lexer);
        const parser = new SmartSyncParser(tokens);

        parser._errHandler = new CustomBailErrorStrategy();

        const astVisitor = new AstVisitor();

        const cst = parser.program();

        const ast = astVisitor.visitProgram(cst);

        const astJson = JSON.stringify(ast);

        assertEquals(astJson, JSON.stringify(expected));
    });
});