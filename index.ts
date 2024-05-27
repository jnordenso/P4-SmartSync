import { CharStream, CommonTokenStream}  from 'antlr4';
import SmartSyncLexer from './Syntax Analysis/SmartSyncLexer.ts';
import SmartSyncParser from './Syntax Analysis/SmartSyncParser.ts';
import fs from 'node:fs';
import AstBuilder from './Syntax Analysis/AstBuilder.ts';
import SymbolTable from './Contextual Analysis/SymbolTable.ts';
import { Program } from './Syntax Analysis/AST.ts';
import TypeChecker from './Contextual Analysis/TypeChecker.ts';
import Interpreter from './Interpreter.ts';
import { ThrowingErrorListener, CustomBailErrorStrategy } from './customError.ts';

const filePath = './code2.ss';
const input = fs.readFileSync(filePath, 'utf-8');

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

new Promise((resolve, reject) => {
    try {
        //console.log("\nParsing...");

        const cst = parser.program();

        //console.log(cst.toStringTree(null, parser));

        //console.log("\nBuilding AST...");

        const ast = astBuilder.visitProgram(cst);

        const astJson = JSON.stringify(ast);
        fs.writeFileSync('ast.json', astJson);
        //console.log("\nAST written to ast.json. Continuing...");


        //console.log("\nAST built successfully. Continuing...");

        //console.log("\nBuilding symbol table...");

        const st = symbolTable.BuildSymbolTable(ast as Program);

        //console.log("\nSymbol table built successfully. Continuing...");

        //console.log("\nType checking...");

        const typeChecker = new TypeChecker(st);

        const dast = typeChecker.visitProgram(ast as Program);

        const dastJson = JSON.stringify(dast);
        fs.writeFileSync('dast.json', dastJson);
        //console.log("\nDAST written to dast.json. Continuing...");


        //console.log("\nType checking completed successfully. Continuing...");

        //console.log("\nCode Interpretation...");

        const interpreter = new Interpreter(st);

        //console.log("\nInterpreted code:");
        console.log("\n---------------------------------------------------------\n");

        interpreter.visitProgram(dast as Program);

        console.log("\n---------------------------------------------------------\n");

        resolve(void 0);
    } catch (e) {
        reject(e);
    }
}).catch((e) => {
    console.error(e.message);
});