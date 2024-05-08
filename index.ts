import { CharStream, CommonTokenStream }  from 'antlr4';
import SmartSyncLexer from './SmartSyncLexer.ts';
import SmartSyncParser from './SmartSyncParser.ts';
import fs from 'node:fs';
import AstVisitor from './AstBuilder.ts';
import util from 'node:util';

const filePath = './code2.ss';
const input = fs.readFileSync(filePath, 'utf-8');

const chars = new CharStream(input);
const lexer = new SmartSyncLexer(chars);
const tokens = new CommonTokenStream(lexer);
const parser = new SmartSyncParser(tokens);
const astVisitor = new AstVisitor();
const tree = parser.program();

console.log("\nParsed tree:");
console.log(tree.toStringTree(parser.ruleNames, parser));


console.log("\nAST:");
console.log(util.inspect(astVisitor.visitProgram(tree), false, null, true /* enable colors */));