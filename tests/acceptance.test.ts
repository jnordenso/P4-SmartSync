import { CharStream, CommonTokenStream } from "antlr4";
import SmartSyncLexer from ".././Syntax Analysis/SmartSyncLexer.ts";
import SmartSyncParser from ".././Syntax Analysis/SmartSyncParser.ts";
import fs from "node:fs";
import AstBuilder from ".././Syntax Analysis/AstBuilder.ts";
import SymbolTable from ".././Contextual Analysis/SymbolTable.ts";
import { Program } from ".././Syntax Analysis/AST.ts";
import TypeChecker from ".././Contextual Analysis/TypeChecker.ts";
import Interpreter from ".././Contextual Analysis/Interpreter.ts";
import { ThrowingErrorListener, CustomBailErrorStrategy } from ".././customError.ts";
import { assertEquals, assertThrows, assert } from "https://deno.land/std@0.224.0/assert/mod.ts";

Deno.test("Acceptance test - Power and Average", () => {
	const filePath = "./tests/powerAverage.ss";
	const input = fs.readFileSync(filePath, "utf-8");

	const chars = new CharStream(input);
	const lexer = new SmartSyncLexer(chars);
	lexer.removeErrorListeners();
	lexer.addErrorListener(new ThrowingErrorListener());

	const tokens = new CommonTokenStream(lexer);
	const parser = new SmartSyncParser(tokens);

	// add BailErrorStrategy to stop parsing after first error
	parser._errHandler = new CustomBailErrorStrategy();

	const astBuilder = new AstBuilder();
	const symbolTable = new SymbolTable();

	const cst = parser.program();
	const ast = astBuilder.visitProgram(cst);

	const astJson = JSON.stringify(ast);
	fs.writeFileSync("ast.json", astJson);
	console.log("\nAST written to ast.json. Continuing...");

	const st = symbolTable.BuildSymbolTable(ast as Program);
	const typeChecker = new TypeChecker(st);
	const dast = typeChecker.visitProgram(ast as Program);
	const interpreter = new Interpreter(st);

    
    let errorOccurred = false;
    try {
        console.log("\n---------------------------------------------------------\n");
        interpreter.visitProgram(dast as Program);
        console.log("\n---------------------------------------------------------\n");
    } catch (_error) {
        errorOccurred = true;
    }

	assert(!errorOccurred, "Interpreter failed to execute the program.");
});

Deno.test("Acceptance test - grade calculator", () => {
	const filePath = "./tests/gradeCalc.ss";
	const input = fs.readFileSync(filePath, "utf-8");

	const chars = new CharStream(input);
	const lexer = new SmartSyncLexer(chars);
	lexer.removeErrorListeners();
	lexer.addErrorListener(new ThrowingErrorListener());

	const tokens = new CommonTokenStream(lexer);
	const parser = new SmartSyncParser(tokens);

	// add BailErrorStrategy to stop parsing after first error
	parser._errHandler = new CustomBailErrorStrategy();

	const astBuilder = new AstBuilder();
	const symbolTable = new SymbolTable();

	const cst = parser.program();
	const ast = astBuilder.visitProgram(cst);

	const astJson = JSON.stringify(ast);
	fs.writeFileSync("ast.json", astJson);
	console.log("\nAST written to ast.json. Continuing...");

	const st = symbolTable.BuildSymbolTable(ast as Program);
	const typeChecker = new TypeChecker(st);
	const dast = typeChecker.visitProgram(ast as Program);
	const interpreter = new Interpreter(st);

    
    let errorOccurred = false;
    try {
        console.log("\n---------------------------------------------------------\n");
        interpreter.visitProgram(dast as Program);
        console.log("\n---------------------------------------------------------\n");
    } catch (_error) {
        errorOccurred = true;
    }

	assert(!errorOccurred, "Interpreter failed to execute the program.");
});