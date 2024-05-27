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
import { assert, assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";
import { assertSpyCalls, spy } from "https://deno.land/std@0.224.0/testing/mock.ts";

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

	const spyConsoleLog = spy(console, "log");

    let errorOccurred = false;
    try {
        console.log("\n---------------------------------------------------------\n");
        interpreter.visitProgram(dast as Program);
        console.log("\n---------------------------------------------------------\n");
    } catch (_error) {
        errorOccurred = true;
    }

	assert(!errorOccurred, "Interpreter failed to execute the program.");
	assertEquals(spyConsoleLog.calls[1].args.toString(), ">,Added number:");
	assertEquals(spyConsoleLog.calls[2].args.toString(), ">,5");
	assertEquals(spyConsoleLog.calls[3].args.toString(), ">,Added number:");
	assertEquals(spyConsoleLog.calls[4].args.toString(), ">,10");
	assertEquals(spyConsoleLog.calls[5].args.toString(), ">,Added number:");
	assertEquals(spyConsoleLog.calls[6].args.toString(), ">,15");
	assertEquals(spyConsoleLog.calls[7].args.toString(), ">,Average:");
	assertEquals(spyConsoleLog.calls[8].args.toString(), ">,10");
	assertEquals(spyConsoleLog.calls[9].args.toString(), ">,Added number:");
	assertEquals(spyConsoleLog.calls[10].args.toString(), ">,20");
	assertEquals(spyConsoleLog.calls[11].args.toString(), ">,Average:");
	assertEquals(spyConsoleLog.calls[12].args.toString(), ">,12.5");
	assertEquals(spyConsoleLog.calls[13].args.toString(), ">,");
	assertEquals(spyConsoleLog.calls[14].args.toString(), ">,Power of 2 to the power of 3:");
	assertEquals(spyConsoleLog.calls[15].args.toString(), ">,8");
	assertEquals(spyConsoleLog.calls[16].args.toString(), ">,Power of 7 to the power of 10:");
	assertEquals(spyConsoleLog.calls[17].args.toString(), ">,282475249");
	assertEquals(spyConsoleLog.calls[18].args.toString(), ">,");
	assertEquals(spyConsoleLog.calls[19].args.toString(), ">,Print Average history:");
	assertEquals(spyConsoleLog.calls[20].args.toString(), ">,");
	assertEquals(spyConsoleLog.calls[21].args.toString(), ">,Average:");
	assertEquals(spyConsoleLog.calls[22].args.toString(), ">,10");
	assertEquals(spyConsoleLog.calls[23].args.toString(), ">,Average:");
	assertEquals(spyConsoleLog.calls[24].args.toString(), ">,12.5");
	spyConsoleLog.restore();
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
	
	const spyConsoleLog = spy(console, "log");
    
    let errorOccurred = false;
    try {
        console.log("\n---------------------------------------------------------\n");
        interpreter.visitProgram(dast as Program);
        console.log("\n---------------------------------------------------------\n");
    } catch (_error) {
        errorOccurred = true;
    }

	assert(!errorOccurred, "Interpreter failed to execute the program.");
	assertEquals(spyConsoleLog.calls[1].args.toString(), ">,Grade: ");
	assertEquals(spyConsoleLog.calls[2].args.toString(), ">,99.75");
	assertEquals(spyConsoleLog.calls[3].args.toString(), ">,Grade is greater than 90");
	assertEquals(spyConsoleLog.calls[4].args.toString(), ">,Grade is 100");
	assertEquals(spyConsoleLog.calls[5].args.toString(), ">,Letter Grade: A");
	assertEquals(spyConsoleLog.calls[6].args.toString(), ">,Letter Grade2: B");
	assertEquals(spyConsoleLog.calls[7].args.toString(), ">,Grade: ");
	assertEquals(spyConsoleLog.calls[8].args.toString(), ">,86");
	assertEquals(spyConsoleLog.calls[9].args.toString(), ">, Letter Grade: B");
	assertEquals(spyConsoleLog.calls[10].args.toString(), ">,Grade: ");
	assertEquals(spyConsoleLog.calls[11].args.toString(), ">,87");
	assertEquals(spyConsoleLog.calls[12].args.toString(), ">, Letter Grade: B");
	assertEquals(spyConsoleLog.calls[13].args.toString(), ">,Grade: ");
	assertEquals(spyConsoleLog.calls[14].args.toString(), ">,88");
	assertEquals(spyConsoleLog.calls[15].args.toString(), ">, Letter Grade: B");
	assertEquals(spyConsoleLog.calls[16].args.toString(), ">,Grade: ");
	assertEquals(spyConsoleLog.calls[17].args.toString(), ">,89");
	assertEquals(spyConsoleLog.calls[18].args.toString(), ">, Letter Grade: B");
	assertEquals(spyConsoleLog.calls[19].args.toString(), ">,Grade: A");
	assertEquals(spyConsoleLog.calls[20].args.toString(), ">,Grade: ");
	assertEquals(spyConsoleLog.calls[21].args.toString(), ">,90");
	assertEquals(spyConsoleLog.calls[22].args.toString(), ">, Letter Grade: A");
	assertEquals(spyConsoleLog.calls[23].args.toString(), ">,Grade: A");
	assertEquals(spyConsoleLog.calls[24].args.toString(), ">,Grade: ");
	assertEquals(spyConsoleLog.calls[25].args.toString(), ">,91");
	assertEquals(spyConsoleLog.calls[26].args.toString(), ">, Letter Grade: A");
	assertEquals(spyConsoleLog.calls[27].args.toString(), ">,Grade: A");
	assertEquals(spyConsoleLog.calls[28].args.toString(), ">,Grade: ");
	assertEquals(spyConsoleLog.calls[29].args.toString(), ">,92");
	assertEquals(spyConsoleLog.calls[30].args.toString(), ">, Letter Grade: A");
	assertEquals(spyConsoleLog.calls[31].args.toString(), ">,Grade: A");
	assertEquals(spyConsoleLog.calls[32].args.toString(), ">,Grade: ");
	assertEquals(spyConsoleLog.calls[33].args.toString(), ">,93");
	assertEquals(spyConsoleLog.calls[34].args.toString(), ">, Letter Grade: A");
	assertEquals(spyConsoleLog.calls[35].args.toString(), ">,Grade: A");
	assertEquals(spyConsoleLog.calls[36].args.toString(), ">,Grade: ");
	assertEquals(spyConsoleLog.calls[37].args.toString(), ">,94");
	assertEquals(spyConsoleLog.calls[38].args.toString(), ">, Letter Grade: A");
	assertEquals(spyConsoleLog.calls[39].args.toString(), ">,Grade: A");
	assertEquals(spyConsoleLog.calls[40].args.toString(), ">,Grade: ");
	assertEquals(spyConsoleLog.calls[41].args.toString(), ">,95");
	assertEquals(spyConsoleLog.calls[42].args.toString(), ">, Letter Grade: A");
	assertEquals(spyConsoleLog.calls[43].args.toString(), ">,Grade: A");
	assertEquals(spyConsoleLog.calls[44].args.toString(), ">,Grade: ");
	assertEquals(spyConsoleLog.calls[45].args.toString(), ">,96");
	assertEquals(spyConsoleLog.calls[46].args.toString(), ">, Letter Grade: A");
	assertEquals(spyConsoleLog.calls[47].args.toString(), ">,Grade: A");
	assertEquals(spyConsoleLog.calls[48].args.toString(), ">,Grade: ");
	assertEquals(spyConsoleLog.calls[49].args.toString(), ">,97");
	assertEquals(spyConsoleLog.calls[50].args.toString(), ">, Letter Grade: A");
	assertEquals(spyConsoleLog.calls[51].args.toString(), ">,Grade: A");
	assertEquals(spyConsoleLog.calls[52].args.toString(), ">,Grade: ");
	assertEquals(spyConsoleLog.calls[53].args.toString(), ">,98");
	assertEquals(spyConsoleLog.calls[54].args.toString(), ">, Letter Grade: A");
	assertEquals(spyConsoleLog.calls[55].args.toString(), ">,Grade: A");
	assertEquals(spyConsoleLog.calls[56].args.toString(), ">,Grade: ");
	assertEquals(spyConsoleLog.calls[57].args.toString(), ">,99");
	assertEquals(spyConsoleLog.calls[58].args.toString(), ">, Letter Grade: A");
	assertEquals(spyConsoleLog.calls[59].args.toString(), ">,Grade: A");
	assertEquals(spyConsoleLog.calls[60].args.toString(), ">,Grade: ");
	assertEquals(spyConsoleLog.calls[61].args.toString(), ">,100");
	assertEquals(spyConsoleLog.calls[62].args.toString(), ">, Letter Grade: A");
	assertEquals(spyConsoleLog.calls[63].args.toString(), ">,2");
	assertEquals(spyConsoleLog.calls[64].args.toString(), ">,John Doe");

});