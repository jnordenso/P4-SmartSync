import { CharStream, CommonTokenStream }  from 'antlr4';
import MyGrammarLexer from './SmartSyncLexer.ts';
import MyGrammarParser from './SmartSyncParser.ts';

const input = 'Number x = 5; x = x + 7 * (10 / 100); Text y = "Hello"; y = y + " World"; OUTPUT x;'
const chars = new CharStream(input); // replace this with a FileStream as required
const lexer = new MyGrammarLexer(chars);
const tokens = new CommonTokenStream(lexer);
const parser = new MyGrammarParser(tokens);
const tree = parser.program();
console.log(tree.toStringTree(parser.ruleNames, parser));