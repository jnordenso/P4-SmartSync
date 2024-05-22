// Generated from ./Syntax Analysis/SmartSync.g4 by ANTLR 4.13.1
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
	public static readonly BOOL = 30;
	public static readonly TYPE = 31;
	public static readonly ID = 32;
	public static readonly STRING = 33;
	public static readonly NUMBER = 34;
	public static readonly DIGIT = 35;
	public static readonly ARITHMETIC_OP = 36;
	public static readonly LOGIC_OP = 37;
	public static readonly WS = 38;
	public static readonly COMMENT = 39;
	public static readonly EOF = Token.EOF;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	public static readonly literalNames: (string | null)[] = [ null, "'RETURN'", 
                                                            "';'", "'[]'", 
                                                            "'SIZE'", "'['", 
                                                            "']'", "'('", 
                                                            "','", "')'", 
                                                            "'='", "'WHILE'", 
                                                            "'{'", "'}'", 
                                                            "'IF'", "'ELSE'", 	
                                                            "'+'", "'-'", 
                                                            "'*'", "'/'", 
                                                            "'AND'", "'OR'", 
                                                            "'EQUAL'", "'NOT EQUAL'", 
                                                            "'GREATER'", 
                                                            "'LESS'", "'FUNCTION'", 
                                                            "'OUTPUT'", 
                                                            "'PUSH'", "'PULL'" ];
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
		"T__25", "T__26", "T__27", "T__28", "BOOL", "TYPE", "ID", "STRING", "NUMBER", 
		"DIGIT", "ARITHMETIC_OP", "LOGIC_OP", "WS", "COMMENT",
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

	public static readonly _serializedATN: number[] = [4,0,39,312,6,-1,2,0,
	7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,
	7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,
	16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,
	2,24,7,24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,
	31,7,31,2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,
	7,38,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,
	3,1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,7,1,8,1,8,1,9,1,9,1,10,1,10,1,10,1,10,1,
	10,1,10,1,11,1,11,1,12,1,12,1,13,1,13,1,13,1,14,1,14,1,14,1,14,1,14,1,15,
	1,15,1,16,1,16,1,17,1,17,1,18,1,18,1,19,1,19,1,19,1,19,1,20,1,20,1,20,1,
	21,1,21,1,21,1,21,1,21,1,21,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,
	1,22,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,24,1,24,1,24,1,24,1,24,1,
	25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,26,1,26,1,26,1,26,1,26,1,26,
	1,26,1,27,1,27,1,27,1,27,1,27,1,28,1,28,1,28,1,28,1,28,1,29,1,29,1,29,1,
	29,1,29,1,29,1,29,1,29,1,29,3,29,206,8,29,1,30,1,30,1,30,1,30,1,30,1,30,
	1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,3,30,225,8,30,1,
	31,1,31,5,31,229,8,31,10,31,12,31,232,9,31,1,32,1,32,5,32,236,8,32,10,32,
	12,32,239,9,32,1,32,1,32,1,33,3,33,244,8,33,1,33,4,33,247,8,33,11,33,12,
	33,248,1,33,1,33,4,33,253,8,33,11,33,12,33,254,3,33,257,8,33,1,34,1,34,
	1,35,1,35,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,
	36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,
	1,36,1,36,1,36,3,36,293,8,36,1,37,4,37,296,8,37,11,37,12,37,297,1,37,1,
	37,1,38,1,38,5,38,304,8,38,10,38,12,38,307,9,38,1,38,1,38,1,38,1,38,2,237,
	305,0,39,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,25,13,
	27,14,29,15,31,16,33,17,35,18,37,19,39,20,41,21,43,22,45,23,47,24,49,25,
	51,26,53,27,55,28,57,29,59,30,61,31,63,32,65,33,67,34,69,35,71,36,73,37,
	75,38,77,39,1,0,5,2,0,65,90,97,122,4,0,48,57,65,90,95,95,97,122,1,0,48,
	57,3,0,42,43,45,45,47,47,3,0,9,10,13,13,32,32,327,0,1,1,0,0,0,0,3,1,0,0,
	0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,
	0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,
	0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,33,1,0,0,0,0,35,1,0,0,0,0,37,1,
	0,0,0,0,39,1,0,0,0,0,41,1,0,0,0,0,43,1,0,0,0,0,45,1,0,0,0,0,47,1,0,0,0,
	0,49,1,0,0,0,0,51,1,0,0,0,0,53,1,0,0,0,0,55,1,0,0,0,0,57,1,0,0,0,0,59,1,
	0,0,0,0,61,1,0,0,0,0,63,1,0,0,0,0,65,1,0,0,0,0,67,1,0,0,0,0,69,1,0,0,0,
	0,71,1,0,0,0,0,73,1,0,0,0,0,75,1,0,0,0,0,77,1,0,0,0,1,79,1,0,0,0,3,86,1,
	0,0,0,5,88,1,0,0,0,7,91,1,0,0,0,9,96,1,0,0,0,11,98,1,0,0,0,13,100,1,0,0,
	0,15,102,1,0,0,0,17,104,1,0,0,0,19,106,1,0,0,0,21,108,1,0,0,0,23,114,1,
	0,0,0,25,116,1,0,0,0,27,118,1,0,0,0,29,121,1,0,0,0,31,126,1,0,0,0,33,128,
	1,0,0,0,35,130,1,0,0,0,37,132,1,0,0,0,39,134,1,0,0,0,41,138,1,0,0,0,43,
	141,1,0,0,0,45,147,1,0,0,0,47,157,1,0,0,0,49,165,1,0,0,0,51,170,1,0,0,0,
	53,179,1,0,0,0,55,186,1,0,0,0,57,191,1,0,0,0,59,205,1,0,0,0,61,224,1,0,
	0,0,63,226,1,0,0,0,65,233,1,0,0,0,67,243,1,0,0,0,69,258,1,0,0,0,71,260,
	1,0,0,0,73,292,1,0,0,0,75,295,1,0,0,0,77,301,1,0,0,0,79,80,5,82,0,0,80,
	81,5,69,0,0,81,82,5,84,0,0,82,83,5,85,0,0,83,84,5,82,0,0,84,85,5,78,0,0,
	85,2,1,0,0,0,86,87,5,59,0,0,87,4,1,0,0,0,88,89,5,91,0,0,89,90,5,93,0,0,
	90,6,1,0,0,0,91,92,5,83,0,0,92,93,5,73,0,0,93,94,5,90,0,0,94,95,5,69,0,
	0,95,8,1,0,0,0,96,97,5,91,0,0,97,10,1,0,0,0,98,99,5,93,0,0,99,12,1,0,0,
	0,100,101,5,40,0,0,101,14,1,0,0,0,102,103,5,44,0,0,103,16,1,0,0,0,104,105,
	5,41,0,0,105,18,1,0,0,0,106,107,5,61,0,0,107,20,1,0,0,0,108,109,5,87,0,
	0,109,110,5,72,0,0,110,111,5,73,0,0,111,112,5,76,0,0,112,113,5,69,0,0,113,
	22,1,0,0,0,114,115,5,123,0,0,115,24,1,0,0,0,116,117,5,125,0,0,117,26,1,
	0,0,0,118,119,5,73,0,0,119,120,5,70,0,0,120,28,1,0,0,0,121,122,5,69,0,0,
	122,123,5,76,0,0,123,124,5,83,0,0,124,125,5,69,0,0,125,30,1,0,0,0,126,127,
	5,43,0,0,127,32,1,0,0,0,128,129,5,45,0,0,129,34,1,0,0,0,130,131,5,42,0,
	0,131,36,1,0,0,0,132,133,5,47,0,0,133,38,1,0,0,0,134,135,5,65,0,0,135,136,
	5,78,0,0,136,137,5,68,0,0,137,40,1,0,0,0,138,139,5,79,0,0,139,140,5,82,
	0,0,140,42,1,0,0,0,141,142,5,69,0,0,142,143,5,81,0,0,143,144,5,85,0,0,144,
	145,5,65,0,0,145,146,5,76,0,0,146,44,1,0,0,0,147,148,5,78,0,0,148,149,5,
	79,0,0,149,150,5,84,0,0,150,151,5,32,0,0,151,152,5,69,0,0,152,153,5,81,
	0,0,153,154,5,85,0,0,154,155,5,65,0,0,155,156,5,76,0,0,156,46,1,0,0,0,157,
	158,5,71,0,0,158,159,5,82,0,0,159,160,5,69,0,0,160,161,5,65,0,0,161,162,
	5,84,0,0,162,163,5,69,0,0,163,164,5,82,0,0,164,48,1,0,0,0,165,166,5,76,
	0,0,166,167,5,69,0,0,167,168,5,83,0,0,168,169,5,83,0,0,169,50,1,0,0,0,170,
	171,5,70,0,0,171,172,5,85,0,0,172,173,5,78,0,0,173,174,5,67,0,0,174,175,
	5,84,0,0,175,176,5,73,0,0,176,177,5,79,0,0,177,178,5,78,0,0,178,52,1,0,
	0,0,179,180,5,79,0,0,180,181,5,85,0,0,181,182,5,84,0,0,182,183,5,80,0,0,
	183,184,5,85,0,0,184,185,5,84,0,0,185,54,1,0,0,0,186,187,5,80,0,0,187,188,
	5,85,0,0,188,189,5,83,0,0,189,190,5,72,0,0,190,56,1,0,0,0,191,192,5,80,
	0,0,192,193,5,85,0,0,193,194,5,76,0,0,194,195,5,76,0,0,195,58,1,0,0,0,196,
	197,5,84,0,0,197,198,5,82,0,0,198,199,5,85,0,0,199,206,5,69,0,0,200,201,
	5,70,0,0,201,202,5,65,0,0,202,203,5,76,0,0,203,204,5,83,0,0,204,206,5,69,
	0,0,205,196,1,0,0,0,205,200,1,0,0,0,206,60,1,0,0,0,207,208,5,78,0,0,208,
	209,5,117,0,0,209,210,5,109,0,0,210,211,5,98,0,0,211,212,5,101,0,0,212,
	225,5,114,0,0,213,214,5,84,0,0,214,215,5,101,0,0,215,216,5,120,0,0,216,
	225,5,116,0,0,217,218,5,66,0,0,218,219,5,111,0,0,219,220,5,111,0,0,220,
	221,5,108,0,0,221,222,5,101,0,0,222,223,5,97,0,0,223,225,5,110,0,0,224,
	207,1,0,0,0,224,213,1,0,0,0,224,217,1,0,0,0,225,62,1,0,0,0,226,230,7,0,
	0,0,227,229,7,1,0,0,228,227,1,0,0,0,229,232,1,0,0,0,230,228,1,0,0,0,230,
	231,1,0,0,0,231,64,1,0,0,0,232,230,1,0,0,0,233,237,5,34,0,0,234,236,9,0,
	0,0,235,234,1,0,0,0,236,239,1,0,0,0,237,238,1,0,0,0,237,235,1,0,0,0,238,
	240,1,0,0,0,239,237,1,0,0,0,240,241,5,34,0,0,241,66,1,0,0,0,242,244,5,45,
	0,0,243,242,1,0,0,0,243,244,1,0,0,0,244,246,1,0,0,0,245,247,7,2,0,0,246,
	245,1,0,0,0,247,248,1,0,0,0,248,246,1,0,0,0,248,249,1,0,0,0,249,256,1,0,
	0,0,250,252,5,46,0,0,251,253,7,2,0,0,252,251,1,0,0,0,253,254,1,0,0,0,254,
	252,1,0,0,0,254,255,1,0,0,0,255,257,1,0,0,0,256,250,1,0,0,0,256,257,1,0,
	0,0,257,68,1,0,0,0,258,259,7,2,0,0,259,70,1,0,0,0,260,261,7,3,0,0,261,72,
	1,0,0,0,262,263,5,69,0,0,263,264,5,81,0,0,264,265,5,85,0,0,265,266,5,65,
	0,0,266,293,5,76,0,0,267,268,5,78,0,0,268,269,5,79,0,0,269,270,5,84,0,0,
	270,271,5,32,0,0,271,272,5,69,0,0,272,273,5,81,0,0,273,274,5,85,0,0,274,
	275,5,65,0,0,275,293,5,76,0,0,276,277,5,65,0,0,277,278,5,78,0,0,278,293,
	5,68,0,0,279,280,5,79,0,0,280,293,5,82,0,0,281,282,5,71,0,0,282,283,5,82,
	0,0,283,284,5,69,0,0,284,285,5,65,0,0,285,286,5,84,0,0,286,287,5,69,0,0,
	287,293,5,82,0,0,288,289,5,76,0,0,289,290,5,69,0,0,290,291,5,83,0,0,291,
	293,5,83,0,0,292,262,1,0,0,0,292,267,1,0,0,0,292,276,1,0,0,0,292,279,1,
	0,0,0,292,281,1,0,0,0,292,288,1,0,0,0,293,74,1,0,0,0,294,296,7,4,0,0,295,
	294,1,0,0,0,296,297,1,0,0,0,297,295,1,0,0,0,297,298,1,0,0,0,298,299,1,0,
	0,0,299,300,6,37,0,0,300,76,1,0,0,0,301,305,5,35,0,0,302,304,9,0,0,0,303,
	302,1,0,0,0,304,307,1,0,0,0,305,306,1,0,0,0,305,303,1,0,0,0,306,308,1,0,
	0,0,307,305,1,0,0,0,308,309,5,35,0,0,309,310,1,0,0,0,310,311,6,38,0,0,311,
	78,1,0,0,0,12,0,205,224,230,237,243,248,254,256,292,297,305,1,6,0,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!SmartSyncLexer.__ATN) {
			SmartSyncLexer.__ATN = new ATNDeserializer().deserialize(SmartSyncLexer._serializedATN);
		}

		return SmartSyncLexer.__ATN;
	}


	static DecisionsToDFA = SmartSyncLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}