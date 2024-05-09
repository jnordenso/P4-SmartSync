// Generated from ./SmartSync.g4 by ANTLR 4.13.1
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
		"else", "expression", "stringArithmetic", "arithmetic", "multExpr", "atom", 
		"condition", "multConExpr", "atomCon", "assignments", "funcReturn", "functions", 
		"output", "delay", "arrayValue", "arrayStm",
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
			this.state = 136;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				{
				this.state = 134;
				this.elses();
				}
				break;
			case 2:
				{
				this.state = 135;
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
			this.state = 138;
			this.match(SmartSyncParser.T__13);
			this.state = 139;
			this.match(SmartSyncParser.T__12);
			this.state = 140;
			this.condition();
			this.state = 141;
			this.match(SmartSyncParser.T__10);
			this.state = 145;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & 12976137) !== 0)) {
				{
				{
				this.state = 142;
				this.line();
				}
				}
				this.state = 147;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 148;
			this.match(SmartSyncParser.T__11);
			this.state = 151;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				{
				this.state = 149;
				this.elses();
				}
				break;
			case 2:
				{
				this.state = 150;
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
			this.state = 153;
			this.match(SmartSyncParser.T__13);
			this.state = 154;
			this.match(SmartSyncParser.T__10);
			this.state = 158;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & 12976137) !== 0)) {
				{
				{
				this.state = 155;
				this.line();
				}
				}
				this.state = 160;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 161;
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
			this.state = 170;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 163;
				this.stringArithmetic();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 164;
				this.arithmetic();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 165;
				this.value();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 166;
				this.match(SmartSyncParser.T__4);
				this.state = 167;
				this.expression();
				this.state = 168;
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
			this.state = 172;
			_la = this._input.LA(1);
			if(!(_la===33 || _la===34)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 177;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===15) {
				{
				{
				this.state = 173;
				this.match(SmartSyncParser.T__14);
				this.state = 174;
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
				this.state = 179;
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
			this.state = 180;
			this.multExpr();
			this.state = 185;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===15 || _la===16) {
				{
				{
				this.state = 181;
				_la = this._input.LA(1);
				if(!(_la===15 || _la===16)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 182;
				this.multExpr();
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
	public multExpr(): MultExprContext {
		let localctx: MultExprContext = new MultExprContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, SmartSyncParser.RULE_multExpr);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 188;
			this.atom();
			this.state = 193;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===17 || _la===18) {
				{
				{
				this.state = 189;
				_la = this._input.LA(1);
				if(!(_la===17 || _la===18)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 190;
				this.atom();
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
	public atom(): AtomContext {
		let localctx: AtomContext = new AtomContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, SmartSyncParser.RULE_atom);
		try {
			this.state = 202;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 35:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 196;
				this.match(SmartSyncParser.NUMBER);
				}
				break;
			case 33:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 197;
				this.match(SmartSyncParser.ID);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 198;
				this.match(SmartSyncParser.T__4);
				this.state = 199;
				this.arithmetic();
				this.state = 200;
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
			this.state = 204;
			this.multConExpr();
			this.state = 209;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===19 || _la===20) {
				{
				{
				this.state = 205;
				_la = this._input.LA(1);
				if(!(_la===19 || _la===20)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 206;
				this.multConExpr();
				}
				}
				this.state = 211;
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
			this.state = 212;
			this.atomCon();
			this.state = 217;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 31457280) !== 0)) {
				{
				{
				this.state = 213;
				_la = this._input.LA(1);
				if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 31457280) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 214;
				this.atomCon();
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
	public atomCon(): AtomConContext {
		let localctx: AtomConContext = new AtomConContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, SmartSyncParser.RULE_atomCon);
		try {
			this.state = 226;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 35:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 220;
				this.match(SmartSyncParser.NUMBER);
				}
				break;
			case 33:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 221;
				this.match(SmartSyncParser.ID);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 222;
				this.match(SmartSyncParser.T__4);
				this.state = 223;
				this.condition();
				this.state = 224;
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
			this.state = 256;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 228;
				this.match(SmartSyncParser.ID);
				this.state = 229;
				this.match(SmartSyncParser.T__7);
				this.state = 230;
				this.expression();
				this.state = 231;
				this.match(SmartSyncParser.T__8);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 233;
				this.match(SmartSyncParser.ID);
				this.state = 234;
				this.match(SmartSyncParser.T__2);
				this.state = 235;
				this.value();
				this.state = 236;
				this.match(SmartSyncParser.T__3);
				this.state = 237;
				this.match(SmartSyncParser.T__7);
				this.state = 238;
				this.expression();
				this.state = 239;
				this.match(SmartSyncParser.T__8);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 241;
				this.match(SmartSyncParser.ID);
				this.state = 242;
				this.match(SmartSyncParser.T__0);
				this.state = 243;
				this.match(SmartSyncParser.T__7);
				this.state = 244;
				this.match(SmartSyncParser.T__2);
				this.state = 251;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===3 || _la===31 || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 7) !== 0)) {
					{
					{
					this.state = 245;
					this.arrayValue();
					this.state = 247;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===6) {
						{
						this.state = 246;
						this.match(SmartSyncParser.T__5);
						}
					}

					}
					}
					this.state = 253;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 254;
				this.match(SmartSyncParser.T__3);
				this.state = 255;
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
			this.state = 275;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 29, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 258;
				this.value();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 259;
				this.match(SmartSyncParser.ID);
				this.state = 261;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===1) {
					{
					this.state = 260;
					this.match(SmartSyncParser.T__0);
					}
				}

				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 263;
				this.arithmetic();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 264;
				this.match(SmartSyncParser.T__2);
				this.state = 271;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===3 || _la===31 || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 7) !== 0)) {
					{
					{
					this.state = 265;
					this.arrayValue();
					this.state = 267;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===6) {
						{
						this.state = 266;
						this.match(SmartSyncParser.T__5);
						}
					}

					}
					}
					this.state = 273;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 274;
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
			this.state = 277;
			this.match(SmartSyncParser.TYPE);
			this.state = 278;
			this.match(SmartSyncParser.T__24);
			this.state = 279;
			this.match(SmartSyncParser.ID);
			this.state = 280;
			this.match(SmartSyncParser.T__4);
			this.state = 291;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===32) {
				{
				{
				this.state = 281;
				this.match(SmartSyncParser.TYPE);
				this.state = 282;
				this.match(SmartSyncParser.ID);
				this.state = 284;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===1) {
					{
					this.state = 283;
					this.match(SmartSyncParser.T__0);
					}
				}

				this.state = 287;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===6) {
					{
					this.state = 286;
					this.match(SmartSyncParser.T__5);
					}
				}

				}
				}
				this.state = 293;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 294;
			this.match(SmartSyncParser.T__6);
			this.state = 295;
			this.match(SmartSyncParser.T__10);
			this.state = 299;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & 12976137) !== 0)) {
				{
				{
				this.state = 296;
				this.line();
				}
				}
				this.state = 301;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 302;
			this.match(SmartSyncParser.T__25);
			this.state = 303;
			this.funcReturn();
			this.state = 304;
			this.match(SmartSyncParser.T__8);
			this.state = 305;
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
			this.state = 307;
			this.match(SmartSyncParser.T__26);
			this.state = 314;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 34, this._ctx) ) {
			case 1:
				{
				this.state = 308;
				this.value();
				}
				break;
			case 2:
				{
				this.state = 309;
				this.match(SmartSyncParser.ID);
				this.state = 310;
				this.match(SmartSyncParser.T__2);
				this.state = 311;
				this.value();
				this.state = 312;
				this.match(SmartSyncParser.T__3);
				}
				break;
			}
			this.state = 316;
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
			this.state = 318;
			this.match(SmartSyncParser.T__27);
			this.state = 319;
			this.value();
			this.state = 320;
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
			this.state = 327;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 3:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 322;
				this.match(SmartSyncParser.T__2);
				this.state = 323;
				this.value();
				this.state = 324;
				this.match(SmartSyncParser.T__3);
				}
				break;
			case 31:
			case 33:
			case 34:
			case 35:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 326;
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
			this.state = 346;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 37, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 329;
				this.match(SmartSyncParser.ID);
				this.state = 330;
				this.match(SmartSyncParser.T__2);
				this.state = 331;
				this.value();
				this.state = 332;
				this.match(SmartSyncParser.T__3);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 334;
				this.match(SmartSyncParser.ID);
				this.state = 335;
				this.match(SmartSyncParser.T__0);
				this.state = 344;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 29:
					{
					this.state = 336;
					this.match(SmartSyncParser.T__28);
					this.state = 337;
					this.value();
					this.state = 338;
					this.match(SmartSyncParser.T__8);
					}
					break;
				case 30:
					{
					this.state = 340;
					this.match(SmartSyncParser.T__29);
					this.state = 341;
					this.match(SmartSyncParser.T__8);
					}
					break;
				case 2:
					{
					this.state = 342;
					this.match(SmartSyncParser.T__1);
					this.state = 343;
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

	public static readonly _serializedATN: number[] = [4,1,40,349,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,1,0,4,0,48,8,0,11,
	0,12,0,49,1,1,1,1,1,1,1,1,1,1,1,1,3,1,58,8,1,1,2,1,2,1,2,1,2,1,2,1,2,1,
	2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,76,8,2,5,2,78,8,2,10,2,12,2,81,
	9,2,1,2,3,2,84,8,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,
	3,3,99,8,3,5,3,101,8,3,10,3,12,3,104,9,3,1,3,1,3,3,3,108,8,3,1,4,1,4,1,
	4,1,4,1,4,5,4,115,8,4,10,4,12,4,118,9,4,1,4,1,4,1,4,3,4,123,8,4,1,5,1,5,
	1,5,1,5,5,5,129,8,5,10,5,12,5,132,9,5,1,5,1,5,1,5,3,5,137,8,5,1,6,1,6,1,
	6,1,6,1,6,5,6,144,8,6,10,6,12,6,147,9,6,1,6,1,6,1,6,3,6,152,8,6,1,7,1,7,
	1,7,5,7,157,8,7,10,7,12,7,160,9,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,3,
	8,171,8,8,1,9,1,9,1,9,5,9,176,8,9,10,9,12,9,179,9,9,1,10,1,10,1,10,5,10,
	184,8,10,10,10,12,10,187,9,10,1,11,1,11,1,11,5,11,192,8,11,10,11,12,11,
	195,9,11,1,12,1,12,1,12,1,12,1,12,1,12,3,12,203,8,12,1,13,1,13,1,13,5,13,
	208,8,13,10,13,12,13,211,9,13,1,14,1,14,1,14,5,14,216,8,14,10,14,12,14,
	219,9,14,1,15,1,15,1,15,1,15,1,15,1,15,3,15,227,8,15,1,16,1,16,1,16,1,16,
	1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,
	16,3,16,248,8,16,5,16,250,8,16,10,16,12,16,253,9,16,1,16,1,16,3,16,257,
	8,16,1,17,1,17,1,17,3,17,262,8,17,1,17,1,17,1,17,1,17,3,17,268,8,17,5,17,
	270,8,17,10,17,12,17,273,9,17,1,17,3,17,276,8,17,1,18,1,18,1,18,1,18,1,
	18,1,18,1,18,3,18,285,8,18,1,18,3,18,288,8,18,5,18,290,8,18,10,18,12,18,
	293,9,18,1,18,1,18,1,18,5,18,298,8,18,10,18,12,18,301,9,18,1,18,1,18,1,
	18,1,18,1,18,1,19,1,19,1,19,1,19,1,19,1,19,1,19,3,19,315,8,19,1,19,1,19,
	1,20,1,20,1,20,1,20,1,21,1,21,1,21,1,21,1,21,3,21,328,8,21,1,22,1,22,1,
	22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,3,22,345,
	8,22,3,22,347,8,22,1,22,0,0,23,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,
	30,32,34,36,38,40,42,44,0,5,1,0,33,34,1,0,15,16,1,0,17,18,1,0,19,20,1,0,
	21,24,383,0,47,1,0,0,0,2,57,1,0,0,0,4,83,1,0,0,0,6,107,1,0,0,0,8,122,1,
	0,0,0,10,124,1,0,0,0,12,138,1,0,0,0,14,153,1,0,0,0,16,170,1,0,0,0,18,172,
	1,0,0,0,20,180,1,0,0,0,22,188,1,0,0,0,24,202,1,0,0,0,26,204,1,0,0,0,28,
	212,1,0,0,0,30,226,1,0,0,0,32,256,1,0,0,0,34,275,1,0,0,0,36,277,1,0,0,0,
	38,307,1,0,0,0,40,318,1,0,0,0,42,327,1,0,0,0,44,346,1,0,0,0,46,48,3,2,1,
	0,47,46,1,0,0,0,48,49,1,0,0,0,49,47,1,0,0,0,49,50,1,0,0,0,50,1,1,0,0,0,
	51,58,3,6,3,0,52,58,3,8,4,0,53,58,3,32,16,0,54,58,3,36,18,0,55,58,3,38,
	19,0,56,58,3,40,20,0,57,51,1,0,0,0,57,52,1,0,0,0,57,53,1,0,0,0,57,54,1,
	0,0,0,57,55,1,0,0,0,57,56,1,0,0,0,58,3,1,0,0,0,59,84,5,31,0,0,60,84,5,34,
	0,0,61,84,5,35,0,0,62,84,5,33,0,0,63,64,5,33,0,0,64,65,5,1,0,0,65,84,5,
	2,0,0,66,67,5,33,0,0,67,68,5,3,0,0,68,69,3,4,2,0,69,70,5,4,0,0,70,84,1,
	0,0,0,71,72,5,33,0,0,72,79,5,5,0,0,73,75,3,34,17,0,74,76,5,6,0,0,75,74,
	1,0,0,0,75,76,1,0,0,0,76,78,1,0,0,0,77,73,1,0,0,0,78,81,1,0,0,0,79,77,1,
	0,0,0,79,80,1,0,0,0,80,82,1,0,0,0,81,79,1,0,0,0,82,84,5,7,0,0,83,59,1,0,
	0,0,83,60,1,0,0,0,83,61,1,0,0,0,83,62,1,0,0,0,83,63,1,0,0,0,83,66,1,0,0,
	0,83,71,1,0,0,0,84,5,1,0,0,0,85,86,5,32,0,0,86,87,5,33,0,0,87,88,5,8,0,
	0,88,89,3,16,8,0,89,90,5,9,0,0,90,108,1,0,0,0,91,92,5,32,0,0,92,93,5,33,
	0,0,93,94,5,1,0,0,94,95,5,8,0,0,95,102,5,3,0,0,96,98,3,42,21,0,97,99,5,
	6,0,0,98,97,1,0,0,0,98,99,1,0,0,0,99,101,1,0,0,0,100,96,1,0,0,0,101,104,
	1,0,0,0,102,100,1,0,0,0,102,103,1,0,0,0,103,105,1,0,0,0,104,102,1,0,0,0,
	105,106,5,4,0,0,106,108,5,9,0,0,107,85,1,0,0,0,107,91,1,0,0,0,108,7,1,0,
	0,0,109,123,3,10,5,0,110,111,5,10,0,0,111,112,3,26,13,0,112,116,5,11,0,
	0,113,115,3,2,1,0,114,113,1,0,0,0,115,118,1,0,0,0,116,114,1,0,0,0,116,117,
	1,0,0,0,117,119,1,0,0,0,118,116,1,0,0,0,119,120,5,12,0,0,120,123,1,0,0,
	0,121,123,3,44,22,0,122,109,1,0,0,0,122,110,1,0,0,0,122,121,1,0,0,0,123,
	9,1,0,0,0,124,125,5,13,0,0,125,126,3,26,13,0,126,130,5,11,0,0,127,129,3,
	2,1,0,128,127,1,0,0,0,129,132,1,0,0,0,130,128,1,0,0,0,130,131,1,0,0,0,131,
	133,1,0,0,0,132,130,1,0,0,0,133,136,5,12,0,0,134,137,3,12,6,0,135,137,3,
	14,7,0,136,134,1,0,0,0,136,135,1,0,0,0,136,137,1,0,0,0,137,11,1,0,0,0,138,
	139,5,14,0,0,139,140,5,13,0,0,140,141,3,26,13,0,141,145,5,11,0,0,142,144,
	3,2,1,0,143,142,1,0,0,0,144,147,1,0,0,0,145,143,1,0,0,0,145,146,1,0,0,0,
	146,148,1,0,0,0,147,145,1,0,0,0,148,151,5,12,0,0,149,152,3,12,6,0,150,152,
	3,14,7,0,151,149,1,0,0,0,151,150,1,0,0,0,151,152,1,0,0,0,152,13,1,0,0,0,
	153,154,5,14,0,0,154,158,5,11,0,0,155,157,3,2,1,0,156,155,1,0,0,0,157,160,
	1,0,0,0,158,156,1,0,0,0,158,159,1,0,0,0,159,161,1,0,0,0,160,158,1,0,0,0,
	161,162,5,12,0,0,162,15,1,0,0,0,163,171,3,18,9,0,164,171,3,20,10,0,165,
	171,3,4,2,0,166,167,5,5,0,0,167,168,3,16,8,0,168,169,5,7,0,0,169,171,1,
	0,0,0,170,163,1,0,0,0,170,164,1,0,0,0,170,165,1,0,0,0,170,166,1,0,0,0,171,
	17,1,0,0,0,172,177,7,0,0,0,173,174,5,15,0,0,174,176,7,0,0,0,175,173,1,0,
	0,0,176,179,1,0,0,0,177,175,1,0,0,0,177,178,1,0,0,0,178,19,1,0,0,0,179,
	177,1,0,0,0,180,185,3,22,11,0,181,182,7,1,0,0,182,184,3,22,11,0,183,181,
	1,0,0,0,184,187,1,0,0,0,185,183,1,0,0,0,185,186,1,0,0,0,186,21,1,0,0,0,
	187,185,1,0,0,0,188,193,3,24,12,0,189,190,7,2,0,0,190,192,3,24,12,0,191,
	189,1,0,0,0,192,195,1,0,0,0,193,191,1,0,0,0,193,194,1,0,0,0,194,23,1,0,
	0,0,195,193,1,0,0,0,196,203,5,35,0,0,197,203,5,33,0,0,198,199,5,5,0,0,199,
	200,3,20,10,0,200,201,5,7,0,0,201,203,1,0,0,0,202,196,1,0,0,0,202,197,1,
	0,0,0,202,198,1,0,0,0,203,25,1,0,0,0,204,209,3,28,14,0,205,206,7,3,0,0,
	206,208,3,28,14,0,207,205,1,0,0,0,208,211,1,0,0,0,209,207,1,0,0,0,209,210,
	1,0,0,0,210,27,1,0,0,0,211,209,1,0,0,0,212,217,3,30,15,0,213,214,7,4,0,
	0,214,216,3,30,15,0,215,213,1,0,0,0,216,219,1,0,0,0,217,215,1,0,0,0,217,
	218,1,0,0,0,218,29,1,0,0,0,219,217,1,0,0,0,220,227,5,35,0,0,221,227,5,33,
	0,0,222,223,5,5,0,0,223,224,3,26,13,0,224,225,5,7,0,0,225,227,1,0,0,0,226,
	220,1,0,0,0,226,221,1,0,0,0,226,222,1,0,0,0,227,31,1,0,0,0,228,229,5,33,
	0,0,229,230,5,8,0,0,230,231,3,16,8,0,231,232,5,9,0,0,232,257,1,0,0,0,233,
	234,5,33,0,0,234,235,5,3,0,0,235,236,3,4,2,0,236,237,5,4,0,0,237,238,5,
	8,0,0,238,239,3,16,8,0,239,240,5,9,0,0,240,257,1,0,0,0,241,242,5,33,0,0,
	242,243,5,1,0,0,243,244,5,8,0,0,244,251,5,3,0,0,245,247,3,42,21,0,246,248,
	5,6,0,0,247,246,1,0,0,0,247,248,1,0,0,0,248,250,1,0,0,0,249,245,1,0,0,0,
	250,253,1,0,0,0,251,249,1,0,0,0,251,252,1,0,0,0,252,254,1,0,0,0,253,251,
	1,0,0,0,254,255,5,4,0,0,255,257,5,9,0,0,256,228,1,0,0,0,256,233,1,0,0,0,
	256,241,1,0,0,0,257,33,1,0,0,0,258,276,3,4,2,0,259,261,5,33,0,0,260,262,
	5,1,0,0,261,260,1,0,0,0,261,262,1,0,0,0,262,276,1,0,0,0,263,276,3,20,10,
	0,264,271,5,3,0,0,265,267,3,42,21,0,266,268,5,6,0,0,267,266,1,0,0,0,267,
	268,1,0,0,0,268,270,1,0,0,0,269,265,1,0,0,0,270,273,1,0,0,0,271,269,1,0,
	0,0,271,272,1,0,0,0,272,274,1,0,0,0,273,271,1,0,0,0,274,276,5,4,0,0,275,
	258,1,0,0,0,275,259,1,0,0,0,275,263,1,0,0,0,275,264,1,0,0,0,276,35,1,0,
	0,0,277,278,5,32,0,0,278,279,5,25,0,0,279,280,5,33,0,0,280,291,5,5,0,0,
	281,282,5,32,0,0,282,284,5,33,0,0,283,285,5,1,0,0,284,283,1,0,0,0,284,285,
	1,0,0,0,285,287,1,0,0,0,286,288,5,6,0,0,287,286,1,0,0,0,287,288,1,0,0,0,
	288,290,1,0,0,0,289,281,1,0,0,0,290,293,1,0,0,0,291,289,1,0,0,0,291,292,
	1,0,0,0,292,294,1,0,0,0,293,291,1,0,0,0,294,295,5,7,0,0,295,299,5,11,0,
	0,296,298,3,2,1,0,297,296,1,0,0,0,298,301,1,0,0,0,299,297,1,0,0,0,299,300,
	1,0,0,0,300,302,1,0,0,0,301,299,1,0,0,0,302,303,5,26,0,0,303,304,3,34,17,
	0,304,305,5,9,0,0,305,306,5,12,0,0,306,37,1,0,0,0,307,314,5,27,0,0,308,
	315,3,4,2,0,309,310,5,33,0,0,310,311,5,3,0,0,311,312,3,4,2,0,312,313,5,
	4,0,0,313,315,1,0,0,0,314,308,1,0,0,0,314,309,1,0,0,0,315,316,1,0,0,0,316,
	317,5,9,0,0,317,39,1,0,0,0,318,319,5,28,0,0,319,320,3,4,2,0,320,321,5,9,
	0,0,321,41,1,0,0,0,322,323,5,3,0,0,323,324,3,4,2,0,324,325,5,4,0,0,325,
	328,1,0,0,0,326,328,3,4,2,0,327,322,1,0,0,0,327,326,1,0,0,0,328,43,1,0,
	0,0,329,330,5,33,0,0,330,331,5,3,0,0,331,332,3,4,2,0,332,333,5,4,0,0,333,
	347,1,0,0,0,334,335,5,33,0,0,335,344,5,1,0,0,336,337,5,29,0,0,337,338,3,
	4,2,0,338,339,5,9,0,0,339,345,1,0,0,0,340,341,5,30,0,0,341,345,5,9,0,0,
	342,343,5,2,0,0,343,345,5,9,0,0,344,336,1,0,0,0,344,340,1,0,0,0,344,342,
	1,0,0,0,345,347,1,0,0,0,346,329,1,0,0,0,346,334,1,0,0,0,347,45,1,0,0,0,
	38,49,57,75,79,83,98,102,107,116,122,130,136,145,151,158,170,177,185,193,
	202,209,217,226,247,251,256,261,267,271,275,284,287,291,299,314,327,344,
	346];

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
