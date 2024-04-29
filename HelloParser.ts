// Generated from Hello.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import HelloListener from "./HelloListener.ts";
// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class HelloParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly ID = 2;
	public static readonly WS = 3;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_r = 0;
	public static readonly literalNames: (string | null)[] = [ null, "'hello'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             "ID", "WS" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"r",
	];
	public get grammarFileName(): string { return "Hello.g4"; }
	public get literalNames(): (string | null)[] { return HelloParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return HelloParser.symbolicNames; }
	public get ruleNames(): string[] { return HelloParser.ruleNames; }
	public get serializedATN(): number[] { return HelloParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, HelloParser._ATN, HelloParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public r(): RContext {
		let localctx: RContext = new RContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, HelloParser.RULE_r);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2;
			this.match(HelloParser.T__0);
			this.state = 3;
			this.match(HelloParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public static readonly _serializedATN: number[] = [4,1,3,6,2,0,7,0,1,0,
	1,0,1,0,1,0,0,0,1,0,0,0,4,0,2,1,0,0,0,2,3,5,1,0,0,3,4,5,2,0,0,4,1,1,0,0,
	0,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!HelloParser.__ATN) {
			HelloParser.__ATN = new ATNDeserializer().deserialize(HelloParser._serializedATN);
		}

		return HelloParser.__ATN;
	}


	static DecisionsToDFA = HelloParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class RContext extends ParserRuleContext {
	constructor(parser?: HelloParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID(): TerminalNode {
		return this.getToken(HelloParser.ID, 0);
	}
    public get ruleIndex(): number {
    	return HelloParser.RULE_r;
	}
	public enterRule(listener: HelloListener): void {
	    if(listener.enterR) {
	 		listener.enterR(this);
		}
	}
	public exitRule(listener: HelloListener): void {
	    if(listener.exitR) {
	 		listener.exitR(this);
		}
	}
}
