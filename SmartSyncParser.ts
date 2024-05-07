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
	public static readonly BOOL = 31;
	public static readonly TYPE = 32;
	public static readonly ID = 33;
	public static readonly STRING = 34;
	public static readonly NUMBER = 35;
	public static readonly DIGIT = 36;
	public static readonly ARITHMETIC_OP = 37;
	public static readonly LOGIC_OP = 38;
	public static readonly WS = 39;
	public static readonly COMMENT = 40;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_program = 0;
	public static readonly RULE_line = 1;
	public static readonly RULE_value = 2;
	public static readonly RULE_declaration = 3;
	public static readonly RULE_statements = 4;
	public static readonly RULE_ifStm = 5;
	public static readonly RULE_elses = 6;
	public static readonly RULE_arithmeticValue = 7;
	public static readonly RULE_expression = 8;
	public static readonly RULE_stringArithmetic = 9;
	public static readonly RULE_arithmetic = 10;
	public static readonly RULE_multExpr = 11;
	public static readonly RULE_atom = 12;
	public static readonly RULE_condition = 13;
	public static readonly RULE_multConExpr = 14;
	public static readonly RULE_atomCon = 15;
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
                                                            "'}'", "'IF'", 
                                                            "'ELSE'", "'+'", 
                                                            "'-'", "'*'", 
                                                            "'/'", "'AND'", 
                                                            "'OR'", "'EQUAL'", 
                                                            "'NOT EQUAL'", 
                                                            "'GREATER'", 
                                                            "'LESS'", "'FUNCTION'", 
                                                            "'RETURN'", 
                                                            "'OUTPUT'", 
                                                            "'DELAY'", "'PUSH'", 
                                                            "'PULL'" ];
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
                                                             null, "BOOL", 
                                                             "TYPE", "ID", 
                                                             "STRING", "NUMBER", 
                                                             "DIGIT", "ARITHMETIC_OP", 
                                                             "LOGIC_OP", 
                                                             "WS", "COMMENT" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "line", "value", "declaration", "statements", "ifStm", "elses", 
		"arithmeticValue", "expression", "stringArithmetic", "arithmetic", "multExpr", 
		"atom", "condition", "multConExpr", "atomCon", "assignments", "funcReturn", 
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
			} while (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & 12976137) !== 0));
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
			this.state = 57;
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
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 55;
				this.output();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 56;
				this.delay();
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
				this.state = 59;
				this.match(SmartSyncParser.BOOL);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 60;
				this.match(SmartSyncParser.STRING);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 61;
				this.match(SmartSyncParser.NUMBER);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 62;
				this.match(SmartSyncParser.ID);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 63;
				this.match(SmartSyncParser.ID);
				this.state = 64;
				this.match(SmartSyncParser.T__0);
				this.state = 65;
				this.match(SmartSyncParser.T__1);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 66;
				this.match(SmartSyncParser.ID);
				this.state = 67;
				this.match(SmartSyncParser.T__2);
				this.state = 68;
				this.value();
				this.state = 69;
				this.match(SmartSyncParser.T__3);
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 71;
				this.match(SmartSyncParser.ID);
				this.state = 72;
				this.match(SmartSyncParser.T__4);
				this.state = 79;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2147483688) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 7) !== 0)) {
					{
					{
					this.state = 73;
					this.funcReturn();
					this.state = 75;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===6) {
						{
						this.state = 74;
						this.match(SmartSyncParser.T__5);
						}
					}

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
				while (_la===3 || _la===31 || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 7) !== 0)) {
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
			this.state = 122;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 13:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 109;
				this.ifStm();
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 110;
				this.match(SmartSyncParser.T__9);
				this.state = 111;
				this.condition();
				this.state = 112;
				this.match(SmartSyncParser.T__10);
				this.state = 116;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & 12976137) !== 0)) {
					{
					{
					this.state = 113;
					this.line();
					}
					}
					this.state = 118;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 119;
				this.match(SmartSyncParser.T__11);
				}
				break;
			case 33:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 121;
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
	public ifStm(): IfStmContext {
		let localctx: IfStmContext = new IfStmContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, SmartSyncParser.RULE_ifStm);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 124;
			this.match(SmartSyncParser.T__12);
			this.state = 125;
			this.condition();
			this.state = 126;
			this.match(SmartSyncParser.T__10);
			this.state = 130;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & 12976137) !== 0)) {
				{
				{
				this.state = 127;
				this.line();
				}
				}
				this.state = 132;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 133;
			this.match(SmartSyncParser.T__11);
			this.state = 144;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				{
				this.state = 134;
				this.elses();
				}
				break;
			case 2:
				{
				this.state = 135;
				this.match(SmartSyncParser.T__13);
				this.state = 136;
				this.match(SmartSyncParser.T__10);
				this.state = 140;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & 12976137) !== 0)) {
					{
					{
					this.state = 137;
					this.line();
					}
					}
					this.state = 142;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 143;
				this.match(SmartSyncParser.T__11);
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
		this.enterRule(localctx, 12, SmartSyncParser.RULE_elses);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 146;
			this.match(SmartSyncParser.T__13);
			this.state = 147;
			this.match(SmartSyncParser.T__12);
			this.state = 148;
			this.condition();
			this.state = 149;
			this.match(SmartSyncParser.T__10);
			this.state = 153;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & 12976137) !== 0)) {
				{
				{
				this.state = 150;
				this.line();
				}
				}
				this.state = 155;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 156;
			this.match(SmartSyncParser.T__11);
			this.state = 167;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				{
				this.state = 157;
				this.elses();
				}
				break;
			case 2:
				{
				this.state = 158;
				this.match(SmartSyncParser.T__13);
				this.state = 159;
				this.match(SmartSyncParser.T__10);
				this.state = 163;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & 12976137) !== 0)) {
					{
					{
					this.state = 160;
					this.line();
					}
					}
					this.state = 165;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 166;
				this.match(SmartSyncParser.T__11);
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
		this.enterRule(localctx, 14, SmartSyncParser.RULE_arithmeticValue);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 169;
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
		this.enterRule(localctx, 16, SmartSyncParser.RULE_expression);
		try {
			this.state = 178;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 171;
				this.stringArithmetic();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 172;
				this.arithmetic();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 173;
				this.value();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 174;
				this.match(SmartSyncParser.T__4);
				this.state = 175;
				this.expression();
				this.state = 176;
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
	public stringArithmetic(): StringArithmeticContext {
		let localctx: StringArithmeticContext = new StringArithmeticContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, SmartSyncParser.RULE_stringArithmetic);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 180;
			_la = this._input.LA(1);
			if(!(_la===33 || _la===34)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 185;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===15) {
				{
				{
				this.state = 181;
				this.match(SmartSyncParser.T__14);
				this.state = 182;
				_la = this._input.LA(1);
				if(!(_la===33 || _la===34)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				}
				this.state = 187;
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
	public arithmetic(): ArithmeticContext {
		let localctx: ArithmeticContext = new ArithmeticContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, SmartSyncParser.RULE_arithmetic);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 188;
			this.multExpr();
			this.state = 193;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===15 || _la===16) {
				{
				{
				this.state = 189;
				_la = this._input.LA(1);
				if(!(_la===15 || _la===16)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 190;
				this.multExpr();
				}
				}
				this.state = 195;
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
			this.state = 196;
			this.atom();
			this.state = 201;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===17 || _la===18) {
				{
				{
				this.state = 197;
				_la = this._input.LA(1);
				if(!(_la===17 || _la===18)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 198;
				this.atom();
				}
				}
				this.state = 203;
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
			this.state = 210;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 35:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 204;
				this.match(SmartSyncParser.NUMBER);
				}
				break;
			case 33:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 205;
				this.match(SmartSyncParser.ID);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 206;
				this.match(SmartSyncParser.T__4);
				this.state = 207;
				this.arithmetic();
				this.state = 208;
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
	public condition(): ConditionContext {
		let localctx: ConditionContext = new ConditionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, SmartSyncParser.RULE_condition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 212;
			this.multConExpr();
			this.state = 217;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===19 || _la===20) {
				{
				{
				this.state = 213;
				_la = this._input.LA(1);
				if(!(_la===19 || _la===20)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 214;
				this.multConExpr();
				}
				}
				this.state = 219;
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
	public multConExpr(): MultConExprContext {
		let localctx: MultConExprContext = new MultConExprContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, SmartSyncParser.RULE_multConExpr);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 220;
			this.atomCon();
			this.state = 225;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 31457280) !== 0)) {
				{
				{
				this.state = 221;
				_la = this._input.LA(1);
				if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 31457280) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 222;
				this.atomCon();
				}
				}
				this.state = 227;
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
	public atomCon(): AtomConContext {
		let localctx: AtomConContext = new AtomConContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, SmartSyncParser.RULE_atomCon);
		try {
			this.state = 234;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 35:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 228;
				this.match(SmartSyncParser.NUMBER);
				}
				break;
			case 33:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 229;
				this.match(SmartSyncParser.ID);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 230;
				this.match(SmartSyncParser.T__4);
				this.state = 231;
				this.condition();
				this.state = 232;
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
			this.state = 264;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 26, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 236;
				this.match(SmartSyncParser.ID);
				this.state = 237;
				this.match(SmartSyncParser.T__7);
				this.state = 238;
				this.expression();
				this.state = 239;
				this.match(SmartSyncParser.T__8);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 241;
				this.match(SmartSyncParser.ID);
				this.state = 242;
				this.match(SmartSyncParser.T__2);
				this.state = 243;
				this.value();
				this.state = 244;
				this.match(SmartSyncParser.T__3);
				this.state = 245;
				this.match(SmartSyncParser.T__7);
				this.state = 246;
				this.expression();
				this.state = 247;
				this.match(SmartSyncParser.T__8);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 249;
				this.match(SmartSyncParser.ID);
				this.state = 250;
				this.match(SmartSyncParser.T__0);
				this.state = 251;
				this.match(SmartSyncParser.T__7);
				this.state = 252;
				this.match(SmartSyncParser.T__2);
				this.state = 259;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===3 || _la===31 || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 7) !== 0)) {
					{
					{
					this.state = 253;
					this.arrayValue();
					this.state = 255;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===6) {
						{
						this.state = 254;
						this.match(SmartSyncParser.T__5);
						}
					}

					}
					}
					this.state = 261;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 262;
				this.match(SmartSyncParser.T__3);
				this.state = 263;
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
			this.state = 283;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 266;
				this.value();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 267;
				this.match(SmartSyncParser.ID);
				this.state = 269;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===1) {
					{
					this.state = 268;
					this.match(SmartSyncParser.T__0);
					}
				}

				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 271;
				this.arithmetic();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 272;
				this.match(SmartSyncParser.T__2);
				this.state = 279;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===3 || _la===31 || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 7) !== 0)) {
					{
					{
					this.state = 273;
					this.arrayValue();
					this.state = 275;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===6) {
						{
						this.state = 274;
						this.match(SmartSyncParser.T__5);
						}
					}

					}
					}
					this.state = 281;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 282;
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
			this.state = 285;
			this.match(SmartSyncParser.TYPE);
			this.state = 286;
			this.match(SmartSyncParser.T__24);
			this.state = 287;
			this.match(SmartSyncParser.ID);
			this.state = 288;
			this.match(SmartSyncParser.T__4);
			this.state = 299;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===32) {
				{
				{
				this.state = 289;
				this.match(SmartSyncParser.TYPE);
				this.state = 290;
				this.match(SmartSyncParser.ID);
				this.state = 292;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===1) {
					{
					this.state = 291;
					this.match(SmartSyncParser.T__0);
					}
				}

				this.state = 295;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===6) {
					{
					this.state = 294;
					this.match(SmartSyncParser.T__5);
					}
				}

				}
				}
				this.state = 301;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 302;
			this.match(SmartSyncParser.T__6);
			this.state = 303;
			this.match(SmartSyncParser.T__10);
			this.state = 307;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & 12976137) !== 0)) {
				{
				{
				this.state = 304;
				this.line();
				}
				}
				this.state = 309;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 310;
			this.match(SmartSyncParser.T__25);
			this.state = 311;
			this.funcReturn();
			this.state = 312;
			this.match(SmartSyncParser.T__8);
			this.state = 313;
			this.match(SmartSyncParser.T__11);
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
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 315;
			this.match(SmartSyncParser.T__26);
			this.state = 322;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 35, this._ctx) ) {
			case 1:
				{
				this.state = 316;
				this.value();
				}
				break;
			case 2:
				{
				this.state = 317;
				this.match(SmartSyncParser.ID);
				this.state = 318;
				this.match(SmartSyncParser.T__2);
				this.state = 319;
				this.value();
				this.state = 320;
				this.match(SmartSyncParser.T__3);
				}
				break;
			}
			this.state = 324;
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
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 326;
			this.match(SmartSyncParser.T__27);
			this.state = 327;
			this.value();
			this.state = 328;
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
			this.state = 335;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 3:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 330;
				this.match(SmartSyncParser.T__2);
				this.state = 331;
				this.value();
				this.state = 332;
				this.match(SmartSyncParser.T__3);
				}
				break;
			case 31:
			case 33:
			case 34:
			case 35:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 334;
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
		try {
			this.state = 354;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 38, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 337;
				this.match(SmartSyncParser.ID);
				this.state = 338;
				this.match(SmartSyncParser.T__2);
				this.state = 339;
				this.value();
				this.state = 340;
				this.match(SmartSyncParser.T__3);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 342;
				this.match(SmartSyncParser.ID);
				this.state = 343;
				this.match(SmartSyncParser.T__0);
				this.state = 352;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 29:
					{
					this.state = 344;
					this.match(SmartSyncParser.T__28);
					this.state = 345;
					this.value();
					this.state = 346;
					this.match(SmartSyncParser.T__8);
					}
					break;
				case 30:
					{
					this.state = 348;
					this.match(SmartSyncParser.T__29);
					this.state = 349;
					this.match(SmartSyncParser.T__8);
					}
					break;
				case 2:
					{
					this.state = 350;
					this.match(SmartSyncParser.T__1);
					this.state = 351;
					this.match(SmartSyncParser.T__8);
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

	public static readonly _serializedATN: number[] = [4,1,40,357,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,1,0,4,0,48,8,0,11,
	0,12,0,49,1,1,1,1,1,1,1,1,1,1,1,1,3,1,58,8,1,1,2,1,2,1,2,1,2,1,2,1,2,1,
	2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,76,8,2,5,2,78,8,2,10,2,12,2,81,
	9,2,1,2,3,2,84,8,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,
	3,3,99,8,3,5,3,101,8,3,10,3,12,3,104,9,3,1,3,1,3,3,3,108,8,3,1,4,1,4,1,
	4,1,4,1,4,5,4,115,8,4,10,4,12,4,118,9,4,1,4,1,4,1,4,3,4,123,8,4,1,5,1,5,
	1,5,1,5,5,5,129,8,5,10,5,12,5,132,9,5,1,5,1,5,1,5,1,5,1,5,5,5,139,8,5,10,
	5,12,5,142,9,5,1,5,3,5,145,8,5,1,6,1,6,1,6,1,6,1,6,5,6,152,8,6,10,6,12,
	6,155,9,6,1,6,1,6,1,6,1,6,1,6,5,6,162,8,6,10,6,12,6,165,9,6,1,6,3,6,168,
	8,6,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,179,8,8,1,9,1,9,1,9,5,9,184,
	8,9,10,9,12,9,187,9,9,1,10,1,10,1,10,5,10,192,8,10,10,10,12,10,195,9,10,
	1,11,1,11,1,11,5,11,200,8,11,10,11,12,11,203,9,11,1,12,1,12,1,12,1,12,1,
	12,1,12,3,12,211,8,12,1,13,1,13,1,13,5,13,216,8,13,10,13,12,13,219,9,13,
	1,14,1,14,1,14,5,14,224,8,14,10,14,12,14,227,9,14,1,15,1,15,1,15,1,15,1,
	15,1,15,3,15,235,8,15,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,
	1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,3,16,256,8,16,5,16,258,8,16,
	10,16,12,16,261,9,16,1,16,1,16,3,16,265,8,16,1,17,1,17,1,17,3,17,270,8,
	17,1,17,1,17,1,17,1,17,3,17,276,8,17,5,17,278,8,17,10,17,12,17,281,9,17,
	1,17,3,17,284,8,17,1,18,1,18,1,18,1,18,1,18,1,18,1,18,3,18,293,8,18,1,18,
	3,18,296,8,18,5,18,298,8,18,10,18,12,18,301,9,18,1,18,1,18,1,18,5,18,306,
	8,18,10,18,12,18,309,9,18,1,18,1,18,1,18,1,18,1,18,1,19,1,19,1,19,1,19,
	1,19,1,19,1,19,3,19,323,8,19,1,19,1,19,1,20,1,20,1,20,1,20,1,21,1,21,1,
	21,1,21,1,21,3,21,336,8,21,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,
	1,22,1,22,1,22,1,22,1,22,1,22,3,22,353,8,22,3,22,355,8,22,1,22,0,0,23,0,
	2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,0,5,1,0,33,
	34,1,0,15,16,1,0,17,18,1,0,19,20,1,0,21,24,392,0,47,1,0,0,0,2,57,1,0,0,
	0,4,83,1,0,0,0,6,107,1,0,0,0,8,122,1,0,0,0,10,124,1,0,0,0,12,146,1,0,0,
	0,14,169,1,0,0,0,16,178,1,0,0,0,18,180,1,0,0,0,20,188,1,0,0,0,22,196,1,
	0,0,0,24,210,1,0,0,0,26,212,1,0,0,0,28,220,1,0,0,0,30,234,1,0,0,0,32,264,
	1,0,0,0,34,283,1,0,0,0,36,285,1,0,0,0,38,315,1,0,0,0,40,326,1,0,0,0,42,
	335,1,0,0,0,44,354,1,0,0,0,46,48,3,2,1,0,47,46,1,0,0,0,48,49,1,0,0,0,49,
	47,1,0,0,0,49,50,1,0,0,0,50,1,1,0,0,0,51,58,3,6,3,0,52,58,3,8,4,0,53,58,
	3,32,16,0,54,58,3,36,18,0,55,58,3,38,19,0,56,58,3,40,20,0,57,51,1,0,0,0,
	57,52,1,0,0,0,57,53,1,0,0,0,57,54,1,0,0,0,57,55,1,0,0,0,57,56,1,0,0,0,58,
	3,1,0,0,0,59,84,5,31,0,0,60,84,5,34,0,0,61,84,5,35,0,0,62,84,5,33,0,0,63,
	64,5,33,0,0,64,65,5,1,0,0,65,84,5,2,0,0,66,67,5,33,0,0,67,68,5,3,0,0,68,
	69,3,4,2,0,69,70,5,4,0,0,70,84,1,0,0,0,71,72,5,33,0,0,72,79,5,5,0,0,73,
	75,3,34,17,0,74,76,5,6,0,0,75,74,1,0,0,0,75,76,1,0,0,0,76,78,1,0,0,0,77,
	73,1,0,0,0,78,81,1,0,0,0,79,77,1,0,0,0,79,80,1,0,0,0,80,82,1,0,0,0,81,79,
	1,0,0,0,82,84,5,7,0,0,83,59,1,0,0,0,83,60,1,0,0,0,83,61,1,0,0,0,83,62,1,
	0,0,0,83,63,1,0,0,0,83,66,1,0,0,0,83,71,1,0,0,0,84,5,1,0,0,0,85,86,5,32,
	0,0,86,87,5,33,0,0,87,88,5,8,0,0,88,89,3,16,8,0,89,90,5,9,0,0,90,108,1,
	0,0,0,91,92,5,32,0,0,92,93,5,33,0,0,93,94,5,1,0,0,94,95,5,8,0,0,95,102,
	5,3,0,0,96,98,3,42,21,0,97,99,5,6,0,0,98,97,1,0,0,0,98,99,1,0,0,0,99,101,
	1,0,0,0,100,96,1,0,0,0,101,104,1,0,0,0,102,100,1,0,0,0,102,103,1,0,0,0,
	103,105,1,0,0,0,104,102,1,0,0,0,105,106,5,4,0,0,106,108,5,9,0,0,107,85,
	1,0,0,0,107,91,1,0,0,0,108,7,1,0,0,0,109,123,3,10,5,0,110,111,5,10,0,0,
	111,112,3,26,13,0,112,116,5,11,0,0,113,115,3,2,1,0,114,113,1,0,0,0,115,
	118,1,0,0,0,116,114,1,0,0,0,116,117,1,0,0,0,117,119,1,0,0,0,118,116,1,0,
	0,0,119,120,5,12,0,0,120,123,1,0,0,0,121,123,3,44,22,0,122,109,1,0,0,0,
	122,110,1,0,0,0,122,121,1,0,0,0,123,9,1,0,0,0,124,125,5,13,0,0,125,126,
	3,26,13,0,126,130,5,11,0,0,127,129,3,2,1,0,128,127,1,0,0,0,129,132,1,0,
	0,0,130,128,1,0,0,0,130,131,1,0,0,0,131,133,1,0,0,0,132,130,1,0,0,0,133,
	144,5,12,0,0,134,145,3,12,6,0,135,136,5,14,0,0,136,140,5,11,0,0,137,139,
	3,2,1,0,138,137,1,0,0,0,139,142,1,0,0,0,140,138,1,0,0,0,140,141,1,0,0,0,
	141,143,1,0,0,0,142,140,1,0,0,0,143,145,5,12,0,0,144,134,1,0,0,0,144,135,
	1,0,0,0,144,145,1,0,0,0,145,11,1,0,0,0,146,147,5,14,0,0,147,148,5,13,0,
	0,148,149,3,26,13,0,149,153,5,11,0,0,150,152,3,2,1,0,151,150,1,0,0,0,152,
	155,1,0,0,0,153,151,1,0,0,0,153,154,1,0,0,0,154,156,1,0,0,0,155,153,1,0,
	0,0,156,167,5,12,0,0,157,168,3,12,6,0,158,159,5,14,0,0,159,163,5,11,0,0,
	160,162,3,2,1,0,161,160,1,0,0,0,162,165,1,0,0,0,163,161,1,0,0,0,163,164,
	1,0,0,0,164,166,1,0,0,0,165,163,1,0,0,0,166,168,5,12,0,0,167,157,1,0,0,
	0,167,158,1,0,0,0,167,168,1,0,0,0,168,13,1,0,0,0,169,170,3,20,10,0,170,
	15,1,0,0,0,171,179,3,18,9,0,172,179,3,20,10,0,173,179,3,4,2,0,174,175,5,
	5,0,0,175,176,3,16,8,0,176,177,5,7,0,0,177,179,1,0,0,0,178,171,1,0,0,0,
	178,172,1,0,0,0,178,173,1,0,0,0,178,174,1,0,0,0,179,17,1,0,0,0,180,185,
	7,0,0,0,181,182,5,15,0,0,182,184,7,0,0,0,183,181,1,0,0,0,184,187,1,0,0,
	0,185,183,1,0,0,0,185,186,1,0,0,0,186,19,1,0,0,0,187,185,1,0,0,0,188,193,
	3,22,11,0,189,190,7,1,0,0,190,192,3,22,11,0,191,189,1,0,0,0,192,195,1,0,
	0,0,193,191,1,0,0,0,193,194,1,0,0,0,194,21,1,0,0,0,195,193,1,0,0,0,196,
	201,3,24,12,0,197,198,7,2,0,0,198,200,3,24,12,0,199,197,1,0,0,0,200,203,
	1,0,0,0,201,199,1,0,0,0,201,202,1,0,0,0,202,23,1,0,0,0,203,201,1,0,0,0,
	204,211,5,35,0,0,205,211,5,33,0,0,206,207,5,5,0,0,207,208,3,20,10,0,208,
	209,5,7,0,0,209,211,1,0,0,0,210,204,1,0,0,0,210,205,1,0,0,0,210,206,1,0,
	0,0,211,25,1,0,0,0,212,217,3,28,14,0,213,214,7,3,0,0,214,216,3,28,14,0,
	215,213,1,0,0,0,216,219,1,0,0,0,217,215,1,0,0,0,217,218,1,0,0,0,218,27,
	1,0,0,0,219,217,1,0,0,0,220,225,3,30,15,0,221,222,7,4,0,0,222,224,3,30,
	15,0,223,221,1,0,0,0,224,227,1,0,0,0,225,223,1,0,0,0,225,226,1,0,0,0,226,
	29,1,0,0,0,227,225,1,0,0,0,228,235,5,35,0,0,229,235,5,33,0,0,230,231,5,
	5,0,0,231,232,3,26,13,0,232,233,5,7,0,0,233,235,1,0,0,0,234,228,1,0,0,0,
	234,229,1,0,0,0,234,230,1,0,0,0,235,31,1,0,0,0,236,237,5,33,0,0,237,238,
	5,8,0,0,238,239,3,16,8,0,239,240,5,9,0,0,240,265,1,0,0,0,241,242,5,33,0,
	0,242,243,5,3,0,0,243,244,3,4,2,0,244,245,5,4,0,0,245,246,5,8,0,0,246,247,
	3,16,8,0,247,248,5,9,0,0,248,265,1,0,0,0,249,250,5,33,0,0,250,251,5,1,0,
	0,251,252,5,8,0,0,252,259,5,3,0,0,253,255,3,42,21,0,254,256,5,6,0,0,255,
	254,1,0,0,0,255,256,1,0,0,0,256,258,1,0,0,0,257,253,1,0,0,0,258,261,1,0,
	0,0,259,257,1,0,0,0,259,260,1,0,0,0,260,262,1,0,0,0,261,259,1,0,0,0,262,
	263,5,4,0,0,263,265,5,9,0,0,264,236,1,0,0,0,264,241,1,0,0,0,264,249,1,0,
	0,0,265,33,1,0,0,0,266,284,3,4,2,0,267,269,5,33,0,0,268,270,5,1,0,0,269,
	268,1,0,0,0,269,270,1,0,0,0,270,284,1,0,0,0,271,284,3,20,10,0,272,279,5,
	3,0,0,273,275,3,42,21,0,274,276,5,6,0,0,275,274,1,0,0,0,275,276,1,0,0,0,
	276,278,1,0,0,0,277,273,1,0,0,0,278,281,1,0,0,0,279,277,1,0,0,0,279,280,
	1,0,0,0,280,282,1,0,0,0,281,279,1,0,0,0,282,284,5,4,0,0,283,266,1,0,0,0,
	283,267,1,0,0,0,283,271,1,0,0,0,283,272,1,0,0,0,284,35,1,0,0,0,285,286,
	5,32,0,0,286,287,5,25,0,0,287,288,5,33,0,0,288,299,5,5,0,0,289,290,5,32,
	0,0,290,292,5,33,0,0,291,293,5,1,0,0,292,291,1,0,0,0,292,293,1,0,0,0,293,
	295,1,0,0,0,294,296,5,6,0,0,295,294,1,0,0,0,295,296,1,0,0,0,296,298,1,0,
	0,0,297,289,1,0,0,0,298,301,1,0,0,0,299,297,1,0,0,0,299,300,1,0,0,0,300,
	302,1,0,0,0,301,299,1,0,0,0,302,303,5,7,0,0,303,307,5,11,0,0,304,306,3,
	2,1,0,305,304,1,0,0,0,306,309,1,0,0,0,307,305,1,0,0,0,307,308,1,0,0,0,308,
	310,1,0,0,0,309,307,1,0,0,0,310,311,5,26,0,0,311,312,3,34,17,0,312,313,
	5,9,0,0,313,314,5,12,0,0,314,37,1,0,0,0,315,322,5,27,0,0,316,323,3,4,2,
	0,317,318,5,33,0,0,318,319,5,3,0,0,319,320,3,4,2,0,320,321,5,4,0,0,321,
	323,1,0,0,0,322,316,1,0,0,0,322,317,1,0,0,0,323,324,1,0,0,0,324,325,5,9,
	0,0,325,39,1,0,0,0,326,327,5,28,0,0,327,328,3,4,2,0,328,329,5,9,0,0,329,
	41,1,0,0,0,330,331,5,3,0,0,331,332,3,4,2,0,332,333,5,4,0,0,333,336,1,0,
	0,0,334,336,3,4,2,0,335,330,1,0,0,0,335,334,1,0,0,0,336,43,1,0,0,0,337,
	338,5,33,0,0,338,339,5,3,0,0,339,340,3,4,2,0,340,341,5,4,0,0,341,355,1,
	0,0,0,342,343,5,33,0,0,343,352,5,1,0,0,344,345,5,29,0,0,345,346,3,4,2,0,
	346,347,5,9,0,0,347,353,1,0,0,0,348,349,5,30,0,0,349,353,5,9,0,0,350,351,
	5,2,0,0,351,353,5,9,0,0,352,344,1,0,0,0,352,348,1,0,0,0,352,350,1,0,0,0,
	353,355,1,0,0,0,354,337,1,0,0,0,354,342,1,0,0,0,355,45,1,0,0,0,39,49,57,
	75,79,83,98,102,107,116,122,130,140,144,153,163,167,178,185,193,201,210,
	217,225,234,255,259,264,269,275,279,283,292,295,299,307,322,335,352,354];

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
	public output(): OutputContext {
		return this.getTypedRuleContext(OutputContext, 0) as OutputContext;
	}
	public delay(): DelayContext {
		return this.getTypedRuleContext(DelayContext, 0) as DelayContext;
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
	public value(): ValueContext {
		return this.getTypedRuleContext(ValueContext, 0) as ValueContext;
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
	public value(): ValueContext {
		return this.getTypedRuleContext(ValueContext, 0) as ValueContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
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
	public STRING_list(): TerminalNode[] {
	    	return this.getTokens(SmartSyncParser.STRING);
	}
	public STRING(i: number): TerminalNode {
		return this.getToken(SmartSyncParser.STRING, i);
	}
	public ID_list(): TerminalNode[] {
	    	return this.getTokens(SmartSyncParser.ID);
	}
	public ID(i: number): TerminalNode {
		return this.getToken(SmartSyncParser.ID, i);
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


export class ConditionContext extends ParserRuleContext {
	constructor(parser?: SmartSyncParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public multConExpr_list(): MultConExprContext[] {
		return this.getTypedRuleContexts(MultConExprContext) as MultConExprContext[];
	}
	public multConExpr(i: number): MultConExprContext {
		return this.getTypedRuleContext(MultConExprContext, i) as MultConExprContext;
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


export class MultConExprContext extends ParserRuleContext {
	constructor(parser?: SmartSyncParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public atomCon_list(): AtomConContext[] {
		return this.getTypedRuleContexts(AtomConContext) as AtomConContext[];
	}
	public atomCon(i: number): AtomConContext {
		return this.getTypedRuleContext(AtomConContext, i) as AtomConContext;
	}
    public get ruleIndex(): number {
    	return SmartSyncParser.RULE_multConExpr;
	}
	// @Override
	public accept<Result>(visitor: SmartSyncVisitor<Result>): Result {
		if (visitor.visitMultConExpr) {
			return visitor.visitMultConExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AtomConContext extends ParserRuleContext {
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
	public condition(): ConditionContext {
		return this.getTypedRuleContext(ConditionContext, 0) as ConditionContext;
	}
    public get ruleIndex(): number {
    	return SmartSyncParser.RULE_atomCon;
	}
	// @Override
	public accept<Result>(visitor: SmartSyncVisitor<Result>): Result {
		if (visitor.visitAtomCon) {
			return visitor.visitAtomCon(this);
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
	public value(): ValueContext {
		return this.getTypedRuleContext(ValueContext, 0) as ValueContext;
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
	public value(): ValueContext {
		return this.getTypedRuleContext(ValueContext, 0) as ValueContext;
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
