import { CharStream, CommonTokenStream }  from 'antlr4';
import MyGrammarLexer from './SmartSyncLexer.ts';
import MyGrammarParser from './SmartSyncParser.ts';
import fs from 'node:fs';

const filePath = './code.ss';
const input = fs.readFileSync(filePath, 'utf-8');

const chars = new CharStream(input);
const lexer = new MyGrammarLexer(chars);
const tokens = new CommonTokenStream(lexer);
const parser = new MyGrammarParser(tokens);
const tree = parser.program();

console.log("\nParsed tree:");
console.log(tree.toStringTree(parser.ruleNames, parser));