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
			input: "x = (1 + 2) / 3;",
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
                                left: { kind : "Value", type: "Number", line: 1, value: "1" }, 
                                right: { kind: "Value", type: "Number", line: 1, value: "2" },
                                operator: "+"
                            },
                            right: { kind: "Value", type: "Number", line: 1, value: "3" },
                            operator: "/"
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
			input: "x = 1 GREATER 2 OR 1 LESS 2;",
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
			input: "x = (1 GREATER 2) AND (1 LESS 2);",
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

Deno.test("AST Builder - Integration test - Arrays", () => {
    const testCases = [
        {
            input: "Number x[] = [1, 2, 3];",
            expected: {
                kind: "Program",
                line: 1,
                body: [
                    {
                        kind: "ArrayDeclaration",
                        line: 1,
                        type: "Number",
                        identifier: { kind: "Identifier", line: 1, type: "Number", name: "x" },
                        value: [
                            { kind: "Value", type: "Number", line: 1, value: "1" },
                            { kind: "Value", type: "Number", line: 1, value: "2" },
                            { kind: "Value", type: "Number", line: 1, value: "3" },
                        ]
                    },
                ],
            },
        },
        {
            input: 'Text x[] = ["Hey", "how", "are", "you", "!"];',
            expected: {
                kind: "Program",
                line: 1,
                body: [
                    {
                        kind: "ArrayDeclaration",
                        line: 1,
                        type: "Text",
                        identifier: { kind: "Identifier", line: 1, type: "Text", name: "x" },
                        value: [
                            { kind: "Value", type: "Text", line: 1, value: '"Hey"' },
                            { kind: "Value", type: "Text", line: 1, value: '"how"' },
                            { kind: "Value", type: "Text", line: 1, value: '"are"' },
                            { kind: "Value", type: "Text", line: 1, value: '"you"' },
                            { kind: "Value", type: "Text", line: 1, value: '"!"' },
                        ]
                    },
                ],
            },
        },
        {
            input: "Boolean x[] = [TRUE, FALSE, TRUE];",
            expected: {
                kind: "Program",
                line: 1,
                body: [
                    {
                        kind: "ArrayDeclaration",
                        line: 1,
                        type: "Boolean",
                        identifier: { kind: "Identifier", line: 1, type: "Boolean", name: "x" },
                        value: [
                            { kind: "Value", type: "Boolean", line: 1, value: "TRUE" },
                            { kind: "Value", type: "Boolean", line: 1, value: "FALSE" },
                            { kind: "Value", type: "Boolean", line: 1, value: "TRUE" },
                        ]
                    },
                ],
            },
        },
        {
            input: "Number x[] = [];",
            expected: {
                kind: "Program",
                line: 1,
                body: [
                    {
                        kind: "ArrayDeclaration",
                        line: 1,
                        type: "Number",
                        identifier: { kind: "Identifier", line: 1, type: "Number", name: "x" },
                        value: []
                    },
                ],
            },
        },
        {
            input: "x[] = [];",
            expected: {
                kind: "Program",
                line: 1,
                body: [
                    {
                        kind: "Array",
                        line: 1,
                        identifier: { kind: "Identifier", line: 1, name: "x" },
                        value: []
                    },
                ],
            },
        },
        {
            input: "x[] = [1,2,3];",
            expected: {
                kind: "Program",
                line: 1,
                body: [
                    {
                        kind: "Array",
                        line: 1,
                        identifier: { kind: "Identifier", line: 1, name: "x" },
                        value: [
                            { kind: "Value", type: "Number", line: 1, value: "1" },
                            { kind: "Value", type: "Number", line: 1, value: "2" },
                            { kind: "Value", type: "Number", line: 1, value: "3" },
                        ]
                    },
                ],
            },
        },
        {
            input: "y = x[] SIZE;",
            expected: {
                kind: "Program",
                line: 1,
                body: [
                    {
                        kind: "Assignment",
                        line: 1,
                        identifier: { kind: "Identifier", line: 1, name: "y" },
                        value: {
                            kind: "Size",
                            line: 1,
                            identifier: { kind: "Identifier", line: 1, name: "x" }
                        }
                    },
                ],
            },
        },
        {
            input: "x[] PULL;",
            expected: {
                kind: "Program",
                line: 1,
                body: [
                    {
                        kind: "Pull",
                        line: 1,
                        identifier: { kind: "Identifier", line: 1, name: "x" },

                    },
                ],
            },
        },
        {
            input: "x[] PUSH 10;",
            expected: {
                kind: "Program",
                line: 1,
                body: [
                    {
                        kind: "Push",
                        line: 1,
                        identifier: { kind: "Identifier", line: 1, name: "x" },
                        value: { kind: "Value", type: "Number", line: 1, value: "10" }
                    },
                ],
            },
        },
        {
            input: "x[0] = 10;",
            expected: {
                kind: "Program",
                line: 1,
                body: [
                    {
                        kind: "IndexAssignment",
                        line: 1,
                        identifier: { kind: "Identifier", line: 1, name: "x" },
                        index: { kind: "Value", type: "Number", line: 1, value: "0" },
                        value: { kind: "Value", type: "Number", line: 1, value: "10" }
                    },
                ],
            },
        },
        {
            input: "y = x[0];",
            expected: {
                kind: "Program",
                line: 1,
                body: [
                    {
                        kind: "Assignment",
                        line: 1,
                        identifier: { kind: "Identifier", line: 1, name: "y" },
                        value: {
                            kind: "IndexOf",
                            line: 1,
                            identifier: { kind: "Identifier", line: 1, name: "x" },
                            index: { kind: "Value", type: "Number", line: 1, value: "0" }
                        }
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

Deno.test("AST Builder - Integration test - Invalid Arrays", () => {
    const invalidTestCases = [
        {
            input: "Number x = [1, 2, 3];",
            expectedError: "Parser Error: mismatched character '[' at line 1:11",
        },
        {
            input: "Number x[] = [1, 2, 3",
            expectedError: "Parser Error: missing or wrongly placed ';' at line 1:20",
        },
        {
            input: "Number x[] = 1, 2, 3;",
            expectedError: "Parser Error: mismatched character '1' at line 1:13",
        },
        {
            input: "x SIZE;",
            expectedError: "Parser Error: mismatched character 'SIZE' at line 1:5",
        },
        {
            input: "x PULL;",
            expectedError: "Parser Error: mismatched character 'PULL' at line 1:5",
        },
        {
            input: "x[] PULL 1;",
            expectedError: "Parser Error: missing or wrongly placed '1' at line 1:9",
        },
        {
            input: "x PUSH 1;",
            expectedError: "Parser Error: mismatched character 'PUSH' at line 1:5",
        },
        {
            input: "x[] PUSH;",
            expectedError: "Parser Error: mismatched character ';' at line 1:8",
        },
        {
            input: "x[] = 1;",
            expectedError: "Parser Error: mismatched character '1' at line 1:6",
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

Deno.test("AST Builder - Integration test - IF statement", () => {
    const testCases = [
        {
            input: "IF 1 EQUAL 1 { Number x = 1; }",
            expected: {
                kind: "Program",
                line: 1,
                body: [
                    {
                        kind: "IfStm",
                        line: 1,
                        condition: {
                            kind: "BinaryOperation",
                            line: 1,
                            left: { kind: "Value", type: "Number", line: 1, value: "1" },
                            right: { kind: "Value", type: "Number", line: 1, value: "1" },
                            operator: "EQUAL"
                        },
                        body: [
                            {
                                kind: "Declaration",
                                line: 1,
                                type: "Number",
                                identifier: { kind: "Identifier", line: 1, type: "Number", name: "x" },
                                value: { kind: "Value", type: "Number", line: 1, value: "1" }
                            }
                        ]
                    },
                ],
            },
        },
        {
            input: "IF 1 EQUAL 1 { Number x = 1; } ELSE { Number y = 1; }",
            expected: {
                kind: "Program",
                line: 1,
                body: [
                    {
                        kind: "IfStm",
                        line: 1,
                        condition: {
                            kind: "BinaryOperation",
                            line: 1,
                            left: { kind: "Value", type: "Number", line: 1, value: "1" },
                            right: { kind: "Value", type: "Number", line: 1, value: "1" },
                            operator: "EQUAL"
                        },
                        body: [
                            {
                                kind: "Declaration",
                                line: 1,
                                type: "Number",
                                identifier: { kind: "Identifier", line: 1, type: "Number", name: "x" },
                                value: { kind: "Value", type: "Number", line: 1, value: "1" }
                            }
                        ],
                        else: {
                            kind: "ElseStm",
                            line: 1,
                            body: [
                                {
                                    kind: "Declaration",
                                    line: 1,
                                    type: "Number",
                                    identifier: { kind: "Identifier", line: 1, type: "Number", name: "y" },
                                    value: { kind: "Value", type: "Number", line: 1, value: "1" }
                                }
                            ]
                        }
                    },
                ],
            },
        },
        {
            input: "IF 1 EQUAL 1 { Number x = 1; } ELSE IF 1 EQUAL 2 { Number y = 1; }",
            expected: {
                kind: "Program",
                line: 1,
                body: [
                    {
                        kind: "IfStm",
                        line: 1,
                        condition: {
                            kind: "BinaryOperation",
                            line: 1,
                            left: { kind: "Value", type: "Number", line: 1, value: "1" },
                            right: { kind: "Value", type: "Number", line: 1, value: "1" },
                            operator: "EQUAL"
                        },
                        body: [
                            {
                                kind: "Declaration",
                                line: 1,
                                type: "Number",
                                identifier: { kind: "Identifier", line: 1, type: "Number", name: "x" },
                                value: { kind: "Value", type: "Number", line: 1, value: "1" }
                            }
                        ],
                        else: {
                            kind: "IfStm",
                            line: 1,
                            condition: {
                                kind: "BinaryOperation",
                                line: 1,
                                left: { kind: "Value", type: "Number", line: 1, value: "1" },
                                right: { kind: "Value", type: "Number", line: 1, value: "2" },
                                operator: "EQUAL"
                            },
                            body: [
                                {
                                    kind: "Declaration",
                                    line: 1,
                                    type: "Number",
                                    identifier: { kind: "Identifier", line: 1, type: "Number", name: "y" },
                                    value: { kind: "Value", type: "Number", line: 1, value: "1" }
                                }
                            ]
                        }
                    },
                ],
            },
        },
        {
            input: "IF 1 EQUAL 1 { Number x = 1; } ELSE IF 1 EQUAL 2 { Number y = 1; } ELSE { Number z = 1; }",
            expected: {
                kind: "Program",
                line: 1,
                body: [
                    {
                        kind: "IfStm",
                        line: 1,
                        condition: {
                            kind: "BinaryOperation",
                            line: 1,
                            left: { kind: "Value", type: "Number", line: 1, value: "1" },
                            right: { kind: "Value", type: "Number", line: 1, value: "1" },
                            operator: "EQUAL"
                        },
                        body: [
                            {
                                kind: "Declaration",
                                line: 1,
                                type: "Number",
                                identifier: { kind: "Identifier", line: 1, type: "Number", name: "x" },
                                value: { kind: "Value", type: "Number", line: 1, value: "1" }
                            }
                        ],
                        else: {
                            kind: "IfStm",
                            line: 1,
                            condition: {
                                kind: "BinaryOperation",
                                line: 1,
                                left: { kind: "Value", type: "Number", line: 1, value: "1" },
                                right: { kind: "Value", type: "Number", line: 1, value: "2" },
                                operator: "EQUAL"
                            },
                            body: [
                                {
                                    kind: "Declaration",
                                    line: 1,
                                    type: "Number",
                                    identifier: { kind: "Identifier", line: 1, type: "Number", name: "y" },
                                    value: { kind: "Value", type: "Number", line: 1, value: "1" }
                                }
                            ],
                            else: {
                                kind: "ElseStm",
                                line: 1,
                                body: [
                                    {
                                        kind: "Declaration",
                                        line: 1,
                                        type: "Number",
                                        identifier: { kind: "Identifier", line: 1, type: "Number", name: "z" },
                                        value: { kind: "Value", type: "Number", line: 1, value: "1" }
                                    }
                                ]
                            }
                        }
                    },
                ],
            },
        },
        {
            input: "IF 1 EQUAL 1 { IF 1 EQUAL 1 { Number x = 1; } }",
            expected: {
                kind: "Program",
                line: 1,
                body: [
                    {
                        kind: "IfStm",
                        line: 1,
                        condition: {
                            kind: "BinaryOperation",
                            line: 1,
                            left: { kind: "Value", type: "Number", line: 1, value: "1" },
                            right: { kind: "Value", type: "Number", line: 1, value: "1" },
                            operator: "EQUAL"
                        },
                        body: [
                            {
                                kind: "IfStm",
                                line: 1,
                                condition: {
                                    kind: "BinaryOperation",
                                    line: 1,
                                    left: { kind: "Value", type: "Number", line: 1, value: "1" },
                                    right: { kind: "Value", type: "Number", line: 1, value: "1" },
                                    operator: "EQUAL"
                                },
                                body: [
                                    {
                                        kind: "Declaration",
                                        line: 1,
                                        type: "Number",
                                        identifier: { kind: "Identifier", line: 1, type: "Number", name: "x" },
                                        value: { kind: "Value", type: "Number", line: 1, value: "1" }
                                    }
                                ]
                            },
                        ]
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

Deno.test("AST Builder - Integration test - Invalid IF statement", () => {
    const invalidTestCases = [
        {
            input: "IF 1 EQUAL 1 { Number x = 1; } ELSE IF 1 EQUAL 2 { Number y = 1; } ELSE;",
            expectedError: "Parser Error: mismatched character ';' at line 1:71",
        },
        {
            input: "IF 1 EQUAL 1 Number x = 1; ELSE IF 1 EQUAL 2 { Number y = 1; } ELSE;",
            expectedError: "Parser Error: missing or wrongly placed 'Number' at line 1:18",
        },
        {
            input: "IF { Number x = 1; };",
            expectedError: "Parser Error: mismatched character '{' at line 1:3",
        },
        {
            input: "ELSE { Number y = 1; };",
            expectedError: "Parser Error: mismatched character 'ELSE' at line 1:3",
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

Deno.test("AST Builder - Integration test - WHILE statement", () => {});

Deno.test("AST Builder - Integration test - Invalid WHILE statement", () => {});

Deno.test("AST Builder - Integration test - OUTPUT", () => {});

Deno.test("AST Builder - Integration test - Function", () => {});