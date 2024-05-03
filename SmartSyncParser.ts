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
	public static readonly RULE_expression = 10;
	public static readonly RULE_stringArithmetic = 11;
	public static readonly RULE_atomString = 12;
	public static readonly RULE_arithmetic = 13;
	public static readonly RULE_multExpr = 14;
	public static readonly RULE_atom = 15;
	public static readonly RULE_assignments = 16;
	public static readonly RULE_funcReturn = 17;
	public static readonly RULE_functions = 18;
	public static readonly RULE_output = 19;
	public static readonly RULE_delay = 20;
	public static readonly RULE_arrayValue = 21;
	public static readonly RULE_arrayStm = 22;
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
		"conditionBase", "ifStm", "elses", "arithmeticValue", "expression", "stringArithmetic", 
		"atomString", "arithmetic", "multExpr", "atom", "assignments", "funcReturn", 
		"functions", "output", "delay", "arrayValue", "arrayStm",
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
			this.state = 47;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 46;
				this.line();
				}
				}
				this.state = 49;
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
			this.state = 55;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 51;
				this.declaration();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 52;
				this.statements();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 53;
				this.assignments();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 54;
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
			this.state = 83;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 57;
				this.match(SmartSyncParser.BOOL);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 58;
				this.match(SmartSyncParser.STRING);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 59;
				this.match(SmartSyncParser.NUMBER);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 60;
				this.match(SmartSyncParser.ID);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 61;
				this.match(SmartSyncParser.ID);
				this.state = 62;
				this.match(SmartSyncParser.T__0);
				this.state = 63;
				this.match(SmartSyncParser.T__1);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 64;
				this.match(SmartSyncParser.ID);
				this.state = 65;
				this.match(SmartSyncParser.T__2);
				this.state = 67;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 66;
					this.match(SmartSyncParser.DIGIT);
					}
					}
					this.state = 69;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===37);
				this.state = 71;
				this.match(SmartSyncParser.T__3);
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 72;
				this.match(SmartSyncParser.ID);
				this.state = 73;
				this.match(SmartSyncParser.T__4);
				this.state = 79;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===3 || _la===5 || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 29) !== 0)) {
					{
					{
					this.state = 74;
					this.funcReturn();
					this.state = 75;
					this.match(SmartSyncParser.T__5);
					}
					}
					this.state = 81;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 82;
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
			this.state = 107;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 85;
				this.match(SmartSyncParser.TYPE);
				this.state = 86;
				this.match(SmartSyncParser.ID);
				this.state = 87;
				this.match(SmartSyncParser.T__7);
				this.state = 88;
				this.expression();
				this.state = 89;
				this.match(SmartSyncParser.T__8);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 91;
				this.match(SmartSyncParser.TYPE);
				this.state = 92;
				this.match(SmartSyncParser.ID);
				this.state = 93;
				this.match(SmartSyncParser.T__0);
				this.state = 94;
				this.match(SmartSyncParser.T__7);
				this.state = 95;
				this.match(SmartSyncParser.T__2);
				this.state = 102;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===3 || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 29) !== 0)) {
					{
					{
					this.state = 96;
					this.arrayValue();
					this.state = 98;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===6) {
						{
						this.state = 97;
						this.match(SmartSyncParser.T__5);
						}
					}

					}
					}
					this.state = 104;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 105;
				this.match(SmartSyncParser.T__3);
				this.state = 106;
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
			this.state = 124;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 17:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 109;
				this.ifStm();
				this.state = 110;
				this.match(SmartSyncParser.T__8);
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 112;
				this.match(SmartSyncParser.T__9);
				this.state = 113;
				this.condition();
				this.state = 114;
				this.match(SmartSyncParser.T__10);
				this.state = 118;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & 25165953) !== 0)) {
					{
					{
					this.state = 115;
					this.line();
					}
					}
					this.state = 120;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 121;
				this.match(SmartSyncParser.T__11);
				}
				break;
			case 34:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 123;
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
			this.state = 126;
			this.conditionBase();
			this.state = 131;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===13 || _la===14) {
				{
				{
				this.state = 127;
				_la = this._input.LA(1);
				if(!(_la===13 || _la===14)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 128;
				this.conditionBase();
				}
				}
				this.state = 133;
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
			this.state = 144;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 134;
				_la = this._input.LA(1);
				if(!(_la===34 || _la===36)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 135;
				this.match(SmartSyncParser.LOGIC_OP);
				this.state = 136;
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
				this.state = 137;
				_la = this._input.LA(1);
				if(!(((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 13) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 138;
				_la = this._input.LA(1);
				if(!(_la===15 || _la===16)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 139;
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
				this.state = 140;
				this.match(SmartSyncParser.T__4);
				this.state = 141;
				this.condition();
				this.state = 142;
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
			this.state = 146;
			this.match(SmartSyncParser.T__16);
			this.state = 147;
			this.condition();
			this.state = 148;
			this.match(SmartSyncParser.T__10);
			this.state = 152;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & 25165953) !== 0)) {
				{
				{
				this.state = 149;
				this.line();
				}
				}
				this.state = 154;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 155;
			this.match(SmartSyncParser.T__17);
			this.state = 166;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				{
				this.state = 156;
				this.elses();
				}
				break;
			case 2:
				{
				this.state = 157;
				this.match(SmartSyncParser.T__18);
				this.state = 158;
				this.match(SmartSyncParser.T__10);
				this.state = 162;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & 25165953) !== 0)) {
					{
					{
					this.state = 159;
					this.line();
					}
					}
					this.state = 164;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 165;
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
			this.state = 168;
			this.match(SmartSyncParser.T__18);
			this.state = 169;
			this.match(SmartSyncParser.T__16);
			this.state = 170;
			this.condition();
			this.state = 171;
			this.match(SmartSyncParser.T__10);
			this.state = 175;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & 25165953) !== 0)) {
				{
				{
				this.state = 172;
				this.line();
				}
				}
				this.state = 177;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 178;
			this.match(SmartSyncParser.T__17);
			this.state = 189;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				{
				this.state = 179;
				this.elses();
				}
				break;
			case 2:
				{
				this.state = 180;
				this.match(SmartSyncParser.T__18);
				this.state = 181;
				this.match(SmartSyncParser.T__10);
				this.state = 185;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & 25165953) !== 0)) {
					{
					{
					this.state = 182;
					this.line();
					}
					}
					this.state = 187;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 188;
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
			this.state = 191;
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
	public expression(): ExpressionContext {
		let localctx: ExpressionContext = new ExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, SmartSyncParser.RULE_expression);
		try {
			this.state = 195;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 18, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 193;
				this.stringArithmetic();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 194;
				this.arithmetic();
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
	public stringArithmetic(): StringArithmeticContext {
		let localctx: StringArithmeticContext = new StringArithmeticContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, SmartSyncParser.RULE_stringArithmetic);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 197;
			this.atomString();
			this.state = 202;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===20) {
				{
				{
				this.state = 198;
				this.match(SmartSyncParser.T__19);
				this.state = 199;
				this.atomString();
				}
				}
				this.state = 204;
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
	public atomString(): AtomStringContext {
		let localctx: AtomStringContext = new AtomStringContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, SmartSyncParser.RULE_atomString);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 205;
			_la = this._input.LA(1);
			if(!(_la===34 || _la===35)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
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
	public arithmetic(): ArithmeticContext {
		let localctx: ArithmeticContext = new ArithmeticContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, SmartSyncParser.RULE_arithmetic);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 207;
			this.multExpr();
			this.state = 212;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===20 || _la===21) {
				{
				{
				this.state = 208;
				_la = this._input.LA(1);
				if(!(_la===20 || _la===21)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 209;
				this.multExpr();
				}
				}
				this.state = 214;
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
		this.enterRule(localctx, 28, SmartSyncParser.RULE_multExpr);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 215;
			this.atom();
			this.state = 220;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===22 || _la===23) {
				{
				{
				this.state = 216;
				_la = this._input.LA(1);
				if(!(_la===22 || _la===23)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 217;
				this.atom();
				}
				}
				this.state = 222;
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
		this.enterRule(localctx, 30, SmartSyncParser.RULE_atom);
		try {
			this.state = 229;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 36:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 223;
				this.match(SmartSyncParser.NUMBER);
				}
				break;
			case 34:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 224;
				this.match(SmartSyncParser.ID);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 225;
				this.match(SmartSyncParser.T__4);
				this.state = 226;
				this.arithmetic();
				this.state = 227;
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
		this.enterRule(localctx, 32, SmartSyncParser.RULE_assignments);
		let _la: number;
		try {
			this.state = 263;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 26, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 231;
				this.match(SmartSyncParser.ID);
				this.state = 232;
				this.match(SmartSyncParser.T__7);
				this.state = 233;
				this.expression();
				this.state = 234;
				this.match(SmartSyncParser.T__8);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 236;
				this.match(SmartSyncParser.ID);
				this.state = 237;
				this.match(SmartSyncParser.T__2);
				this.state = 239;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 238;
					this.match(SmartSyncParser.DIGIT);
					}
					}
					this.state = 241;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===37);
				this.state = 243;
				this.match(SmartSyncParser.T__3);
				this.state = 244;
				this.match(SmartSyncParser.T__7);
				this.state = 245;
				this.expression();
				this.state = 246;
				this.match(SmartSyncParser.T__8);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 248;
				this.match(SmartSyncParser.ID);
				this.state = 249;
				this.match(SmartSyncParser.T__0);
				this.state = 250;
				this.match(SmartSyncParser.T__7);
				this.state = 251;
				this.match(SmartSyncParser.T__2);
				this.state = 258;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===3 || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 29) !== 0)) {
					{
					{
					this.state = 252;
					this.arrayValue();
					this.state = 254;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===6) {
						{
						this.state = 253;
						this.match(SmartSyncParser.T__5);
						}
					}

					}
					}
					this.state = 260;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 261;
				this.match(SmartSyncParser.T__3);
				this.state = 262;
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
		this.enterRule(localctx, 34, SmartSyncParser.RULE_funcReturn);
		let _la: number;
		try {
			this.state = 282;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 265;
				this.value();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 266;
				this.match(SmartSyncParser.ID);
				this.state = 268;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===1) {
					{
					this.state = 267;
					this.match(SmartSyncParser.T__0);
					}
				}

				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 270;
				this.arithmetic();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 271;
				this.match(SmartSyncParser.T__2);
				this.state = 278;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===3 || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 29) !== 0)) {
					{
					{
					this.state = 272;
					this.arrayValue();
					this.state = 274;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===6) {
						{
						this.state = 273;
						this.match(SmartSyncParser.T__5);
						}
					}

					}
					}
					this.state = 280;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 281;
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
		this.enterRule(localctx, 36, SmartSyncParser.RULE_functions);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 284;
			this.match(SmartSyncParser.TYPE);
			this.state = 285;
			this.match(SmartSyncParser.T__23);
			this.state = 286;
			this.match(SmartSyncParser.ID);
			this.state = 287;
			this.match(SmartSyncParser.T__4);
			this.state = 298;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===33) {
				{
				{
				this.state = 288;
				this.match(SmartSyncParser.TYPE);
				this.state = 289;
				this.match(SmartSyncParser.ID);
				this.state = 291;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===1) {
					{
					this.state = 290;
					this.match(SmartSyncParser.T__0);
					}
				}

				this.state = 294;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===6) {
					{
					this.state = 293;
					this.match(SmartSyncParser.T__5);
					}
				}

				}
				}
				this.state = 300;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 301;
			this.match(SmartSyncParser.T__6);
			this.state = 302;
			this.match(SmartSyncParser.T__10);
			this.state = 306;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & 25165953) !== 0)) {
				{
				{
				this.state = 303;
				this.line();
				}
				}
				this.state = 308;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 309;
			this.match(SmartSyncParser.T__8);
			this.state = 310;
			this.match(SmartSyncParser.T__24);
			this.state = 311;
			this.funcReturn();
			this.state = 312;
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
		this.enterRule(localctx, 38, SmartSyncParser.RULE_output);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 314;
			this.match(SmartSyncParser.T__26);
			this.state = 320;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 36, this._ctx) ) {
			case 1:
				{
				this.state = 315;
				this.value();
				}
				break;
			case 2:
				{
				this.state = 316;
				this.match(SmartSyncParser.ID);
				this.state = 318;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===1) {
					{
					this.state = 317;
					this.match(SmartSyncParser.T__0);
					}
				}

				}
				break;
			}
			this.state = 322;
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
		this.enterRule(localctx, 40, SmartSyncParser.RULE_delay);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 324;
			this.match(SmartSyncParser.T__27);
			this.state = 326;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 325;
				this.match(SmartSyncParser.DIGIT);
				}
				}
				this.state = 328;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===37);
			this.state = 330;
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
		this.enterRule(localctx, 42, SmartSyncParser.RULE_arrayValue);
		try {
			this.state = 337;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 3:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 332;
				this.match(SmartSyncParser.T__2);
				this.state = 333;
				this.value();
				this.state = 334;
				this.match(SmartSyncParser.T__3);
				}
				break;
			case 32:
			case 34:
			case 35:
			case 36:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 336;
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
		this.enterRule(localctx, 44, SmartSyncParser.RULE_arrayStm);
		let _la: number;
		try {
			this.state = 357;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 41, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 339;
				this.match(SmartSyncParser.ID);
				this.state = 340;
				this.match(SmartSyncParser.T__2);
				this.state = 342;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 341;
					this.match(SmartSyncParser.DIGIT);
					}
					}
					this.state = 344;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===37);
				this.state = 346;
				this.match(SmartSyncParser.T__3);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 347;
				this.match(SmartSyncParser.ID);
				this.state = 348;
				this.match(SmartSyncParser.T__0);
				this.state = 355;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 29:
					{
					this.state = 349;
					this.match(SmartSyncParser.T__28);
					this.state = 350;
					this.value();
					this.state = 351;
					this.match(SmartSyncParser.T__8);
					}
					break;
				case 30:
					{
					this.state = 353;
					this.match(SmartSyncParser.T__29);
					}
					break;
				case 31:
					{
					this.state = 354;
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

	public static readonly _serializedATN: number[] = [4,1,41,360,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,1,0,4,0,48,8,0,11,
	0,12,0,49,1,1,1,1,1,1,1,1,3,1,56,8,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,
	2,1,2,4,2,68,8,2,11,2,12,2,69,1,2,1,2,1,2,1,2,1,2,1,2,5,2,78,8,2,10,2,12,
	2,81,9,2,1,2,3,2,84,8,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,
	1,3,3,3,99,8,3,5,3,101,8,3,10,3,12,3,104,9,3,1,3,1,3,3,3,108,8,3,1,4,1,
	4,1,4,1,4,1,4,1,4,1,4,5,4,117,8,4,10,4,12,4,120,9,4,1,4,1,4,1,4,3,4,125,
	8,4,1,5,1,5,1,5,5,5,130,8,5,10,5,12,5,133,9,5,1,6,1,6,1,6,1,6,1,6,1,6,1,
	6,1,6,1,6,1,6,3,6,145,8,6,1,7,1,7,1,7,1,7,5,7,151,8,7,10,7,12,7,154,9,7,
	1,7,1,7,1,7,1,7,1,7,5,7,161,8,7,10,7,12,7,164,9,7,1,7,3,7,167,8,7,1,8,1,
	8,1,8,1,8,1,8,5,8,174,8,8,10,8,12,8,177,9,8,1,8,1,8,1,8,1,8,1,8,5,8,184,
	8,8,10,8,12,8,187,9,8,1,8,3,8,190,8,8,1,9,1,9,1,10,1,10,3,10,196,8,10,1,
	11,1,11,1,11,5,11,201,8,11,10,11,12,11,204,9,11,1,12,1,12,1,13,1,13,1,13,
	5,13,211,8,13,10,13,12,13,214,9,13,1,14,1,14,1,14,5,14,219,8,14,10,14,12,
	14,222,9,14,1,15,1,15,1,15,1,15,1,15,1,15,3,15,230,8,15,1,16,1,16,1,16,
	1,16,1,16,1,16,1,16,1,16,4,16,240,8,16,11,16,12,16,241,1,16,1,16,1,16,1,
	16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,3,16,255,8,16,5,16,257,8,16,10,16,
	12,16,260,9,16,1,16,1,16,3,16,264,8,16,1,17,1,17,1,17,3,17,269,8,17,1,17,
	1,17,1,17,1,17,3,17,275,8,17,5,17,277,8,17,10,17,12,17,280,9,17,1,17,3,
	17,283,8,17,1,18,1,18,1,18,1,18,1,18,1,18,1,18,3,18,292,8,18,1,18,3,18,
	295,8,18,5,18,297,8,18,10,18,12,18,300,9,18,1,18,1,18,1,18,5,18,305,8,18,
	10,18,12,18,308,9,18,1,18,1,18,1,18,1,18,1,18,1,19,1,19,1,19,1,19,3,19,
	319,8,19,3,19,321,8,19,1,19,1,19,1,20,1,20,4,20,327,8,20,11,20,12,20,328,
	1,20,1,20,1,21,1,21,1,21,1,21,1,21,3,21,338,8,21,1,22,1,22,1,22,4,22,343,
	8,22,11,22,12,22,344,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,3,22,
	356,8,22,3,22,358,8,22,1,22,0,0,23,0,2,4,6,8,10,12,14,16,18,20,22,24,26,
	28,30,32,34,36,38,40,42,44,0,7,1,0,13,14,2,0,34,34,36,36,2,0,32,32,34,35,
	1,0,15,16,1,0,34,35,1,0,20,21,1,0,22,23,394,0,47,1,0,0,0,2,55,1,0,0,0,4,
	83,1,0,0,0,6,107,1,0,0,0,8,124,1,0,0,0,10,126,1,0,0,0,12,144,1,0,0,0,14,
	146,1,0,0,0,16,168,1,0,0,0,18,191,1,0,0,0,20,195,1,0,0,0,22,197,1,0,0,0,
	24,205,1,0,0,0,26,207,1,0,0,0,28,215,1,0,0,0,30,229,1,0,0,0,32,263,1,0,
	0,0,34,282,1,0,0,0,36,284,1,0,0,0,38,314,1,0,0,0,40,324,1,0,0,0,42,337,
	1,0,0,0,44,357,1,0,0,0,46,48,3,2,1,0,47,46,1,0,0,0,48,49,1,0,0,0,49,47,
	1,0,0,0,49,50,1,0,0,0,50,1,1,0,0,0,51,56,3,6,3,0,52,56,3,8,4,0,53,56,3,
	32,16,0,54,56,3,36,18,0,55,51,1,0,0,0,55,52,1,0,0,0,55,53,1,0,0,0,55,54,
	1,0,0,0,56,3,1,0,0,0,57,84,5,32,0,0,58,84,5,35,0,0,59,84,5,36,0,0,60,84,
	5,34,0,0,61,62,5,34,0,0,62,63,5,1,0,0,63,84,5,2,0,0,64,65,5,34,0,0,65,67,
	5,3,0,0,66,68,5,37,0,0,67,66,1,0,0,0,68,69,1,0,0,0,69,67,1,0,0,0,69,70,
	1,0,0,0,70,71,1,0,0,0,71,84,5,4,0,0,72,73,5,34,0,0,73,79,5,5,0,0,74,75,
	3,34,17,0,75,76,5,6,0,0,76,78,1,0,0,0,77,74,1,0,0,0,78,81,1,0,0,0,79,77,
	1,0,0,0,79,80,1,0,0,0,80,82,1,0,0,0,81,79,1,0,0,0,82,84,5,7,0,0,83,57,1,
	0,0,0,83,58,1,0,0,0,83,59,1,0,0,0,83,60,1,0,0,0,83,61,1,0,0,0,83,64,1,0,
	0,0,83,72,1,0,0,0,84,5,1,0,0,0,85,86,5,33,0,0,86,87,5,34,0,0,87,88,5,8,
	0,0,88,89,3,20,10,0,89,90,5,9,0,0,90,108,1,0,0,0,91,92,5,33,0,0,92,93,5,
	34,0,0,93,94,5,1,0,0,94,95,5,8,0,0,95,102,5,3,0,0,96,98,3,42,21,0,97,99,
	5,6,0,0,98,97,1,0,0,0,98,99,1,0,0,0,99,101,1,0,0,0,100,96,1,0,0,0,101,104,
	1,0,0,0,102,100,1,0,0,0,102,103,1,0,0,0,103,105,1,0,0,0,104,102,1,0,0,0,
	105,106,5,4,0,0,106,108,5,9,0,0,107,85,1,0,0,0,107,91,1,0,0,0,108,7,1,0,
	0,0,109,110,3,14,7,0,110,111,5,9,0,0,111,125,1,0,0,0,112,113,5,10,0,0,113,
	114,3,10,5,0,114,118,5,11,0,0,115,117,3,2,1,0,116,115,1,0,0,0,117,120,1,
	0,0,0,118,116,1,0,0,0,118,119,1,0,0,0,119,121,1,0,0,0,120,118,1,0,0,0,121,
	122,5,12,0,0,122,125,1,0,0,0,123,125,3,44,22,0,124,109,1,0,0,0,124,112,
	1,0,0,0,124,123,1,0,0,0,125,9,1,0,0,0,126,131,3,12,6,0,127,128,7,0,0,0,
	128,130,3,12,6,0,129,127,1,0,0,0,130,133,1,0,0,0,131,129,1,0,0,0,131,132,
	1,0,0,0,132,11,1,0,0,0,133,131,1,0,0,0,134,135,7,1,0,0,135,136,5,39,0,0,
	136,145,7,1,0,0,137,138,7,2,0,0,138,139,7,3,0,0,139,145,7,2,0,0,140,141,
	5,5,0,0,141,142,3,10,5,0,142,143,5,7,0,0,143,145,1,0,0,0,144,134,1,0,0,
	0,144,137,1,0,0,0,144,140,1,0,0,0,145,13,1,0,0,0,146,147,5,17,0,0,147,148,
	3,10,5,0,148,152,5,11,0,0,149,151,3,2,1,0,150,149,1,0,0,0,151,154,1,0,0,
	0,152,150,1,0,0,0,152,153,1,0,0,0,153,155,1,0,0,0,154,152,1,0,0,0,155,166,
	5,18,0,0,156,167,3,16,8,0,157,158,5,19,0,0,158,162,5,11,0,0,159,161,3,2,
	1,0,160,159,1,0,0,0,161,164,1,0,0,0,162,160,1,0,0,0,162,163,1,0,0,0,163,
	165,1,0,0,0,164,162,1,0,0,0,165,167,5,18,0,0,166,156,1,0,0,0,166,157,1,
	0,0,0,166,167,1,0,0,0,167,15,1,0,0,0,168,169,5,19,0,0,169,170,5,17,0,0,
	170,171,3,10,5,0,171,175,5,11,0,0,172,174,3,2,1,0,173,172,1,0,0,0,174,177,
	1,0,0,0,175,173,1,0,0,0,175,176,1,0,0,0,176,178,1,0,0,0,177,175,1,0,0,0,
	178,189,5,18,0,0,179,190,3,16,8,0,180,181,5,19,0,0,181,185,5,11,0,0,182,
	184,3,2,1,0,183,182,1,0,0,0,184,187,1,0,0,0,185,183,1,0,0,0,185,186,1,0,
	0,0,186,188,1,0,0,0,187,185,1,0,0,0,188,190,5,18,0,0,189,179,1,0,0,0,189,
	180,1,0,0,0,189,190,1,0,0,0,190,17,1,0,0,0,191,192,3,26,13,0,192,19,1,0,
	0,0,193,196,3,22,11,0,194,196,3,26,13,0,195,193,1,0,0,0,195,194,1,0,0,0,
	196,21,1,0,0,0,197,202,3,24,12,0,198,199,5,20,0,0,199,201,3,24,12,0,200,
	198,1,0,0,0,201,204,1,0,0,0,202,200,1,0,0,0,202,203,1,0,0,0,203,23,1,0,
	0,0,204,202,1,0,0,0,205,206,7,4,0,0,206,25,1,0,0,0,207,212,3,28,14,0,208,
	209,7,5,0,0,209,211,3,28,14,0,210,208,1,0,0,0,211,214,1,0,0,0,212,210,1,
	0,0,0,212,213,1,0,0,0,213,27,1,0,0,0,214,212,1,0,0,0,215,220,3,30,15,0,
	216,217,7,6,0,0,217,219,3,30,15,0,218,216,1,0,0,0,219,222,1,0,0,0,220,218,
	1,0,0,0,220,221,1,0,0,0,221,29,1,0,0,0,222,220,1,0,0,0,223,230,5,36,0,0,
	224,230,5,34,0,0,225,226,5,5,0,0,226,227,3,26,13,0,227,228,5,7,0,0,228,
	230,1,0,0,0,229,223,1,0,0,0,229,224,1,0,0,0,229,225,1,0,0,0,230,31,1,0,
	0,0,231,232,5,34,0,0,232,233,5,8,0,0,233,234,3,20,10,0,234,235,5,9,0,0,
	235,264,1,0,0,0,236,237,5,34,0,0,237,239,5,3,0,0,238,240,5,37,0,0,239,238,
	1,0,0,0,240,241,1,0,0,0,241,239,1,0,0,0,241,242,1,0,0,0,242,243,1,0,0,0,
	243,244,5,4,0,0,244,245,5,8,0,0,245,246,3,20,10,0,246,247,5,9,0,0,247,264,
	1,0,0,0,248,249,5,34,0,0,249,250,5,1,0,0,250,251,5,8,0,0,251,258,5,3,0,
	0,252,254,3,42,21,0,253,255,5,6,0,0,254,253,1,0,0,0,254,255,1,0,0,0,255,
	257,1,0,0,0,256,252,1,0,0,0,257,260,1,0,0,0,258,256,1,0,0,0,258,259,1,0,
	0,0,259,261,1,0,0,0,260,258,1,0,0,0,261,262,5,4,0,0,262,264,5,9,0,0,263,
	231,1,0,0,0,263,236,1,0,0,0,263,248,1,0,0,0,264,33,1,0,0,0,265,283,3,4,
	2,0,266,268,5,34,0,0,267,269,5,1,0,0,268,267,1,0,0,0,268,269,1,0,0,0,269,
	283,1,0,0,0,270,283,3,26,13,0,271,278,5,3,0,0,272,274,3,42,21,0,273,275,
	5,6,0,0,274,273,1,0,0,0,274,275,1,0,0,0,275,277,1,0,0,0,276,272,1,0,0,0,
	277,280,1,0,0,0,278,276,1,0,0,0,278,279,1,0,0,0,279,281,1,0,0,0,280,278,
	1,0,0,0,281,283,5,4,0,0,282,265,1,0,0,0,282,266,1,0,0,0,282,270,1,0,0,0,
	282,271,1,0,0,0,283,35,1,0,0,0,284,285,5,33,0,0,285,286,5,24,0,0,286,287,
	5,34,0,0,287,298,5,5,0,0,288,289,5,33,0,0,289,291,5,34,0,0,290,292,5,1,
	0,0,291,290,1,0,0,0,291,292,1,0,0,0,292,294,1,0,0,0,293,295,5,6,0,0,294,
	293,1,0,0,0,294,295,1,0,0,0,295,297,1,0,0,0,296,288,1,0,0,0,297,300,1,0,
	0,0,298,296,1,0,0,0,298,299,1,0,0,0,299,301,1,0,0,0,300,298,1,0,0,0,301,
	302,5,7,0,0,302,306,5,11,0,0,303,305,3,2,1,0,304,303,1,0,0,0,305,308,1,
	0,0,0,306,304,1,0,0,0,306,307,1,0,0,0,307,309,1,0,0,0,308,306,1,0,0,0,309,
	310,5,9,0,0,310,311,5,25,0,0,311,312,3,34,17,0,312,313,5,26,0,0,313,37,
	1,0,0,0,314,320,5,27,0,0,315,321,3,4,2,0,316,318,5,34,0,0,317,319,5,1,0,
	0,318,317,1,0,0,0,318,319,1,0,0,0,319,321,1,0,0,0,320,315,1,0,0,0,320,316,
	1,0,0,0,321,322,1,0,0,0,322,323,5,9,0,0,323,39,1,0,0,0,324,326,5,28,0,0,
	325,327,5,37,0,0,326,325,1,0,0,0,327,328,1,0,0,0,328,326,1,0,0,0,328,329,
	1,0,0,0,329,330,1,0,0,0,330,331,5,9,0,0,331,41,1,0,0,0,332,333,5,3,0,0,
	333,334,3,4,2,0,334,335,5,4,0,0,335,338,1,0,0,0,336,338,3,4,2,0,337,332,
	1,0,0,0,337,336,1,0,0,0,338,43,1,0,0,0,339,340,5,34,0,0,340,342,5,3,0,0,
	341,343,5,37,0,0,342,341,1,0,0,0,343,344,1,0,0,0,344,342,1,0,0,0,344,345,
	1,0,0,0,345,346,1,0,0,0,346,358,5,4,0,0,347,348,5,34,0,0,348,355,5,1,0,
	0,349,350,5,29,0,0,350,351,3,4,2,0,351,352,5,9,0,0,352,356,1,0,0,0,353,
	356,5,30,0,0,354,356,5,31,0,0,355,349,1,0,0,0,355,353,1,0,0,0,355,354,1,
	0,0,0,356,358,1,0,0,0,357,339,1,0,0,0,357,347,1,0,0,0,358,45,1,0,0,0,42,
	49,55,69,79,83,98,102,107,118,124,131,144,152,162,166,175,185,189,195,202,
	212,220,229,241,254,258,263,268,274,278,282,291,294,298,306,318,320,328,
	337,344,355,357];

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
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
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


export class ExpressionContext extends ParserRuleContext {
	constructor(parser?: SmartSyncParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public stringArithmetic(): StringArithmeticContext {
		return this.getTypedRuleContext(StringArithmeticContext, 0) as StringArithmeticContext;
	}
	public arithmetic(): ArithmeticContext {
		return this.getTypedRuleContext(ArithmeticContext, 0) as ArithmeticContext;
	}
    public get ruleIndex(): number {
    	return SmartSyncParser.RULE_expression;
	}
	// @Override
	public accept<Result>(visitor: SmartSyncVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringArithmeticContext extends ParserRuleContext {
	constructor(parser?: SmartSyncParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public atomString_list(): AtomStringContext[] {
		return this.getTypedRuleContexts(AtomStringContext) as AtomStringContext[];
	}
	public atomString(i: number): AtomStringContext {
		return this.getTypedRuleContext(AtomStringContext, i) as AtomStringContext;
	}
    public get ruleIndex(): number {
    	return SmartSyncParser.RULE_stringArithmetic;
	}
	// @Override
	public accept<Result>(visitor: SmartSyncVisitor<Result>): Result {
		if (visitor.visitStringArithmetic) {
			return visitor.visitStringArithmetic(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AtomStringContext extends ParserRuleContext {
	constructor(parser?: SmartSyncParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public STRING(): TerminalNode {
		return this.getToken(SmartSyncParser.STRING, 0);
	}
	public ID(): TerminalNode {
		return this.getToken(SmartSyncParser.ID, 0);
	}
    public get ruleIndex(): number {
    	return SmartSyncParser.RULE_atomString;
	}
	// @Override
	public accept<Result>(visitor: SmartSyncVisitor<Result>): Result {
		if (visitor.visitAtomString) {
			return visitor.visitAtomString(this);
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
	public ID(): TerminalNode {
		return this.getToken(SmartSyncParser.ID, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
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
