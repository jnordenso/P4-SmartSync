// Generated from ./Syntax Analysis/SmartSync.g4 by ANTLR 4.13.1
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
	public static readonly RULE_else = 7;
	public static readonly RULE_expression = 8;
	public static readonly RULE_stringArithmetic = 9;
	public static readonly RULE_stringAtom = 10;
	public static readonly RULE_arithmetic = 11;
	public static readonly RULE_multExpr = 12;
	public static readonly RULE_atom = 13;
	public static readonly RULE_condition = 14;
	public static readonly RULE_multConExpr = 15;
	public static readonly RULE_atomCon = 16;
	public static readonly RULE_assignments = 17;
	public static readonly RULE_funcReturn = 18;
	public static readonly RULE_functions = 19;
	public static readonly RULE_output = 20;
	public static readonly RULE_delay = 21;
	public static readonly RULE_arrayValue = 22;
	public static readonly RULE_arrayStm = 23;
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
		"else", "expression", "stringArithmetic", "stringAtom", "arithmetic", 
		"multExpr", "atom", "condition", "multConExpr", "atomCon", "assignments", 
		"funcReturn", "functions", "output", "delay", "arrayValue", "arrayStm",
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
			this.state = 49;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 48;
				this.line();
				}
				}
				this.state = 51;
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
			this.state = 59;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 53;
				this.declaration();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 54;
				this.statements();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 55;
				this.assignments();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 56;
				this.functions();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 57;
				this.output();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 58;
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
			this.state = 85;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 61;
				this.match(SmartSyncParser.BOOL);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 62;
				this.match(SmartSyncParser.STRING);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 63;
				this.match(SmartSyncParser.NUMBER);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 64;
				this.match(SmartSyncParser.ID);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 65;
				this.match(SmartSyncParser.ID);
				this.state = 66;
				this.match(SmartSyncParser.T__0);
				this.state = 67;
				this.match(SmartSyncParser.T__1);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 68;
				this.match(SmartSyncParser.ID);
				this.state = 69;
				this.match(SmartSyncParser.T__2);
				this.state = 70;
				this.value();
				this.state = 71;
				this.match(SmartSyncParser.T__3);
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 73;
				this.match(SmartSyncParser.ID);
				this.state = 74;
				this.match(SmartSyncParser.T__4);
				this.state = 81;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2147483688) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 7) !== 0)) {
					{
					{
					this.state = 75;
					this.funcReturn();
					this.state = 77;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===6) {
						{
						this.state = 76;
						this.match(SmartSyncParser.T__5);
						}
					}

					}
					}
					this.state = 83;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 84;
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
			this.state = 109;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 87;
				this.match(SmartSyncParser.TYPE);
				this.state = 88;
				this.match(SmartSyncParser.ID);
				this.state = 89;
				this.match(SmartSyncParser.T__7);
				this.state = 90;
				this.expression();
				this.state = 91;
				this.match(SmartSyncParser.T__8);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 93;
				this.match(SmartSyncParser.TYPE);
				this.state = 94;
				this.match(SmartSyncParser.ID);
				this.state = 95;
				this.match(SmartSyncParser.T__0);
				this.state = 96;
				this.match(SmartSyncParser.T__7);
				this.state = 97;
				this.match(SmartSyncParser.T__2);
				this.state = 104;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===3 || _la===31 || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 7) !== 0)) {
					{
					{
					this.state = 98;
					this.arrayValue();
					this.state = 100;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===6) {
						{
						this.state = 99;
						this.match(SmartSyncParser.T__5);
						}
					}

					}
					}
					this.state = 106;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 107;
				this.match(SmartSyncParser.T__3);
				this.state = 108;
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
			case 13:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 111;
				this.ifStm();
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
				while (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & 12976137) !== 0)) {
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
			case 33:
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
	public ifStm(): IfStmContext {
		let localctx: IfStmContext = new IfStmContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, SmartSyncParser.RULE_ifStm);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 126;
			this.match(SmartSyncParser.T__12);
			this.state = 127;
			this.condition();
			this.state = 128;
			this.match(SmartSyncParser.T__10);
			this.state = 132;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & 12976137) !== 0)) {
				{
				{
				this.state = 129;
				this.line();
				}
				}
				this.state = 134;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 135;
			this.match(SmartSyncParser.T__11);
			this.state = 138;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				{
				this.state = 136;
				this.elses();
				}
				break;
			case 2:
				{
				this.state = 137;
				this.else_();
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
			this.state = 140;
			this.match(SmartSyncParser.T__13);
			this.state = 141;
			this.match(SmartSyncParser.T__12);
			this.state = 142;
			this.condition();
			this.state = 143;
			this.match(SmartSyncParser.T__10);
			this.state = 147;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & 12976137) !== 0)) {
				{
				{
				this.state = 144;
				this.line();
				}
				}
				this.state = 149;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 150;
			this.match(SmartSyncParser.T__11);
			this.state = 153;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				{
				this.state = 151;
				this.elses();
				}
				break;
			case 2:
				{
				this.state = 152;
				this.else_();
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
	public else_(): ElseContext {
		let localctx: ElseContext = new ElseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, SmartSyncParser.RULE_else);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 155;
			this.match(SmartSyncParser.T__13);
			this.state = 156;
			this.match(SmartSyncParser.T__10);
			this.state = 160;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & 12976137) !== 0)) {
				{
				{
				this.state = 157;
				this.line();
				}
				}
				this.state = 162;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 163;
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
	public expression(): ExpressionContext {
		let localctx: ExpressionContext = new ExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, SmartSyncParser.RULE_expression);
		try {
			this.state = 172;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 165;
				this.arithmetic();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 166;
				this.stringArithmetic();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 167;
				this.value();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 168;
				this.match(SmartSyncParser.T__4);
				this.state = 169;
				this.expression();
				this.state = 170;
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
			this.state = 174;
			this.stringAtom();
			this.state = 179;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===15) {
				{
				{
				this.state = 175;
				this.match(SmartSyncParser.T__14);
				this.state = 176;
				this.stringAtom();
				}
				}
				this.state = 181;
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
	public stringAtom(): StringAtomContext {
		let localctx: StringAtomContext = new StringAtomContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, SmartSyncParser.RULE_stringAtom);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
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
		this.enterRule(localctx, 22, SmartSyncParser.RULE_arithmetic);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 184;
			this.multExpr();
			this.state = 189;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===15 || _la===16) {
				{
				{
				this.state = 185;
				_la = this._input.LA(1);
				if(!(_la===15 || _la===16)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 186;
				this.multExpr();
				}
				}
				this.state = 191;
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
		this.enterRule(localctx, 24, SmartSyncParser.RULE_multExpr);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 192;
			this.atom();
			this.state = 197;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===17 || _la===18) {
				{
				{
				this.state = 193;
				_la = this._input.LA(1);
				if(!(_la===17 || _la===18)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 194;
				this.atom();
				}
				}
				this.state = 199;
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
		this.enterRule(localctx, 26, SmartSyncParser.RULE_atom);
		try {
			this.state = 206;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 35:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 200;
				this.match(SmartSyncParser.NUMBER);
				}
				break;
			case 33:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 201;
				this.match(SmartSyncParser.ID);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 202;
				this.match(SmartSyncParser.T__4);
				this.state = 203;
				this.arithmetic();
				this.state = 204;
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
		this.enterRule(localctx, 28, SmartSyncParser.RULE_condition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 208;
			this.multConExpr();
			this.state = 213;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===19 || _la===20) {
				{
				{
				this.state = 209;
				_la = this._input.LA(1);
				if(!(_la===19 || _la===20)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 210;
				this.multConExpr();
				}
				}
				this.state = 215;
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
		this.enterRule(localctx, 30, SmartSyncParser.RULE_multConExpr);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 216;
			this.atomCon();
			this.state = 221;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 31457280) !== 0)) {
				{
				{
				this.state = 217;
				_la = this._input.LA(1);
				if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 31457280) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 218;
				this.atomCon();
				}
				}
				this.state = 223;
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
		this.enterRule(localctx, 32, SmartSyncParser.RULE_atomCon);
		try {
			this.state = 230;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 35:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 224;
				this.match(SmartSyncParser.NUMBER);
				}
				break;
			case 33:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 225;
				this.match(SmartSyncParser.ID);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 226;
				this.match(SmartSyncParser.T__4);
				this.state = 227;
				this.condition();
				this.state = 228;
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
		this.enterRule(localctx, 34, SmartSyncParser.RULE_assignments);
		let _la: number;
		try {
			this.state = 260;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 232;
				this.match(SmartSyncParser.ID);
				this.state = 233;
				this.match(SmartSyncParser.T__7);
				this.state = 234;
				this.expression();
				this.state = 235;
				this.match(SmartSyncParser.T__8);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 237;
				this.match(SmartSyncParser.ID);
				this.state = 238;
				this.match(SmartSyncParser.T__2);
				this.state = 239;
				this.value();
				this.state = 240;
				this.match(SmartSyncParser.T__3);
				this.state = 241;
				this.match(SmartSyncParser.T__7);
				this.state = 242;
				this.expression();
				this.state = 243;
				this.match(SmartSyncParser.T__8);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 245;
				this.match(SmartSyncParser.ID);
				this.state = 246;
				this.match(SmartSyncParser.T__0);
				this.state = 247;
				this.match(SmartSyncParser.T__7);
				this.state = 248;
				this.match(SmartSyncParser.T__2);
				this.state = 255;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===3 || _la===31 || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 7) !== 0)) {
					{
					{
					this.state = 249;
					this.arrayValue();
					this.state = 251;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===6) {
						{
						this.state = 250;
						this.match(SmartSyncParser.T__5);
						}
					}

					}
					}
					this.state = 257;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 258;
				this.match(SmartSyncParser.T__3);
				this.state = 259;
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
		this.enterRule(localctx, 36, SmartSyncParser.RULE_funcReturn);
		let _la: number;
		try {
			this.state = 277;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 28, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 262;
				this.value();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 263;
				this.match(SmartSyncParser.ID);
				this.state = 264;
				this.match(SmartSyncParser.T__0);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 265;
				this.arithmetic();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 266;
				this.match(SmartSyncParser.T__2);
				this.state = 273;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===3 || _la===31 || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 7) !== 0)) {
					{
					{
					this.state = 267;
					this.arrayValue();
					this.state = 269;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===6) {
						{
						this.state = 268;
						this.match(SmartSyncParser.T__5);
						}
					}

					}
					}
					this.state = 275;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 276;
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
		this.enterRule(localctx, 38, SmartSyncParser.RULE_functions);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 279;
			this.match(SmartSyncParser.TYPE);
			this.state = 280;
			this.match(SmartSyncParser.T__24);
			this.state = 281;
			this.match(SmartSyncParser.ID);
			this.state = 282;
			this.match(SmartSyncParser.T__4);
			this.state = 293;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===32) {
				{
				{
				this.state = 283;
				this.match(SmartSyncParser.TYPE);
				this.state = 284;
				this.match(SmartSyncParser.ID);
				this.state = 286;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===1) {
					{
					this.state = 285;
					this.match(SmartSyncParser.T__0);
					}
				}

				this.state = 289;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===6) {
					{
					this.state = 288;
					this.match(SmartSyncParser.T__5);
					}
				}

				}
				}
				this.state = 295;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 296;
			this.match(SmartSyncParser.T__6);
			this.state = 297;
			this.match(SmartSyncParser.T__10);
			this.state = 301;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & 12976137) !== 0)) {
				{
				{
				this.state = 298;
				this.line();
				}
				}
				this.state = 303;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 304;
			this.match(SmartSyncParser.T__25);
			this.state = 305;
			this.funcReturn();
			this.state = 306;
			this.match(SmartSyncParser.T__8);
			this.state = 307;
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
		this.enterRule(localctx, 40, SmartSyncParser.RULE_output);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 309;
			this.match(SmartSyncParser.T__26);
			this.state = 316;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 33, this._ctx) ) {
			case 1:
				{
				this.state = 310;
				this.value();
				}
				break;
			case 2:
				{
				this.state = 311;
				this.match(SmartSyncParser.ID);
				this.state = 312;
				this.match(SmartSyncParser.T__2);
				this.state = 313;
				this.value();
				this.state = 314;
				this.match(SmartSyncParser.T__3);
				}
				break;
			}
			this.state = 318;
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
		this.enterRule(localctx, 42, SmartSyncParser.RULE_delay);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 320;
			this.match(SmartSyncParser.T__27);
			this.state = 321;
			this.value();
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
	public arrayValue(): ArrayValueContext {
		let localctx: ArrayValueContext = new ArrayValueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 44, SmartSyncParser.RULE_arrayValue);
		try {
			this.state = 329;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 3:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 324;
				this.match(SmartSyncParser.T__2);
				this.state = 325;
				this.value();
				this.state = 326;
				this.match(SmartSyncParser.T__3);
				}
				break;
			case 31:
			case 33:
			case 34:
			case 35:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 328;
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
		this.enterRule(localctx, 46, SmartSyncParser.RULE_arrayStm);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 331;
			this.match(SmartSyncParser.ID);
			this.state = 332;
			this.match(SmartSyncParser.T__0);
			this.state = 339;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 29:
				{
				this.state = 333;
				this.match(SmartSyncParser.T__28);
				this.state = 334;
				this.value();
				this.state = 335;
				this.match(SmartSyncParser.T__8);
				}
				break;
			case 30:
				{
				this.state = 337;
				this.match(SmartSyncParser.T__29);
				this.state = 338;
				this.match(SmartSyncParser.T__8);
				}
				break;
			default:
				throw new NoViableAltException(this);
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

	public static readonly _serializedATN: number[] = [4,1,40,342,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,1,0,4,
	0,50,8,0,11,0,12,0,51,1,1,1,1,1,1,1,1,1,1,1,1,3,1,60,8,1,1,2,1,2,1,2,1,
	2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,78,8,2,5,2,80,8,2,
	10,2,12,2,83,9,2,1,2,3,2,86,8,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,
	1,3,1,3,1,3,3,3,101,8,3,5,3,103,8,3,10,3,12,3,106,9,3,1,3,1,3,3,3,110,8,
	3,1,4,1,4,1,4,1,4,1,4,5,4,117,8,4,10,4,12,4,120,9,4,1,4,1,4,1,4,3,4,125,
	8,4,1,5,1,5,1,5,1,5,5,5,131,8,5,10,5,12,5,134,9,5,1,5,1,5,1,5,3,5,139,8,
	5,1,6,1,6,1,6,1,6,1,6,5,6,146,8,6,10,6,12,6,149,9,6,1,6,1,6,1,6,3,6,154,
	8,6,1,7,1,7,1,7,5,7,159,8,7,10,7,12,7,162,9,7,1,7,1,7,1,8,1,8,1,8,1,8,1,
	8,1,8,1,8,3,8,173,8,8,1,9,1,9,1,9,5,9,178,8,9,10,9,12,9,181,9,9,1,10,1,
	10,1,11,1,11,1,11,5,11,188,8,11,10,11,12,11,191,9,11,1,12,1,12,1,12,5,12,
	196,8,12,10,12,12,12,199,9,12,1,13,1,13,1,13,1,13,1,13,1,13,3,13,207,8,
	13,1,14,1,14,1,14,5,14,212,8,14,10,14,12,14,215,9,14,1,15,1,15,1,15,5,15,
	220,8,15,10,15,12,15,223,9,15,1,16,1,16,1,16,1,16,1,16,1,16,3,16,231,8,
	16,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,
	1,17,1,17,1,17,1,17,1,17,3,17,252,8,17,5,17,254,8,17,10,17,12,17,257,9,
	17,1,17,1,17,3,17,261,8,17,1,18,1,18,1,18,1,18,1,18,1,18,1,18,3,18,270,
	8,18,5,18,272,8,18,10,18,12,18,275,9,18,1,18,3,18,278,8,18,1,19,1,19,1,
	19,1,19,1,19,1,19,1,19,3,19,287,8,19,1,19,3,19,290,8,19,5,19,292,8,19,10,
	19,12,19,295,9,19,1,19,1,19,1,19,5,19,300,8,19,10,19,12,19,303,9,19,1,19,
	1,19,1,19,1,19,1,19,1,20,1,20,1,20,1,20,1,20,1,20,1,20,3,20,317,8,20,1,
	20,1,20,1,21,1,21,1,21,1,21,1,22,1,22,1,22,1,22,1,22,3,22,330,8,22,1,23,
	1,23,1,23,1,23,1,23,1,23,1,23,1,23,3,23,340,8,23,1,23,0,0,24,0,2,4,6,8,
	10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,0,5,1,0,33,34,
	1,0,15,16,1,0,17,18,1,0,19,20,1,0,21,24,372,0,49,1,0,0,0,2,59,1,0,0,0,4,
	85,1,0,0,0,6,109,1,0,0,0,8,124,1,0,0,0,10,126,1,0,0,0,12,140,1,0,0,0,14,
	155,1,0,0,0,16,172,1,0,0,0,18,174,1,0,0,0,20,182,1,0,0,0,22,184,1,0,0,0,
	24,192,1,0,0,0,26,206,1,0,0,0,28,208,1,0,0,0,30,216,1,0,0,0,32,230,1,0,
	0,0,34,260,1,0,0,0,36,277,1,0,0,0,38,279,1,0,0,0,40,309,1,0,0,0,42,320,
	1,0,0,0,44,329,1,0,0,0,46,331,1,0,0,0,48,50,3,2,1,0,49,48,1,0,0,0,50,51,
	1,0,0,0,51,49,1,0,0,0,51,52,1,0,0,0,52,1,1,0,0,0,53,60,3,6,3,0,54,60,3,
	8,4,0,55,60,3,34,17,0,56,60,3,38,19,0,57,60,3,40,20,0,58,60,3,42,21,0,59,
	53,1,0,0,0,59,54,1,0,0,0,59,55,1,0,0,0,59,56,1,0,0,0,59,57,1,0,0,0,59,58,
	1,0,0,0,60,3,1,0,0,0,61,86,5,31,0,0,62,86,5,34,0,0,63,86,5,35,0,0,64,86,
	5,33,0,0,65,66,5,33,0,0,66,67,5,1,0,0,67,86,5,2,0,0,68,69,5,33,0,0,69,70,
	5,3,0,0,70,71,3,4,2,0,71,72,5,4,0,0,72,86,1,0,0,0,73,74,5,33,0,0,74,81,
	5,5,0,0,75,77,3,36,18,0,76,78,5,6,0,0,77,76,1,0,0,0,77,78,1,0,0,0,78,80,
	1,0,0,0,79,75,1,0,0,0,80,83,1,0,0,0,81,79,1,0,0,0,81,82,1,0,0,0,82,84,1,
	0,0,0,83,81,1,0,0,0,84,86,5,7,0,0,85,61,1,0,0,0,85,62,1,0,0,0,85,63,1,0,
	0,0,85,64,1,0,0,0,85,65,1,0,0,0,85,68,1,0,0,0,85,73,1,0,0,0,86,5,1,0,0,
	0,87,88,5,32,0,0,88,89,5,33,0,0,89,90,5,8,0,0,90,91,3,16,8,0,91,92,5,9,
	0,0,92,110,1,0,0,0,93,94,5,32,0,0,94,95,5,33,0,0,95,96,5,1,0,0,96,97,5,
	8,0,0,97,104,5,3,0,0,98,100,3,44,22,0,99,101,5,6,0,0,100,99,1,0,0,0,100,
	101,1,0,0,0,101,103,1,0,0,0,102,98,1,0,0,0,103,106,1,0,0,0,104,102,1,0,
	0,0,104,105,1,0,0,0,105,107,1,0,0,0,106,104,1,0,0,0,107,108,5,4,0,0,108,
	110,5,9,0,0,109,87,1,0,0,0,109,93,1,0,0,0,110,7,1,0,0,0,111,125,3,10,5,
	0,112,113,5,10,0,0,113,114,3,28,14,0,114,118,5,11,0,0,115,117,3,2,1,0,116,
	115,1,0,0,0,117,120,1,0,0,0,118,116,1,0,0,0,118,119,1,0,0,0,119,121,1,0,
	0,0,120,118,1,0,0,0,121,122,5,12,0,0,122,125,1,0,0,0,123,125,3,46,23,0,
	124,111,1,0,0,0,124,112,1,0,0,0,124,123,1,0,0,0,125,9,1,0,0,0,126,127,5,
	13,0,0,127,128,3,28,14,0,128,132,5,11,0,0,129,131,3,2,1,0,130,129,1,0,0,
	0,131,134,1,0,0,0,132,130,1,0,0,0,132,133,1,0,0,0,133,135,1,0,0,0,134,132,
	1,0,0,0,135,138,5,12,0,0,136,139,3,12,6,0,137,139,3,14,7,0,138,136,1,0,
	0,0,138,137,1,0,0,0,138,139,1,0,0,0,139,11,1,0,0,0,140,141,5,14,0,0,141,
	142,5,13,0,0,142,143,3,28,14,0,143,147,5,11,0,0,144,146,3,2,1,0,145,144,
	1,0,0,0,146,149,1,0,0,0,147,145,1,0,0,0,147,148,1,0,0,0,148,150,1,0,0,0,
	149,147,1,0,0,0,150,153,5,12,0,0,151,154,3,12,6,0,152,154,3,14,7,0,153,
	151,1,0,0,0,153,152,1,0,0,0,153,154,1,0,0,0,154,13,1,0,0,0,155,156,5,14,
	0,0,156,160,5,11,0,0,157,159,3,2,1,0,158,157,1,0,0,0,159,162,1,0,0,0,160,
	158,1,0,0,0,160,161,1,0,0,0,161,163,1,0,0,0,162,160,1,0,0,0,163,164,5,12,
	0,0,164,15,1,0,0,0,165,173,3,22,11,0,166,173,3,18,9,0,167,173,3,4,2,0,168,
	169,5,5,0,0,169,170,3,16,8,0,170,171,5,7,0,0,171,173,1,0,0,0,172,165,1,
	0,0,0,172,166,1,0,0,0,172,167,1,0,0,0,172,168,1,0,0,0,173,17,1,0,0,0,174,
	179,3,20,10,0,175,176,5,15,0,0,176,178,3,20,10,0,177,175,1,0,0,0,178,181,
	1,0,0,0,179,177,1,0,0,0,179,180,1,0,0,0,180,19,1,0,0,0,181,179,1,0,0,0,
	182,183,7,0,0,0,183,21,1,0,0,0,184,189,3,24,12,0,185,186,7,1,0,0,186,188,
	3,24,12,0,187,185,1,0,0,0,188,191,1,0,0,0,189,187,1,0,0,0,189,190,1,0,0,
	0,190,23,1,0,0,0,191,189,1,0,0,0,192,197,3,26,13,0,193,194,7,2,0,0,194,
	196,3,26,13,0,195,193,1,0,0,0,196,199,1,0,0,0,197,195,1,0,0,0,197,198,1,
	0,0,0,198,25,1,0,0,0,199,197,1,0,0,0,200,207,5,35,0,0,201,207,5,33,0,0,
	202,203,5,5,0,0,203,204,3,22,11,0,204,205,5,7,0,0,205,207,1,0,0,0,206,200,
	1,0,0,0,206,201,1,0,0,0,206,202,1,0,0,0,207,27,1,0,0,0,208,213,3,30,15,
	0,209,210,7,3,0,0,210,212,3,30,15,0,211,209,1,0,0,0,212,215,1,0,0,0,213,
	211,1,0,0,0,213,214,1,0,0,0,214,29,1,0,0,0,215,213,1,0,0,0,216,221,3,32,
	16,0,217,218,7,4,0,0,218,220,3,32,16,0,219,217,1,0,0,0,220,223,1,0,0,0,
	221,219,1,0,0,0,221,222,1,0,0,0,222,31,1,0,0,0,223,221,1,0,0,0,224,231,
	5,35,0,0,225,231,5,33,0,0,226,227,5,5,0,0,227,228,3,28,14,0,228,229,5,7,
	0,0,229,231,1,0,0,0,230,224,1,0,0,0,230,225,1,0,0,0,230,226,1,0,0,0,231,
	33,1,0,0,0,232,233,5,33,0,0,233,234,5,8,0,0,234,235,3,16,8,0,235,236,5,
	9,0,0,236,261,1,0,0,0,237,238,5,33,0,0,238,239,5,3,0,0,239,240,3,4,2,0,
	240,241,5,4,0,0,241,242,5,8,0,0,242,243,3,16,8,0,243,244,5,9,0,0,244,261,
	1,0,0,0,245,246,5,33,0,0,246,247,5,1,0,0,247,248,5,8,0,0,248,255,5,3,0,
	0,249,251,3,44,22,0,250,252,5,6,0,0,251,250,1,0,0,0,251,252,1,0,0,0,252,
	254,1,0,0,0,253,249,1,0,0,0,254,257,1,0,0,0,255,253,1,0,0,0,255,256,1,0,
	0,0,256,258,1,0,0,0,257,255,1,0,0,0,258,259,5,4,0,0,259,261,5,9,0,0,260,
	232,1,0,0,0,260,237,1,0,0,0,260,245,1,0,0,0,261,35,1,0,0,0,262,278,3,4,
	2,0,263,264,5,33,0,0,264,278,5,1,0,0,265,278,3,22,11,0,266,273,5,3,0,0,
	267,269,3,44,22,0,268,270,5,6,0,0,269,268,1,0,0,0,269,270,1,0,0,0,270,272,
	1,0,0,0,271,267,1,0,0,0,272,275,1,0,0,0,273,271,1,0,0,0,273,274,1,0,0,0,
	274,276,1,0,0,0,275,273,1,0,0,0,276,278,5,4,0,0,277,262,1,0,0,0,277,263,
	1,0,0,0,277,265,1,0,0,0,277,266,1,0,0,0,278,37,1,0,0,0,279,280,5,32,0,0,
	280,281,5,25,0,0,281,282,5,33,0,0,282,293,5,5,0,0,283,284,5,32,0,0,284,
	286,5,33,0,0,285,287,5,1,0,0,286,285,1,0,0,0,286,287,1,0,0,0,287,289,1,
	0,0,0,288,290,5,6,0,0,289,288,1,0,0,0,289,290,1,0,0,0,290,292,1,0,0,0,291,
	283,1,0,0,0,292,295,1,0,0,0,293,291,1,0,0,0,293,294,1,0,0,0,294,296,1,0,
	0,0,295,293,1,0,0,0,296,297,5,7,0,0,297,301,5,11,0,0,298,300,3,2,1,0,299,
	298,1,0,0,0,300,303,1,0,0,0,301,299,1,0,0,0,301,302,1,0,0,0,302,304,1,0,
	0,0,303,301,1,0,0,0,304,305,5,26,0,0,305,306,3,36,18,0,306,307,5,9,0,0,
	307,308,5,12,0,0,308,39,1,0,0,0,309,316,5,27,0,0,310,317,3,4,2,0,311,312,
	5,33,0,0,312,313,5,3,0,0,313,314,3,4,2,0,314,315,5,4,0,0,315,317,1,0,0,
	0,316,310,1,0,0,0,316,311,1,0,0,0,317,318,1,0,0,0,318,319,5,9,0,0,319,41,
	1,0,0,0,320,321,5,28,0,0,321,322,3,4,2,0,322,323,5,9,0,0,323,43,1,0,0,0,
	324,325,5,3,0,0,325,326,3,4,2,0,326,327,5,4,0,0,327,330,1,0,0,0,328,330,
	3,4,2,0,329,324,1,0,0,0,329,328,1,0,0,0,330,45,1,0,0,0,331,332,5,33,0,0,
	332,339,5,1,0,0,333,334,5,29,0,0,334,335,3,4,2,0,335,336,5,9,0,0,336,340,
	1,0,0,0,337,338,5,30,0,0,338,340,5,9,0,0,339,333,1,0,0,0,339,337,1,0,0,
	0,340,47,1,0,0,0,36,51,59,77,81,85,100,104,109,118,124,132,138,147,153,
	160,172,179,189,197,206,213,221,230,251,255,260,269,273,277,286,289,293,
	301,316,329,339];

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
	public else_(): ElseContext {
		return this.getTypedRuleContext(ElseContext, 0) as ElseContext;
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
	public else_(): ElseContext {
		return this.getTypedRuleContext(ElseContext, 0) as ElseContext;
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


export class ElseContext extends ParserRuleContext {
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
    	return SmartSyncParser.RULE_else;
	}
	// @Override
	public accept<Result>(visitor: SmartSyncVisitor<Result>): Result {
		if (visitor.visitElse) {
			return visitor.visitElse(this);
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
	public arithmetic(): ArithmeticContext {
		return this.getTypedRuleContext(ArithmeticContext, 0) as ArithmeticContext;
	}
	public stringArithmetic(): StringArithmeticContext {
		return this.getTypedRuleContext(StringArithmeticContext, 0) as StringArithmeticContext;
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
	public stringAtom_list(): StringAtomContext[] {
		return this.getTypedRuleContexts(StringAtomContext) as StringAtomContext[];
	}
	public stringAtom(i: number): StringAtomContext {
		return this.getTypedRuleContext(StringAtomContext, i) as StringAtomContext;
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


export class StringAtomContext extends ParserRuleContext {
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
    	return SmartSyncParser.RULE_stringAtom;
	}
	// @Override
	public accept<Result>(visitor: SmartSyncVisitor<Result>): Result {
		if (visitor.visitStringAtom) {
			return visitor.visitStringAtom(this);
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
