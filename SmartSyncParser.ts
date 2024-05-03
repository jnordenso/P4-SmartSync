// Generated from SmartSync.g4 by ANTLR 4.13.1
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
import SmartSyncVisitor from "./SmartSyncVisitor.ts";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class SmartSyncParser extends Parser {
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
	public static readonly BOOL = 32;
	public static readonly TYPE = 33;
	public static readonly ID = 34;
	public static readonly STRING = 35;
	public static readonly NUMBER = 36;
	public static readonly DIGIT = 37;
	public static readonly ARITHMETIC_OP = 38;
	public static readonly LOGIC_OP = 39;
	public static readonly WS = 40;
	public static readonly COMMENT = 41;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_program = 0;
	public static readonly RULE_line = 1;
	public static readonly RULE_value = 2;
	public static readonly RULE_declaration = 3;
	public static readonly RULE_statements = 4;
	public static readonly RULE_condition = 5;
	public static readonly RULE_conditionBase = 6;
	public static readonly RULE_ifStm = 7;
	public static readonly RULE_elses = 8;
	public static readonly RULE_arithmeticValue = 9;
	public static readonly RULE_arithmetic = 10;
	public static readonly RULE_multExpr = 11;
	public static readonly RULE_atom = 12;
	public static readonly RULE_assignments = 13;
	public static readonly RULE_funcReturn = 14;
	public static readonly RULE_functions = 15;
	public static readonly RULE_output = 16;
	public static readonly RULE_delay = 17;
	public static readonly RULE_arrayValue = 18;
	public static readonly RULE_arrayStm = 19;
	public static readonly literalNames: (string | null)[] = [ null, "'[]'", 
                                                            "'SIZE'", "'['", 
                                                            "']'", "'('", 
                                                            "','", "')'", 
                                                            "'='", "';'", 
                                                            "'WHILE'", "'{'", 
                                                            "'};'", "'AND'", 
                                                            "'OR'", "'EQUAL'", 
                                                            "'NOT EQUAL'", 
                                                            "'IF'", "'}'", 
                                                            "'ELSE'", "'+'", 
                                                            "'-'", "'*'", 
                                                            "'/'", "'FUNCTION'", 
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
                                                             "BOOL", "TYPE", 
                                                             "ID", "STRING", 
                                                             "NUMBER", "DIGIT", 
                                                             "ARITHMETIC_OP", 
                                                             "LOGIC_OP", 
                                                             "WS", "COMMENT" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "line", "value", "declaration", "statements", "condition", 
		"conditionBase", "ifStm", "elses", "arithmeticValue", "arithmetic", "multExpr", 
		"atom", "assignments", "funcReturn", "functions", "output", "delay", "arrayValue", 
		"arrayStm",
	];
	public get grammarFileName(): string { return "SmartSync.g4"; }
	public get literalNames(): (string | null)[] { return SmartSyncParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return SmartSyncParser.symbolicNames; }
	public get ruleNames(): string[] { return SmartSyncParser.ruleNames; }
	public get serializedATN(): number[] { return SmartSyncParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, SmartSyncParser._ATN, SmartSyncParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let localctx: ProgramContext = new ProgramContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, SmartSyncParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 41;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 40;
				this.line();
				}
				}
				this.state = 43;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & 25165953) !== 0));
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
	// @RuleVersion(0)
	public line(): LineContext {
		let localctx: LineContext = new LineContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, SmartSyncParser.RULE_line);
		try {
			this.state = 49;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 45;
				this.declaration();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 46;
				this.statements();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 47;
				this.assignments();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 48;
				this.functions();
				}
				break;
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
	// @RuleVersion(0)
	public value(): ValueContext {
		let localctx: ValueContext = new ValueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, SmartSyncParser.RULE_value);
		let _la: number;
		try {
			this.state = 77;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 51;
				this.match(SmartSyncParser.BOOL);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 52;
				this.match(SmartSyncParser.STRING);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 53;
				this.match(SmartSyncParser.NUMBER);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 54;
				this.match(SmartSyncParser.ID);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 55;
				this.match(SmartSyncParser.ID);
				this.state = 56;
				this.match(SmartSyncParser.T__0);
				this.state = 57;
				this.match(SmartSyncParser.T__1);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 58;
				this.match(SmartSyncParser.ID);
				this.state = 59;
				this.match(SmartSyncParser.T__2);
				this.state = 61;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 60;
					this.match(SmartSyncParser.DIGIT);
					}
					}
					this.state = 63;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===37);
				this.state = 65;
				this.match(SmartSyncParser.T__3);
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 66;
				this.match(SmartSyncParser.ID);
				this.state = 67;
				this.match(SmartSyncParser.T__4);
				this.state = 73;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===3 || _la===5 || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 29) !== 0)) {
					{
					{
					this.state = 68;
					this.funcReturn();
					this.state = 69;
					this.match(SmartSyncParser.T__5);
					}
					}
					this.state = 75;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 76;
				this.match(SmartSyncParser.T__6);
				}
				break;
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
	// @RuleVersion(0)
	public declaration(): DeclarationContext {
		let localctx: DeclarationContext = new DeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, SmartSyncParser.RULE_declaration);
		let _la: number;
		try {
			this.state = 101;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 79;
				this.match(SmartSyncParser.TYPE);
				this.state = 80;
				this.match(SmartSyncParser.ID);
				this.state = 81;
				this.match(SmartSyncParser.T__7);
				this.state = 82;
				this.arithmetic();
				this.state = 83;
				this.match(SmartSyncParser.T__8);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 85;
				this.match(SmartSyncParser.TYPE);
				this.state = 86;
				this.match(SmartSyncParser.ID);
				this.state = 87;
				this.match(SmartSyncParser.T__0);
				this.state = 88;
				this.match(SmartSyncParser.T__7);
				this.state = 89;
				this.match(SmartSyncParser.T__2);
				this.state = 96;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===3 || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 29) !== 0)) {
					{
					{
					this.state = 90;
					this.arrayValue();
					this.state = 92;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===6) {
						{
						this.state = 91;
						this.match(SmartSyncParser.T__5);
						}
					}

					}
					}
					this.state = 98;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 99;
				this.match(SmartSyncParser.T__3);
				this.state = 100;
				this.match(SmartSyncParser.T__8);
				}
				break;
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
	// @RuleVersion(0)
	public statements(): StatementsContext {
		let localctx: StatementsContext = new StatementsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, SmartSyncParser.RULE_statements);
		let _la: number;
		try {
			this.state = 118;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 17:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 103;
				this.ifStm();
				this.state = 104;
				this.match(SmartSyncParser.T__8);
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 106;
				this.match(SmartSyncParser.T__9);
				this.state = 107;
				this.condition();
				this.state = 108;
				this.match(SmartSyncParser.T__10);
				this.state = 112;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & 25165953) !== 0)) {
					{
					{
					this.state = 109;
					this.line();
					}
					}
					this.state = 114;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 115;
				this.match(SmartSyncParser.T__11);
				}
				break;
			case 34:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 117;
				this.arrayStm();
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	// @RuleVersion(0)
	public condition(): ConditionContext {
		let localctx: ConditionContext = new ConditionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, SmartSyncParser.RULE_condition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 120;
			this.conditionBase();
			this.state = 125;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===13 || _la===14) {
				{
				{
				this.state = 121;
				_la = this._input.LA(1);
				if(!(_la===13 || _la===14)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 122;
				this.conditionBase();
				}
				}
				this.state = 127;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
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
	// @RuleVersion(0)
	public conditionBase(): ConditionBaseContext {
		let localctx: ConditionBaseContext = new ConditionBaseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, SmartSyncParser.RULE_conditionBase);
		let _la: number;
		try {
			this.state = 138;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 128;
				_la = this._input.LA(1);
				if(!(_la===34 || _la===36)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 129;
				this.match(SmartSyncParser.LOGIC_OP);
				this.state = 130;
				_la = this._input.LA(1);
				if(!(_la===34 || _la===36)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 131;
				_la = this._input.LA(1);
				if(!(((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 13) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 132;
				_la = this._input.LA(1);
				if(!(_la===15 || _la===16)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 133;
				_la = this._input.LA(1);
				if(!(((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 13) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 134;
				this.match(SmartSyncParser.T__4);
				this.state = 135;
				this.condition();
				this.state = 136;
				this.match(SmartSyncParser.T__6);
				}
				break;
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
	// @RuleVersion(0)
	public ifStm(): IfStmContext {
		let localctx: IfStmContext = new IfStmContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, SmartSyncParser.RULE_ifStm);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 140;
			this.match(SmartSyncParser.T__16);
			this.state = 141;
			this.condition();
			this.state = 142;
			this.match(SmartSyncParser.T__10);
			this.state = 146;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & 25165953) !== 0)) {
				{
				{
				this.state = 143;
				this.line();
				}
				}
				this.state = 148;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 149;
			this.match(SmartSyncParser.T__17);
			this.state = 160;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				{
				this.state = 150;
				this.elses();
				}
				break;
			case 2:
				{
				this.state = 151;
				this.match(SmartSyncParser.T__18);
				this.state = 152;
				this.match(SmartSyncParser.T__10);
				this.state = 156;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & 25165953) !== 0)) {
					{
					{
					this.state = 153;
					this.line();
					}
					}
					this.state = 158;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 159;
				this.match(SmartSyncParser.T__17);
				}
				break;
			}
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
	// @RuleVersion(0)
	public elses(): ElsesContext {
		let localctx: ElsesContext = new ElsesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, SmartSyncParser.RULE_elses);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 162;
			this.match(SmartSyncParser.T__18);
			this.state = 163;
			this.match(SmartSyncParser.T__16);
			this.state = 164;
			this.condition();
			this.state = 165;
			this.match(SmartSyncParser.T__10);
			this.state = 169;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & 25165953) !== 0)) {
				{
				{
				this.state = 166;
				this.line();
				}
				}
				this.state = 171;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 172;
			this.match(SmartSyncParser.T__17);
			this.state = 183;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				{
				this.state = 173;
				this.elses();
				}
				break;
			case 2:
				{
				this.state = 174;
				this.match(SmartSyncParser.T__18);
				this.state = 175;
				this.match(SmartSyncParser.T__10);
				this.state = 179;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & 25165953) !== 0)) {
					{
					{
					this.state = 176;
					this.line();
					}
					}
					this.state = 181;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 182;
				this.match(SmartSyncParser.T__17);
				}
				break;
			}
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
	// @RuleVersion(0)
	public arithmeticValue(): ArithmeticValueContext {
		let localctx: ArithmeticValueContext = new ArithmeticValueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, SmartSyncParser.RULE_arithmeticValue);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 185;
			this.arithmetic();
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
	// @RuleVersion(0)
	public arithmetic(): ArithmeticContext {
		let localctx: ArithmeticContext = new ArithmeticContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, SmartSyncParser.RULE_arithmetic);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 187;
			this.multExpr();
			this.state = 192;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===20 || _la===21) {
				{
				{
				this.state = 188;
				_la = this._input.LA(1);
				if(!(_la===20 || _la===21)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 189;
				this.multExpr();
				}
				}
				this.state = 194;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
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
	// @RuleVersion(0)
	public multExpr(): MultExprContext {
		let localctx: MultExprContext = new MultExprContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, SmartSyncParser.RULE_multExpr);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 195;
			this.atom();
			this.state = 200;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===22 || _la===23) {
				{
				{
				this.state = 196;
				_la = this._input.LA(1);
				if(!(_la===22 || _la===23)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 197;
				this.atom();
				}
				}
				this.state = 202;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
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
	// @RuleVersion(0)
	public atom(): AtomContext {
		let localctx: AtomContext = new AtomContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, SmartSyncParser.RULE_atom);
		try {
			this.state = 209;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 36:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 203;
				this.match(SmartSyncParser.NUMBER);
				}
				break;
			case 34:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 204;
				this.match(SmartSyncParser.ID);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 205;
				this.match(SmartSyncParser.T__4);
				this.state = 206;
				this.arithmetic();
				this.state = 207;
				this.match(SmartSyncParser.T__6);
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	// @RuleVersion(0)
	public assignments(): AssignmentsContext {
		let localctx: AssignmentsContext = new AssignmentsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, SmartSyncParser.RULE_assignments);
		let _la: number;
		try {
			this.state = 246;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 211;
				this.match(SmartSyncParser.ID);
				this.state = 212;
				this.match(SmartSyncParser.T__7);
				this.state = 213;
				this.arithmetic();
				this.state = 214;
				this.match(SmartSyncParser.T__8);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 216;
				this.match(SmartSyncParser.ID);
				this.state = 217;
				this.match(SmartSyncParser.T__2);
				this.state = 219;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 218;
					this.match(SmartSyncParser.DIGIT);
					}
					}
					this.state = 221;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===37);
				this.state = 223;
				this.match(SmartSyncParser.T__3);
				this.state = 224;
				this.match(SmartSyncParser.T__7);
				this.state = 228;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 22, this._ctx) ) {
				case 1:
					{
					this.state = 225;
					this.value();
					}
					break;
				case 2:
					{
					this.state = 226;
					this.arithmetic();
					}
					break;
				case 3:
					{
					this.state = 227;
					this.match(SmartSyncParser.ID);
					}
					break;
				}
				this.state = 230;
				this.match(SmartSyncParser.T__8);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 231;
				this.match(SmartSyncParser.ID);
				this.state = 232;
				this.match(SmartSyncParser.T__0);
				this.state = 233;
				this.match(SmartSyncParser.T__7);
				this.state = 234;
				this.match(SmartSyncParser.T__2);
				this.state = 241;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===3 || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 29) !== 0)) {
					{
					{
					this.state = 235;
					this.arrayValue();
					this.state = 237;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===6) {
						{
						this.state = 236;
						this.match(SmartSyncParser.T__5);
						}
					}

					}
					}
					this.state = 243;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 244;
				this.match(SmartSyncParser.T__3);
				this.state = 245;
				this.match(SmartSyncParser.T__8);
				}
				break;
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
	// @RuleVersion(0)
	public funcReturn(): FuncReturnContext {
		let localctx: FuncReturnContext = new FuncReturnContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, SmartSyncParser.RULE_funcReturn);
		let _la: number;
		try {
			this.state = 265;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 29, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 248;
				this.value();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 249;
				this.match(SmartSyncParser.ID);
				this.state = 251;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===1) {
					{
					this.state = 250;
					this.match(SmartSyncParser.T__0);
					}
				}

				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 253;
				this.arithmetic();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 254;
				this.match(SmartSyncParser.T__2);
				this.state = 261;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===3 || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 29) !== 0)) {
					{
					{
					this.state = 255;
					this.arrayValue();
					this.state = 257;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===6) {
						{
						this.state = 256;
						this.match(SmartSyncParser.T__5);
						}
					}

					}
					}
					this.state = 263;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 264;
				this.match(SmartSyncParser.T__3);
				}
				break;
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
	// @RuleVersion(0)
	public functions(): FunctionsContext {
		let localctx: FunctionsContext = new FunctionsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, SmartSyncParser.RULE_functions);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 267;
			this.match(SmartSyncParser.TYPE);
			this.state = 268;
			this.match(SmartSyncParser.T__23);
			this.state = 269;
			this.match(SmartSyncParser.ID);
			this.state = 270;
			this.match(SmartSyncParser.T__4);
			this.state = 281;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===33) {
				{
				{
				this.state = 271;
				this.match(SmartSyncParser.TYPE);
				this.state = 272;
				this.match(SmartSyncParser.ID);
				this.state = 274;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===1) {
					{
					this.state = 273;
					this.match(SmartSyncParser.T__0);
					}
				}

				this.state = 277;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===6) {
					{
					this.state = 276;
					this.match(SmartSyncParser.T__5);
					}
				}

				}
				}
				this.state = 283;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 284;
			this.match(SmartSyncParser.T__6);
			this.state = 285;
			this.match(SmartSyncParser.T__10);
			this.state = 289;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & 25165953) !== 0)) {
				{
				{
				this.state = 286;
				this.line();
				}
				}
				this.state = 291;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 292;
			this.match(SmartSyncParser.T__8);
			this.state = 293;
			this.match(SmartSyncParser.T__24);
			this.state = 294;
			this.funcReturn();
			this.state = 295;
			this.match(SmartSyncParser.T__25);
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
	// @RuleVersion(0)
	public output(): OutputContext {
		let localctx: OutputContext = new OutputContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, SmartSyncParser.RULE_output);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 297;
			this.match(SmartSyncParser.T__26);
			this.state = 303;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 35, this._ctx) ) {
			case 1:
				{
				this.state = 298;
				this.value();
				}
				break;
			case 2:
				{
				this.state = 299;
				this.match(SmartSyncParser.ID);
				this.state = 301;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===1) {
					{
					this.state = 300;
					this.match(SmartSyncParser.T__0);
					}
				}

				}
				break;
			}
			this.state = 305;
			this.match(SmartSyncParser.T__8);
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
	// @RuleVersion(0)
	public delay(): DelayContext {
		let localctx: DelayContext = new DelayContext(this, this._ctx, this.state);
		this.enterRule(localctx, 34, SmartSyncParser.RULE_delay);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 307;
			this.match(SmartSyncParser.T__27);
			this.state = 309;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 308;
				this.match(SmartSyncParser.DIGIT);
				}
				}
				this.state = 311;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===37);
			this.state = 313;
			this.match(SmartSyncParser.T__8);
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
	// @RuleVersion(0)
	public arrayValue(): ArrayValueContext {
		let localctx: ArrayValueContext = new ArrayValueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 36, SmartSyncParser.RULE_arrayValue);
		try {
			this.state = 320;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 3:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 315;
				this.match(SmartSyncParser.T__2);
				this.state = 316;
				this.value();
				this.state = 317;
				this.match(SmartSyncParser.T__3);
				}
				break;
			case 32:
			case 34:
			case 35:
			case 36:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 319;
				this.value();
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	// @RuleVersion(0)
	public arrayStm(): ArrayStmContext {
		let localctx: ArrayStmContext = new ArrayStmContext(this, this._ctx, this.state);
		this.enterRule(localctx, 38, SmartSyncParser.RULE_arrayStm);
		let _la: number;
		try {
			this.state = 340;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 40, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 322;
				this.match(SmartSyncParser.ID);
				this.state = 323;
				this.match(SmartSyncParser.T__2);
				this.state = 325;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 324;
					this.match(SmartSyncParser.DIGIT);
					}
					}
					this.state = 327;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===37);
				this.state = 329;
				this.match(SmartSyncParser.T__3);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 330;
				this.match(SmartSyncParser.ID);
				this.state = 331;
				this.match(SmartSyncParser.T__0);
				this.state = 338;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 29:
					{
					this.state = 332;
					this.match(SmartSyncParser.T__28);
					this.state = 333;
					this.value();
					this.state = 334;
					this.match(SmartSyncParser.T__8);
					}
					break;
				case 30:
					{
					this.state = 336;
					this.match(SmartSyncParser.T__29);
					}
					break;
				case 31:
					{
					this.state = 337;
					this.match(SmartSyncParser.T__30);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
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

	public static readonly _serializedATN: number[] = [4,1,41,343,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,2,18,7,18,2,19,7,19,1,0,4,0,42,8,0,11,0,12,0,43,1,1,1,1,1,1,1,1,3,
	1,50,8,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,4,2,62,8,2,11,2,12,2,63,
	1,2,1,2,1,2,1,2,1,2,1,2,5,2,72,8,2,10,2,12,2,75,9,2,1,2,3,2,78,8,2,1,3,
	1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,93,8,3,5,3,95,8,3,10,
	3,12,3,98,9,3,1,3,1,3,3,3,102,8,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,5,4,111,8,
	4,10,4,12,4,114,9,4,1,4,1,4,1,4,3,4,119,8,4,1,5,1,5,1,5,5,5,124,8,5,10,
	5,12,5,127,9,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,3,6,139,8,6,1,7,
	1,7,1,7,1,7,5,7,145,8,7,10,7,12,7,148,9,7,1,7,1,7,1,7,1,7,1,7,5,7,155,8,
	7,10,7,12,7,158,9,7,1,7,3,7,161,8,7,1,8,1,8,1,8,1,8,1,8,5,8,168,8,8,10,
	8,12,8,171,9,8,1,8,1,8,1,8,1,8,1,8,5,8,178,8,8,10,8,12,8,181,9,8,1,8,3,
	8,184,8,8,1,9,1,9,1,10,1,10,1,10,5,10,191,8,10,10,10,12,10,194,9,10,1,11,
	1,11,1,11,5,11,199,8,11,10,11,12,11,202,9,11,1,12,1,12,1,12,1,12,1,12,1,
	12,3,12,210,8,12,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,4,13,220,8,13,
	11,13,12,13,221,1,13,1,13,1,13,1,13,1,13,3,13,229,8,13,1,13,1,13,1,13,1,
	13,1,13,1,13,1,13,3,13,238,8,13,5,13,240,8,13,10,13,12,13,243,9,13,1,13,
	1,13,3,13,247,8,13,1,14,1,14,1,14,3,14,252,8,14,1,14,1,14,1,14,1,14,3,14,
	258,8,14,5,14,260,8,14,10,14,12,14,263,9,14,1,14,3,14,266,8,14,1,15,1,15,
	1,15,1,15,1,15,1,15,1,15,3,15,275,8,15,1,15,3,15,278,8,15,5,15,280,8,15,
	10,15,12,15,283,9,15,1,15,1,15,1,15,5,15,288,8,15,10,15,12,15,291,9,15,
	1,15,1,15,1,15,1,15,1,15,1,16,1,16,1,16,1,16,3,16,302,8,16,3,16,304,8,16,
	1,16,1,16,1,17,1,17,4,17,310,8,17,11,17,12,17,311,1,17,1,17,1,18,1,18,1,
	18,1,18,1,18,3,18,321,8,18,1,19,1,19,1,19,4,19,326,8,19,11,19,12,19,327,
	1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,3,19,339,8,19,3,19,341,8,19,
	1,19,0,0,20,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,0,6,
	1,0,13,14,2,0,34,34,36,36,2,0,32,32,34,35,1,0,15,16,1,0,20,21,1,0,22,23,
	380,0,41,1,0,0,0,2,49,1,0,0,0,4,77,1,0,0,0,6,101,1,0,0,0,8,118,1,0,0,0,
	10,120,1,0,0,0,12,138,1,0,0,0,14,140,1,0,0,0,16,162,1,0,0,0,18,185,1,0,
	0,0,20,187,1,0,0,0,22,195,1,0,0,0,24,209,1,0,0,0,26,246,1,0,0,0,28,265,
	1,0,0,0,30,267,1,0,0,0,32,297,1,0,0,0,34,307,1,0,0,0,36,320,1,0,0,0,38,
	340,1,0,0,0,40,42,3,2,1,0,41,40,1,0,0,0,42,43,1,0,0,0,43,41,1,0,0,0,43,
	44,1,0,0,0,44,1,1,0,0,0,45,50,3,6,3,0,46,50,3,8,4,0,47,50,3,26,13,0,48,
	50,3,30,15,0,49,45,1,0,0,0,49,46,1,0,0,0,49,47,1,0,0,0,49,48,1,0,0,0,50,
	3,1,0,0,0,51,78,5,32,0,0,52,78,5,35,0,0,53,78,5,36,0,0,54,78,5,34,0,0,55,
	56,5,34,0,0,56,57,5,1,0,0,57,78,5,2,0,0,58,59,5,34,0,0,59,61,5,3,0,0,60,
	62,5,37,0,0,61,60,1,0,0,0,62,63,1,0,0,0,63,61,1,0,0,0,63,64,1,0,0,0,64,
	65,1,0,0,0,65,78,5,4,0,0,66,67,5,34,0,0,67,73,5,5,0,0,68,69,3,28,14,0,69,
	70,5,6,0,0,70,72,1,0,0,0,71,68,1,0,0,0,72,75,1,0,0,0,73,71,1,0,0,0,73,74,
	1,0,0,0,74,76,1,0,0,0,75,73,1,0,0,0,76,78,5,7,0,0,77,51,1,0,0,0,77,52,1,
	0,0,0,77,53,1,0,0,0,77,54,1,0,0,0,77,55,1,0,0,0,77,58,1,0,0,0,77,66,1,0,
	0,0,78,5,1,0,0,0,79,80,5,33,0,0,80,81,5,34,0,0,81,82,5,8,0,0,82,83,3,20,
	10,0,83,84,5,9,0,0,84,102,1,0,0,0,85,86,5,33,0,0,86,87,5,34,0,0,87,88,5,
	1,0,0,88,89,5,8,0,0,89,96,5,3,0,0,90,92,3,36,18,0,91,93,5,6,0,0,92,91,1,
	0,0,0,92,93,1,0,0,0,93,95,1,0,0,0,94,90,1,0,0,0,95,98,1,0,0,0,96,94,1,0,
	0,0,96,97,1,0,0,0,97,99,1,0,0,0,98,96,1,0,0,0,99,100,5,4,0,0,100,102,5,
	9,0,0,101,79,1,0,0,0,101,85,1,0,0,0,102,7,1,0,0,0,103,104,3,14,7,0,104,
	105,5,9,0,0,105,119,1,0,0,0,106,107,5,10,0,0,107,108,3,10,5,0,108,112,5,
	11,0,0,109,111,3,2,1,0,110,109,1,0,0,0,111,114,1,0,0,0,112,110,1,0,0,0,
	112,113,1,0,0,0,113,115,1,0,0,0,114,112,1,0,0,0,115,116,5,12,0,0,116,119,
	1,0,0,0,117,119,3,38,19,0,118,103,1,0,0,0,118,106,1,0,0,0,118,117,1,0,0,
	0,119,9,1,0,0,0,120,125,3,12,6,0,121,122,7,0,0,0,122,124,3,12,6,0,123,121,
	1,0,0,0,124,127,1,0,0,0,125,123,1,0,0,0,125,126,1,0,0,0,126,11,1,0,0,0,
	127,125,1,0,0,0,128,129,7,1,0,0,129,130,5,39,0,0,130,139,7,1,0,0,131,132,
	7,2,0,0,132,133,7,3,0,0,133,139,7,2,0,0,134,135,5,5,0,0,135,136,3,10,5,
	0,136,137,5,7,0,0,137,139,1,0,0,0,138,128,1,0,0,0,138,131,1,0,0,0,138,134,
	1,0,0,0,139,13,1,0,0,0,140,141,5,17,0,0,141,142,3,10,5,0,142,146,5,11,0,
	0,143,145,3,2,1,0,144,143,1,0,0,0,145,148,1,0,0,0,146,144,1,0,0,0,146,147,
	1,0,0,0,147,149,1,0,0,0,148,146,1,0,0,0,149,160,5,18,0,0,150,161,3,16,8,
	0,151,152,5,19,0,0,152,156,5,11,0,0,153,155,3,2,1,0,154,153,1,0,0,0,155,
	158,1,0,0,0,156,154,1,0,0,0,156,157,1,0,0,0,157,159,1,0,0,0,158,156,1,0,
	0,0,159,161,5,18,0,0,160,150,1,0,0,0,160,151,1,0,0,0,160,161,1,0,0,0,161,
	15,1,0,0,0,162,163,5,19,0,0,163,164,5,17,0,0,164,165,3,10,5,0,165,169,5,
	11,0,0,166,168,3,2,1,0,167,166,1,0,0,0,168,171,1,0,0,0,169,167,1,0,0,0,
	169,170,1,0,0,0,170,172,1,0,0,0,171,169,1,0,0,0,172,183,5,18,0,0,173,184,
	3,16,8,0,174,175,5,19,0,0,175,179,5,11,0,0,176,178,3,2,1,0,177,176,1,0,
	0,0,178,181,1,0,0,0,179,177,1,0,0,0,179,180,1,0,0,0,180,182,1,0,0,0,181,
	179,1,0,0,0,182,184,5,18,0,0,183,173,1,0,0,0,183,174,1,0,0,0,183,184,1,
	0,0,0,184,17,1,0,0,0,185,186,3,20,10,0,186,19,1,0,0,0,187,192,3,22,11,0,
	188,189,7,4,0,0,189,191,3,22,11,0,190,188,1,0,0,0,191,194,1,0,0,0,192,190,
	1,0,0,0,192,193,1,0,0,0,193,21,1,0,0,0,194,192,1,0,0,0,195,200,3,24,12,
	0,196,197,7,5,0,0,197,199,3,24,12,0,198,196,1,0,0,0,199,202,1,0,0,0,200,
	198,1,0,0,0,200,201,1,0,0,0,201,23,1,0,0,0,202,200,1,0,0,0,203,210,5,36,
	0,0,204,210,5,34,0,0,205,206,5,5,0,0,206,207,3,20,10,0,207,208,5,7,0,0,
	208,210,1,0,0,0,209,203,1,0,0,0,209,204,1,0,0,0,209,205,1,0,0,0,210,25,
	1,0,0,0,211,212,5,34,0,0,212,213,5,8,0,0,213,214,3,20,10,0,214,215,5,9,
	0,0,215,247,1,0,0,0,216,217,5,34,0,0,217,219,5,3,0,0,218,220,5,37,0,0,219,
	218,1,0,0,0,220,221,1,0,0,0,221,219,1,0,0,0,221,222,1,0,0,0,222,223,1,0,
	0,0,223,224,5,4,0,0,224,228,5,8,0,0,225,229,3,4,2,0,226,229,3,20,10,0,227,
	229,5,34,0,0,228,225,1,0,0,0,228,226,1,0,0,0,228,227,1,0,0,0,229,230,1,
	0,0,0,230,247,5,9,0,0,231,232,5,34,0,0,232,233,5,1,0,0,233,234,5,8,0,0,
	234,241,5,3,0,0,235,237,3,36,18,0,236,238,5,6,0,0,237,236,1,0,0,0,237,238,
	1,0,0,0,238,240,1,0,0,0,239,235,1,0,0,0,240,243,1,0,0,0,241,239,1,0,0,0,
	241,242,1,0,0,0,242,244,1,0,0,0,243,241,1,0,0,0,244,245,5,4,0,0,245,247,
	5,9,0,0,246,211,1,0,0,0,246,216,1,0,0,0,246,231,1,0,0,0,247,27,1,0,0,0,
	248,266,3,4,2,0,249,251,5,34,0,0,250,252,5,1,0,0,251,250,1,0,0,0,251,252,
	1,0,0,0,252,266,1,0,0,0,253,266,3,20,10,0,254,261,5,3,0,0,255,257,3,36,
	18,0,256,258,5,6,0,0,257,256,1,0,0,0,257,258,1,0,0,0,258,260,1,0,0,0,259,
	255,1,0,0,0,260,263,1,0,0,0,261,259,1,0,0,0,261,262,1,0,0,0,262,264,1,0,
	0,0,263,261,1,0,0,0,264,266,5,4,0,0,265,248,1,0,0,0,265,249,1,0,0,0,265,
	253,1,0,0,0,265,254,1,0,0,0,266,29,1,0,0,0,267,268,5,33,0,0,268,269,5,24,
	0,0,269,270,5,34,0,0,270,281,5,5,0,0,271,272,5,33,0,0,272,274,5,34,0,0,
	273,275,5,1,0,0,274,273,1,0,0,0,274,275,1,0,0,0,275,277,1,0,0,0,276,278,
	5,6,0,0,277,276,1,0,0,0,277,278,1,0,0,0,278,280,1,0,0,0,279,271,1,0,0,0,
	280,283,1,0,0,0,281,279,1,0,0,0,281,282,1,0,0,0,282,284,1,0,0,0,283,281,
	1,0,0,0,284,285,5,7,0,0,285,289,5,11,0,0,286,288,3,2,1,0,287,286,1,0,0,
	0,288,291,1,0,0,0,289,287,1,0,0,0,289,290,1,0,0,0,290,292,1,0,0,0,291,289,
	1,0,0,0,292,293,5,9,0,0,293,294,5,25,0,0,294,295,3,28,14,0,295,296,5,26,
	0,0,296,31,1,0,0,0,297,303,5,27,0,0,298,304,3,4,2,0,299,301,5,34,0,0,300,
	302,5,1,0,0,301,300,1,0,0,0,301,302,1,0,0,0,302,304,1,0,0,0,303,298,1,0,
	0,0,303,299,1,0,0,0,304,305,1,0,0,0,305,306,5,9,0,0,306,33,1,0,0,0,307,
	309,5,28,0,0,308,310,5,37,0,0,309,308,1,0,0,0,310,311,1,0,0,0,311,309,1,
	0,0,0,311,312,1,0,0,0,312,313,1,0,0,0,313,314,5,9,0,0,314,35,1,0,0,0,315,
	316,5,3,0,0,316,317,3,4,2,0,317,318,5,4,0,0,318,321,1,0,0,0,319,321,3,4,
	2,0,320,315,1,0,0,0,320,319,1,0,0,0,321,37,1,0,0,0,322,323,5,34,0,0,323,
	325,5,3,0,0,324,326,5,37,0,0,325,324,1,0,0,0,326,327,1,0,0,0,327,325,1,
	0,0,0,327,328,1,0,0,0,328,329,1,0,0,0,329,341,5,4,0,0,330,331,5,34,0,0,
	331,338,5,1,0,0,332,333,5,29,0,0,333,334,3,4,2,0,334,335,5,9,0,0,335,339,
	1,0,0,0,336,339,5,30,0,0,337,339,5,31,0,0,338,332,1,0,0,0,338,336,1,0,0,
	0,338,337,1,0,0,0,339,341,1,0,0,0,340,322,1,0,0,0,340,330,1,0,0,0,341,39,
	1,0,0,0,41,43,49,63,73,77,92,96,101,112,118,125,138,146,156,160,169,179,
	183,192,200,209,221,228,237,241,246,251,257,261,265,274,277,281,289,301,
	303,311,320,327,338,340];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!SmartSyncParser.__ATN) {
			SmartSyncParser.__ATN = new ATNDeserializer().deserialize(SmartSyncParser._serializedATN);
		}

		return SmartSyncParser.__ATN;
	}


	static DecisionsToDFA = SmartSyncParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class ProgramContext extends ParserRuleContext {
	constructor(parser?: SmartSyncParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public line_list(): LineContext[] {
		return this.getTypedRuleContexts(LineContext) as LineContext[];
	}
	public line(i: number): LineContext {
		return this.getTypedRuleContext(LineContext, i) as LineContext;
	}
    public get ruleIndex(): number {
    	return SmartSyncParser.RULE_program;
	}
	// @Override
	public accept<Result>(visitor: SmartSyncVisitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LineContext extends ParserRuleContext {
	constructor(parser?: SmartSyncParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public declaration(): DeclarationContext {
		return this.getTypedRuleContext(DeclarationContext, 0) as DeclarationContext;
	}
	public statements(): StatementsContext {
		return this.getTypedRuleContext(StatementsContext, 0) as StatementsContext;
	}
	public assignments(): AssignmentsContext {
		return this.getTypedRuleContext(AssignmentsContext, 0) as AssignmentsContext;
	}
	public functions(): FunctionsContext {
		return this.getTypedRuleContext(FunctionsContext, 0) as FunctionsContext;
	}
    public get ruleIndex(): number {
    	return SmartSyncParser.RULE_line;
	}
	// @Override
	public accept<Result>(visitor: SmartSyncVisitor<Result>): Result {
		if (visitor.visitLine) {
			return visitor.visitLine(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValueContext extends ParserRuleContext {
	constructor(parser?: SmartSyncParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public BOOL(): TerminalNode {
		return this.getToken(SmartSyncParser.BOOL, 0);
	}
	public STRING(): TerminalNode {
		return this.getToken(SmartSyncParser.STRING, 0);
	}
	public NUMBER(): TerminalNode {
		return this.getToken(SmartSyncParser.NUMBER, 0);
	}
	public ID(): TerminalNode {
		return this.getToken(SmartSyncParser.ID, 0);
	}
	public DIGIT_list(): TerminalNode[] {
	    	return this.getTokens(SmartSyncParser.DIGIT);
	}
	public DIGIT(i: number): TerminalNode {
		return this.getToken(SmartSyncParser.DIGIT, i);
	}
	public funcReturn_list(): FuncReturnContext[] {
		return this.getTypedRuleContexts(FuncReturnContext) as FuncReturnContext[];
	}
	public funcReturn(i: number): FuncReturnContext {
		return this.getTypedRuleContext(FuncReturnContext, i) as FuncReturnContext;
	}
    public get ruleIndex(): number {
    	return SmartSyncParser.RULE_value;
	}
	// @Override
	public accept<Result>(visitor: SmartSyncVisitor<Result>): Result {
		if (visitor.visitValue) {
			return visitor.visitValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclarationContext extends ParserRuleContext {
	constructor(parser?: SmartSyncParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TYPE(): TerminalNode {
		return this.getToken(SmartSyncParser.TYPE, 0);
	}
	public ID(): TerminalNode {
		return this.getToken(SmartSyncParser.ID, 0);
	}
	public arithmetic(): ArithmeticContext {
		return this.getTypedRuleContext(ArithmeticContext, 0) as ArithmeticContext;
	}
	public arrayValue_list(): ArrayValueContext[] {
		return this.getTypedRuleContexts(ArrayValueContext) as ArrayValueContext[];
	}
	public arrayValue(i: number): ArrayValueContext {
		return this.getTypedRuleContext(ArrayValueContext, i) as ArrayValueContext;
	}
    public get ruleIndex(): number {
    	return SmartSyncParser.RULE_declaration;
	}
	// @Override
	public accept<Result>(visitor: SmartSyncVisitor<Result>): Result {
		if (visitor.visitDeclaration) {
			return visitor.visitDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementsContext extends ParserRuleContext {
	constructor(parser?: SmartSyncParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ifStm(): IfStmContext {
		return this.getTypedRuleContext(IfStmContext, 0) as IfStmContext;
	}
	public condition(): ConditionContext {
		return this.getTypedRuleContext(ConditionContext, 0) as ConditionContext;
	}
	public line_list(): LineContext[] {
		return this.getTypedRuleContexts(LineContext) as LineContext[];
	}
	public line(i: number): LineContext {
		return this.getTypedRuleContext(LineContext, i) as LineContext;
	}
	public arrayStm(): ArrayStmContext {
		return this.getTypedRuleContext(ArrayStmContext, 0) as ArrayStmContext;
	}
    public get ruleIndex(): number {
    	return SmartSyncParser.RULE_statements;
	}
	// @Override
	public accept<Result>(visitor: SmartSyncVisitor<Result>): Result {
		if (visitor.visitStatements) {
			return visitor.visitStatements(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConditionContext extends ParserRuleContext {
	constructor(parser?: SmartSyncParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public conditionBase_list(): ConditionBaseContext[] {
		return this.getTypedRuleContexts(ConditionBaseContext) as ConditionBaseContext[];
	}
	public conditionBase(i: number): ConditionBaseContext {
		return this.getTypedRuleContext(ConditionBaseContext, i) as ConditionBaseContext;
	}
    public get ruleIndex(): number {
    	return SmartSyncParser.RULE_condition;
	}
	// @Override
	public accept<Result>(visitor: SmartSyncVisitor<Result>): Result {
		if (visitor.visitCondition) {
			return visitor.visitCondition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConditionBaseContext extends ParserRuleContext {
	constructor(parser?: SmartSyncParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LOGIC_OP(): TerminalNode {
		return this.getToken(SmartSyncParser.LOGIC_OP, 0);
	}
	public ID_list(): TerminalNode[] {
	    	return this.getTokens(SmartSyncParser.ID);
	}
	public ID(i: number): TerminalNode {
		return this.getToken(SmartSyncParser.ID, i);
	}
	public NUMBER_list(): TerminalNode[] {
	    	return this.getTokens(SmartSyncParser.NUMBER);
	}
	public NUMBER(i: number): TerminalNode {
		return this.getToken(SmartSyncParser.NUMBER, i);
	}
	public STRING_list(): TerminalNode[] {
	    	return this.getTokens(SmartSyncParser.STRING);
	}
	public STRING(i: number): TerminalNode {
		return this.getToken(SmartSyncParser.STRING, i);
	}
	public BOOL_list(): TerminalNode[] {
	    	return this.getTokens(SmartSyncParser.BOOL);
	}
	public BOOL(i: number): TerminalNode {
		return this.getToken(SmartSyncParser.BOOL, i);
	}
	public condition(): ConditionContext {
		return this.getTypedRuleContext(ConditionContext, 0) as ConditionContext;
	}
    public get ruleIndex(): number {
    	return SmartSyncParser.RULE_conditionBase;
	}
	// @Override
	public accept<Result>(visitor: SmartSyncVisitor<Result>): Result {
		if (visitor.visitConditionBase) {
			return visitor.visitConditionBase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfStmContext extends ParserRuleContext {
	constructor(parser?: SmartSyncParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public condition(): ConditionContext {
		return this.getTypedRuleContext(ConditionContext, 0) as ConditionContext;
	}
	public line_list(): LineContext[] {
		return this.getTypedRuleContexts(LineContext) as LineContext[];
	}
	public line(i: number): LineContext {
		return this.getTypedRuleContext(LineContext, i) as LineContext;
	}
	public elses(): ElsesContext {
		return this.getTypedRuleContext(ElsesContext, 0) as ElsesContext;
	}
    public get ruleIndex(): number {
    	return SmartSyncParser.RULE_ifStm;
	}
	// @Override
	public accept<Result>(visitor: SmartSyncVisitor<Result>): Result {
		if (visitor.visitIfStm) {
			return visitor.visitIfStm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElsesContext extends ParserRuleContext {
	constructor(parser?: SmartSyncParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public condition(): ConditionContext {
		return this.getTypedRuleContext(ConditionContext, 0) as ConditionContext;
	}
	public line_list(): LineContext[] {
		return this.getTypedRuleContexts(LineContext) as LineContext[];
	}
	public line(i: number): LineContext {
		return this.getTypedRuleContext(LineContext, i) as LineContext;
	}
	public elses(): ElsesContext {
		return this.getTypedRuleContext(ElsesContext, 0) as ElsesContext;
	}
    public get ruleIndex(): number {
    	return SmartSyncParser.RULE_elses;
	}
	// @Override
	public accept<Result>(visitor: SmartSyncVisitor<Result>): Result {
		if (visitor.visitElses) {
			return visitor.visitElses(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArithmeticValueContext extends ParserRuleContext {
	constructor(parser?: SmartSyncParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public arithmetic(): ArithmeticContext {
		return this.getTypedRuleContext(ArithmeticContext, 0) as ArithmeticContext;
	}
    public get ruleIndex(): number {
    	return SmartSyncParser.RULE_arithmeticValue;
	}
	// @Override
	public accept<Result>(visitor: SmartSyncVisitor<Result>): Result {
		if (visitor.visitArithmeticValue) {
			return visitor.visitArithmeticValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArithmeticContext extends ParserRuleContext {
	constructor(parser?: SmartSyncParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public multExpr_list(): MultExprContext[] {
		return this.getTypedRuleContexts(MultExprContext) as MultExprContext[];
	}
	public multExpr(i: number): MultExprContext {
		return this.getTypedRuleContext(MultExprContext, i) as MultExprContext;
	}
    public get ruleIndex(): number {
    	return SmartSyncParser.RULE_arithmetic;
	}
	// @Override
	public accept<Result>(visitor: SmartSyncVisitor<Result>): Result {
		if (visitor.visitArithmetic) {
			return visitor.visitArithmetic(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MultExprContext extends ParserRuleContext {
	constructor(parser?: SmartSyncParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public atom_list(): AtomContext[] {
		return this.getTypedRuleContexts(AtomContext) as AtomContext[];
	}
	public atom(i: number): AtomContext {
		return this.getTypedRuleContext(AtomContext, i) as AtomContext;
	}
    public get ruleIndex(): number {
    	return SmartSyncParser.RULE_multExpr;
	}
	// @Override
	public accept<Result>(visitor: SmartSyncVisitor<Result>): Result {
		if (visitor.visitMultExpr) {
			return visitor.visitMultExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AtomContext extends ParserRuleContext {
	constructor(parser?: SmartSyncParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NUMBER(): TerminalNode {
		return this.getToken(SmartSyncParser.NUMBER, 0);
	}
	public ID(): TerminalNode {
		return this.getToken(SmartSyncParser.ID, 0);
	}
	public arithmetic(): ArithmeticContext {
		return this.getTypedRuleContext(ArithmeticContext, 0) as ArithmeticContext;
	}
    public get ruleIndex(): number {
    	return SmartSyncParser.RULE_atom;
	}
	// @Override
	public accept<Result>(visitor: SmartSyncVisitor<Result>): Result {
		if (visitor.visitAtom) {
			return visitor.visitAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentsContext extends ParserRuleContext {
	constructor(parser?: SmartSyncParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID_list(): TerminalNode[] {
	    	return this.getTokens(SmartSyncParser.ID);
	}
	public ID(i: number): TerminalNode {
		return this.getToken(SmartSyncParser.ID, i);
	}
	public arithmetic(): ArithmeticContext {
		return this.getTypedRuleContext(ArithmeticContext, 0) as ArithmeticContext;
	}
	public value(): ValueContext {
		return this.getTypedRuleContext(ValueContext, 0) as ValueContext;
	}
	public DIGIT_list(): TerminalNode[] {
	    	return this.getTokens(SmartSyncParser.DIGIT);
	}
	public DIGIT(i: number): TerminalNode {
		return this.getToken(SmartSyncParser.DIGIT, i);
	}
	public arrayValue_list(): ArrayValueContext[] {
		return this.getTypedRuleContexts(ArrayValueContext) as ArrayValueContext[];
	}
	public arrayValue(i: number): ArrayValueContext {
		return this.getTypedRuleContext(ArrayValueContext, i) as ArrayValueContext;
	}
    public get ruleIndex(): number {
    	return SmartSyncParser.RULE_assignments;
	}
	// @Override
	public accept<Result>(visitor: SmartSyncVisitor<Result>): Result {
		if (visitor.visitAssignments) {
			return visitor.visitAssignments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FuncReturnContext extends ParserRuleContext {
	constructor(parser?: SmartSyncParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public value(): ValueContext {
		return this.getTypedRuleContext(ValueContext, 0) as ValueContext;
	}
	public ID(): TerminalNode {
		return this.getToken(SmartSyncParser.ID, 0);
	}
	public arithmetic(): ArithmeticContext {
		return this.getTypedRuleContext(ArithmeticContext, 0) as ArithmeticContext;
	}
	public arrayValue_list(): ArrayValueContext[] {
		return this.getTypedRuleContexts(ArrayValueContext) as ArrayValueContext[];
	}
	public arrayValue(i: number): ArrayValueContext {
		return this.getTypedRuleContext(ArrayValueContext, i) as ArrayValueContext;
	}
    public get ruleIndex(): number {
    	return SmartSyncParser.RULE_funcReturn;
	}
	// @Override
	public accept<Result>(visitor: SmartSyncVisitor<Result>): Result {
		if (visitor.visitFuncReturn) {
			return visitor.visitFuncReturn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionsContext extends ParserRuleContext {
	constructor(parser?: SmartSyncParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TYPE_list(): TerminalNode[] {
	    	return this.getTokens(SmartSyncParser.TYPE);
	}
	public TYPE(i: number): TerminalNode {
		return this.getToken(SmartSyncParser.TYPE, i);
	}
	public ID_list(): TerminalNode[] {
	    	return this.getTokens(SmartSyncParser.ID);
	}
	public ID(i: number): TerminalNode {
		return this.getToken(SmartSyncParser.ID, i);
	}
	public funcReturn(): FuncReturnContext {
		return this.getTypedRuleContext(FuncReturnContext, 0) as FuncReturnContext;
	}
	public line_list(): LineContext[] {
		return this.getTypedRuleContexts(LineContext) as LineContext[];
	}
	public line(i: number): LineContext {
		return this.getTypedRuleContext(LineContext, i) as LineContext;
	}
    public get ruleIndex(): number {
    	return SmartSyncParser.RULE_functions;
	}
	// @Override
	public accept<Result>(visitor: SmartSyncVisitor<Result>): Result {
		if (visitor.visitFunctions) {
			return visitor.visitFunctions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OutputContext extends ParserRuleContext {
	constructor(parser?: SmartSyncParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public value(): ValueContext {
		return this.getTypedRuleContext(ValueContext, 0) as ValueContext;
	}
	public ID(): TerminalNode {
		return this.getToken(SmartSyncParser.ID, 0);
	}
    public get ruleIndex(): number {
    	return SmartSyncParser.RULE_output;
	}
	// @Override
	public accept<Result>(visitor: SmartSyncVisitor<Result>): Result {
		if (visitor.visitOutput) {
			return visitor.visitOutput(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DelayContext extends ParserRuleContext {
	constructor(parser?: SmartSyncParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DIGIT_list(): TerminalNode[] {
	    	return this.getTokens(SmartSyncParser.DIGIT);
	}
	public DIGIT(i: number): TerminalNode {
		return this.getToken(SmartSyncParser.DIGIT, i);
	}
    public get ruleIndex(): number {
    	return SmartSyncParser.RULE_delay;
	}
	// @Override
	public accept<Result>(visitor: SmartSyncVisitor<Result>): Result {
		if (visitor.visitDelay) {
			return visitor.visitDelay(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayValueContext extends ParserRuleContext {
	constructor(parser?: SmartSyncParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public value(): ValueContext {
		return this.getTypedRuleContext(ValueContext, 0) as ValueContext;
	}
    public get ruleIndex(): number {
    	return SmartSyncParser.RULE_arrayValue;
	}
	// @Override
	public accept<Result>(visitor: SmartSyncVisitor<Result>): Result {
		if (visitor.visitArrayValue) {
			return visitor.visitArrayValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayStmContext extends ParserRuleContext {
	constructor(parser?: SmartSyncParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID(): TerminalNode {
		return this.getToken(SmartSyncParser.ID, 0);
	}
	public DIGIT_list(): TerminalNode[] {
	    	return this.getTokens(SmartSyncParser.DIGIT);
	}
	public DIGIT(i: number): TerminalNode {
		return this.getToken(SmartSyncParser.DIGIT, i);
	}
	public value(): ValueContext {
		return this.getTypedRuleContext(ValueContext, 0) as ValueContext;
	}
    public get ruleIndex(): number {
    	return SmartSyncParser.RULE_arrayStm;
	}
	// @Override
	public accept<Result>(visitor: SmartSyncVisitor<Result>): Result {
		if (visitor.visitArrayStm) {
			return visitor.visitArrayStm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
