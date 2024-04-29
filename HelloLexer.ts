// Generated from Hello.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
import {
	ATN,
	ATNDeserializer,
	CharStream,
	DecisionState, DFA,
	Lexer,
	LexerATNSimulator,
	RuleContext,
	PredictionContextCache,
	Token
} from "antlr4";
export default class HelloLexer extends Lexer {
	public static readonly T__0 = 1;
	public static readonly ID = 2;
	public static readonly WS = 3;
	public static readonly EOF = Token.EOF;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	public static readonly literalNames: (string | null)[] = [ null, "'hello'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             "ID", "WS" ];
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"T__0", "ID", "WS",
	];


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(this, HelloLexer._ATN, HelloLexer.DecisionsToDFA, new PredictionContextCache());
	}

	public get grammarFileName(): string { return "Hello.g4"; }

	public get literalNames(): (string | null)[] { return HelloLexer.literalNames; }
	public get symbolicNames(): (string | null)[] { return HelloLexer.symbolicNames; }
	public get ruleNames(): string[] { return HelloLexer.ruleNames; }

	public get serializedATN(): number[] { return HelloLexer._serializedATN; }

	public get channelNames(): string[] { return HelloLexer.channelNames; }

	public get modeNames(): string[] { return HelloLexer.modeNames; }

	public static readonly _serializedATN: number[] = [4,0,3,25,6,-1,2,0,7,
	0,2,1,7,1,2,2,7,2,1,0,1,0,1,0,1,0,1,0,1,0,1,1,4,1,15,8,1,11,1,12,1,16,1,
	2,4,2,20,8,2,11,2,12,2,21,1,2,1,2,0,0,3,1,1,3,2,5,3,1,0,2,1,0,97,122,3,
	0,9,10,13,13,32,32,26,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,1,7,1,0,0,0,3,
	14,1,0,0,0,5,19,1,0,0,0,7,8,5,104,0,0,8,9,5,101,0,0,9,10,5,108,0,0,10,11,
	5,108,0,0,11,12,5,111,0,0,12,2,1,0,0,0,13,15,7,0,0,0,14,13,1,0,0,0,15,16,
	1,0,0,0,16,14,1,0,0,0,16,17,1,0,0,0,17,4,1,0,0,0,18,20,7,1,0,0,19,18,1,
	0,0,0,20,21,1,0,0,0,21,19,1,0,0,0,21,22,1,0,0,0,22,23,1,0,0,0,23,24,6,2,
	0,0,24,6,1,0,0,0,3,0,16,21,1,6,0,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!HelloLexer.__ATN) {
			HelloLexer.__ATN = new ATNDeserializer().deserialize(HelloLexer._serializedATN);
		}

		return HelloLexer.__ATN;
	}


	static DecisionsToDFA = HelloLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}