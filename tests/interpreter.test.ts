import { assertEquals, assertThrows, assert } from "https://deno.land/std@0.224.0/assert/mod.ts";
import SymbolTable from "../Contextual Analysis/SymbolTable.ts";
import {
	Program,
	Declaration,
	Expression,
	Line,
	Function,
	BinaryOperation,
	ArrayDeclaration,
	Assignment,
	Identifier,
	Array,
	Division,
  Equal,
} from "../Syntax Analysis/AST.ts";
import { assertSpyCalls, spy } from "https://deno.land/std@0.224.0/testing/mock.ts";
import TypeChecker from "../Contextual Analysis/TypeChecker.ts";
import Interpreter from "../Contextual Analysis/Interpreter.ts";
import { Value } from "../Syntax Analysis/AST.ts";
import { Addition } from "../Syntax Analysis/AST.ts";
import { Subtraction } from "../Syntax Analysis/AST.ts";
import { Multiplication } from "../Syntax Analysis/AST.ts";
import { NotEqual } from "../Syntax Analysis/AST.ts";
import { And } from "../Syntax Analysis/AST.ts";
import { Or } from "../Syntax Analysis/AST.ts";
import { Greater } from "../Syntax Analysis/AST.ts";
import { Less } from "../Syntax Analysis/AST.ts";

// Interpreter correctly interprets a declaration
Deno.test("Interpreter - Integration test - Declaration", () => {
	const program: Program = {
		kind: "Program",
		line: 1,
		body: [
			{
				kind: "Declaration",
				line: 1,
				type: "Number",
				identifier: {
					kind: "Identifier",
					line: 1,
					type: "Number",
					name: "x",
				},
				value: {
					kind: "Value",
					line: 1,
					type: "Number",
					value: 1,
				},
			} as Line,
		],
	};

	const symbolTable = new SymbolTable();
	symbolTable.BuildSymbolTable(program);
	const typeChecker = new TypeChecker(symbolTable);
	const dast = typeChecker.visitProgram(program);
	const interpreter = new Interpreter(symbolTable);
	interpreter.visitProgram(dast);

	assertEquals(interpreter.environment.get("x"), 1);

	// if symbol table is empty, interpreter should throw an error
	const interpreter2 = new Interpreter(new SymbolTable());
	assertThrows(() => interpreter2.visitProgram(dast), Error, "Symbol x not found.");
});

// Interpreter correctly interprets an array declaration
Deno.test("Interpreter - Integration test - ArrayDeclaration", () => {
	const program: Program = {
		kind: "Program",
		line: 1,
		body: [
			{
				kind: "ArrayDeclaration",
				line: 1,
				type: "Number",
				identifier: {
					kind: "Identifier",
					line: 1,
					type: "Number",
					name: "x",
				},
				value: [
					{
						kind: "Value",
						line: 1,
						type: "Number",
						value: 1,
					},
					{
						kind: "Value",
						line: 1,
						type: "Number",
						value: 2,
					},
					{
						kind: "Value",
						line: 1,
						type: "Number",
						value: 3,
					},
				],
			} as Line,
		],
	};

	const symbolTable = new SymbolTable();
	symbolTable.BuildSymbolTable(program);
	const typeChecker = new TypeChecker(symbolTable);
	const dast = typeChecker.visitProgram(program);
	const interpreter = new Interpreter(symbolTable);
	interpreter.visitProgram(dast);

	assertEquals(interpreter.environment.get("x"), [1, 2, 3]);

	// if symbol table is empty, interpreter should throw an error
	const interpreter2 = new Interpreter(new SymbolTable());
	assertThrows(() => interpreter2.visitProgram(dast), Error, "Symbol x not found.");
});

// Interpreter correctly interprets an if statement
Deno.test("Interpreter - Integration test - IfStm", () => {
	const program: Program = {
		kind: "Program",
		line: 1,
		body: [
			{
				kind: "IfStm",
				line: 1,
				condition: {
					kind: "Value",
					line: 1,
					type: "Boolean",
					value: "TRUE",
				},
				body: [
					{
						kind: "Declaration",
						line: 1,
						type: "Number",
						identifier: {
							kind: "Identifier",
							line: 1,
							type: "Number",
							name: "x",
						},
						value: {
							kind: "Value",
							line: 1,
							type: "Number",
							value: 1,
						},
					} as Line,
				],
			} as Line,
		],
	};

	const symbolTable = new SymbolTable();
	symbolTable.BuildSymbolTable(program);
	const typeChecker = new TypeChecker(symbolTable);
	const dast = typeChecker.visitProgram(program);
	const interpreter = new Interpreter(symbolTable);

	const spyExpression = spy(interpreter, "visitExpression");
	let spyDeclaration = spy(interpreter, "visitDeclaration");

	interpreter.visitProgram(dast);

	assertSpyCalls(spyExpression, 2); // 1 for the condition and 1 for the value of the declaration
	assertSpyCalls(spyDeclaration, 1);

	// if condition is false, interpreter should interpret the else block
	const program2: Program = {
		kind: "Program",
		line: 1,
		body: [
			{
				kind: "IfStm",
				line: 1,
				condition: {
					kind: "Value",
					line: 1,
					type: "Boolean",
					value: "FALSE",
				},
				body: [
					{
						kind: "Declaration",
						line: 1,
						type: "Number",
						identifier: {
							kind: "Identifier",
							line: 1,
							type: "Number",
							name: "x",
						},
						value: {
							kind: "Value",
							line: 1,
							type: "Number",
							value: 1,
						},
					} as Line,
				],
				else: {
					kind: "elseStm",
					line: 1,
					body: [
						{
							kind: "Declaration",
							line: 1,
							type: "Number",
							identifier: {
								kind: "Identifier",
								line: 1,
								type: "Number",
								name: "y",
							},
							value: {
								kind: "Value",
								line: 1,
								type: "Number",
								value: 2,
							},
						},
					],
				},
			} as Line,
		],
	};

	const symbolTable2 = new SymbolTable();
	symbolTable2.BuildSymbolTable(program2);
	const typeChecker2 = new TypeChecker(symbolTable2);
	const dast2 = typeChecker2.visitProgram(program2);
	const interpreter2 = new Interpreter(symbolTable2);
	spyDeclaration = spy(interpreter2, "visitDeclaration");
	interpreter2.visitProgram(dast2);

	assertSpyCalls(spyDeclaration, 1);
	assertEquals(interpreter2.environment.get("y"), 2);

	// if else is an else if statement
	const program3: Program = {
		kind: "Program",
		line: 1,
		body: [
			{
				kind: "IfStm",
				line: 1,
				condition: {
					kind: "Value",
					line: 1,
					type: "Boolean",
					value: "FALSE",
				},
				body: [
					{
						kind: "Declaration",
						line: 1,
						type: "Number",
						identifier: {
							kind: "Identifier",
							line: 1,
							type: "Number",
							name: "x",
						},
						value: {
							kind: "Value",
							line: 1,
							type: "Number",
							value: 1,
						},
					} as Line,
				],
				else: {
					kind: "IfStm",
					line: 1,
					condition: {
						kind: "Value",
						line: 1,
						type: "Boolean",
						value: "TRUE",
					},
					body: [
						{
							kind: "Declaration",
							line: 1,
							type: "Number",
							identifier: {
								kind: "Identifier",
								line: 1,
								type: "Number",
								name: "y",
							},
							value: {
								kind: "Value",
								line: 1,
								type: "Number",
								value: 2,
							},
						},
					],
				},
			} as Line,
		],
	};

	const symbolTable3 = new SymbolTable();
	symbolTable3.BuildSymbolTable(program3);
	const typeChecker3 = new TypeChecker(symbolTable3);
	const dast3 = typeChecker3.visitProgram(program3);
	const interpreter3 = new Interpreter(symbolTable3);
	interpreter3.visitProgram(dast3);

	assertEquals(interpreter3.environment.get("y"), 2);

	// nested if statements
	const program4: Program = {
		kind: "Program",
		line: 1,
		body: [
			{
				kind: "IfStm",
				line: 1,
				condition: {
					kind: "Value",
					line: 1,
					type: "Boolean",
					value: "TRUE",
				},
				body: [
					{
						kind: "IfStm",
						line: 1,
						condition: {
							kind: "Value",
							line: 1,
							type: "Boolean",
							value: "TRUE",
						},
						body: [
							{
								kind: "Declaration",
								line: 1,
								type: "Number",
								identifier: {
									kind: "Identifier",
									line: 1,
									type: "Number",
									name: "x",
								},
								value: {
									kind: "Value",
									line: 1,
									type: "Number",
									value: 1,
								},
							},
						],
					},
				],
			} as Line,
		],
	};

	const symbolTable4 = new SymbolTable();
	symbolTable4.BuildSymbolTable(program4);
	const typeChecker4 = new TypeChecker(symbolTable4);
	const dast4 = typeChecker4.visitProgram(program4);
	const interpreter4 = new Interpreter(symbolTable4);
	interpreter4.visitProgram(dast4);

	assertEquals(interpreter4.environment.get("x"), 1);
});

// Interpreter correctly interprets a while loop
Deno.test("Interpreter - Integration test - WhileStm", () => {
	const program: Program = {
		kind: "Program",
		line: 1,
		body: [
			{
				kind: "Declaration",
				line: 1,
				type: "Number",
				identifier: {
					kind: "Identifier",
					line: 1,
					type: "Number",
					name: "x",
				},
				value: {
					kind: "Value",
					line: 1,
					type: "Number",
					value: 1,
				},
			} as Line,
			{
				kind: "WhileStm",
				line: 1,
				condition: {
					kind: "BinaryOperation",
					line: 1,
					left: {
						kind: "Identifier",
						line: 1,
						type: "Number",
						name: "x",
					},
					right: {
						kind: "Value",
						line: 1,
						type: "Number",
						value: 10,
					},
					operator: "LESS",
				},
				body: [
					{
						kind: "Assignment",
						line: 1,
						identifier: {
							kind: "Identifier",
							line: 1,
							type: "Number",
							name: "x",
						},
						value: {
							kind: "BinaryOperation",
							line: 1,
							left: {
								kind: "Identifier",
								line: 1,
								type: "Number",
								name: "x",
							},
							right: {
								kind: "Value",
								line: 1,
								type: "Number",
								value: 1,
							},
							operator: "+",
						},
					} as Line,
				],
			} as Line,
		],
	};

	const symbolTable = new SymbolTable();
	symbolTable.BuildSymbolTable(program);
	const typeChecker = new TypeChecker(symbolTable);
	const dast = typeChecker.visitProgram(program);
	const interpreter = new Interpreter(symbolTable);

	const spyAssignment = spy(interpreter, "visitAssignment");

	interpreter.visitProgram(dast);

	assertSpyCalls(spyAssignment, 9); // the while loop should run 9 times
	assert(interpreter.environment.get("x") === 10);

	// if condition is false, interpreter should not interpret the body
	const program2: Program = {
		kind: "Program",
		line: 1,
		body: [
			{
				kind: "WhileStm",
				line: 1,
				condition: {
					kind: "Value",
					line: 1,
					type: "Boolean",
					value: "FALSE",
				},
				body: [
					{
						kind: "Declaration",
						line: 1,
						type: "Number",
						identifier: {
							kind: "Identifier",
							line: 1,
							type: "Number",
							name: "x",
						},
						value: {
							kind: "Value",
							line: 1,
							type: "Number",
							value: 1,
						},
					} as Line,
				],
			} as Line,
		],
	};

	const symbolTable2 = new SymbolTable();
	symbolTable2.BuildSymbolTable(program2);
	const typeChecker2 = new TypeChecker(symbolTable2);
	const dast2 = typeChecker2.visitProgram(program2);
	const interpreter2 = new Interpreter(symbolTable2);
	interpreter2.visitProgram(dast2);

	assert(interpreter2.environment.get("x") === undefined); // x should not be declared
});

// Interpreter correctly interprets an index of an array
Deno.test("Interpreter - Integration test - IndexAssignment", () => {
	const program: Program = {
		kind: "Program",
		line: 1,
		body: [
			{
				kind: "ArrayDeclaration",
				line: 1,
				type: "Number",
				identifier: {
					kind: "Identifier",
					line: 1,
					type: "Number",
					name: "x",
				},
				value: [
					{
						kind: "Value",
						line: 1,
						type: "Number",
						value: 1,
					},
					{
						kind: "Value",
						line: 1,
						type: "Number",
						value: 2,
					},
					{
						kind: "Value",
						line: 1,
						type: "Number",
						value: 3,
					},
				],
			} as Line,
			{
				kind: "Declaration",
				line: 1,
				type: "Number",
				identifier: {
					kind: "Identifier",
					line: 1,
					type: "Number",
					name: "y",
				},
				value: {
					kind: "IndexOf",
					line: 1,
					identifier: {
						kind: "Identifier",
						line: 1,
						type: "Number",
						name: "x",
					},
					index: {
						kind: "Value",
						line: 1,
						type: "Number",
						value: 1,
					},
				},
			} as Line,
		],
	};

	const symbolTable = new SymbolTable();
	symbolTable.BuildSymbolTable(program);
	const typeChecker = new TypeChecker(symbolTable);
	const dast = typeChecker.visitProgram(program);
	const interpreter = new Interpreter(symbolTable);

	interpreter.visitProgram(dast);

	assertEquals(interpreter.environment.get("y"), 2);

	// if index is out of bounds, interpreter should throw an error
	const program2: Program = {
		kind: "Program",
		line: 1,
		body: [
			{
				kind: "ArrayDeclaration",
				line: 1,
				type: "Number",
				identifier: {
					kind: "Identifier",
					line: 1,
					type: "Number",
					name: "x",
				},
				value: [
					{
						kind: "Value",
						line: 1,
						type: "Number",
						value: 1,
					},
					{
						kind: "Value",
						line: 1,
						type: "Number",
						value: 2,
					},
					{
						kind: "Value",
						line: 1,
						type: "Number",
						value: 3,
					},
				],
			} as Line,
			{
				kind: "Declaration",
				line: 1,
				type: "Number",
				identifier: {
					kind: "Identifier",
					line: 1,
					type: "Number",
					name: "y",
				},
				value: {
					kind: "IndexOf",
					line: 1,
					identifier: {
						kind: "Identifier",
						line: 1,
						type: "Number",
						name: "x",
					},
					index: {
						kind: "Value",
						line: 1,
						type: "Number",
						value: 3,
					},
				},
			} as Line,
		],
	};

	const symbolTable2 = new SymbolTable();
	symbolTable2.BuildSymbolTable(program2);
	const typeChecker2 = new TypeChecker(symbolTable2);
	const dast2 = typeChecker2.visitProgram(program2);
	const interpreter2 = new Interpreter(symbolTable2);

	assertThrows(
		() => interpreter2.visitProgram(dast2),
		Error,
		"Index out of bounds. Expected index to be between 0 and 2, but got 3."
	);
});

// Interpreter correctly interprets Index Assignment
Deno.test("Interpreter - Integration test - IndexAssignment", () => {
	const program: Program = {
		kind: "Program",
		line: 1,
		body: [
			{
				kind: "ArrayDeclaration",
				line: 1,
				type: "Number",
				identifier: {
					kind: "Identifier",
					line: 1,
					type: "Number",
					name: "x",
				},
				value: [
					{
						kind: "Value",
						line: 1,
						type: "Number",
						value: 1,
					},
					{
						kind: "Value",
						line: 1,
						type: "Number",
						value: 2,
					},
					{
						kind: "Value",
						line: 1,
						type: "Number",
						value: 3,
					},
				],
			} as Line,
			{
				kind: "IndexAssignment",
				line: 1,
				identifier: {
					kind: "Identifier",
					line: 1,
					type: "Number",
					name: "x",
				},
				index: {
					kind: "Value",
					line: 1,
					type: "Number",
					value: 1,
				},
				value: {
					kind: "Value",
					line: 1,
					type: "Number",
					value: 10,
				},
			} as Line,
		],
	};

	const symbolTable = new SymbolTable();
	symbolTable.BuildSymbolTable(program);
	const typeChecker = new TypeChecker(symbolTable);
	const dast = typeChecker.visitProgram(program);
	const interpreter = new Interpreter(symbolTable);

	interpreter.visitProgram(dast);

	assertEquals(interpreter.environment.get("x"), [1, 10, 3]);

	// if index is out of bounds, interpreter should throw an error
	const program2: Program = {
		kind: "Program",
		line: 1,
		body: [
			{
				kind: "ArrayDeclaration",
				line: 1,
				type: "Number",
				identifier: {
					kind: "Identifier",
					line: 1,
					type: "Number",
					name: "x",
				},
				value: [
					{
						kind: "Value",
						line: 1,
						type: "Number",
						value: 1,
					},
					{
						kind: "Value",
						line: 1,
						type: "Number",
						value: 2,
					},
					{
						kind: "Value",
						line: 1,
						type: "Number",
						value: 3,
					},
				],
			} as Line,
			{
				kind: "IndexAssignment",
				line: 1,
				identifier: {
					kind: "Identifier",
					line: 1,
					type: "Number",
					name: "x",
				},
				index: {
					kind: "Value",
					line: 1,
					type: "Number",
					value: 3,
				},
				value: {
					kind: "Value",
					line: 1,
					type: "Number",
					value: 10,
				},
			} as Line,
		],
	};

	const symbolTable2 = new SymbolTable();
	symbolTable2.BuildSymbolTable(program2);
	const typeChecker2 = new TypeChecker(symbolTable2);
	const dast2 = typeChecker2.visitProgram(program2);
	const interpreter2 = new Interpreter(symbolTable2);

	assertThrows(
		() => interpreter2.visitProgram(dast2),
		Error,
		"Index out of bounds. Expected index to be between 0 and 2, but got 3."
	);
});

// Interpreter correctly interprets push
Deno.test("Interpreter - Integration test - Push", () => {
	const program: Program = {
		kind: "Program",
		line: 1,
		body: [
			{
				kind: "ArrayDeclaration",
				line: 1,
				type: "Number",
				identifier: {
					kind: "Identifier",
					line: 1,
					type: "Number",
					name: "x",
				},
				value: [
					{
						kind: "Value",
						line: 1,
						type: "Number",
						value: 1,
					},
					{
						kind: "Value",
						line: 1,
						type: "Number",
						value: 2,
					},
					{
						kind: "Value",
						line: 1,
						type: "Number",
						value: 3,
					},
				],
			} as Line,
			{
				kind: "Push",
				line: 1,
				identifier: {
					kind: "Identifier",
					line: 1,
					type: "Number",
					name: "x",
				},
				value: {
					kind: "Value",
					line: 1,
					type: "Number",
					value: 4,
				},
			} as Line,
		],
	};

	const symbolTable = new SymbolTable();
	symbolTable.BuildSymbolTable(program);
	const typeChecker = new TypeChecker(symbolTable);
	const dast = typeChecker.visitProgram(program);
	const interpreter = new Interpreter(symbolTable);

	interpreter.visitProgram(dast);

	assertEquals(interpreter.environment.get("x"), [1, 2, 3, 4]);
});

// Interpreter correctly interprets pull
Deno.test("Interpreter - Integration test - Pull", () => {
	const program: Program = {
		kind: "Program",
		line: 1,
		body: [
			{
				kind: "ArrayDeclaration",
				line: 1,
				type: "Number",
				identifier: {
					kind: "Identifier",
					line: 1,
					type: "Number",
					name: "x",
				},
				value: [
					{
						kind: "Value",
						line: 1,
						type: "Number",
						value: 1,
					},
					{
						kind: "Value",
						line: 1,
						type: "Number",
						value: 2,
					},
					{
						kind: "Value",
						line: 1,
						type: "Number",
						value: 3,
					},
				],
			} as Line,
			{
				kind: "Pull",
				line: 1,
				identifier: {
					kind: "Identifier",
					line: 1,
					type: "Number",
					name: "x",
				},
			} as Line,
		],
	};

	const symbolTable = new SymbolTable();
	symbolTable.BuildSymbolTable(program);
	const typeChecker = new TypeChecker(symbolTable);
	const dast = typeChecker.visitProgram(program);
	const interpreter = new Interpreter(symbolTable);

	interpreter.visitProgram(dast);

	assertEquals(interpreter.environment.get("x"), [1, 2]);
});

// Interpreter correctly interprets Size
Deno.test("Interpreter - Integration test - Size", () => {
	const program: Program = {
		kind: "Program",
		line: 1,
		body: [
			{
				kind: "ArrayDeclaration",
				line: 1,
				type: "Number",
				identifier: {
					kind: "Identifier",
					line: 1,
					type: "Number",
					name: "x",
				},
				value: [
					{
						kind: "Value",
						line: 1,
						type: "Number",
						value: 1,
					},
					{
						kind: "Value",
						line: 1,
						type: "Number",
						value: 2,
					},
					{
						kind: "Value",
						line: 1,
						type: "Number",
						value: 3,
					},
				],
			} as Line,
			{
				kind: "Declaration",
				line: 1,
				type: "Number",
				identifier: {
					kind: "Identifier",
					line: 1,
					type: "Number",
					name: "y",
				},
				value: {
					kind: "Size",
					line: 1,
					identifier: {
						kind: "Identifier",
						line: 1,
						type: "Number",
						name: "x",
					},
				},
			} as Line,
		],
	};

	const symbolTable = new SymbolTable();
	symbolTable.BuildSymbolTable(program);
	const typeChecker = new TypeChecker(symbolTable);
	const dast = typeChecker.visitProgram(program);
	const interpreter = new Interpreter(symbolTable);

	interpreter.visitProgram(dast);

	assertEquals(interpreter.environment.get("y"), 3);
});

// Interpreter correctly interprets Assignments
Deno.test("Interpreter - Integration test - Assignment", () => {
	const program: Program = {
		kind: "Program",
		line: 1,
		body: [
			{
				kind: "Declaration",
				line: 1,
				type: "Number",
				identifier: {
					kind: "Identifier",
					line: 1,
					type: "Number",
					name: "x",
				},
				value: {
					kind: "Value",
					line: 1,
					type: "Number",
					value: 1,
				},
			} as Line,
			{
				kind: "Assignment",
				line: 1,
				identifier: {
					kind: "Identifier",
					line: 1,
					type: "Number",
					name: "x",
				},
				value: {
					kind: "Value",
					line: 1,
					type: "Number",
					value: 2,
				},
			} as Line,
		],
	};

	const symbolTable = new SymbolTable();
	symbolTable.BuildSymbolTable(program);
	const typeChecker = new TypeChecker(symbolTable);
	const dast = typeChecker.visitProgram(program);
	const interpreter = new Interpreter(symbolTable);

	interpreter.visitProgram(dast);

	assertEquals(interpreter.environment.get("x"), 2);
});

// Interpreter correctly interprets Functions
Deno.test("Interpreter - Integration test - Function", () => {
	const program: Program = {
		kind: "Program",
		line: 1,
		body: [
			{
				kind: "Function",
				line: 1,
				type: "Number",
				identifier: {
					kind: "Identifier",
					line: 1,
					type: "Number",
					name: "add",
				},
				parameters: [
					{
						kind: "Identifier",
						line: 1,
						type: "Number",
						name: "a",
					},
					{
						kind: "Identifier",
						line: 1,
						type: "Number",
						name: "b",
					},
				],
				body: [
					{
						kind: "Return",
						line: 1,
						value: {
							kind: "BinaryOperation",
							line: 1,
							left: {
								kind: "Identifier",
								line: 1,
								type: "Number",
								name: "a",
							},
							right: {
								kind: "Identifier",
								line: 1,
								type: "Number",
								name: "b",
							},
							operator: "+",
						},
					} as Line,
				],
			} as Line,
			{
				kind: "Declaration",
				line: 1,
				type: "Number",
				identifier: {
					kind: "Identifier",
					line: 1,
					type: "Number",
					name: "x",
				},
				value: {
					kind: "Function",
					line: 1,
					identifier: {
						kind: "Identifier",
						line: 1,
						name: "add",
					},
					parameters: [
						{
							kind: "Value",
							line: 1,
							type: "Number",
							value: 1,
						},
						{
							kind: "Value",
							line: 1,
							type: "Number",
							value: 2,
						},
					],
				},
			} as Line,
		],
	};

	const symbolTable = new SymbolTable();
	symbolTable.BuildSymbolTable(program);
	const typeChecker = new TypeChecker(symbolTable);
	const dast = typeChecker.visitProgram(program);
	const interpreter = new Interpreter(symbolTable);

	interpreter.visitProgram(dast);

	assertEquals(interpreter.environment.get("x"), 3);
});

// Interpreter correctly interprets output
Deno.test("Interpreter - Integration test - Output", () => {
	const program: Program = {
		kind: "Program",
		line: 1,
		body: [
			{
				kind: "Output",
				line: 1,
				value: {
					kind: "Value",
					line: 1,
					type: "Text",
					value: "Hello, World!",
				},
			} as Line,
		],
	};

	const interpreter = new Interpreter(new SymbolTable());

	const spyConsoleLog = spy(console, "log");

	interpreter.visitProgram(program);

	assertSpyCalls(spyConsoleLog, 1);
	assertEquals(spyConsoleLog.calls[0].args, ["Hello, World!"]);
});

// Interpreter correctly interprets values
Deno.test("Interpreter - Unit test - Value", () => {
	const interpreter = new Interpreter(new SymbolTable());

	const value = interpreter.visitValue({
		kind: "Value",
		line: 1,
		type: "Number",
		value: "1",
	});

	const value2 = interpreter.visitValue({
		kind: "Value",
		line: 1,
		type: "Text",
		value: "Hello, World!",
	});

	const value3 = interpreter.visitValue({
		kind: "Value",
		line: 1,
		type: "Boolean",
		value: "TRUE",
	});

	assertEquals(value, 1);
	assertEquals(value2, "Hello, World!");
	assertEquals(value3, true);
});

// Interpreter correctly interprets Array
Deno.test("Interpreter - Unit test - Array", () => {
	const interpreter = new Interpreter(new SymbolTable());

	const array = interpreter.visitArray({
		kind: "Array",
		line: 1,
		type: "Number",
		value: [
			{
				kind: "Value",
				line: 1,
				type: "Number",
				value: "1",
			} as Value,
			{
				kind: "Value",
				line: 1,
				type: "Number",
				value: "2",
			} as Value,
			{
				kind: "Value",
				line: 1,
				type: "Number",
				value: "3",
			} as Value,
		],
	} as Array);

	assertEquals(array, [1, 2, 3]);
});

// Interpreter correctly interprets StringConcatenation
Deno.test("Interpreter - Unit test - StringConcatenation", () => {
	const interpreter = new Interpreter(new SymbolTable());

	const value = interpreter.visitStringConcatenation({
		kind: "StringConcatenation",
		line: 1,
		type: "Text",
		values: [
			{
				kind: "Value",
				line: 1,
				type: "Text",
				value: "Hello, ",
			} as Value,
			{
				kind: "Value",
				line: 1,
				type: "Text",
				value: "World!",
			} as Value,
		],
	});

	assertEquals(value, "Hello, World!");
});

// Interpreter correctly interprets Identifier
Deno.test("Interpreter - Unit test - Identifier", () => {
	const interpreter = new Interpreter(new SymbolTable());
	interpreter.environment.set("x", 1);

	const value = interpreter.visitIdentifier({
		kind: "Identifier",
		line: 1,
		type: "Number",
		name: "x",
	});

	assertEquals(value, 1);
});

// Interpreter correctly interprets Addition
Deno.test("Interpreter - Unit test - Addition", () => {
	const interpreter = new Interpreter(new SymbolTable());

	const value = interpreter.visitAddition({
		kind: "BinaryOperation",
		line: 1,
		left: {
			kind: "Value",
			line: 1,
			type: "Number",
			value: 0.5,
		},
		right: {
			kind: "Value",
			line: 1,
			type: "Number",
			value: 2,
		},
		operator: "+",
	} as Addition);

	assertEquals(value, 2.5);

	const value2 = interpreter.visitAddition({
		kind: "BinaryOperation",
		line: 1,
		left: {
			kind: "Value",
			line: 1,
			type: "Number",
			value: 1000,
		},
		right: {
			kind: "Value",
			line: 1,
			type: "Number",
			value: 2.000005,
		},
		operator: "+",
	} as Addition);

	assertEquals(value2, 1002.000005);
});

Deno.test("Interpreter - Unit test - Addition", () => {
	const interpreter = new Interpreter(new SymbolTable());

	const value = interpreter.visitSubtraction({
		kind: "BinaryOperation",
		line: 1,
		left: {
			kind: "Value",
			line: 1,
			type: "Number",
			value: 1,
		},
		right: {
			kind: "Value",
			line: 1,
			type: "Number",
			value: 2,
		},
		operator: "-",
	} as Subtraction);

	assertEquals(value, -1);

	const value2 = interpreter.visitSubtraction({
		kind: "BinaryOperation",
		line: 1,
		left: {
			kind: "Value",
			line: 1,
			type: "Number",
			value: -100,
		},
		right: {
			kind: "Value",
			line: 1,
			type: "Number",
			value: 200,
		},
		operator: "-",
	} as Subtraction);

	assertEquals(value2, -300);

	const value3 = interpreter.visitSubtraction({
		kind: "BinaryOperation",
		line: 1,
		left: {
			kind: "Value",
			line: 1,
			type: "Number",
			value: -0.123,
		},
		right: {
			kind: "Value",
			line: 1,
			type: "Number",
			value: 0.021,
		},
		operator: "-",
	} as Subtraction);

	assertEquals(value3, -0.144);

	const value4 = interpreter.visitSubtraction({
		kind: "BinaryOperation",
		line: 1,
		left: {
			kind: "Value",
			line: 1,
			type: "Number",
			value: 300,
		},
		right: {
			kind: "Value",
			line: 1,
			type: "Number",
			value: 150,
		},
		operator: "-",
	} as Subtraction);

	assertEquals(value4, 150);
});

// Interpreter correctly interprets Multiplication
Deno.test("Interpreter - Unit test - Multiplication", () => {
	const interpreter = new Interpreter(new SymbolTable());

	const value = interpreter.visitMultiplication({
		kind: "BinaryOperation",
		line: 1,
		left: {
			kind: "Value",
			line: 1,
			type: "Number",
			value: 1,
		},
		right: {
			kind: "Value",
			line: 1,
			type: "Number",
			value: 2,
		},
		operator: "*",
	} as Multiplication);

	assertEquals(value, 2);

	const value2 = interpreter.visitMultiplication({
		kind: "BinaryOperation",
		line: 1,
		left: {
			kind: "Value",
			line: 1,
			type: "Number",
			value: 1000,
		},
		right: {
			kind: "Value",
			line: 1,
			type: "Number",
			value: 2.000005,
		},
		operator: "*",
	} as Multiplication);

	assertEquals(value2, 2000.005);

	const value3 = interpreter.visitMultiplication({
		kind: "BinaryOperation",
		line: 1,
		left: {
			kind: "Value",
			line: 1,
			type: "Number",
			value: -0.123,
		},
		right: {
			kind: "Value",
			line: 1,
			type: "Number",
			value: 0.021,
		},
		operator: "*",
	} as Multiplication);

	assertEquals(value3, -0.002583);
});

// Interpreter correctly interprets Division
Deno.test("Interpreter - Unit test - Division", () => {
	const interpreter = new Interpreter(new SymbolTable());

	const value = interpreter.visitDivision({
		kind: "BinaryOperation",
		line: 1,
		left: {
			kind: "Value",
			line: 1,
			type: "Number",
			value: 1,
		},
		right: {
			kind: "Value",
			line: 1,
			type: "Number",
			value: 2,
		},
		operator: "/",
	} as Division);

	assertEquals(value, 0.5);

	const value1 = interpreter.visitDivision({
		kind: "BinaryOperation",
		line: 1,
		left: {
			kind: "Value",
			line: 1,
			type: "Number",
			value: 4,
		},
		right: {
			kind: "Value",
			line: 1,
			type: "Number",
			value: 2,
		},
		operator: "/",
	} as Division);

	assertEquals(value1, 2);

	const value2 = interpreter.visitDivision({
		kind: "BinaryOperation",
		line: 1,
		left: {
			kind: "Value",
			line: 1,
			type: "Number",
			value: 1000,
		},
		right: {
			kind: "Value",
			line: 1,
			type: "Number",
			value: 2.000005,
		},
		operator: "/",
	} as Division);

	assertEquals(value2, 499.99875);

	const value3 = interpreter.visitDivision({
		kind: "BinaryOperation",
		line: 1,
		left: {
			kind: "Value",
			line: 1,
			type: "Number",
			value: 0.123,
		},
		right: {
			kind: "Value",
			line: 1,
			type: "Number",
			value: 0.021,
		},
		operator: "/",
	} as Division);

	assertEquals(value3, 5.8571429);

	// Division by zero
	assertThrows(
		() => {
			interpreter.visitDivision({
				kind: "BinaryOperation",
				line: 1,
				left: {
					kind: "Value",
					line: 1,
					type: "Number",
					value: 0,
				},
				right: {
					kind: "Value",
					line: 1,
					type: "Number",
					value: 150,
				},
				operator: "/",
			} as Division);
		},
		Error,
		"Division by zero is not allowed."
	);

	// Division by zero
	assertThrows(
		() => {
			interpreter.visitDivision({
				kind: "BinaryOperation",
				line: 1,
				left: {
					kind: "Value",
					line: 1,
					type: "Number",
					value: 35,
				},
				right: {
					kind: "Value",
					line: 1,
					type: "Number",
					value: 0,
				},
				operator: "/",
			} as Division);
		},
		Error,
		"Division by zero is not allowed."
	);
});

// Interpreter correctly interprets EQUAL
Deno.test("Interpreter - Unit test - EQUAL", () => {
	const interpreter = new Interpreter(new SymbolTable());

	const value = interpreter.visitEqual({
		kind: "BinaryOperation",
		line: 1,
		left: {
			kind: "Value",
			line: 1,
			type: "Number",
			value: 0.123,
		},
		right: {
			kind: "Value",
			line: 1,
			type: "Number",
			value: 0.021,
		},
		operator: "EQUAL",
	} as Equal);


	const value2 = interpreter.visitEqual({
		kind: "BinaryOperation",
		line: 1,
		left: {
			kind: "Value",
			line: 1,
			type: "Number",
			value: -100,
		},
		right: {
			kind: "Value",
			line: 1,
			type: "Number",
			value: 100,
		},
		operator: "EQUAL",
	} as Equal);

	const value3 = interpreter.visitEqual({
		kind: "BinaryOperation",
		line: 1,
		left: {
			kind: "Value",
			line: 1,
			type: "Number",
			value: 10,
		},
		right: {
			kind: "Value",
			line: 1,
			type: "Number",
			value: 10,
		},
		operator: "EQUAL",
	} as Equal);

	const value4 = interpreter.visitEqual({
		kind: "BinaryOperation",
		line: 1,
		left: {
			kind: "Value",
			line: 1,
			type: "Text",
			value: "Hello, World!",
		},
		right: {
			kind: "Value",
			line: 1,
			type: "Text",
			value: "Hello, World!",
		},
		operator: "EQUAL",
	} as Equal);

	const value5 = interpreter.visitEqual({
		kind: "BinaryOperation",
		line: 1,
		left: {
			kind: "Value",
			line: 1,
			type: "Text",
			value: "Hello, World!",
		},
		right: {
			kind: "Value",
			line: 1,
			type: "Text",
			value: "Hello, World",
		},
		operator: "EQUAL",
	} as Equal);

    const value6 = interpreter.visitEqual({
		kind: "BinaryOperation",
		line: 1,
		left: {
			kind: "Value",
			line: 1,
			type: "Boolean",
			value: "TRUE",
		},
		right: {
			kind: "Value",
			line: 1,
			type: "Boolean",
			value: "TRUE",
		},
		operator: "EQUAL",
	} as Equal);

	const value7 = interpreter.visitEqual({
		kind: "BinaryOperation",
		line: 1,
		left: {
			kind: "Value",
			line: 1,
			type: "Boolean",
			value: "TRUE",
		},
		right: {
			kind: "Value",
			line: 1,
			type: "Boolean",
			value: "FALSE",
		},
		operator: "EQUAL",
	} as Equal);


	assertEquals(value, false);
	assertEquals(value2, false);
	assertEquals(value3, true);
    assertEquals(value4, true);
    assertEquals(value5, false);
    assertEquals(value6, true);
    assertEquals(value7, false);
});

// Interpreter correctly interprets EQUAL
Deno.test("Interpreter - Unit test - NOT EQUAL", () => {
	const interpreter = new Interpreter(new SymbolTable());

	const value = interpreter.visitNotEqual({
		kind: "BinaryOperation",
		line: 1,
		left: {
			kind: "Value",
			line: 1,
			type: "Number",
			value: 0.123,
		},
		right: {
			kind: "Value",
			line: 1,
			type: "Number",
			value: 0.021,
		},
		operator: "NOT EQUAL",
	} as NotEqual);


	const value2 = interpreter.visitNotEqual({
		kind: "BinaryOperation",
		line: 1,
		left: {
			kind: "Value",
			line: 1,
			type: "Number",
			value: -100,
		},
		right: {
			kind: "Value",
			line: 1,
			type: "Number",
			value: 100,
		},
		operator: "NOT EQUAL",
	} as NotEqual);

	const value3 = interpreter.visitNotEqual({
		kind: "BinaryOperation",
		line: 1,
		left: {
			kind: "Value",
			line: 1,
			type: "Number",
			value: 10,
		},
		right: {
			kind: "Value",
			line: 1,
			type: "Number",
			value: 10,
		},
		operator: "NOT EQUAL",
	} as NotEqual);

	const value4 = interpreter.visitNotEqual({
		kind: "BinaryOperation",
		line: 1,
		left: {
			kind: "Value",
			line: 1,
			type: "Text",
			value: "Hello, World!",
		},
		right: {
			kind: "Value",
			line: 1,
			type: "Text",
			value: "Hello, World!",
		},
		operator: "NOT EQUAL",
	} as NotEqual);

	const value5 = interpreter.visitNotEqual({
		kind: "BinaryOperation",
		line: 1,
		left: {
			kind: "Value",
			line: 1,
			type: "Text",
			value: "Hello, World!",
		},
		right: {
			kind: "Value",
			line: 1,
			type: "Text",
			value: "Hello, World",
		},
		operator: "NOT EQUAL",
	} as NotEqual);

    const value6 = interpreter.visitNotEqual({
		kind: "BinaryOperation",
		line: 1,
		left: {
			kind: "Value",
			line: 1,
			type: "Boolean",
			value: "TRUE",
		},
		right: {
			kind: "Value",
			line: 1,
			type: "Boolean",
			value: "TRUE",
		},
		operator: "NOT EQUAL",
	} as NotEqual);

	const value7 = interpreter.visitNotEqual({
		kind: "BinaryOperation",
		line: 1,
		left: {
			kind: "Value",
			line: 1,
			type: "Boolean",
			value: "TRUE",
		},
		right: {
			kind: "Value",
			line: 1,
			type: "Boolean",
			value: "FALSE",
		},
		operator: "NOT EQUAL",
	} as NotEqual);


	assertEquals(value, true);
	assertEquals(value2, true);
	assertEquals(value3, false);
    assertEquals(value4, false);
    assertEquals(value5, true);
    assertEquals(value6, false);
    assertEquals(value7, true);
});

// Interpreter correctly interprets AND
Deno.test("Interpreter - Unit test - AND", () => {
    const interpreter = new Interpreter(new SymbolTable());

    const value = interpreter.visitAnd({
        kind: "BinaryOperation",
        line: 1,
        left: {
            kind: "Value",
            line: 1,
            type: "Boolean",
            value: "TRUE",
        },
        right: {
            kind: "Value",
            line: 1,
            type: "Boolean",
            value: "TRUE",
        },
        operator: "AND",
    } as And);

    const value2 = interpreter.visitAnd({
        kind: "BinaryOperation",
        line: 1,
        left: {
            kind: "Value",
            line: 1,
            type: "Boolean",
            value: "TRUE",
        },
        right: {
            kind: "Value",
            line: 1,
            type: "Boolean",
            value: "FALSE",
        },
        operator: "AND",
    } as And);

    const value3 = interpreter.visitAnd({
        kind: "BinaryOperation",
        line: 1,
        left: {
            kind: "Value",
            line: 1,
            type: "Boolean",
            value: "FALSE",
        },
        right: {
            kind: "Value",
            line: 1,
            type: "Boolean",
            value: "TRUE",
        },
        operator: "AND",
    } as And);

    const value4 = interpreter.visitAnd({
        kind: "BinaryOperation",
        line: 1,
        left: {
            kind: "Value",
            line: 1,
            type: "Boolean",
            value: "FALSE",
        },
        right: {
            kind: "Value",
            line: 1,
            type: "Boolean",
            value: "FALSE",
        },
        operator: "AND",
    } as And);

    assertEquals(value, true);
    assertEquals(value2, false);
    assertEquals(value3, false);
    assertEquals(value4, false);
});

// Interpreter correctly interprets OR
Deno.test("Interpreter - Unit test - OR", () => {
    const interpreter = new Interpreter(new SymbolTable());

    const value = interpreter.visitOr({
        kind: "BinaryOperation",
        line: 1,
        left: {
            kind: "Value",
            line: 1,
            type: "Boolean",
            value: "TRUE",
        },
        right: {
            kind: "Value",
            line: 1,
            type: "Boolean",
            value: "TRUE",
        },
        operator: "OR",
    } as Or);

    const value2 = interpreter.visitOr({
        kind: "BinaryOperation",
        line: 1,
        left: {
            kind: "Value",
            line: 1,
            type: "Boolean",
            value: "TRUE",
        },
        right: {
            kind: "Value",
            line: 1,
            type: "Boolean",
            value: "FALSE",
        },
        operator: "OR",
    } as Or);

    const value3 = interpreter.visitOr({
        kind: "BinaryOperation",
        line: 1,
        left: {
            kind: "Value",
            line: 1,
            type: "Boolean",
            value: "FALSE",
        },
        right: {
            kind: "Value",
            line: 1,
            type: "Boolean",
            value: "TRUE",
        },
        operator: "OR",
    } as Or);

    const value4 = interpreter.visitOr({
        kind: "BinaryOperation",
        line: 1,
        left: {
            kind: "Value",
            line: 1,
            type: "Boolean",
            value: "FALSE",
        },
        right: {
            kind: "Value",
            line: 1,
            type: "Boolean",
            value: "FALSE",
        },
        operator: "OR",
    } as Or);

    assertEquals(value, true);
    assertEquals(value2, true);
    assertEquals(value3, true);
    assertEquals(value4, false);
});

// Interpreter correctly interprets Greater
Deno.test("Interpreter - Unit test - Greater", () => {
    const interpreter = new Interpreter(new SymbolTable());

    const value = interpreter.visitGreater({
        kind: "BinaryOperation",
        line: 1,
        left: {
            kind: "Value",
            line: 1,
            type: "Number",
            value: 1,
        },
        right: {
            kind: "Value",
            line: 1,
            type: "Number",
            value: 2,
        },
        operator: "GREATER",
    } as Greater);

    const value2 = interpreter.visitGreater({
        kind: "BinaryOperation",
        line: 1,
        left: {
            kind: "Value",
            line: 1,
            type: "Number",
            value: 2,
        },
        right: {
            kind: "Value",
            line: 1,
            type: "Number",
            value: 1,
        },
        operator: "GREATER",
    } as Greater);

    const value3 = interpreter.visitGreater({
        kind: "BinaryOperation",
        line: 1,
        left: {
            kind: "Value",
            line: 1,
            type: "Number",
            value: 1,
        },
        right: {
            kind: "Value",
            line: 1,
            type: "Number",
            value: 1,
        },
        operator: "GREATER",
    } as Greater);

    assertEquals(value, false);
    assertEquals(value2, true);
    assertEquals(value3, false);
});

// Interpreter correctly interprets Less
Deno.test("Interpreter - Unit test - Less", () => {
    const interpreter = new Interpreter(new SymbolTable());

    const value = interpreter.visitLess({
        kind: "BinaryOperation",
        line: 1,
        left: {
            kind: "Value",
            line: 1,
            type: "Number",
            value: 1,
        },
        right: {
            kind: "Value",
            line: 1,
            type: "Number",
            value: 2,
        },
        operator: "LESS",
    } as Less);

    const value2 = interpreter.visitLess({
        kind: "BinaryOperation",
        line: 1,
        left: {
            kind: "Value",
            line: 1,
            type: "Number",
            value: 2,
        },
        right: {
            kind: "Value",
            line: 1,
            type: "Number",
            value: 1,
        },
        operator: "LESS",
    } as Less);

    const value3 = interpreter.visitLess({
        kind: "BinaryOperation",
        line: 1,
        left: {
            kind: "Value",
            line: 1,
            type: "Number",
            value: 1,
        },
        right: {
            kind: "Value",
            line: 1,
            type: "Number",
            value: 1,
        },
        operator: "LESS",
    } as Less);

    assertEquals(value, true);
    assertEquals(value2, false);
    assertEquals(value3, false);
});