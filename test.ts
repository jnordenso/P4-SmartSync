import { CharStream, CommonTokenStream }  from 'antlr4';
import MyGrammarLexer from './HelloLexer.ts';
import MyGrammarParser from './HelloParser.ts';

const input = "hello parrt"
const chars = new CharStream(input); // replace this with a FileStream as required
const lexer = new MyGrammarLexer(chars);
const tokens = new CommonTokenStream(lexer);
const parser = new MyGrammarParser(tokens);
const tree = parser.r();
console.log(tree.toStringTree(parser.ruleNames, parser));