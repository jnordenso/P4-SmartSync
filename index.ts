import { CharStream, CommonTokenStream, ErrorListener }  from 'antlr4';
import SmartSyncLexer from './Syntax Analysis/SmartSyncLexer.ts';
import SmartSyncParser from './Syntax Analysis/SmartSyncParser.ts';
import fs from 'node:fs';
import AstVisitor from './Syntax Analysis/AstBuilder.ts';
import util from 'node:util';
import SymbolTable from './Contextual Analysis/SymbolTable.ts';
import { Program } from './Syntax Analysis/AST.ts';

const filePath = './code.ss';
const input = fs.readFileSync(filePath, 'utf-8');

const chars = new CharStream(input);
const lexer = new SmartSyncLexer(chars);
const tokens = new CommonTokenStream(lexer);
const parser = new SmartSyncParser(tokens);
const astVisitor = new AstVisitor();
const symbolTable = new SymbolTable();

console.log("\nParsing...");

const cst = parser.program();
if (parser.syntaxErrorsCount > 0) {
    throw new Error("Syntax errors found. Exiting...");
}
console.log("\nNo syntax errors found. Continuing...");

console.log("\nBuilding AST...");

const ast = astVisitor.visitProgram(cst);

console.log("\nAST built successfully. Continuing...");

console.log("\nBuilding symbol table...");

const st = symbolTable.BuildSymbolTable(ast as Program);

console.log("\nSymbol table built successfully. Continuing...");