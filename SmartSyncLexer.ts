// Generated from SmartSync.g4 by ANTLR 4.13.1
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
export default class SmartSyncLexer extends Lexer {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly T__28 = 29;
	public static readonly T__29 = 30;
	public static readonly T__30 = 31;
	public static readonly T__31 = 32;
	public static readonly T__32 = 33;
	public static readonly BOOL = 34;
	public static readonly TYPE = 35;
	public static readonly ID = 36;
	public static readonly STRING = 37;
	public static readonly NUMBER = 38;
	public static readonly DIGIT = 39;
	public static readonly ARITHMETIC_OP = 40;
	public static readonly LOGIC_OP = 41;
	public static readonly WS = 42;
	public static readonly COMMENT = 43;
	public static readonly EOF = Token.EOF;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	public static readonly literalNames: (string | null)[] = [ null, "'[]'", 
                                                            "'SIZE'", "'['", 
                                                            "']'", "'('", 
                                                            "','", "')'", 
                                                            "'='", "';'", 
                                                            "'WHILE'", "'{'", 
                                                            "'};'", "'IF'", 
                                                            "'}'", "'ELSE'", 
                                                            "'+'", "'-'", 
                                                            "'*'", "'/'", 
                                                            "'AND'", "'OR'", 
                                                            "'EQUAL'", "'NOT EQUAL'", 
                                                            "'GREATER'", 
                                                            "'LESS'", "'FUNCTION'", 
                                                            "'RETURN'", 
                                                            "';};'", "'OUTPUT'", 
                                                            "'DELAY'", "'PUSH'", 
                                                            "'PULL;'", "'SIZE;'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             "BOOL", "TYPE", 
                                                             "ID", "STRING", 
                                                             "NUMBER", "DIGIT", 
                                                             "ARITHMETIC_OP", 
                                                             "LOGIC_OP", 
                                                             "WS", "COMMENT" ];
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
		"T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", "T__16", 
		"T__17", "T__18", "T__19", "T__20", "T__21", "T__22", "T__23", "T__24", 
		"T__25", "T__26", "T__27", "T__28", "T__29", "T__30", "T__31", "T__32", 
		"BOOL", "TYPE", "ID", "STRING", "NUMBER", "DIGIT", "ARITHMETIC_OP", "LOGIC_OP", 
		"WS", "COMMENT",
	];


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(this, SmartSyncLexer._ATN, SmartSyncLexer.DecisionsToDFA, new PredictionContextCache());
	}

	public get grammarFileName(): string { return "SmartSync.g4"; }

	public get literalNames(): (string | null)[] { return SmartSyncLexer.literalNames; }
	public get symbolicNames(): (string | null)[] { return SmartSyncLexer.symbolicNames; }
	public get ruleNames(): string[] { return SmartSyncLexer.ruleNames; }

	public get serializedATN(): number[] { return SmartSyncLexer._serializedATN; }

	public get channelNames(): string[] { return SmartSyncLexer.channelNames; }

	public get modeNames(): string[] { return SmartSyncLexer.modeNames; }

	public static readonly _serializedATN: number[] = [4,0,43,340,6,-1,2,0,
	7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,
	7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,
	16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,
	2,24,7,24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,
	31,7,31,2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,
	7,38,2,39,7,39,2,40,7,40,2,41,7,41,2,42,7,42,1,0,1,0,1,0,1,1,1,1,1,1,1,
	1,1,1,1,2,1,2,1,3,1,3,1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,7,1,8,1,8,1,9,1,9,1,
	9,1,9,1,9,1,9,1,10,1,10,1,11,1,11,1,11,1,12,1,12,1,12,1,13,1,13,1,14,1,
	14,1,14,1,14,1,14,1,15,1,15,1,16,1,16,1,17,1,17,1,18,1,18,1,19,1,19,1,19,
	1,19,1,20,1,20,1,20,1,21,1,21,1,21,1,21,1,21,1,21,1,22,1,22,1,22,1,22,1,
	22,1,22,1,22,1,22,1,22,1,22,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,24,
	1,24,1,24,1,24,1,24,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,26,1,
	26,1,26,1,26,1,26,1,26,1,26,1,27,1,27,1,27,1,27,1,28,1,28,1,28,1,28,1,28,
	1,28,1,28,1,29,1,29,1,29,1,29,1,29,1,29,1,30,1,30,1,30,1,30,1,30,1,31,1,
	31,1,31,1,31,1,31,1,31,1,32,1,32,1,32,1,32,1,32,1,32,1,33,1,33,1,33,1,33,
	1,33,1,33,1,33,1,33,1,33,3,33,234,8,33,1,34,1,34,1,34,1,34,1,34,1,34,1,
	34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,3,34,253,8,34,1,35,
	1,35,5,35,257,8,35,10,35,12,35,260,9,35,1,36,1,36,5,36,264,8,36,10,36,12,
	36,267,9,36,1,36,1,36,1,37,3,37,272,8,37,1,37,4,37,275,8,37,11,37,12,37,
	276,1,37,1,37,4,37,281,8,37,11,37,12,37,282,3,37,285,8,37,1,38,1,38,1,39,
	1,39,1,40,1,40,1,40,1,40,1,40,1,40,1,40,1,40,1,40,1,40,1,40,1,40,1,40,1,
	40,1,40,1,40,1,40,1,40,1,40,1,40,1,40,1,40,1,40,1,40,1,40,1,40,1,40,1,40,
	1,40,1,40,3,40,321,8,40,1,41,4,41,324,8,41,11,41,12,41,325,1,41,1,41,1,
	42,1,42,5,42,332,8,42,10,42,12,42,335,9,42,1,42,1,42,1,42,1,42,2,265,333,
	0,43,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,25,13,27,
	14,29,15,31,16,33,17,35,18,37,19,39,20,41,21,43,22,45,23,47,24,49,25,51,
	26,53,27,55,28,57,29,59,30,61,31,63,32,65,33,67,34,69,35,71,36,73,37,75,
	38,77,39,79,40,81,41,83,42,85,43,1,0,5,2,0,65,90,97,122,3,0,48,57,65,90,
	97,122,1,0,48,57,3,0,42,43,45,45,47,47,3,0,9,10,13,13,32,32,355,0,1,1,0,
	0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,
	0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,
	0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,33,1,0,0,0,0,35,1,
	0,0,0,0,37,1,0,0,0,0,39,1,0,0,0,0,41,1,0,0,0,0,43,1,0,0,0,0,45,1,0,0,0,
	0,47,1,0,0,0,0,49,1,0,0,0,0,51,1,0,0,0,0,53,1,0,0,0,0,55,1,0,0,0,0,57,1,
	0,0,0,0,59,1,0,0,0,0,61,1,0,0,0,0,63,1,0,0,0,0,65,1,0,0,0,0,67,1,0,0,0,
	0,69,1,0,0,0,0,71,1,0,0,0,0,73,1,0,0,0,0,75,1,0,0,0,0,77,1,0,0,0,0,79,1,
	0,0,0,0,81,1,0,0,0,0,83,1,0,0,0,0,85,1,0,0,0,1,87,1,0,0,0,3,90,1,0,0,0,
	5,95,1,0,0,0,7,97,1,0,0,0,9,99,1,0,0,0,11,101,1,0,0,0,13,103,1,0,0,0,15,
	105,1,0,0,0,17,107,1,0,0,0,19,109,1,0,0,0,21,115,1,0,0,0,23,117,1,0,0,0,
	25,120,1,0,0,0,27,123,1,0,0,0,29,125,1,0,0,0,31,130,1,0,0,0,33,132,1,0,
	0,0,35,134,1,0,0,0,37,136,1,0,0,0,39,138,1,0,0,0,41,142,1,0,0,0,43,145,
	1,0,0,0,45,151,1,0,0,0,47,161,1,0,0,0,49,169,1,0,0,0,51,174,1,0,0,0,53,
	183,1,0,0,0,55,190,1,0,0,0,57,194,1,0,0,0,59,201,1,0,0,0,61,207,1,0,0,0,
	63,212,1,0,0,0,65,218,1,0,0,0,67,233,1,0,0,0,69,252,1,0,0,0,71,254,1,0,
	0,0,73,261,1,0,0,0,75,271,1,0,0,0,77,286,1,0,0,0,79,288,1,0,0,0,81,320,
	1,0,0,0,83,323,1,0,0,0,85,329,1,0,0,0,87,88,5,91,0,0,88,89,5,93,0,0,89,
	2,1,0,0,0,90,91,5,83,0,0,91,92,5,73,0,0,92,93,5,90,0,0,93,94,5,69,0,0,94,
	4,1,0,0,0,95,96,5,91,0,0,96,6,1,0,0,0,97,98,5,93,0,0,98,8,1,0,0,0,99,100,
	5,40,0,0,100,10,1,0,0,0,101,102,5,44,0,0,102,12,1,0,0,0,103,104,5,41,0,
	0,104,14,1,0,0,0,105,106,5,61,0,0,106,16,1,0,0,0,107,108,5,59,0,0,108,18,
	1,0,0,0,109,110,5,87,0,0,110,111,5,72,0,0,111,112,5,73,0,0,112,113,5,76,
	0,0,113,114,5,69,0,0,114,20,1,0,0,0,115,116,5,123,0,0,116,22,1,0,0,0,117,
	118,5,125,0,0,118,119,5,59,0,0,119,24,1,0,0,0,120,121,5,73,0,0,121,122,
	5,70,0,0,122,26,1,0,0,0,123,124,5,125,0,0,124,28,1,0,0,0,125,126,5,69,0,
	0,126,127,5,76,0,0,127,128,5,83,0,0,128,129,5,69,0,0,129,30,1,0,0,0,130,
	131,5,43,0,0,131,32,1,0,0,0,132,133,5,45,0,0,133,34,1,0,0,0,134,135,5,42,
	0,0,135,36,1,0,0,0,136,137,5,47,0,0,137,38,1,0,0,0,138,139,5,65,0,0,139,
	140,5,78,0,0,140,141,5,68,0,0,141,40,1,0,0,0,142,143,5,79,0,0,143,144,5,
	82,0,0,144,42,1,0,0,0,145,146,5,69,0,0,146,147,5,81,0,0,147,148,5,85,0,
	0,148,149,5,65,0,0,149,150,5,76,0,0,150,44,1,0,0,0,151,152,5,78,0,0,152,
	153,5,79,0,0,153,154,5,84,0,0,154,155,5,32,0,0,155,156,5,69,0,0,156,157,
	5,81,0,0,157,158,5,85,0,0,158,159,5,65,0,0,159,160,5,76,0,0,160,46,1,0,
	0,0,161,162,5,71,0,0,162,163,5,82,0,0,163,164,5,69,0,0,164,165,5,65,0,0,
	165,166,5,84,0,0,166,167,5,69,0,0,167,168,5,82,0,0,168,48,1,0,0,0,169,170,
	5,76,0,0,170,171,5,69,0,0,171,172,5,83,0,0,172,173,5,83,0,0,173,50,1,0,
	0,0,174,175,5,70,0,0,175,176,5,85,0,0,176,177,5,78,0,0,177,178,5,67,0,0,
	178,179,5,84,0,0,179,180,5,73,0,0,180,181,5,79,0,0,181,182,5,78,0,0,182,
	52,1,0,0,0,183,184,5,82,0,0,184,185,5,69,0,0,185,186,5,84,0,0,186,187,5,
	85,0,0,187,188,5,82,0,0,188,189,5,78,0,0,189,54,1,0,0,0,190,191,5,59,0,
	0,191,192,5,125,0,0,192,193,5,59,0,0,193,56,1,0,0,0,194,195,5,79,0,0,195,
	196,5,85,0,0,196,197,5,84,0,0,197,198,5,80,0,0,198,199,5,85,0,0,199,200,
	5,84,0,0,200,58,1,0,0,0,201,202,5,68,0,0,202,203,5,69,0,0,203,204,5,76,
	0,0,204,205,5,65,0,0,205,206,5,89,0,0,206,60,1,0,0,0,207,208,5,80,0,0,208,
	209,5,85,0,0,209,210,5,83,0,0,210,211,5,72,0,0,211,62,1,0,0,0,212,213,5,
	80,0,0,213,214,5,85,0,0,214,215,5,76,0,0,215,216,5,76,0,0,216,217,5,59,
	0,0,217,64,1,0,0,0,218,219,5,83,0,0,219,220,5,73,0,0,220,221,5,90,0,0,221,
	222,5,69,0,0,222,223,5,59,0,0,223,66,1,0,0,0,224,225,5,84,0,0,225,226,5,
	82,0,0,226,227,5,85,0,0,227,234,5,69,0,0,228,229,5,70,0,0,229,230,5,65,
	0,0,230,231,5,76,0,0,231,232,5,83,0,0,232,234,5,69,0,0,233,224,1,0,0,0,
	233,228,1,0,0,0,234,68,1,0,0,0,235,236,5,78,0,0,236,237,5,117,0,0,237,238,
	5,109,0,0,238,239,5,98,0,0,239,240,5,101,0,0,240,253,5,114,0,0,241,242,
	5,84,0,0,242,243,5,101,0,0,243,244,5,120,0,0,244,253,5,116,0,0,245,246,
	5,66,0,0,246,247,5,111,0,0,247,248,5,111,0,0,248,249,5,108,0,0,249,250,
	5,101,0,0,250,251,5,97,0,0,251,253,5,110,0,0,252,235,1,0,0,0,252,241,1,
	0,0,0,252,245,1,0,0,0,253,70,1,0,0,0,254,258,7,0,0,0,255,257,7,1,0,0,256,
	255,1,0,0,0,257,260,1,0,0,0,258,256,1,0,0,0,258,259,1,0,0,0,259,72,1,0,
	0,0,260,258,1,0,0,0,261,265,5,34,0,0,262,264,9,0,0,0,263,262,1,0,0,0,264,
	267,1,0,0,0,265,266,1,0,0,0,265,263,1,0,0,0,266,268,1,0,0,0,267,265,1,0,
	0,0,268,269,5,34,0,0,269,74,1,0,0,0,270,272,5,45,0,0,271,270,1,0,0,0,271,
	272,1,0,0,0,272,274,1,0,0,0,273,275,7,2,0,0,274,273,1,0,0,0,275,276,1,0,
	0,0,276,274,1,0,0,0,276,277,1,0,0,0,277,284,1,0,0,0,278,280,5,46,0,0,279,
	281,7,2,0,0,280,279,1,0,0,0,281,282,1,0,0,0,282,280,1,0,0,0,282,283,1,0,
	0,0,283,285,1,0,0,0,284,278,1,0,0,0,284,285,1,0,0,0,285,76,1,0,0,0,286,
	287,7,2,0,0,287,78,1,0,0,0,288,289,7,3,0,0,289,80,1,0,0,0,290,291,5,69,
	0,0,291,292,5,81,0,0,292,293,5,85,0,0,293,294,5,65,0,0,294,321,5,76,0,0,
	295,296,5,78,0,0,296,297,5,79,0,0,297,298,5,84,0,0,298,299,5,32,0,0,299,
	300,5,69,0,0,300,301,5,81,0,0,301,302,5,85,0,0,302,303,5,65,0,0,303,321,
	5,76,0,0,304,305,5,65,0,0,305,306,5,78,0,0,306,321,5,68,0,0,307,308,5,79,
	0,0,308,321,5,82,0,0,309,310,5,71,0,0,310,311,5,82,0,0,311,312,5,69,0,0,
	312,313,5,65,0,0,313,314,5,84,0,0,314,315,5,69,0,0,315,321,5,82,0,0,316,
	317,5,76,0,0,317,318,5,69,0,0,318,319,5,83,0,0,319,321,5,83,0,0,320,290,
	1,0,0,0,320,295,1,0,0,0,320,304,1,0,0,0,320,307,1,0,0,0,320,309,1,0,0,0,
	320,316,1,0,0,0,321,82,1,0,0,0,322,324,7,4,0,0,323,322,1,0,0,0,324,325,
	1,0,0,0,325,323,1,0,0,0,325,326,1,0,0,0,326,327,1,0,0,0,327,328,6,41,0,
	0,328,84,1,0,0,0,329,333,5,35,0,0,330,332,9,0,0,0,331,330,1,0,0,0,332,335,
	1,0,0,0,333,334,1,0,0,0,333,331,1,0,0,0,334,336,1,0,0,0,335,333,1,0,0,0,
	336,337,5,35,0,0,337,338,1,0,0,0,338,339,6,42,0,0,339,86,1,0,0,0,12,0,233,
	252,258,265,271,276,282,284,320,325,333,1,6,0,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!SmartSyncLexer.__ATN) {
			SmartSyncLexer.__ATN = new ATNDeserializer().deserialize(SmartSyncLexer._serializedATN);
		}

		return SmartSyncLexer.__ATN;
	}


	static DecisionsToDFA = SmartSyncLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}