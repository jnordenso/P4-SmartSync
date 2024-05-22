import { assertEquals, assertThrows, assert } from "https://deno.land/std@0.224.0/assert/mod.ts";
import SymbolTable from "../Contextual Analysis/SymbolTable.ts";
import { Program, Declaration, Expression, Line, Function, IndexAssignment, Push, Pull, Size, IndexOf } from "../Syntax Analysis/AST.ts";
import { assertSpyCalls, spy } from "https://deno.land/std@0.224.0/testing/mock.ts";

// Correctly creates a new scope when entering a program, function, or control structure
Deno.test("SymbolTable - Unit test - Creating new scope", () => {
	const symbolTable = new SymbolTable();
	const program: Program = { kind: "Program", body: [], line: 1 };
	symbolTable.BuildSymbolTable(program);
	assertEquals(symbolTable.scopes.size, 1);
	assertEquals(symbolTable.stackScopes.length, 0); // Exits scope after visiting
});

// Ensures reserved keywords are not declared as variables
Deno.test("SymbolTable - Unit test - Reserved keyword declaration", () => {
	const symbolTable = new SymbolTable();
	const declaration: Declaration = {
		kind: "Declaration",
		line: 1,
		type: "Number",
		identifier: { kind: "Identifier", line: 1, type: "Number", name: "IF" },
		value: { kind: "Value", type: "Number", line: 1, value: 10 } as Expression,
	};
	assertThrows(
		() => {
			symbolTable.visitDeclaration(declaration);
		},
		Error,
		"Variable name 'IF' is a reserved keyword"
	);
});

// Successfully adds symbols and function symbols to the current scope
Deno.test("SymbolTable - Unit test - Adding symbols", () => {
	const symbolTable = new SymbolTable();
	const program: Program = { kind: "Program", body: [], line: 1 };
	symbolTable.NewScope(program.body);
	symbolTable.AddSymbol("x", "Number", { kind: "Declaration", line: 2 });
	assertEquals(symbolTable.stackScopes[0].symbols.has("x"), true);
});

// Correctly exits a scope and returns to the parent scope
Deno.test("SymbolTable - Unit test - Exiting scope", () => {
	const symbolTable = new SymbolTable();
	const program: Program = { kind: "Program", body: [], line: 1 };
	symbolTable.visitProgram(program);
	symbolTable.NewScope([]);
	symbolTable.ExitScope();
	assertEquals(symbolTable.currentBlock, program.body);
});

// Properly looks up symbols and function symbols in the current and parent scopes
Deno.test("SymbolTable - Unit test - Symbol lookup", () => {
	const symbolTable = new SymbolTable();
	const program = { kind: "Program", body: [], line: 1 };
	symbolTable.NewScope(program.body);
	symbolTable.AddSymbol("x", "Number", { kind: "Declaration", line: 2 });
	const foundSymbol = symbolTable.LookupSymbol("x", program.body);
	assertEquals(foundSymbol !== null, true);
});

// Correctly handles nested scopes
Deno.test("SymbolTable - Unit test - Nested scopes", () => {
	const symbolTable = new SymbolTable();
	const program = { kind: "Program", body: [], line: 1 };
	symbolTable.NewScope(program.body);
	symbolTable.AddSymbol("x", "Number", { kind: "Declaration", line: 2 });
	symbolTable.NewScope([]);
	const foundSymbol = symbolTable.LookupSymbol("x", program.body);
	assertEquals(foundSymbol !== null, true); // Symbol should be visible in the parent scope
});

// Correctly handles nested scopes
Deno.test("SymbolTable - Unit test - Nested scopes cant find symbol after exit", () => {
	const symbolTable = new SymbolTable();
	const program = { kind: "Program", body: [], line: 1 };
	symbolTable.NewScope(program.body);
	symbolTable.NewScope([]);
	symbolTable.AddSymbol("x", "Number", { kind: "Declaration", line: 2 });
	symbolTable.ExitScope();
	const foundSymbol = symbolTable.LookupSymbol("x", program.body);
	assertEquals(foundSymbol !== null, false); // Symbol should not be found in the parent scope
});

// Throws an error when declaring a symbol or function that already exists in the current scope
Deno.test("SymbolTable - Unit test - Duplicate declaration error", () => {
	const symbolTable = new SymbolTable();
	const program = { kind: "Program", body: [], line: 1 };
	symbolTable.NewScope(program.body);
	symbolTable.AddSymbol("x", "Number", { kind: "Declaration", line: 2 });
	assertThrows(
		() => {
			symbolTable.AddSymbol("x", "Number", { kind: "Declaration", line: 3 });
		},
		Error,
		"Variable 'x' has already been declared in this scope"
	);
});

// Throws an error when a return statement is used outside of a function scope
Deno.test("SymbolTable - Unit test - Return outside function error", () => {
	const symbolTable = new SymbolTable();
	const program = { kind: "Program", body: [], line: 1 };
	symbolTable.NewScope(program.body);
	assertThrows(
		() => {
			symbolTable.visitReturnValue({
				kind: "Return",
				line: 2,
				value: { kind: "Value", line: 2, value: 10 } as Expression,
			});
		},
		Error,
		"Return statement is not allowed outside of a function"
	);
});
// Allows return statements inside function bodies
Deno.test("SymbolTable - Unit test - Return inside function body", () => {
	const symbolTable = new SymbolTable();
	const program = { kind: "Program", body: [], line: 1 };
	const functionVal: Function = {
		kind: "Function",
		line: 2,
		type: "Number",
		identifier: { kind: "Identifier", line: 2, type: "Number", name: "f" },
		parameters: [],
		body: [{ kind: "Return", line: 2, value: { kind: "Value", line: 2, value: 10 } as Expression } as Line],
	};
	symbolTable.NewScope(program.body);
    const visitReturnSpy = spy(symbolTable, "visitReturnValue");
	symbolTable.visitFunction(functionVal);

    assertSpyCalls(visitReturnSpy, 1);
	assertEquals(symbolTable.stackScopes[0].functionSymbols.has("f"), true);
});

// Throws an error when an undeclared identifier is used in expressions
Deno.test("SymbolTable - Unit test - Undeclared identifier error", () => {
	const symbolTable = new SymbolTable();
	const program = { kind: "Program", body: [], line: 1 };
	symbolTable.NewScope(program.body);
	assertThrows(
		() => {
			symbolTable.visitIdentifier({ kind: "Identifier", line: 2, type: "Number", name: "x" });
		},
		Error,
		"Variable 'x' has not been declared"
	);
});

// Handles empty program bodies or function bodies without throwing errors
Deno.test("SymbolTable - Unit test - Handling empty bodies", () => {
	const symbolTable = new SymbolTable();
	const program: Program = { kind: "Program", body: [], line: 1 };
	assert(() => {
		symbolTable.visitProgram(program);
	});
});

// Correctly handles function declarations
Deno.test("SymbolTable - Unit test - Function declaration", () => {
	const symbolTable = new SymbolTable();
	const program: Program = { kind: "Program", body: [], line: 1 };
	symbolTable.NewScope(program.body);
	symbolTable.visitFunction({
		kind: "Function",
		line: 2,
		type: "Number",
		identifier: { kind: "Identifier", line: 2, type: "Number", name: "f" },
		parameters: [],
		body: [],
	});
	symbolTable.visitFunction({
		kind: "Function",
		line: 2,
		type: "Text",
		identifier: { kind: "Identifier", line: 2, type: "Number", name: "c" },
		parameters: [],
		body: [],
	});
	symbolTable.visitFunction({
		kind: "Function",
		line: 2,
		type: "Boolean",
		identifier: { kind: "Identifier", line: 2, type: "Number", name: "d" },
		parameters: [],
		body: [],
	});
	const foundSymbol = symbolTable.LookupFunctionSymbol("f", program.body);
	const foundSymbol1 = symbolTable.LookupFunctionSymbol("c", program.body);
	const foundSymbol2 = symbolTable.LookupFunctionSymbol("d", program.body);
	assertEquals(foundSymbol !== null, true);
	assertEquals(foundSymbol1 !== null, true);
	assertEquals(foundSymbol2 !== null, true);
});

// Correctly handles function calls
Deno.test("SymbolTable - Unit test - Function call", () => {
	const symbolTable = new SymbolTable();
	const program: Program = { kind: "Program", body: [], line: 1 };
	symbolTable.NewScope(program.body);
	symbolTable.visitFunction({
		kind: "Function",
		line: 2,
		type: "Number",
		identifier: { kind: "Identifier", line: 2, type: "Number", name: "f" },
		parameters: [
			{ kind: "Identifier", line: 2, type: "Number", name: "x" },
			{ kind: "Identifier", line: 2, type: "Number", name: "y" },
		],
		body: [],
	});
	symbolTable.visitFunction({
		kind: "Function",
		line: 2,
		type: "Text",
		identifier: { kind: "Identifier", line: 2, type: "Number", name: "c" },
		parameters: [
			{ kind: "Identifier", line: 2, type: "Number", name: "x" },
			{ kind: "Identifier", line: 2, type: "Number", name: "y" },
		],
		body: [],
	});
	symbolTable.visitFunction({
		kind: "Function",
		line: 2,
		type: "Boolean",
		identifier: { kind: "Identifier", line: 2, type: "Number", name: "d" },
		parameters: [
			{ kind: "Identifier", line: 2, type: "Number", name: "x" },
			{ kind: "Identifier", line: 2, type: "Number", name: "y" },
		],
		body: [],
	});
	// call the functions
	symbolTable.visitFunction({
		kind: "Function",
		line: 2,
		identifier: { kind: "Identifier", line: 2, type: "Number", name: "f" },
		parameters: [
			{ kind: "Identifier", line: 2, type: "Number", name: "x" },
			{ kind: "Identifier", line: 2, type: "Number", name: "y" },
		],
	});
	symbolTable.visitFunction({
		kind: "Function",
		line: 2,
		identifier: { kind: "Identifier", line: 2, type: "Number", name: "c" },
		parameters: [
			{ kind: "Identifier", line: 2, type: "Number", name: "x" },
			{ kind: "Identifier", line: 2, type: "Number", name: "y" },
		],
	});
	symbolTable.visitFunction({
		kind: "Function",
		line: 2,
		identifier: { kind: "Identifier", line: 2, type: "Number", name: "d" },
		parameters: [
			{ kind: "Identifier", line: 2, type: "Number", name: "x" },
			{ kind: "Identifier", line: 2, type: "Number", name: "y" },
		],
	});
	const foundSymbol = symbolTable.LookupFunctionSymbol("f", program.body);
	const foundSymbol1 = symbolTable.LookupFunctionSymbol("c", program.body);
	const foundSymbol2 = symbolTable.LookupFunctionSymbol("d", program.body);
	assertEquals(foundSymbol !== null, true);
	assertEquals(foundSymbol1 !== null, true);
	assertEquals(foundSymbol2 !== null, true);
});

// Throws an error when a function is declared with the same name as a variable
Deno.test("SymbolTable - Unit test - Function variable name conflict", () => {
	const symbolTable = new SymbolTable();
	const program: Program = { kind: "Program", body: [], line: 1 };
	symbolTable.NewScope(program.body);
	symbolTable.AddSymbol("f", "Number", { kind: "Declaration", line: 2 });
	assertThrows(
		() => {
			symbolTable.visitFunction({
				kind: "Function",
				line: 2,
				type: "Number",
				identifier: { kind: "Identifier", line: 2, type: "Number", name: "f" },
				parameters: [],
				body: [],
			});
		},
		Error,
		"Variable 'f' has already been declared in this scope"
	);
});

// Throws an error when a function is called with the wrong number of arguments
Deno.test("SymbolTable - Unit test - Function call argument count error", () => {
	const symbolTable = new SymbolTable();
	const program: Program = { kind: "Program", body: [], line: 1 };
	symbolTable.NewScope(program.body);
	symbolTable.visitFunction({
		kind: "Function",
		line: 2,
		type: "Number",
		identifier: { kind: "Identifier", line: 2, type: "Number", name: "f" },
		parameters: [
			{ kind: "Identifier", line: 2, type: "Number", name: "x" },
			{ kind: "Identifier", line: 2, type: "Number", name: "y" },
		],
		body: [],
	});
	assertThrows(
		() => {
			symbolTable.visitFunction({
				kind: "Function",
				line: 2,
				identifier: { kind: "Identifier", line: 2, type: "Number", name: "f" },
				parameters: [{ kind: "Identifier", line: 2, type: "Number", name: "x" }],
			});
		},
		Error,
		"Function 'f' has the wrong number of parameters, expected 2 but got 1"
	);
	assertThrows(
		() => {
			symbolTable.visitFunction({
				kind: "Function",
				line: 2,
				identifier: { kind: "Identifier", line: 2, type: "Number", name: "f" },
				parameters: [
					{ kind: "Identifier", line: 2, type: "Number", name: "x" },
					{ kind: "Identifier", line: 2, type: "Number", name: "y" },
					{ kind: "Identifier", line: 2, type: "Number", name: "z" },
				],
			});
		},
		Error,
		"Function 'f' has the wrong number of parameters, expected 2 but got 3"
	);
});

// Array declarations
Deno.test("SymbolTable - Unit test - Array declaration", () => {
	const symbolTable = new SymbolTable();
	const program: Program = { kind: "Program", body: [], line: 1 };
	symbolTable.NewScope(program.body);
	symbolTable.visitArrayDeclaration({
		kind: "ArrayDeclaration",
		line: 2,
		type: "Number",
		identifier: { kind: "Identifier", line: 2, type: "Number", name: "x" },
		value: [{ kind: "Value", line: 2, value: 10 } as Expression],
	});
	symbolTable.visitArrayDeclaration({
		kind: "ArrayDeclaration",
		line: 2,
		type: "Text",
		identifier: { kind: "Identifier", line: 2, type: "Text", name: "y" },
		value: [
			{ kind: "Value", line: 2, value: "Hey" } as Expression,
			{ kind: "Value", line: 2, value: "Hello" } as Expression,
		],
	});
	symbolTable.visitDeclaration({
		kind: "Declaration",
		line: 1,
		type: "Boolean",
		identifier: { kind: "Identifier", line: 1, type: "Boolean", name: "a" },
		value: { kind: "Value", line: 1, value: true } as Expression,
	});

	symbolTable.visitArrayDeclaration({
		kind: "ArrayDeclaration",
		line: 2,
		type: "Boolean",
		identifier: { kind: "Identifier", line: 2, type: "Boolean", name: "z" },
		value: [
			{ kind: "Identifier", line: 2, name: "a" } as Expression,
			{ kind: "Value", line: 2, value: true } as Expression,
		],
	});
	const foundSymbol = symbolTable.LookupSymbol("x", program.body);
	const foundSymbol1 = symbolTable.LookupSymbol("y", program.body);
	const foundSymbol2 = symbolTable.LookupSymbol("z", program.body);
	assertEquals(foundSymbol !== null, true);
	assertEquals(foundSymbol1 !== null, true);
	assertEquals(foundSymbol2 !== null, true);
});

// Ensure scopes are entered and exited correctly in control structures
Deno.test("SymbolTable - Unit test - Ensure scopes are entered and exited", () => {
	const symbolTable = new SymbolTable();
	const program: Program = { kind: "Program", body: [], line: 1 };
	symbolTable.NewScope(program.body);

    const newScopeSpy = spy(symbolTable, "NewScope");
    const exitScopeSpy = spy(symbolTable, "ExitScope");

	symbolTable.visitLine({
		kind: "IfStm",
		line: 2,
		condition: {
			kind: "BinaryOperation",
			line: 2,
			left: { kind: "Value", line: 2, value: 10 } as Expression,
			right: { kind: "Value", line: 2, value: 20 } as Expression,
			operator: "GREATER",
		},
		body: [],
	} as Expression);
    
        assertSpyCalls(newScopeSpy, 1);
        assertSpyCalls(exitScopeSpy, 1);

	symbolTable.visitLine({
		kind: "IfStm",
		line: 2,
		condition: {
			kind: "BinaryOperation",
			line: 2,
			left: { kind: "Value", line: 2, value: 10 } as Expression,
			right: { kind: "Value", line: 2, value: 20 } as Expression,
			operator: "GREATER",
		},
		body: [],
        else: {
            kind: "ElseStm",
            line: 3,
            body: [],
        }
	} as Expression);

    assertSpyCalls(newScopeSpy, 3); // 2 new scopes for if and else
    assertSpyCalls(exitScopeSpy, 3); // 2 exit scopes for if and else

	symbolTable.visitLine({
		kind: "WhileStm",
		line: 2,
		condition: {
			kind: "BinaryOperation",
			line: 2,
			left: { kind: "Value", line: 2, value: 10 } as Expression,
			right: { kind: "Value", line: 2, value: 20 } as Expression,
			operator: "GREATER",
		},
		body: [],
	} as Expression);

	assertSpyCalls(newScopeSpy, 4);
    assertSpyCalls(exitScopeSpy, 4);
});

// a bunch of random visits
Deno.test("SymbolTable - Unit test - Random visits", () => {
    const symbolTable = new SymbolTable();
	const program: Program = { kind: "Program", body: [], line: 1 };
	symbolTable.NewScope(program.body);

    const lookupSymbolSpy = spy(symbolTable, "LookupSymbol");

    symbolTable.visitDeclaration({
        kind: "Declaration",
        line: 2,
        type: "Number",
        identifier: { kind: "Identifier", type: "Number", line: 2, name: "x" },
        value: { kind: "Value", type: "Number", line: 2, value: 10 } as Expression,
    });

	symbolTable.visitArray({
		kind: "Array",
        line: 2,
        identifier: { kind: "Identifier", type: undefined, line: 2, name: "x" },
	});

    assertSpyCalls(lookupSymbolSpy, 3);

    const expressionSpy = spy(symbolTable, "visitExpression");

    symbolTable.visitArray({
        kind: "Array",
        line: 2,
        value: [
            { kind: "Value", type: "Number", line: 2, value: 10 } as Expression,
            { kind: "Value", type: "Number", line: 2, value: 20 } as Expression,
        ],
    });

    assertSpyCalls(expressionSpy, 2);

    const visitBinaryOperationSpy = spy(symbolTable, "visitBinaryOperation");
    const visitFunctionSpy = spy(symbolTable, "visitFunction");
    const visitArraySpy = spy(symbolTable, "visitArray");

    symbolTable.visitExpression({
        kind: "BinaryOperation",
        line: 2,
        left: { kind: "Value", type: "Number", line: 2, value: 10 } as Expression,
        right: { kind: "Value", type: "Number", line: 2, value: 20 } as Expression,
        operator: "GREATER",
    } as Expression);

    symbolTable.visitFunction({
        kind: "Function",
        line: 2,
        type: "Number",
        identifier: { kind: "Identifier", type: "Number", line: 2, name: "f" },
        parameters: [],
        body: [],
    } as Function);

    symbolTable.visitExpression({
        kind: "Function",
        line: 2,
        identifier: { kind: "Identifier", line: 2, name: "f" },
        parameters: [],
    } as Expression);

    symbolTable.visitExpression({
        kind: "Array",
        line: 2,
        value: [
            { kind: "Value", type: "Number", line: 2, value: 10 } as Expression,
            { kind: "Value", type: "Number", line: 2, value: 20 } as Expression,
        ],
    } as Expression);

    symbolTable.visitIndexAssignment({
        kind: "IndexAssignment",
        line: 2,
        identifier: { kind: "Identifier", line: 2, name: "x" },
        index: { kind: "Value", line: 2, value: 10 } as Expression,
        value: { kind: "Value", line: 2, value: 20 } as Expression,
    } as IndexAssignment);

    const visitIdentifierSpy = spy(symbolTable, "visitIdentifier");

    symbolTable.visitPush({
        kind: "Push",
        line: 2,
        identifier: { kind: "Identifier", line: 2, name: "x" },
        value: { kind: "Value", line: 2, value: 20 } as Expression,
    } as Push);

    symbolTable.visitPull({
        kind: "Pull",
        line: 2,
        identifier: { kind: "Identifier", line: 2, name: "x" },
    } as Pull);

    symbolTable.visitSize({
        kind: "Size",
        line: 2,
        identifier: { kind: "Identifier", line: 2, name: "x" },
    } as Size);

    symbolTable.visitIndexOf({
        kind: "IndexOf",
        line: 2,
        identifier: { kind: "Identifier", line: 2, name: "x" },
        index: { kind: "Value", line: 2, value: 10 } as Expression,
    } as IndexOf);

    symbolTable.visitOutput({
        kind: "Output",
        line: 2,
        value: { kind: "Value", line: 2, value: 10 } as Expression,
    });
    
    assertSpyCalls(visitIdentifierSpy, 4);
    
    assertSpyCalls(expressionSpy, 14); 
    
    assertSpyCalls(visitBinaryOperationSpy, 1);
    assertSpyCalls(visitFunctionSpy, 2);
    assertSpyCalls(visitArraySpy, 1);


});