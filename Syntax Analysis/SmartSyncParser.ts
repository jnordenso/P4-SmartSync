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
			this.state = 88;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 5, this._ctx) ) {
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
				this.state = 66;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===1) {
					{
					this.state = 65;
					this.match(SmartSyncParser.T__0);
					}
				}

				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 68;
				this.match(SmartSyncParser.ID);
				this.state = 69;
				this.match(SmartSyncParser.T__0);
				this.state = 70;
				this.match(SmartSyncParser.T__1);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 71;
				this.match(SmartSyncParser.ID);
				this.state = 72;
				this.match(SmartSyncParser.T__2);
				this.state = 73;
				this.value();
				this.state = 74;
				this.match(SmartSyncParser.T__3);
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 76;
				this.match(SmartSyncParser.ID);
				this.state = 77;
				this.match(SmartSyncParser.T__4);
				this.state = 84;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2147483688) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 7) !== 0)) {
					{
					{
					this.state = 78;
					this.funcReturn();
					this.state = 80;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===6) {
						{
						this.state = 79;
						this.match(SmartSyncParser.T__5);
						}
					}

					}
					}
					this.state = 86;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 87;
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
			this.state = 112;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 90;
				this.match(SmartSyncParser.TYPE);
				this.state = 91;
				this.match(SmartSyncParser.ID);
				this.state = 92;
				this.match(SmartSyncParser.T__7);
				this.state = 93;
				this.expression();
				this.state = 94;
				this.match(SmartSyncParser.T__8);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 96;
				this.match(SmartSyncParser.TYPE);
				this.state = 97;
				this.match(SmartSyncParser.ID);
				this.state = 98;
				this.match(SmartSyncParser.T__0);
				this.state = 99;
				this.match(SmartSyncParser.T__7);
				this.state = 100;
				this.match(SmartSyncParser.T__2);
				this.state = 107;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===3 || _la===31 || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 7) !== 0)) {
					{
					{
					this.state = 101;
					this.arrayValue();
					this.state = 103;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===6) {
						{
						this.state = 102;
						this.match(SmartSyncParser.T__5);
						}
					}

					}
					}
					this.state = 109;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 110;
				this.match(SmartSyncParser.T__3);
				this.state = 111;
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
			this.state = 127;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 13:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 114;
				this.ifStm();
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 115;
				this.match(SmartSyncParser.T__9);
				this.state = 116;
				this.condition();
				this.state = 117;
				this.match(SmartSyncParser.T__10);
				this.state = 121;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & 12976137) !== 0)) {
					{
					{
					this.state = 118;
					this.line();
					}
					}
					this.state = 123;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 124;
				this.match(SmartSyncParser.T__11);
				}
				break;
			case 33:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 126;
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
			this.state = 129;
			this.match(SmartSyncParser.T__12);
			this.state = 130;
			this.condition();
			this.state = 131;
			this.match(SmartSyncParser.T__10);
			this.state = 135;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & 12976137) !== 0)) {
				{
				{
				this.state = 132;
				this.line();
				}
				}
				this.state = 137;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 138;
			this.match(SmartSyncParser.T__11);
			this.state = 141;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				{
				this.state = 139;
				this.elses();
				}
				break;
			case 2:
				{
				this.state = 140;
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
			this.state = 143;
			this.match(SmartSyncParser.T__13);
			this.state = 144;
			this.match(SmartSyncParser.T__12);
			this.state = 145;
			this.condition();
			this.state = 146;
			this.match(SmartSyncParser.T__10);
			this.state = 150;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & 12976137) !== 0)) {
				{
				{
				this.state = 147;
				this.line();
				}
				}
				this.state = 152;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 153;
			this.match(SmartSyncParser.T__11);
			this.state = 156;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				{
				this.state = 154;
				this.elses();
				}
				break;
			case 2:
				{
				this.state = 155;
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
			this.state = 176;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 168;
				this.arithmetic();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 169;
				this.stringArithmetic();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 170;
				this.value();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 171;
				this.match(SmartSyncParser.T__4);
				this.state = 172;
				this.expression();
				this.state = 173;
				this.match(SmartSyncParser.T__6);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 175;
				this.condition();
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
			this.state = 178;
			this.stringAtom();
			this.state = 183;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===15) {
				{
				{
				this.state = 179;
				this.match(SmartSyncParser.T__14);
				this.state = 180;
				this.stringAtom();
				}
				}
				this.state = 185;
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
			this.state = 186;
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
		this.enterRule(localctx, 24, SmartSyncParser.RULE_multExpr);
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
		this.enterRule(localctx, 26, SmartSyncParser.RULE_atom);
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
		this.enterRule(localctx, 28, SmartSyncParser.RULE_condition);
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
		this.enterRule(localctx, 30, SmartSyncParser.RULE_multConExpr);
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
		this.enterRule(localctx, 32, SmartSyncParser.RULE_atomCon);
		try {
			this.state = 234;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 23, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 228;
				this.arithmetic();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 229;
				this.value();
				}
				break;
			case 3:
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
		this.enterRule(localctx, 36, SmartSyncParser.RULE_funcReturn);
		let _la: number;
		try {
			this.state = 281;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 29, this._ctx) ) {
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
				this.state = 268;
				this.match(SmartSyncParser.T__0);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 269;
				this.arithmetic();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 270;
				this.match(SmartSyncParser.T__2);
				this.state = 277;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===3 || _la===31 || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 7) !== 0)) {
					{
					{
					this.state = 271;
					this.arrayValue();
					this.state = 273;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===6) {
						{
						this.state = 272;
						this.match(SmartSyncParser.T__5);
						}
					}

					}
					}
					this.state = 279;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 280;
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
			this.state = 283;
			this.match(SmartSyncParser.TYPE);
			this.state = 284;
			this.match(SmartSyncParser.T__24);
			this.state = 285;
			this.match(SmartSyncParser.ID);
			this.state = 286;
			this.match(SmartSyncParser.T__4);
			this.state = 297;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===32) {
				{
				{
				this.state = 287;
				this.match(SmartSyncParser.TYPE);
				this.state = 288;
				this.match(SmartSyncParser.ID);
				this.state = 290;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===1) {
					{
					this.state = 289;
					this.match(SmartSyncParser.T__0);
					}
				}

				this.state = 293;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===6) {
					{
					this.state = 292;
					this.match(SmartSyncParser.T__5);
					}
				}

				}
				}
				this.state = 299;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 300;
			this.match(SmartSyncParser.T__6);
			this.state = 301;
			this.match(SmartSyncParser.T__10);
			this.state = 305;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & 12976137) !== 0)) {
				{
				{
				this.state = 302;
				this.line();
				}
				}
				this.state = 307;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 308;
			this.match(SmartSyncParser.T__25);
			this.state = 309;
			this.funcReturn();
			this.state = 310;
			this.match(SmartSyncParser.T__8);
			this.state = 311;
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
			this.state = 313;
			this.match(SmartSyncParser.T__26);
			this.state = 320;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 34, this._ctx) ) {
			case 1:
				{
				this.state = 314;
				this.value();
				}
				break;
			case 2:
				{
				this.state = 315;
				this.match(SmartSyncParser.ID);
				this.state = 316;
				this.match(SmartSyncParser.T__2);
				this.state = 317;
				this.value();
				this.state = 318;
				this.match(SmartSyncParser.T__3);
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
		this.enterRule(localctx, 42, SmartSyncParser.RULE_delay);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 324;
			this.match(SmartSyncParser.T__27);
			this.state = 325;
			this.value();
			this.state = 326;
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
		let _la: number;
		try {
			this.state = 340;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 3:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 328;
				this.match(SmartSyncParser.T__2);
				this.state = 335;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 31)) & ~0x1F) === 0 && ((1 << (_la - 31)) & 29) !== 0)) {
					{
					{
					this.state = 329;
					this.value();
					this.state = 331;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===6) {
						{
						this.state = 330;
						this.match(SmartSyncParser.T__5);
						}
					}

					}
					}
					this.state = 337;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 338;
				this.match(SmartSyncParser.T__3);
				}
				break;
			case 31:
			case 33:
			case 34:
			case 35:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 339;
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
			this.state = 342;
			this.match(SmartSyncParser.ID);
			this.state = 343;
			this.match(SmartSyncParser.T__0);
			this.state = 350;
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

	public static readonly _serializedATN: number[] = [4,1,40,353,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,1,0,4,
	0,50,8,0,11,0,12,0,51,1,1,1,1,1,1,1,1,1,1,1,1,3,1,60,8,1,1,2,1,2,1,2,1,
	2,1,2,3,2,67,8,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,81,
	8,2,5,2,83,8,2,10,2,12,2,86,9,2,1,2,3,2,89,8,2,1,3,1,3,1,3,1,3,1,3,1,3,
	1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,104,8,3,5,3,106,8,3,10,3,12,3,109,9,3,1,
	3,1,3,3,3,113,8,3,1,4,1,4,1,4,1,4,1,4,5,4,120,8,4,10,4,12,4,123,9,4,1,4,
	1,4,1,4,3,4,128,8,4,1,5,1,5,1,5,1,5,5,5,134,8,5,10,5,12,5,137,9,5,1,5,1,
	5,1,5,3,5,142,8,5,1,6,1,6,1,6,1,6,1,6,5,6,149,8,6,10,6,12,6,152,9,6,1,6,
	1,6,1,6,3,6,157,8,6,1,7,1,7,1,7,5,7,162,8,7,10,7,12,7,165,9,7,1,7,1,7,1,
	8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,177,8,8,1,9,1,9,1,9,5,9,182,8,9,10,9,
	12,9,185,9,9,1,10,1,10,1,11,1,11,1,11,5,11,192,8,11,10,11,12,11,195,9,11,
	1,12,1,12,1,12,5,12,200,8,12,10,12,12,12,203,9,12,1,13,1,13,1,13,1,13,1,
	13,1,13,3,13,211,8,13,1,14,1,14,1,14,5,14,216,8,14,10,14,12,14,219,9,14,
	1,15,1,15,1,15,5,15,224,8,15,10,15,12,15,227,9,15,1,16,1,16,1,16,1,16,1,
	16,1,16,3,16,235,8,16,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,
	1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,3,17,256,8,17,5,17,258,8,17,
	10,17,12,17,261,9,17,1,17,1,17,3,17,265,8,17,1,18,1,18,1,18,1,18,1,18,1,
	18,1,18,3,18,274,8,18,5,18,276,8,18,10,18,12,18,279,9,18,1,18,3,18,282,
	8,18,1,19,1,19,1,19,1,19,1,19,1,19,1,19,3,19,291,8,19,1,19,3,19,294,8,19,
	5,19,296,8,19,10,19,12,19,299,9,19,1,19,1,19,1,19,5,19,304,8,19,10,19,12,
	19,307,9,19,1,19,1,19,1,19,1,19,1,19,1,20,1,20,1,20,1,20,1,20,1,20,1,20,
	3,20,321,8,20,1,20,1,20,1,21,1,21,1,21,1,21,1,22,1,22,1,22,3,22,332,8,22,
	5,22,334,8,22,10,22,12,22,337,9,22,1,22,1,22,3,22,341,8,22,1,23,1,23,1,
	23,1,23,1,23,1,23,1,23,1,23,3,23,351,8,23,1,23,0,0,24,0,2,4,6,8,10,12,14,
	16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,0,5,1,0,33,34,1,0,15,16,
	1,0,17,18,1,0,19,20,1,0,21,24,387,0,49,1,0,0,0,2,59,1,0,0,0,4,88,1,0,0,
	0,6,112,1,0,0,0,8,127,1,0,0,0,10,129,1,0,0,0,12,143,1,0,0,0,14,158,1,0,
	0,0,16,176,1,0,0,0,18,178,1,0,0,0,20,186,1,0,0,0,22,188,1,0,0,0,24,196,
	1,0,0,0,26,210,1,0,0,0,28,212,1,0,0,0,30,220,1,0,0,0,32,234,1,0,0,0,34,
	264,1,0,0,0,36,281,1,0,0,0,38,283,1,0,0,0,40,313,1,0,0,0,42,324,1,0,0,0,
	44,340,1,0,0,0,46,342,1,0,0,0,48,50,3,2,1,0,49,48,1,0,0,0,50,51,1,0,0,0,
	51,49,1,0,0,0,51,52,1,0,0,0,52,1,1,0,0,0,53,60,3,6,3,0,54,60,3,8,4,0,55,
	60,3,34,17,0,56,60,3,38,19,0,57,60,3,40,20,0,58,60,3,42,21,0,59,53,1,0,
	0,0,59,54,1,0,0,0,59,55,1,0,0,0,59,56,1,0,0,0,59,57,1,0,0,0,59,58,1,0,0,
	0,60,3,1,0,0,0,61,89,5,31,0,0,62,89,5,34,0,0,63,89,5,35,0,0,64,66,5,33,
	0,0,65,67,5,1,0,0,66,65,1,0,0,0,66,67,1,0,0,0,67,89,1,0,0,0,68,69,5,33,
	0,0,69,70,5,1,0,0,70,89,5,2,0,0,71,72,5,33,0,0,72,73,5,3,0,0,73,74,3,4,
	2,0,74,75,5,4,0,0,75,89,1,0,0,0,76,77,5,33,0,0,77,84,5,5,0,0,78,80,3,36,
	18,0,79,81,5,6,0,0,80,79,1,0,0,0,80,81,1,0,0,0,81,83,1,0,0,0,82,78,1,0,
	0,0,83,86,1,0,0,0,84,82,1,0,0,0,84,85,1,0,0,0,85,87,1,0,0,0,86,84,1,0,0,
	0,87,89,5,7,0,0,88,61,1,0,0,0,88,62,1,0,0,0,88,63,1,0,0,0,88,64,1,0,0,0,
	88,68,1,0,0,0,88,71,1,0,0,0,88,76,1,0,0,0,89,5,1,0,0,0,90,91,5,32,0,0,91,
	92,5,33,0,0,92,93,5,8,0,0,93,94,3,16,8,0,94,95,5,9,0,0,95,113,1,0,0,0,96,
	97,5,32,0,0,97,98,5,33,0,0,98,99,5,1,0,0,99,100,5,8,0,0,100,107,5,3,0,0,
	101,103,3,44,22,0,102,104,5,6,0,0,103,102,1,0,0,0,103,104,1,0,0,0,104,106,
	1,0,0,0,105,101,1,0,0,0,106,109,1,0,0,0,107,105,1,0,0,0,107,108,1,0,0,0,
	108,110,1,0,0,0,109,107,1,0,0,0,110,111,5,4,0,0,111,113,5,9,0,0,112,90,
	1,0,0,0,112,96,1,0,0,0,113,7,1,0,0,0,114,128,3,10,5,0,115,116,5,10,0,0,
	116,117,3,28,14,0,117,121,5,11,0,0,118,120,3,2,1,0,119,118,1,0,0,0,120,
	123,1,0,0,0,121,119,1,0,0,0,121,122,1,0,0,0,122,124,1,0,0,0,123,121,1,0,
	0,0,124,125,5,12,0,0,125,128,1,0,0,0,126,128,3,46,23,0,127,114,1,0,0,0,
	127,115,1,0,0,0,127,126,1,0,0,0,128,9,1,0,0,0,129,130,5,13,0,0,130,131,
	3,28,14,0,131,135,5,11,0,0,132,134,3,2,1,0,133,132,1,0,0,0,134,137,1,0,
	0,0,135,133,1,0,0,0,135,136,1,0,0,0,136,138,1,0,0,0,137,135,1,0,0,0,138,
	141,5,12,0,0,139,142,3,12,6,0,140,142,3,14,7,0,141,139,1,0,0,0,141,140,
	1,0,0,0,141,142,1,0,0,0,142,11,1,0,0,0,143,144,5,14,0,0,144,145,5,13,0,
	0,145,146,3,28,14,0,146,150,5,11,0,0,147,149,3,2,1,0,148,147,1,0,0,0,149,
	152,1,0,0,0,150,148,1,0,0,0,150,151,1,0,0,0,151,153,1,0,0,0,152,150,1,0,
	0,0,153,156,5,12,0,0,154,157,3,12,6,0,155,157,3,14,7,0,156,154,1,0,0,0,
	156,155,1,0,0,0,156,157,1,0,0,0,157,13,1,0,0,0,158,159,5,14,0,0,159,163,
	5,11,0,0,160,162,3,2,1,0,161,160,1,0,0,0,162,165,1,0,0,0,163,161,1,0,0,
	0,163,164,1,0,0,0,164,166,1,0,0,0,165,163,1,0,0,0,166,167,5,12,0,0,167,
	15,1,0,0,0,168,177,3,22,11,0,169,177,3,18,9,0,170,177,3,4,2,0,171,172,5,
	5,0,0,172,173,3,16,8,0,173,174,5,7,0,0,174,177,1,0,0,0,175,177,3,28,14,
	0,176,168,1,0,0,0,176,169,1,0,0,0,176,170,1,0,0,0,176,171,1,0,0,0,176,175,
	1,0,0,0,177,17,1,0,0,0,178,183,3,20,10,0,179,180,5,15,0,0,180,182,3,20,
	10,0,181,179,1,0,0,0,182,185,1,0,0,0,183,181,1,0,0,0,183,184,1,0,0,0,184,
	19,1,0,0,0,185,183,1,0,0,0,186,187,7,0,0,0,187,21,1,0,0,0,188,193,3,24,
	12,0,189,190,7,1,0,0,190,192,3,24,12,0,191,189,1,0,0,0,192,195,1,0,0,0,
	193,191,1,0,0,0,193,194,1,0,0,0,194,23,1,0,0,0,195,193,1,0,0,0,196,201,
	3,26,13,0,197,198,7,2,0,0,198,200,3,26,13,0,199,197,1,0,0,0,200,203,1,0,
	0,0,201,199,1,0,0,0,201,202,1,0,0,0,202,25,1,0,0,0,203,201,1,0,0,0,204,
	211,5,35,0,0,205,211,5,33,0,0,206,207,5,5,0,0,207,208,3,22,11,0,208,209,
	5,7,0,0,209,211,1,0,0,0,210,204,1,0,0,0,210,205,1,0,0,0,210,206,1,0,0,0,
	211,27,1,0,0,0,212,217,3,30,15,0,213,214,7,3,0,0,214,216,3,30,15,0,215,
	213,1,0,0,0,216,219,1,0,0,0,217,215,1,0,0,0,217,218,1,0,0,0,218,29,1,0,
	0,0,219,217,1,0,0,0,220,225,3,32,16,0,221,222,7,4,0,0,222,224,3,32,16,0,
	223,221,1,0,0,0,224,227,1,0,0,0,225,223,1,0,0,0,225,226,1,0,0,0,226,31,
	1,0,0,0,227,225,1,0,0,0,228,235,3,22,11,0,229,235,3,4,2,0,230,231,5,5,0,
	0,231,232,3,28,14,0,232,233,5,7,0,0,233,235,1,0,0,0,234,228,1,0,0,0,234,
	229,1,0,0,0,234,230,1,0,0,0,235,33,1,0,0,0,236,237,5,33,0,0,237,238,5,8,
	0,0,238,239,3,16,8,0,239,240,5,9,0,0,240,265,1,0,0,0,241,242,5,33,0,0,242,
	243,5,3,0,0,243,244,3,4,2,0,244,245,5,4,0,0,245,246,5,8,0,0,246,247,3,16,
	8,0,247,248,5,9,0,0,248,265,1,0,0,0,249,250,5,33,0,0,250,251,5,1,0,0,251,
	252,5,8,0,0,252,259,5,3,0,0,253,255,3,44,22,0,254,256,5,6,0,0,255,254,1,
	0,0,0,255,256,1,0,0,0,256,258,1,0,0,0,257,253,1,0,0,0,258,261,1,0,0,0,259,
	257,1,0,0,0,259,260,1,0,0,0,260,262,1,0,0,0,261,259,1,0,0,0,262,263,5,4,
	0,0,263,265,5,9,0,0,264,236,1,0,0,0,264,241,1,0,0,0,264,249,1,0,0,0,265,
	35,1,0,0,0,266,282,3,4,2,0,267,268,5,33,0,0,268,282,5,1,0,0,269,282,3,22,
	11,0,270,277,5,3,0,0,271,273,3,44,22,0,272,274,5,6,0,0,273,272,1,0,0,0,
	273,274,1,0,0,0,274,276,1,0,0,0,275,271,1,0,0,0,276,279,1,0,0,0,277,275,
	1,0,0,0,277,278,1,0,0,0,278,280,1,0,0,0,279,277,1,0,0,0,280,282,5,4,0,0,
	281,266,1,0,0,0,281,267,1,0,0,0,281,269,1,0,0,0,281,270,1,0,0,0,282,37,
	1,0,0,0,283,284,5,32,0,0,284,285,5,25,0,0,285,286,5,33,0,0,286,297,5,5,
	0,0,287,288,5,32,0,0,288,290,5,33,0,0,289,291,5,1,0,0,290,289,1,0,0,0,290,
	291,1,0,0,0,291,293,1,0,0,0,292,294,5,6,0,0,293,292,1,0,0,0,293,294,1,0,
	0,0,294,296,1,0,0,0,295,287,1,0,0,0,296,299,1,0,0,0,297,295,1,0,0,0,297,
	298,1,0,0,0,298,300,1,0,0,0,299,297,1,0,0,0,300,301,5,7,0,0,301,305,5,11,
	0,0,302,304,3,2,1,0,303,302,1,0,0,0,304,307,1,0,0,0,305,303,1,0,0,0,305,
	306,1,0,0,0,306,308,1,0,0,0,307,305,1,0,0,0,308,309,5,26,0,0,309,310,3,
	36,18,0,310,311,5,9,0,0,311,312,5,12,0,0,312,39,1,0,0,0,313,320,5,27,0,
	0,314,321,3,4,2,0,315,316,5,33,0,0,316,317,5,3,0,0,317,318,3,4,2,0,318,
	319,5,4,0,0,319,321,1,0,0,0,320,314,1,0,0,0,320,315,1,0,0,0,321,322,1,0,
	0,0,322,323,5,9,0,0,323,41,1,0,0,0,324,325,5,28,0,0,325,326,3,4,2,0,326,
	327,5,9,0,0,327,43,1,0,0,0,328,335,5,3,0,0,329,331,3,4,2,0,330,332,5,6,
	0,0,331,330,1,0,0,0,331,332,1,0,0,0,332,334,1,0,0,0,333,329,1,0,0,0,334,
	337,1,0,0,0,335,333,1,0,0,0,335,336,1,0,0,0,336,338,1,0,0,0,337,335,1,0,
	0,0,338,341,5,4,0,0,339,341,3,4,2,0,340,328,1,0,0,0,340,339,1,0,0,0,341,
	45,1,0,0,0,342,343,5,33,0,0,343,350,5,1,0,0,344,345,5,29,0,0,345,346,3,
	4,2,0,346,347,5,9,0,0,347,351,1,0,0,0,348,349,5,30,0,0,349,351,5,9,0,0,
	350,344,1,0,0,0,350,348,1,0,0,0,351,47,1,0,0,0,39,51,59,66,80,84,88,103,
	107,112,121,127,135,141,150,156,163,176,183,193,201,210,217,225,234,255,
	259,264,273,277,281,290,293,297,305,320,331,335,340,350];

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
	public condition(): ConditionContext {
		return this.getTypedRuleContext(ConditionContext, 0) as ConditionContext;
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
	public arithmetic(): ArithmeticContext {
		return this.getTypedRuleContext(ArithmeticContext, 0) as ArithmeticContext;
	}
	public value(): ValueContext {
		return this.getTypedRuleContext(ValueContext, 0) as ValueContext;
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
	public value_list(): ValueContext[] {
		return this.getTypedRuleContexts(ValueContext) as ValueContext[];
	}
	public value(i: number): ValueContext {
		return this.getTypedRuleContext(ValueContext, i) as ValueContext;
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
