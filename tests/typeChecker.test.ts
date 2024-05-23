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
} from "../Syntax Analysis/AST.ts";
import { assertSpyCalls, spy } from "https://deno.land/std@0.224.0/testing/mock.ts";
import TypeChecker from "../Contextual Analysis/TypeChecker.ts";

// TypeChecker correctly validates a declaration with a matching type
Deno.test("Type Checker - Integration test - Program", () => {
	const symbolTable = new SymbolTable();
	const program: Program = {
		kind: "Program",
		line: 1,
		body: [
			{
				kind: "Declaration",
				line: 1,
				type: "number",
				identifier: {
					kind: "Identifier",
					line: 1,
					type: "number",
					name: "x",
				},
				value: {
					kind: "Value",
					line: 1,
					type: "number",
					value: 1,
				},
			} as Line,
		],
	};
	symbolTable.visitProgram(program);
	const typeChecker = new TypeChecker(symbolTable);

	assert(typeChecker.visitProgram(program));
});

// TypeChecker correctly validates a declaration
Deno.test("Type Checker - Integration test - validate declaration", () => {
	const symbolTable = new SymbolTable();
	const typeChecker = new TypeChecker(symbolTable);

	const declaration: Declaration = {
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
			value: 42,
		} as Expression,
	};

	const program: Program = {
		kind: "Program",
		line: 1,
		body: [declaration],
	};

	// check if the type checker throws an error when the variable is not declared (i.e. not in the symbol table)
	assertThrows(() => typeChecker.visitDeclaration(declaration), Error, " Undeclared variable: x.");

	symbolTable.visitProgram(program);

	const spyDec = spy(typeChecker, "visitDeclaration");

	assert(typeChecker.visitProgram(program));

	assertSpyCalls(spyDec, 1);
});

// TypeChecker correctly validates an  Arraydeclaration
Deno.test("Type Checker - Integration test - validate arrayDeclaration", () => {
	const symbolTable = new SymbolTable();
	const typeChecker = new TypeChecker(symbolTable);

	const declaration: ArrayDeclaration = {
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
			} as Expression,
			{
				kind: "Value",
				line: 1,
				type: "Number",
				value: 2,
			} as Expression,
			{
				kind: "Value",
				line: 1,
				type: "Number",
				value: 3,
			} as Expression,
		],
	};

	const program: Program = {
		kind: "Program",
		line: 1,
		body: [declaration],
	};

	// check if the type checker throws an error when the variable is not declared (i.e. not in the symbol table)
	assertThrows(() => typeChecker.visitArrayDeclaration(declaration), Error, " Undeclared variable: x.");

	symbolTable.visitProgram(program);

	const spyDec = spy(typeChecker, "visitArrayDeclaration");

	assert(typeChecker.visitProgram(program));

	assertSpyCalls(spyDec, 1);
});

// TypeChecker correctly validates an If statement
Deno.test("Type Checker - Integration test - validate if statement", () => {
	const symbolTable = new SymbolTable();
	const typeChecker = new TypeChecker(symbolTable);

	const ifStm = {
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
					value: 42,
				},
			} as Line,
		],
	};

	const program: Program = {
		kind: "Program",
		line: 1,
		body: [ifStm as Line],
	};

	symbolTable.visitProgram(program);

	const spyIf = spy(typeChecker, "visitIfStm");
	const spyElse = spy(typeChecker, "visitElseStm");

	assert(typeChecker.visitProgram(program));

	assertSpyCalls(spyIf, 1);
	assertSpyCalls(spyElse, 0);

	const ifStm2 = {
		kind: "IfStm",
		line: 1,
		condition: {
			kind: "Value",
			line: 1,
			type: "Number",
			value: 42,
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
					value: 42,
				},
			} as Line,
		],
	};

	const program2: Program = {
		kind: "Program",
		line: 1,
		body: [ifStm2 as Line],
	};

	symbolTable.visitProgram(program2);

	assertThrows(
		() => typeChecker.visitProgram(program2),
		Error,
		"Expected IF condition to be of type Boolean, but got Number."
	);

	const ifStm3 = {
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
					value: 42,
				},
			} as Line,
		],
		else: {
			kind: "ElseStm",
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
						value: 100,
					},
				} as Line,
			],
		},
	};

	const program3: Program = {
		kind: "Program",
		line: 1,
		body: [ifStm3 as Line],
	};

	symbolTable.visitProgram(program3);

	assert(typeChecker.visitProgram(program3));

	assertSpyCalls(spyElse, 1);

	const ifStm4 = {
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
					value: 42,
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
						name: "z",
					},
					value: {
						kind: "Value",
						line: 1,
						type: "Number",
						value: 43,
					},
				} as Line,
			],
		},
	};

	const program4: Program = {
		kind: "Program",
		line: 1,
		body: [ifStm4 as Line],
	};

	symbolTable.visitProgram(program4);

	assert(typeChecker.visitProgram(program4));

	assertSpyCalls(spyIf, 5);
	assertSpyCalls(spyElse, 1);
});

// TypeChecker correctly validates a While statement
Deno.test("Type Checker - Integration test - validate while statement", () => {
	const symbolTable = new SymbolTable();
	const typeChecker = new TypeChecker(symbolTable);

	const whileStm = {
		kind: "WhileStm",
		line: 1,
		condition: {
			kind: "BinaryOperation",
			line: 1,
			left: {
				kind: "Value",
				type: "Number",
				line: 1,
				value: 5,
			} as Expression,
			right: {
				kind: "Value",
				line: 1,
				type: "Number",
				value: 10,
			} as Expression,
			operator: "EQUAL",
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
					value: 42,
				},
			} as Line,
		],
	};

	const program: Program = {
		kind: "Program",
		line: 1,
		body: [whileStm as Line],
	};

	symbolTable.visitProgram(program);

	const spyWhile = spy(typeChecker, "visitWhileStm");

	assert(typeChecker.visitProgram(program));

	assertSpyCalls(spyWhile, 1);

	const whileStm2 = {
		kind: "WhileStm",
		line: 1,
		condition: {
			kind: "BinaryOperation",
			line: 1,
			left: {
				kind: "Value",
				type: "Number",
				line: 1,
				value: 5,
			} as Expression,
			right: {
				kind: "Value",
				line: 1,
				type: "Number",
				value: 10,
			} as Expression,
			operator: "/",
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
					value: 42,
				},
			} as Line,
		],
	};

	const program2: Program = {
		kind: "Program",
		line: 1,
		body: [whileStm2 as Line],
	};

	symbolTable.visitProgram(program2);

	assertThrows(
		() => typeChecker.visitProgram(program2),
		Error,
		"Expected WHILE condition to be of type Boolean, but got Number."
	);
});

// TypeChecker correctly validates an IndexAssignment
Deno.test("Type Checker - Integration test - validate index assignment", () => {
	const symbolTable = new SymbolTable();
	const typeChecker = new TypeChecker(symbolTable);

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
					} as Expression,
					{
						kind: "Value",
						line: 1,
						type: "Number",
						value: 2,
					} as Expression,
					{
						kind: "Value",
						line: 1,
						type: "Number",
						value: 3,
					} as Expression,
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
					value: 42,
				},
			} as Line,
		],
	};

	symbolTable.visitProgram(program);
	const spyIndex = spy(typeChecker, "visitIndexAssignment");

	assert(typeChecker.visitProgram(program));

	assertSpyCalls(spyIndex, 1);

	// wrong index type
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
					} as Expression,
					{
						kind: "Value",
						line: 1,
						type: "Number",
						value: 2,
					} as Expression,
					{
						kind: "Value",
						line: 1,
						type: "Number",
						value: 3,
					} as Expression,
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
					type: "Text",
					value: "hello",
				},
				value: {
					kind: "Value",
					line: 1,
					type: "Number",
					value: 42,
				},
			} as Line,
		],
	};

	symbolTable.visitProgram(program2);

	assertThrows(
		() => typeChecker.visitProgram(program2),
		Error,
		"Expected index of x[] to be of type Number, but got type Text."
	);

	// wrong value type
	const program3: Program = {
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
					} as Expression,
					{
						kind: "Value",
						line: 1,
						type: "Number",
						value: 2,
					} as Expression,
					{
						kind: "Value",
						line: 1,
						type: "Number",
						value: 3,
					} as Expression,
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
					value: 0,
				},
				value: {
					kind: "Value",
					line: 1,
					type: "Text",
					value: "Hello",
				},
			} as Line,
		],
	};

	symbolTable.visitProgram(program3);

	assertThrows(
		() => typeChecker.visitProgram(program3),
		Error,
		"Expected to assign an expression of type Number to x[] but got type Text."
	);
});

// TypeChecker correctly validates a Push statement
Deno.test("Type Checker - Integration test - validate push statement", () => {
	const symbolTable = new SymbolTable();
	const typeChecker = new TypeChecker(symbolTable);

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
					} as Expression,
					{
						kind: "Value",
						line: 1,
						type: "Number",
						value: 2,
					} as Expression,
					{
						kind: "Value",
						line: 1,
						type: "Number",
						value: 3,
					} as Expression,
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
					value: 42,
				},
			} as Line,
		],
	};

	symbolTable.visitProgram(program);
	const spyPush = spy(typeChecker, "visitPush");

	assert(typeChecker.visitProgram(program));
	assertSpyCalls(spyPush, 1);

	// wrong value type
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
					} as Expression,
					{
						kind: "Value",
						line: 1,
						type: "Number",
						value: 2,
					} as Expression,
					{
						kind: "Value",
						line: 1,
						type: "Number",
						value: 3,
					} as Expression,
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
					type: "Text",
					value: "Hello",
				},
			} as Line,
		],
	};

	symbolTable.visitProgram(program2);

	assertThrows(
		() => typeChecker.visitProgram(program2),
		Error,
		"Expected to push an expression of type Number to x[] but got type Text."
	);

	// not allowed on non-array type
	const program3: Program = {
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
					value: 42,
				},
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
					value: 42,
				},
			} as Line,
		],
	};

	symbolTable.visitProgram(program3);

	assertThrows(() => typeChecker.visitProgram(program3), Error, "Array features are not allowed on non array: x.");
});

// TypeChecker correctly validates a Pull statement
Deno.test("Type Checker - Integration test - validate pull statement", () => {
	const symbolTable = new SymbolTable();
	const typeChecker = new TypeChecker(symbolTable);

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
					} as Expression,
					{
						kind: "Value",
						line: 1,
						type: "Number",
						value: 2,
					} as Expression,
					{
						kind: "Value",
						line: 1,
						type: "Number",
						value: 3,
					} as Expression,
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

	symbolTable.visitProgram(program);

	const spyPull = spy(typeChecker, "visitPull");

	assert(typeChecker.visitProgram(program));
	assertSpyCalls(spyPull, 1);

	// not allowed on non-array type
	const program2: Program = {
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
					value: 42,
				},
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

	symbolTable.visitProgram(program2);

	assertThrows(() => typeChecker.visitProgram(program2), Error, "Array features are not allowed on non array: x.");
});

// TypeChecker correctly validates assignments
Deno.test("Type Checker - Integration test - validate assignment", () => {
	const symbolTable = new SymbolTable();
	const typeChecker = new TypeChecker(symbolTable);

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
					value: 42,
				},
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
					kind: "Value",
					line: 1,
					type: "Number",
					value: 10,
				},
			} as Line,
			{
				kind: "Assignment",
				line: 1,
				identifier: {
					kind: "Identifier",
					line: 1,
					name: "x",
				},
				value: {
					kind: "Identifier",
					line: 1,
					name: "y",
				},
			} as Line,
		],
	};

	symbolTable.visitProgram(program);

	const spyAssign = spy(typeChecker, "visitAssignment");

	const dast = typeChecker.visitProgram(program);
	const assignment = dast.body[1] as Assignment;
	const expression = assignment.value as Identifier;

	assertSpyCalls(spyAssign, 1);
	assertEquals(assignment.identifier.type, "Number");
	assertEquals(expression.type, "Number");

	// expression type mismatch
	const program2: Program = {
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
					value: 42,
				},
			} as Line,
			{
				kind: "Declaration",
				line: 1,
				type: "Number",
				identifier: {
					kind: "Identifier",
					line: 1,
					type: "Text",
					name: "y",
				},
				value: {
					kind: "Value",
					line: 1,
					type: "Text",
					value: "hello",
				},
			} as Line,
			{
				kind: "Assignment",
				line: 1,
				identifier: {
					kind: "Identifier",
					line: 1,
					name: "x",
				},
				value: {
					kind: "Identifier",
					line: 1,
					name: "y",
				},
			} as Line,
		],
	};

	symbolTable.visitProgram(program2);

	assertThrows(() => typeChecker.visitProgram(program2), Error, "Expected y to be of type Number, but got Text.");
});

// TypeChecker successfully checks function return types against declared types
Deno.test("Type Checker - Integration test - validate function return type", () => {
	const symbolTable = new SymbolTable();
	const typeChecker = new TypeChecker(symbolTable);

	const func: Function = {
		kind: "Function",
		line: 1,
		type: "Number",
		identifier: {
			kind: "Identifier",
			line: 1,
			type: "Number",
			name: "compute",
		},
		parameters: [],
		body: [
			{
				kind: "Return",
				line: 1,
				value: {
					kind: "Value",
					line: 1,
					type: "Number",
					value: 42,
				},
			} as Line,
		],
	};
	symbolTable.NewScope([]);
	symbolTable.visitFunction(func);
	assert(typeChecker.visitFunction(func));

	const func2: Function = {
		kind: "Function",
		line: 1,
		type: "Number",
		identifier: {
			kind: "Identifier",
			line: 1,
			type: "Number",
			name: "x",
		},
		parameters: [],
		body: [
			{
				kind: "Return",
				line: 1,
				value: {
					kind: "Value",
					line: 1,
					type: "Text",
					value: "hello",
				},
			} as Line,
		],
	};

	symbolTable.visitFunction(func2);
	assertThrows(
		() => typeChecker.visitFunction(func2),
		Error,
		"Expected function x to return type Number, but got type Text."
	);
});

// TypeChecker successfully call function and updates missing types
Deno.test("Type Checker - Integration test - validate function call", () => {
	const symbolTable = new SymbolTable();
	const typeChecker = new TypeChecker(symbolTable);

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
					name: "compute",
				},
				parameters: [],
				body: [
					{
						kind: "Return",
						line: 1,
						value: {
							kind: "Value",
							line: 1,
							type: "Number",
							value: 42,
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
						name: "compute",
						type: undefined,
					},
					parameters: [],
				},
			} as Line,
		],
	};

	symbolTable.visitProgram(program);
	const dast = typeChecker.visitProgram(program);

	const func = (dast.body[1] as Declaration).value as Function;

	assertEquals(func.type, "Number");
	assertEquals(func.identifier.type, "Number");
	assertEquals(func.body !== undefined, true);
});

// TypeChecker successfully visits output statements
Deno.test("Type Checker - Integration test - validate output statement", () => {
	const symbolTable = new SymbolTable();
	const typeChecker = new TypeChecker(symbolTable);

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
					type: "Number",
					value: 42,
				},
			} as Line,
		],
	};

	const spyOutput = spy(typeChecker, "visitExpression");

	assert(typeChecker.visitProgram(program));

	assertSpyCalls(spyOutput, 1);
});

// TypeChecker validates Arrays
Deno.test("Type Checker - Integration test - validate array", () => {
	const symbolTable = new SymbolTable();
	const typeChecker = new TypeChecker(symbolTable);

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
				value: [],
			} as Line,
			{
				kind: "Array",
				line: 1,
				identifier: {
					kind: "Identifier",
					line: 1,
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

	symbolTable.visitProgram(program);

	const spyArray = spy(typeChecker, "visitArray");

	assert(typeChecker.visitProgram(program));
	assertEquals(spyArray.calls[0].returned, "Number");
	assertSpyCalls(spyArray, 1);

	// wrong type in array
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
				value: [],
			} as Line,
			{
				kind: "Array",
				line: 1,
				identifier: {
					kind: "Identifier",
					line: 1,
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
						type: "Text",
						value: "hello",
					},
				],
			} as Line,
		],
	};

	symbolTable.visitProgram(program2);

	assertThrows(
		() => typeChecker.visitProgram(program2),
		Error,
		"Expected all elements in x[] to be of type Number, but got type Text for element 2."
	);

	// throw error on emtpy array
	const program3: Program = {
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
				],
			} as Line,
			{
				kind: "Array",
				line: 1,
				identifier: {
					kind: "Identifier",
					line: 1,
					name: "x",
				},
				value: [],
			} as Line,
		],
	};

	symbolTable.visitProgram(program3);

	const dast = typeChecker.visitProgram(program3);
	const array = dast.body[1] as Array;

	assertEquals(array.type, "Number");
	assertEquals(array.identifier?.type, "Number");
	assertEquals(spyArray.calls[2].returned, "Number");
	assertSpyCalls(spyArray, 3);
});

// TypeChecker validates Index of Arrays
Deno.test("Type Checker - Integration test - validate index of array", () => {
	const symbolTable = new SymbolTable();
	const typeChecker = new TypeChecker(symbolTable);

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
				value: [],
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
                    kind: "Value",
                    line: 1,
                    type: "Number",
                    value: 0,
                },
            } as Line,
			{
				kind: "Assignment",
				line: 1,
				identifier: {
					kind: "Identifier",
					line: 1,
					name: "y",
				},
				value: {
					kind: "IndexOf",
					line: 1,
					identifier: {
						kind: "Identifier",
						line: 1,
						name: "x",
					},
					index: {
						kind: "Value",
						line: 1,
						type: "Number",
						value: 0,
					},
				}
			} as Line,
		],
	};

	symbolTable.visitProgram(program);

	const spyIndex = spy(typeChecker, "visitIndexOf");

	assert(typeChecker.visitProgram(program));

	assertSpyCalls(spyIndex, 1);

	assertEquals(spyIndex.calls[0].returned, "Number");

    // wrong index type
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
				value: [],
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
                    kind: "Value",
                    line: 1,
                    type: "Number",
                    value: 0,
                },
            } as Line,
			{
				kind: "Assignment",
				line: 1,
				identifier: {
					kind: "Identifier",
					line: 1,
					name: "y",
				},
				value: {
					kind: "IndexOf",
					line: 1,
					identifier: {
						kind: "Identifier",
						line: 1,
						name: "x",
					},
					index: {
						kind: "Value",
						line: 1,
						type: "Text",
						value: "hello",
					},
				}
			} as Line,
		],
	};

    symbolTable.visitProgram(program2);

    assertThrows(
        () => typeChecker.visitProgram(program2),
        Error,
        "Expected index of x[] to be of type Number, but got type Text."
    );
});

// TypeChecker validates Size of Arrays
Deno.test("Type Checker - Integration test - validate Size of array", () => {
	const symbolTable = new SymbolTable();
	const typeChecker = new TypeChecker(symbolTable);

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
				value: [],
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
                    kind: "Value",
                    line: 1,
                    type: "Number",
                    value: 0,
                },
            } as Line,
			{
				kind: "Assignment",
				line: 1,
				identifier: {
					kind: "Identifier",
					line: 1,
					name: "y",
				},
				value: {
					kind: "Size",
					line: 1,
					identifier: {
						kind: "Identifier",
						line: 1,
						name: "x",
					}
				}
			} as Line,
		],
	};

	symbolTable.visitProgram(program);

	const spySize = spy(typeChecker, "visitSize");

	assert(typeChecker.visitProgram(program));

	assertSpyCalls(spySize, 1);

	assertEquals(spySize.calls[0].returned, "Number");

    // wrong index type
    const program2: Program = {
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
                    value: 0,
                },
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
                    kind: "Value",
                    line: 1,
                    type: "Number",
                    value: 0,
                },
            } as Line,
			{
				kind: "Assignment",
				line: 1,
				identifier: {
					kind: "Identifier",
					line: 1,
					name: "y",
				},
				value: {
					kind: "IndexOf",
					line: 1,
					identifier: {
						kind: "Identifier",
						line: 1,
						name: "x",
					},
				}
			} as Line,
		],
	};

    symbolTable.visitProgram(program2);

    assertThrows(
        () => typeChecker.visitProgram(program2),
        Error,
        "Array features are not allowed on non array: x."
    );
});

// TypeChecker validates String Concatenation
Deno.test("Type Checker - Integration test - validate string concatenation", () => {
    const symbolTable = new SymbolTable();
    const typeChecker = new TypeChecker(symbolTable);

    const program: Program = {
        kind: "Program",
        line: 1,
        body: [
            {
                kind: "Declaration",
                line: 1,
                type: "Text",
                identifier: {
                    kind: "Identifier",
                    line: 1,
                    type: "Text",
                    name: "x",
                },
                value: {
                    kind: "StringConcatenation",
                    line: 1,
                    type: "Text",
                    left: {
                        kind: "Value",
                        line: 1,
                        type: "Text",
                        value: "Hello",
                    },
                    right: {
                        kind: "Value",
                        line: 1,
                        type: "Text",
                        value: " World",
                    },
                },
            } as Line,
        ],
    };

    symbolTable.visitProgram(program);

    const spyConcat = spy(typeChecker, "visitStringConcatenation");

    assert(typeChecker.visitProgram(program));
    assertSpyCalls(spyConcat, 1);
    assertEquals(spyConcat.calls[0].returned, "Text");
});

// TypeChecker validates Identifiers
Deno.test("Type Checker - Integration test - validate identifier", () => {
    const symbolTable = new SymbolTable();
    const typeChecker = new TypeChecker(symbolTable);

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
                    value: 42,
                },
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
                    kind: "Identifier",
                    line: 1,
                    name: "x",
                },
            } as Line,
        ],
    };

    symbolTable.visitProgram(program);

    const spyIdentifier = spy(typeChecker, "visitIdentifier");

    const dast = typeChecker.visitProgram(program);
    const declaration = dast.body[1] as Declaration;
    const identifier = declaration.value as Identifier;

    assertEquals(identifier.type, "Number");
    assertSpyCalls(spyIdentifier, 1);
    assertEquals(spyIdentifier.calls[0].returned, "Number");

    // array reference
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
                kind: "Function",
                line: 2,
                type: "Number",
                identifier: {
                    kind: "Identifier",
                    line: 1,
                    type: "Number",
                    name: "getx",
                },
                parameters: [],
                body: [
                    {
                        kind: "Return",
                        line: 1,
                        value: {
                            kind: "Identifier",
                            line: 1,
                            name: "x",
                        },
                    } as Line,
                ],
            } as Line,
        ],
    };

    symbolTable.visitProgram(program2);

    assertThrows(
        () => typeChecker.visitProgram(program2),
        Error,
        "x is an Array and has to be called: x[]."
    );
});

// TypeChecker validates binary operations with operands of correct types
Deno.test("Type Checker - Integration test - validate addition operation", () => {
	const symbolTable = new SymbolTable();
	const typeChecker = new TypeChecker(symbolTable);

	const addition = {
		kind: "BinaryOperation",
		line: 1,
		left: {
			kind: "Value",
			type: "Number",
			line: 1,
			value: 5,
		} as Expression,
		right: {
			kind: "Value",
			line: 1,
			type: "Number",
			value: 10,
		} as Expression,
		operator: "+",
	} as BinaryOperation;

	symbolTable.visitBinaryOperation(addition);
	assertEquals(typeChecker.visitBinaryOperation(addition), "Number");

	// check if the type checker throws an error when the operands are of different types
	const addition2 = {
		kind: "BinaryOperation",
		line: 1,
		left: {
			kind: "Value",
			type: "Number",
			line: 1,
			value: 5,
		} as Expression,
		right: {
			kind: "Value",
			line: 1,
			type: "Text",
			value: "hello",
		} as Expression,
		operator: "+",
	} as BinaryOperation;

	const addition3 = {
		kind: "BinaryOperation",
		line: 1,
		left: {
			kind: "Value",
			type: "Text",
			line: 1,
			value: 5,
		} as Expression,
		right: {
			kind: "Value",
			line: 1,
			type: "Text",
			value: "hello",
		} as Expression,
		operator: "+",
	} as BinaryOperation;

	symbolTable.visitBinaryOperation(addition2);
	assertThrows(
		() => typeChecker.visitBinaryOperation(addition2),
		Error,
		"Expected both sides of the ADDITION operator to be of type Number, but got type Number and Text."
	);

	symbolTable.visitBinaryOperation(addition3);
	assertThrows(
		() => typeChecker.visitBinaryOperation(addition3),
		Error,
		"Expected both sides of the ADDITION operator to be of type Number, but got type Text and Text."
	);
});

Deno.test("Type Checker - Integration test - validate subtraction operation", () => {
	const symbolTable = new SymbolTable();
	const typeChecker = new TypeChecker(symbolTable);

	const subtraction = {
		kind: "BinaryOperation",
		line: 1,
		left: {
			kind: "Value",
			type: "Number",
			line: 1,
			value: 5,
		} as Expression,
		right: {
			kind: "Value",
			line: 1,
			type: "Number",
			value: 10,
		} as Expression,
		operator: "-",
	} as BinaryOperation;

	symbolTable.visitBinaryOperation(subtraction);
	assertEquals(typeChecker.visitBinaryOperation(subtraction), "Number");

	// check if the type checker throws an error when the operands are of different types
	const subtraction2 = {
		kind: "BinaryOperation",
		line: 1,
		left: {
			kind: "Value",
			type: "Number",
			line: 1,
			value: 5,
		} as Expression,
		right: {
			kind: "Value",
			line: 1,
			type: "Text",
			value: "hello",
		} as Expression,
		operator: "-",
	} as BinaryOperation;

	const subtraction3 = {
		kind: "BinaryOperation",
		line: 1,
		left: {
			kind: "Value",
			type: "Text",
			line: 1,
			value: 5,
		} as Expression,
		right: {
			kind: "Value",
			line: 1,
			type: "Text",
			value: "hello",
		} as Expression,
		operator: "-",
	} as BinaryOperation;

	symbolTable.visitBinaryOperation(subtraction2);
	assertThrows(
		() => typeChecker.visitBinaryOperation(subtraction2),
		Error,
		"Expected both sides of the SUBTRACTION operator to be of type Number, but got type Number and Text."
	);

	symbolTable.visitBinaryOperation(subtraction3);
	assertThrows(
		() => typeChecker.visitBinaryOperation(subtraction3),
		Error,
		"Expected both sides of the SUBTRACTION operator to be of type Number, but got type Text and Text."
	);
});

Deno.test("Type Checker - Integration test - validate multiplication operation", () => {
	const symbolTable = new SymbolTable();
	const typeChecker = new TypeChecker(symbolTable);

	const multiplication = {
		kind: "BinaryOperation",
		line: 1,
		left: {
			kind: "Value",
			type: "Number",
			line: 1,
			value: 5,
		} as Expression,
		right: {
			kind: "Value",
			line: 1,
			type: "Number",
			value: 10,
		} as Expression,
		operator: "*",
	} as BinaryOperation;

	symbolTable.visitBinaryOperation(multiplication);
	assertEquals(typeChecker.visitBinaryOperation(multiplication), "Number");

	// check if the type checker throws an error when the operands are of different types
	const multiplication2 = {
		kind: "BinaryOperation",
		line: 1,
		left: {
			kind: "Value",
			type: "Number",
			line: 1,
			value: 5,
		} as Expression,
		right: {
			kind: "Value",
			line: 1,
			type: "Text",
			value: "hello",
		} as Expression,
		operator: "*",
	} as BinaryOperation;

	const multiplication3 = {
		kind: "BinaryOperation",
		line: 1,
		left: {
			kind: "Value",
			type: "Text",
			line: 1,
			value: 5,
		} as Expression,
		right: {
			kind: "Value",
			line: 1,
			type: "Text",
			value: "hello",
		} as Expression,
		operator: "*",
	} as BinaryOperation;

	symbolTable.visitBinaryOperation(multiplication2);
	assertThrows(
		() => typeChecker.visitBinaryOperation(multiplication2),
		Error,
		"Expected both sides of the MULTIPLICATION operator to be of type Number, but got type Number and Text."
	);

	symbolTable.visitBinaryOperation(multiplication3);
	assertThrows(
		() => typeChecker.visitBinaryOperation(multiplication3),
		Error,
		"Expected both sides of the MULTIPLICATION operator to be of type Number, but got type Text and Text."
	);
});

Deno.test("Type Checker - Integration test - validate division operation", () => {
	const symbolTable = new SymbolTable();
	const typeChecker = new TypeChecker(symbolTable);

	const division = {
		kind: "BinaryOperation",
		line: 1,
		left: {
			kind: "Value",
			type: "Number",
			line: 1,
			value: 5,
		} as Expression,
		right: {
			kind: "Value",
			line: 1,
			type: "Number",
			value: 10,
		} as Expression,
		operator: "/",
	} as BinaryOperation;

	symbolTable.visitBinaryOperation(division);
	assertEquals(typeChecker.visitBinaryOperation(division), "Number");

	// check if the type checker throws an error when the operands are of different types
	const division2 = {
		kind: "BinaryOperation",
		line: 1,
		left: {
			kind: "Value",
			type: "Number",
			line: 1,
			value: 5,
		} as Expression,
		right: {
			kind: "Value",
			line: 1,
			type: "Text",
			value: "hello",
		} as Expression,
		operator: "/",
	} as BinaryOperation;

	const division3 = {
		kind: "BinaryOperation",
		line: 1,
		left: {
			kind: "Value",
			type: "Text",
			line: 1,
			value: 5,
		} as Expression,
		right: {
			kind: "Value",
			line: 1,
			type: "Text",
			value: "hello",
		} as Expression,
		operator: "/",
	} as BinaryOperation;

	symbolTable.visitBinaryOperation(division2);
	assertThrows(
		() => typeChecker.visitBinaryOperation(division2),
		Error,
		"Expected both sides of the DIVISION operator to be of type Number, but got type Number and Text."
	);

	symbolTable.visitBinaryOperation(division3);
	assertThrows(
		() => typeChecker.visitBinaryOperation(division3),
		Error,
		"Expected both sides of the DIVISION operator to be of type Number, but got type Text and Text."
	);
});

Deno.test("Type Checker - Integration test - validate equal operation", () => {
	const symbolTable = new SymbolTable();
	const typeChecker = new TypeChecker(symbolTable);

	const equal = {
		kind: "BinaryOperation",
		line: 1,
		left: {
			kind: "Value",
			type: "Number",
			line: 1,
			value: 5,
		} as Expression,
		right: {
			kind: "Value",
			line: 1,
			type: "Number",
			value: 10,
		} as Expression,
		operator: "EQUAL",
	} as BinaryOperation;

	const equal2 = {
		kind: "BinaryOperation",
		line: 1,
		left: {
			kind: "Value",
			type: "Text",
			line: 1,
			value: "hello",
		} as Expression,
		right: {
			kind: "Value",
			line: 1,
			type: "Text",
			value: "world",
		} as Expression,
		operator: "EQUAL",
	} as BinaryOperation;

	const equal3 = {
		kind: "BinaryOperation",
		line: 1,
		left: {
			kind: "Value",
			type: "Boolean",
			line: 1,
			value: "FALSE",
		} as Expression,
		right: {
			kind: "Value",
			line: 1,
			type: "Boolean",
			value: "TRUE",
		} as Expression,
		operator: "EQUAL",
	} as BinaryOperation;

	symbolTable.visitBinaryOperation(equal);
	assertEquals(typeChecker.visitBinaryOperation(equal), "Boolean");
	symbolTable.visitBinaryOperation(equal2);
	assertEquals(typeChecker.visitBinaryOperation(equal2), "Boolean");
	symbolTable.visitBinaryOperation(equal3);
	assertEquals(typeChecker.visitBinaryOperation(equal3), "Boolean");

	// check if the type checker throws an error when the operands are of different types
	const equal4 = {
		kind: "BinaryOperation",
		line: 1,
		left: {
			kind: "Value",
			type: "Number",
			line: 1,
			value: 5,
		} as Expression,
		right: {
			kind: "Value",
			line: 1,
			type: "Text",
			value: "hello",
		} as Expression,
		operator: "EQUAL",
	} as BinaryOperation;

	symbolTable.visitBinaryOperation(equal4);
	assertThrows(
		() => typeChecker.visitBinaryOperation(equal4),
		Error,
		"Expected both sides of the EQUAL operator to be of the same type, but got type Number and Text."
	);
});

Deno.test("Type Checker - Integration test - validate not equal operation", () => {
	const symbolTable = new SymbolTable();
	const typeChecker = new TypeChecker(symbolTable);

	const notEqual = {
		kind: "BinaryOperation",
		line: 1,
		left: {
			kind: "Value",
			type: "Number",
			line: 1,
			value: 5,
		} as Expression,
		right: {
			kind: "Value",
			line: 1,
			type: "Number",
			value: 10,
		} as Expression,
		operator: "NOT EQUAL",
	} as BinaryOperation;

	const notEqual2 = {
		kind: "BinaryOperation",
		line: 1,
		left: {
			kind: "Value",
			type: "Text",
			line: 1,
			value: "hello",
		} as Expression,
		right: {
			kind: "Value",
			line: 1,
			type: "Text",
			value: "world",
		} as Expression,
		operator: "NOT EQUAL",
	} as BinaryOperation;

	const notEqual3 = {
		kind: "BinaryOperation",
		line: 1,
		left: {
			kind: "Value",
			type: "Boolean",
			line: 1,
			value: "FALSE",
		} as Expression,
		right: {
			kind: "Value",
			line: 1,
			type: "Boolean",
			value: "TRUE",
		} as Expression,
		operator: "NOT EQUAL",
	} as BinaryOperation;

	symbolTable.visitBinaryOperation(notEqual);
	assertEquals(typeChecker.visitBinaryOperation(notEqual), "Boolean");
	symbolTable.visitBinaryOperation(notEqual2);
	assertEquals(typeChecker.visitBinaryOperation(notEqual2), "Boolean");
	symbolTable.visitBinaryOperation(notEqual3);
	assertEquals(typeChecker.visitBinaryOperation(notEqual3), "Boolean");

	// check if the type checker throws an error when the operands are of different types
	const notEqual4 = {
		kind: "BinaryOperation",
		line: 1,
		left: {
			kind: "Value",
			type: "Number",
			line: 1,
			value: 5,
		} as Expression,
		right: {
			kind: "Value",
			line: 1,
			type: "Text",
			value: "hello",
		} as Expression,
		operator: "NOT EQUAL",
	} as BinaryOperation;

	symbolTable.visitBinaryOperation(notEqual4);
	assertThrows(
		() => typeChecker.visitBinaryOperation(notEqual4),
		Error,
		"Expected both sides of the NOT EQUAL operator to be of the same type, but got type Number and Text."
	);
});

Deno.test("Type Checker - Integration test - validate and operation", () => {
	const symbolTable = new SymbolTable();
	const typeChecker = new TypeChecker(symbolTable);

	const and = {
		kind: "BinaryOperation",
		line: 1,
		left: {
			kind: "Value",
			type: "Boolean",
			line: 1,
			value: "TRUE",
		} as Expression,
		right: {
			kind: "Value",
			line: 1,
			type: "Boolean",
			value: "FALSE",
		} as Expression,
		operator: "AND",
	} as BinaryOperation;

	symbolTable.visitBinaryOperation(and);
	assertEquals(typeChecker.visitBinaryOperation(and), "Boolean");

	// check if the type checker throws an error when the operands are of different types
	const and2 = {
		kind: "BinaryOperation",
		line: 1,
		left: {
			kind: "Value",
			type: "Number",
			line: 1,
			value: 5,
		} as Expression,
		right: {
			kind: "Value",
			line: 1,
			type: "Text",
			value: "hello",
		} as Expression,
		operator: "AND",
	} as BinaryOperation;

	const and3 = {
		kind: "BinaryOperation",
		line: 1,
		left: {
			kind: "Value",
			type: "Text",
			line: 1,
			value: 5,
		} as Expression,
		right: {
			kind: "Value",
			line: 1,
			type: "Text",
			value: "hello",
		} as Expression,
		operator: "AND",
	} as BinaryOperation;

	symbolTable.visitBinaryOperation(and2);
	assertThrows(
		() => typeChecker.visitBinaryOperation(and2),
		Error,
		"Expected both sides of the AND operator to be of type Boolean, but got type Number and Text."
	);

	symbolTable.visitBinaryOperation(and3);
	assertThrows(
		() => typeChecker.visitBinaryOperation(and3),
		Error,
		"Expected both sides of the AND operator to be of type Boolean, but got type Text and Text."
	);
});

Deno.test("Type Checker - Integration test - validate or operation", () => {
	const symbolTable = new SymbolTable();
	const typeChecker = new TypeChecker(symbolTable);

	const or = {
		kind: "BinaryOperation",
		line: 1,
		left: {
			kind: "Value",
			type: "Boolean",
			line: 1,
			value: "TRUE",
		} as Expression,
		right: {
			kind: "Value",
			line: 1,
			type: "Boolean",
			value: "FALSE",
		} as Expression,
		operator: "OR",
	} as BinaryOperation;

	symbolTable.visitBinaryOperation(or);
	assertEquals(typeChecker.visitBinaryOperation(or), "Boolean");

	// check if the type checker throws an error when the operands are of different types
	const or2 = {
		kind: "BinaryOperation",
		line: 1,
		left: {
			kind: "Value",
			type: "Number",
			line: 1,
			value: 5,
		} as Expression,
		right: {
			kind: "Value",
			line: 1,
			type: "Text",
			value: "hello",
		} as Expression,
		operator: "OR",
	} as BinaryOperation;

	const or3 = {
		kind: "BinaryOperation",
		line: 1,
		left: {
			kind: "Value",
			type: "Text",
			line: 1,
			value: 5,
		} as Expression,
		right: {
			kind: "Value",
			line: 1,
			type: "Text",
			value: "hello",
		} as Expression,
		operator: "OR",
	} as BinaryOperation;

	symbolTable.visitBinaryOperation(or2);
	assertThrows(
		() => typeChecker.visitBinaryOperation(or2),
		Error,
		"Expected both sides of the OR operator to be of type Boolean, but got type Number and Text."
	);

	symbolTable.visitBinaryOperation(or3);
	assertThrows(
		() => typeChecker.visitBinaryOperation(or3),
		Error,
		"Expected both sides of the OR operator to be of type Boolean, but got type Text and Text."
	);
});

Deno.test("Type Checker - Integration test - validate greater operation", () => {
	const symbolTable = new SymbolTable();
	const typeChecker = new TypeChecker(symbolTable);

	const greater = {
		kind: "BinaryOperation",
		line: 1,
		left: {
			kind: "Value",
			type: "Number",
			line: 1,
			value: 5,
		} as Expression,
		right: {
			kind: "Value",
			line: 1,
			type: "Number",
			value: 10,
		} as Expression,
		operator: "GREATER",
	} as BinaryOperation;

	symbolTable.visitBinaryOperation(greater);
	assertEquals(typeChecker.visitBinaryOperation(greater), "Boolean");

	// check if the type checker throws an error when the operands are of different types
	const greater2 = {
		kind: "BinaryOperation",
		line: 1,
		left: {
			kind: "Value",
			type: "Number",
			line: 1,
			value: 5,
		} as Expression,
		right: {
			kind: "Value",
			line: 1,
			type: "Text",
			value: "hello",
		} as Expression,
		operator: "GREATER",
	} as BinaryOperation;

	const greater3 = {
		kind: "BinaryOperation",
		line: 1,
		left: {
			kind: "Value",
			type: "Text",
			line: 1,
			value: 5,
		} as Expression,
		right: {
			kind: "Value",
			line: 1,
			type: "Text",
			value: "hello",
		} as Expression,
		operator: "GREATER",
	} as BinaryOperation;

	symbolTable.visitBinaryOperation(greater2);
	assertThrows(
		() => typeChecker.visitBinaryOperation(greater2),
		Error,
		"Expected both sides of the binary operation to be of type Number, but got type Number and Text."
	);

	symbolTable.visitBinaryOperation(greater3);
	assertThrows(
		() => typeChecker.visitBinaryOperation(greater3),
		Error,
		"Expected both sides of the binary operation to be of type Number, but got type Text and Text."
	);
});

Deno.test("Type Checker - Integration test - validate less operation", () => {
	const symbolTable = new SymbolTable();
	const typeChecker = new TypeChecker(symbolTable);

	const less = {
		kind: "BinaryOperation",
		line: 1,
		left: {
			kind: "Value",
			type: "Number",
			line: 1,
			value: 5,
		} as Expression,
		right: {
			kind: "Value",
			line: 1,
			type: "Number",
			value: 10,
		} as Expression,
		operator: "LESS",
	} as BinaryOperation;

	symbolTable.visitBinaryOperation(less);
	assertEquals(typeChecker.visitBinaryOperation(less), "Boolean");

	// check if the type checker throws an error when the operands are of different types
	const less2 = {
		kind: "BinaryOperation",
		line: 1,
		left: {
			kind: "Value",
			type: "Number",
			line: 1,
			value: 5,
		} as Expression,
		right: {
			kind: "Value",
			line: 1,
			type: "Text",
			value: "hello",
		} as Expression,
		operator: "LESS",
	} as BinaryOperation;

	const less3 = {
		kind: "BinaryOperation",
		line: 1,
		left: {
			kind: "Value",
			type: "Text",
			line: 1,
			value: 5,
		} as Expression,
		right: {
			kind: "Value",
			line: 1,
			type: "Text",
			value: "hello",
		} as Expression,
		operator: "LESS",
	} as BinaryOperation;

	symbolTable.visitBinaryOperation(less2);
	assertThrows(
		() => typeChecker.visitBinaryOperation(less2),
		Error,
		"Expected both sides of the binary operation to be of type Number, but got type Number and Text."
	);

	symbolTable.visitBinaryOperation(less3);
	assertThrows(
		() => typeChecker.visitBinaryOperation(less3),
		Error,
		"Expected both sides of the binary operation to be of type Number, but got type Text and Text."
	);
});
