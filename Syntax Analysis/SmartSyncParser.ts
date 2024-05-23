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
	public static readonly RULE_arrayValue = 21;
	public static readonly RULE_arrayStm = 22;
	public static readonly literalNames: (string | null)[] = [ null, "'('", 
                                                            "','", "')'", 
                                                            "';'", "'RETURN'", 
                                                            "'[]'", "'SIZE'", 
                                                            "'['", "']'", 
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
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "line", "value", "declaration", "statements", "ifStm", "elses", 
		"else", "expression", "stringArithmetic", "stringAtom", "arithmetic", 
		"multExpr", "atom", "condition", "multConExpr", "atomCon", "assignments", 
		"funcReturn", "functions", "output", "arrayValue", "arrayStm",
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
			} while (((((_la - 5)) & ~0x1F) === 0 && ((1 << (_la - 5)) & 205521473) !== 0));
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
		let _la: number;
		try {
			this.state = 73;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 3, this._ctx) ) {
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
				this.match(SmartSyncParser.ID);
				this.state = 56;
				this.match(SmartSyncParser.T__0);
				this.state = 63;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1073742082) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 7) !== 0)) {
					{
					{
					this.state = 57;
					this.funcReturn();
					this.state = 59;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===2) {
						{
						this.state = 58;
						this.match(SmartSyncParser.T__1);
						}
					}

					}
					}
					this.state = 65;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 66;
				this.match(SmartSyncParser.T__2);
				this.state = 67;
				this.match(SmartSyncParser.T__3);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 68;
				this.output();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 69;
				this.match(SmartSyncParser.T__4);
				this.state = 70;
				this.funcReturn();
				this.state = 71;
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
	public value(): ValueContext {
		let localctx: ValueContext = new ValueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, SmartSyncParser.RULE_value);
		let _la: number;
		try {
			this.state = 102;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 75;
				this.match(SmartSyncParser.BOOL);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 76;
				this.match(SmartSyncParser.STRING);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 77;
				this.match(SmartSyncParser.NUMBER);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 78;
				this.match(SmartSyncParser.ID);
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
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 82;
				this.match(SmartSyncParser.ID);
				this.state = 83;
				this.match(SmartSyncParser.T__5);
				this.state = 84;
				this.match(SmartSyncParser.T__6);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 85;
				this.match(SmartSyncParser.ID);
				this.state = 86;
				this.match(SmartSyncParser.T__7);
				this.state = 87;
				this.value();
				this.state = 88;
				this.match(SmartSyncParser.T__8);
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 90;
				this.match(SmartSyncParser.ID);
				this.state = 91;
				this.match(SmartSyncParser.T__0);
				this.state = 98;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1073742082) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 7) !== 0)) {
					{
					{
					this.state = 92;
					this.funcReturn();
					this.state = 94;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===2) {
						{
						this.state = 93;
						this.match(SmartSyncParser.T__1);
						}
					}

					}
					}
					this.state = 100;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 101;
				this.match(SmartSyncParser.T__2);
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
			this.state = 132;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 104;
				this.match(SmartSyncParser.TYPE);
				this.state = 105;
				this.match(SmartSyncParser.ID);
				this.state = 106;
				this.match(SmartSyncParser.T__9);
				this.state = 107;
				this.expression();
				this.state = 108;
				this.match(SmartSyncParser.T__3);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 110;
				this.match(SmartSyncParser.TYPE);
				this.state = 111;
				this.match(SmartSyncParser.ID);
				this.state = 112;
				this.match(SmartSyncParser.T__5);
				this.state = 113;
				this.match(SmartSyncParser.T__9);
				this.state = 114;
				this.match(SmartSyncParser.T__7);
				this.state = 121;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 8)) & ~0x1F) === 0 && ((1 << (_la - 8)) & 121634817) !== 0)) {
					{
					{
					this.state = 115;
					this.arrayValue();
					this.state = 117;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===2) {
						{
						this.state = 116;
						this.match(SmartSyncParser.T__1);
						}
					}

					}
					}
					this.state = 123;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 124;
				this.match(SmartSyncParser.T__8);
				this.state = 125;
				this.match(SmartSyncParser.T__3);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 126;
				this.match(SmartSyncParser.TYPE);
				this.state = 127;
				this.match(SmartSyncParser.ID);
				this.state = 128;
				this.match(SmartSyncParser.T__5);
				this.state = 129;
				this.match(SmartSyncParser.T__9);
				this.state = 130;
				this.match(SmartSyncParser.T__5);
				this.state = 131;
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
	public statements(): StatementsContext {
		let localctx: StatementsContext = new StatementsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, SmartSyncParser.RULE_statements);
		let _la: number;
		try {
			this.state = 147;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 14:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 134;
				this.ifStm();
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 135;
				this.match(SmartSyncParser.T__10);
				this.state = 136;
				this.condition();
				this.state = 137;
				this.match(SmartSyncParser.T__11);
				this.state = 141;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 5)) & ~0x1F) === 0 && ((1 << (_la - 5)) & 205521473) !== 0)) {
					{
					{
					this.state = 138;
					this.line();
					}
					}
					this.state = 143;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 144;
				this.match(SmartSyncParser.T__12);
				}
				break;
			case 32:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 146;
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
			this.state = 149;
			this.match(SmartSyncParser.T__13);
			this.state = 150;
			this.condition();
			this.state = 151;
			this.match(SmartSyncParser.T__11);
			this.state = 155;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 5)) & ~0x1F) === 0 && ((1 << (_la - 5)) & 205521473) !== 0)) {
				{
				{
				this.state = 152;
				this.line();
				}
				}
				this.state = 157;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 158;
			this.match(SmartSyncParser.T__12);
			this.state = 161;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				{
				this.state = 159;
				this.elses();
				}
				break;
			case 2:
				{
				this.state = 160;
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
			this.state = 163;
			this.match(SmartSyncParser.T__14);
			this.state = 164;
			this.match(SmartSyncParser.T__13);
			this.state = 165;
			this.condition();
			this.state = 166;
			this.match(SmartSyncParser.T__11);
			this.state = 170;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 5)) & ~0x1F) === 0 && ((1 << (_la - 5)) & 205521473) !== 0)) {
				{
				{
				this.state = 167;
				this.line();
				}
				}
				this.state = 172;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 173;
			this.match(SmartSyncParser.T__12);
			this.state = 176;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				{
				this.state = 174;
				this.elses();
				}
				break;
			case 2:
				{
				this.state = 175;
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
			this.state = 178;
			this.match(SmartSyncParser.T__14);
			this.state = 179;
			this.match(SmartSyncParser.T__11);
			this.state = 183;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 5)) & ~0x1F) === 0 && ((1 << (_la - 5)) & 205521473) !== 0)) {
				{
				{
				this.state = 180;
				this.line();
				}
				}
				this.state = 185;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 186;
			this.match(SmartSyncParser.T__12);
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
			this.state = 196;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 18, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 188;
				this.arithmetic();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 189;
				this.stringArithmetic();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 190;
				this.value();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 191;
				this.match(SmartSyncParser.T__0);
				this.state = 192;
				this.expression();
				this.state = 193;
				this.match(SmartSyncParser.T__2);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 195;
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
			this.state = 198;
			this.stringAtom();
			this.state = 203;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===16) {
				{
				{
				this.state = 199;
				this.match(SmartSyncParser.T__15);
				this.state = 200;
				this.stringAtom();
				}
				}
				this.state = 205;
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
			this.state = 206;
			_la = this._input.LA(1);
			if(!(_la===32 || _la===33)) {
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
			this.state = 208;
			this.multExpr();
			this.state = 213;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===16 || _la===17) {
				{
				{
				this.state = 209;
				_la = this._input.LA(1);
				if(!(_la===16 || _la===17)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 210;
				this.multExpr();
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
	public multExpr(): MultExprContext {
		let localctx: MultExprContext = new MultExprContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, SmartSyncParser.RULE_multExpr);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 216;
			this.atom();
			this.state = 221;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===18 || _la===19) {
				{
				{
				this.state = 217;
				_la = this._input.LA(1);
				if(!(_la===18 || _la===19)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 218;
				this.atom();
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
	public atom(): AtomContext {
		let localctx: AtomContext = new AtomContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, SmartSyncParser.RULE_atom);
		try {
			this.state = 229;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 30:
			case 32:
			case 33:
			case 34:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 224;
				this.value();
				}
				break;
			case 1:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 225;
				this.match(SmartSyncParser.T__0);
				this.state = 226;
				this.arithmetic();
				this.state = 227;
				this.match(SmartSyncParser.T__2);
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
			this.state = 231;
			this.multConExpr();
			this.state = 236;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===20 || _la===21) {
				{
				{
				this.state = 232;
				_la = this._input.LA(1);
				if(!(_la===20 || _la===21)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 233;
				this.multConExpr();
				}
				}
				this.state = 238;
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
			this.state = 239;
			this.atomCon();
			this.state = 244;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 62914560) !== 0)) {
				{
				{
				this.state = 240;
				_la = this._input.LA(1);
				if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 62914560) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 241;
				this.atomCon();
				}
				}
				this.state = 246;
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
			this.state = 253;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 247;
				this.arithmetic();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 248;
				this.value();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 249;
				this.match(SmartSyncParser.T__0);
				this.state = 250;
				this.condition();
				this.state = 251;
				this.match(SmartSyncParser.T__2);
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
			this.state = 288;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 28, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 255;
				this.match(SmartSyncParser.ID);
				this.state = 256;
				this.match(SmartSyncParser.T__9);
				this.state = 257;
				this.expression();
				this.state = 258;
				this.match(SmartSyncParser.T__3);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 260;
				this.match(SmartSyncParser.ID);
				this.state = 261;
				this.match(SmartSyncParser.T__7);
				this.state = 262;
				this.value();
				this.state = 263;
				this.match(SmartSyncParser.T__8);
				this.state = 264;
				this.match(SmartSyncParser.T__9);
				this.state = 265;
				this.expression();
				this.state = 266;
				this.match(SmartSyncParser.T__3);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 268;
				this.match(SmartSyncParser.ID);
				this.state = 269;
				this.match(SmartSyncParser.T__5);
				this.state = 270;
				this.match(SmartSyncParser.T__9);
				this.state = 271;
				this.match(SmartSyncParser.T__7);
				this.state = 278;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 8)) & ~0x1F) === 0 && ((1 << (_la - 8)) & 121634817) !== 0)) {
					{
					{
					this.state = 272;
					this.arrayValue();
					this.state = 274;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===2) {
						{
						this.state = 273;
						this.match(SmartSyncParser.T__1);
						}
					}

					}
					}
					this.state = 280;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 281;
				this.match(SmartSyncParser.T__8);
				this.state = 282;
				this.match(SmartSyncParser.T__3);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 283;
				this.match(SmartSyncParser.ID);
				this.state = 284;
				this.match(SmartSyncParser.T__5);
				this.state = 285;
				this.match(SmartSyncParser.T__9);
				this.state = 286;
				this.match(SmartSyncParser.T__5);
				this.state = 287;
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
	public funcReturn(): FuncReturnContext {
		let localctx: FuncReturnContext = new FuncReturnContext(this, this._ctx, this.state);
		this.enterRule(localctx, 36, SmartSyncParser.RULE_funcReturn);
		let _la: number;
		try {
			this.state = 305;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 31, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 290;
				this.value();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 291;
				this.match(SmartSyncParser.ID);
				this.state = 292;
				this.match(SmartSyncParser.T__5);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 293;
				this.arithmetic();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 294;
				this.match(SmartSyncParser.T__7);
				this.state = 299;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 295;
					this.arrayValue();
					this.state = 297;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===2) {
						{
						this.state = 296;
						this.match(SmartSyncParser.T__1);
						}
					}

					}
					}
					this.state = 301;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (((((_la - 8)) & ~0x1F) === 0 && ((1 << (_la - 8)) & 121634817) !== 0));
				this.state = 303;
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
	public functions(): FunctionsContext {
		let localctx: FunctionsContext = new FunctionsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 38, SmartSyncParser.RULE_functions);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 307;
			this.match(SmartSyncParser.TYPE);
			this.state = 308;
			this.match(SmartSyncParser.T__25);
			this.state = 309;
			this.match(SmartSyncParser.ID);
			this.state = 310;
			this.match(SmartSyncParser.T__0);
			this.state = 321;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===31) {
				{
				{
				this.state = 311;
				this.match(SmartSyncParser.TYPE);
				this.state = 312;
				this.match(SmartSyncParser.ID);
				this.state = 314;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===6) {
					{
					this.state = 313;
					this.match(SmartSyncParser.T__5);
					}
				}

				this.state = 317;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===2) {
					{
					this.state = 316;
					this.match(SmartSyncParser.T__1);
					}
				}

				}
				}
				this.state = 323;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 324;
			this.match(SmartSyncParser.T__2);
			this.state = 325;
			this.match(SmartSyncParser.T__11);
			this.state = 329;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 5)) & ~0x1F) === 0 && ((1 << (_la - 5)) & 205521473) !== 0)) {
				{
				{
				this.state = 326;
				this.line();
				}
				}
				this.state = 331;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 332;
			this.match(SmartSyncParser.T__12);
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
			this.state = 334;
			this.match(SmartSyncParser.T__26);
			this.state = 341;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 36, this._ctx) ) {
			case 1:
				{
				this.state = 335;
				this.value();
				}
				break;
			case 2:
				{
				this.state = 336;
				this.match(SmartSyncParser.ID);
				this.state = 337;
				this.match(SmartSyncParser.T__7);
				this.state = 338;
				this.value();
				this.state = 339;
				this.match(SmartSyncParser.T__8);
				}
				break;
			}
			this.state = 343;
			this.match(SmartSyncParser.T__3);
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
		let _la: number;
		try {
			this.state = 357;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 8:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 345;
				this.match(SmartSyncParser.T__7);
				this.state = 352;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 30)) & ~0x1F) === 0 && ((1 << (_la - 30)) & 29) !== 0)) {
					{
					{
					this.state = 346;
					this.value();
					this.state = 348;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===2) {
						{
						this.state = 347;
						this.match(SmartSyncParser.T__1);
						}
					}

					}
					}
					this.state = 354;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 355;
				this.match(SmartSyncParser.T__8);
				}
				break;
			case 30:
			case 32:
			case 33:
			case 34:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 356;
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
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 359;
			this.match(SmartSyncParser.ID);
			this.state = 360;
			this.match(SmartSyncParser.T__5);
			this.state = 367;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 28:
				{
				this.state = 361;
				this.match(SmartSyncParser.T__27);
				this.state = 362;
				this.value();
				this.state = 363;
				this.match(SmartSyncParser.T__3);
				}
				break;
			case 29:
				{
				this.state = 365;
				this.match(SmartSyncParser.T__28);
				this.state = 366;
				this.match(SmartSyncParser.T__3);
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

	public static readonly _serializedATN: number[] = [4,1,39,370,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,1,0,4,0,48,8,0,11,
	0,12,0,49,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,60,8,1,5,1,62,8,1,10,1,12,
	1,65,9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,74,8,1,1,2,1,2,1,2,1,2,1,2,3,2,
	81,8,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,95,8,2,5,2,97,
	8,2,10,2,12,2,100,9,2,1,2,3,2,103,8,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,
	3,1,3,1,3,1,3,1,3,3,3,118,8,3,5,3,120,8,3,10,3,12,3,123,9,3,1,3,1,3,1,3,
	1,3,1,3,1,3,1,3,1,3,3,3,133,8,3,1,4,1,4,1,4,1,4,1,4,5,4,140,8,4,10,4,12,
	4,143,9,4,1,4,1,4,1,4,3,4,148,8,4,1,5,1,5,1,5,1,5,5,5,154,8,5,10,5,12,5,
	157,9,5,1,5,1,5,1,5,3,5,162,8,5,1,6,1,6,1,6,1,6,1,6,5,6,169,8,6,10,6,12,
	6,172,9,6,1,6,1,6,1,6,3,6,177,8,6,1,7,1,7,1,7,5,7,182,8,7,10,7,12,7,185,
	9,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,197,8,8,1,9,1,9,1,9,5,9,
	202,8,9,10,9,12,9,205,9,9,1,10,1,10,1,11,1,11,1,11,5,11,212,8,11,10,11,
	12,11,215,9,11,1,12,1,12,1,12,5,12,220,8,12,10,12,12,12,223,9,12,1,13,1,
	13,1,13,1,13,1,13,3,13,230,8,13,1,14,1,14,1,14,5,14,235,8,14,10,14,12,14,
	238,9,14,1,15,1,15,1,15,5,15,243,8,15,10,15,12,15,246,9,15,1,16,1,16,1,
	16,1,16,1,16,1,16,3,16,254,8,16,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,
	1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,3,17,275,8,17,5,
	17,277,8,17,10,17,12,17,280,9,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,3,17,
	289,8,17,1,18,1,18,1,18,1,18,1,18,1,18,1,18,3,18,298,8,18,4,18,300,8,18,
	11,18,12,18,301,1,18,1,18,3,18,306,8,18,1,19,1,19,1,19,1,19,1,19,1,19,1,
	19,3,19,315,8,19,1,19,3,19,318,8,19,5,19,320,8,19,10,19,12,19,323,9,19,
	1,19,1,19,1,19,5,19,328,8,19,10,19,12,19,331,9,19,1,19,1,19,1,20,1,20,1,
	20,1,20,1,20,1,20,1,20,3,20,342,8,20,1,20,1,20,1,21,1,21,1,21,3,21,349,
	8,21,5,21,351,8,21,10,21,12,21,354,9,21,1,21,1,21,3,21,358,8,21,1,22,1,
	22,1,22,1,22,1,22,1,22,1,22,1,22,3,22,368,8,22,1,22,0,0,23,0,2,4,6,8,10,
	12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,0,5,1,0,32,33,1,0,16,
	17,1,0,18,19,1,0,20,21,1,0,22,25,409,0,47,1,0,0,0,2,73,1,0,0,0,4,102,1,
	0,0,0,6,132,1,0,0,0,8,147,1,0,0,0,10,149,1,0,0,0,12,163,1,0,0,0,14,178,
	1,0,0,0,16,196,1,0,0,0,18,198,1,0,0,0,20,206,1,0,0,0,22,208,1,0,0,0,24,
	216,1,0,0,0,26,229,1,0,0,0,28,231,1,0,0,0,30,239,1,0,0,0,32,253,1,0,0,0,
	34,288,1,0,0,0,36,305,1,0,0,0,38,307,1,0,0,0,40,334,1,0,0,0,42,357,1,0,
	0,0,44,359,1,0,0,0,46,48,3,2,1,0,47,46,1,0,0,0,48,49,1,0,0,0,49,47,1,0,
	0,0,49,50,1,0,0,0,50,1,1,0,0,0,51,74,3,6,3,0,52,74,3,8,4,0,53,74,3,34,17,
	0,54,74,3,38,19,0,55,56,5,32,0,0,56,63,5,1,0,0,57,59,3,36,18,0,58,60,5,
	2,0,0,59,58,1,0,0,0,59,60,1,0,0,0,60,62,1,0,0,0,61,57,1,0,0,0,62,65,1,0,
	0,0,63,61,1,0,0,0,63,64,1,0,0,0,64,66,1,0,0,0,65,63,1,0,0,0,66,67,5,3,0,
	0,67,74,5,4,0,0,68,74,3,40,20,0,69,70,5,5,0,0,70,71,3,36,18,0,71,72,5,4,
	0,0,72,74,1,0,0,0,73,51,1,0,0,0,73,52,1,0,0,0,73,53,1,0,0,0,73,54,1,0,0,
	0,73,55,1,0,0,0,73,68,1,0,0,0,73,69,1,0,0,0,74,3,1,0,0,0,75,103,5,30,0,
	0,76,103,5,33,0,0,77,103,5,34,0,0,78,80,5,32,0,0,79,81,5,6,0,0,80,79,1,
	0,0,0,80,81,1,0,0,0,81,103,1,0,0,0,82,83,5,32,0,0,83,84,5,6,0,0,84,103,
	5,7,0,0,85,86,5,32,0,0,86,87,5,8,0,0,87,88,3,4,2,0,88,89,5,9,0,0,89,103,
	1,0,0,0,90,91,5,32,0,0,91,98,5,1,0,0,92,94,3,36,18,0,93,95,5,2,0,0,94,93,
	1,0,0,0,94,95,1,0,0,0,95,97,1,0,0,0,96,92,1,0,0,0,97,100,1,0,0,0,98,96,
	1,0,0,0,98,99,1,0,0,0,99,101,1,0,0,0,100,98,1,0,0,0,101,103,5,3,0,0,102,
	75,1,0,0,0,102,76,1,0,0,0,102,77,1,0,0,0,102,78,1,0,0,0,102,82,1,0,0,0,
	102,85,1,0,0,0,102,90,1,0,0,0,103,5,1,0,0,0,104,105,5,31,0,0,105,106,5,
	32,0,0,106,107,5,10,0,0,107,108,3,16,8,0,108,109,5,4,0,0,109,133,1,0,0,
	0,110,111,5,31,0,0,111,112,5,32,0,0,112,113,5,6,0,0,113,114,5,10,0,0,114,
	121,5,8,0,0,115,117,3,42,21,0,116,118,5,2,0,0,117,116,1,0,0,0,117,118,1,
	0,0,0,118,120,1,0,0,0,119,115,1,0,0,0,120,123,1,0,0,0,121,119,1,0,0,0,121,
	122,1,0,0,0,122,124,1,0,0,0,123,121,1,0,0,0,124,125,5,9,0,0,125,133,5,4,
	0,0,126,127,5,31,0,0,127,128,5,32,0,0,128,129,5,6,0,0,129,130,5,10,0,0,
	130,131,5,6,0,0,131,133,5,4,0,0,132,104,1,0,0,0,132,110,1,0,0,0,132,126,
	1,0,0,0,133,7,1,0,0,0,134,148,3,10,5,0,135,136,5,11,0,0,136,137,3,28,14,
	0,137,141,5,12,0,0,138,140,3,2,1,0,139,138,1,0,0,0,140,143,1,0,0,0,141,
	139,1,0,0,0,141,142,1,0,0,0,142,144,1,0,0,0,143,141,1,0,0,0,144,145,5,13,
	0,0,145,148,1,0,0,0,146,148,3,44,22,0,147,134,1,0,0,0,147,135,1,0,0,0,147,
	146,1,0,0,0,148,9,1,0,0,0,149,150,5,14,0,0,150,151,3,28,14,0,151,155,5,
	12,0,0,152,154,3,2,1,0,153,152,1,0,0,0,154,157,1,0,0,0,155,153,1,0,0,0,
	155,156,1,0,0,0,156,158,1,0,0,0,157,155,1,0,0,0,158,161,5,13,0,0,159,162,
	3,12,6,0,160,162,3,14,7,0,161,159,1,0,0,0,161,160,1,0,0,0,161,162,1,0,0,
	0,162,11,1,0,0,0,163,164,5,15,0,0,164,165,5,14,0,0,165,166,3,28,14,0,166,
	170,5,12,0,0,167,169,3,2,1,0,168,167,1,0,0,0,169,172,1,0,0,0,170,168,1,
	0,0,0,170,171,1,0,0,0,171,173,1,0,0,0,172,170,1,0,0,0,173,176,5,13,0,0,
	174,177,3,12,6,0,175,177,3,14,7,0,176,174,1,0,0,0,176,175,1,0,0,0,176,177,
	1,0,0,0,177,13,1,0,0,0,178,179,5,15,0,0,179,183,5,12,0,0,180,182,3,2,1,
	0,181,180,1,0,0,0,182,185,1,0,0,0,183,181,1,0,0,0,183,184,1,0,0,0,184,186,
	1,0,0,0,185,183,1,0,0,0,186,187,5,13,0,0,187,15,1,0,0,0,188,197,3,22,11,
	0,189,197,3,18,9,0,190,197,3,4,2,0,191,192,5,1,0,0,192,193,3,16,8,0,193,
	194,5,3,0,0,194,197,1,0,0,0,195,197,3,28,14,0,196,188,1,0,0,0,196,189,1,
	0,0,0,196,190,1,0,0,0,196,191,1,0,0,0,196,195,1,0,0,0,197,17,1,0,0,0,198,
	203,3,20,10,0,199,200,5,16,0,0,200,202,3,20,10,0,201,199,1,0,0,0,202,205,
	1,0,0,0,203,201,1,0,0,0,203,204,1,0,0,0,204,19,1,0,0,0,205,203,1,0,0,0,
	206,207,7,0,0,0,207,21,1,0,0,0,208,213,3,24,12,0,209,210,7,1,0,0,210,212,
	3,24,12,0,211,209,1,0,0,0,212,215,1,0,0,0,213,211,1,0,0,0,213,214,1,0,0,
	0,214,23,1,0,0,0,215,213,1,0,0,0,216,221,3,26,13,0,217,218,7,2,0,0,218,
	220,3,26,13,0,219,217,1,0,0,0,220,223,1,0,0,0,221,219,1,0,0,0,221,222,1,
	0,0,0,222,25,1,0,0,0,223,221,1,0,0,0,224,230,3,4,2,0,225,226,5,1,0,0,226,
	227,3,22,11,0,227,228,5,3,0,0,228,230,1,0,0,0,229,224,1,0,0,0,229,225,1,
	0,0,0,230,27,1,0,0,0,231,236,3,30,15,0,232,233,7,3,0,0,233,235,3,30,15,
	0,234,232,1,0,0,0,235,238,1,0,0,0,236,234,1,0,0,0,236,237,1,0,0,0,237,29,
	1,0,0,0,238,236,1,0,0,0,239,244,3,32,16,0,240,241,7,4,0,0,241,243,3,32,
	16,0,242,240,1,0,0,0,243,246,1,0,0,0,244,242,1,0,0,0,244,245,1,0,0,0,245,
	31,1,0,0,0,246,244,1,0,0,0,247,254,3,22,11,0,248,254,3,4,2,0,249,250,5,
	1,0,0,250,251,3,28,14,0,251,252,5,3,0,0,252,254,1,0,0,0,253,247,1,0,0,0,
	253,248,1,0,0,0,253,249,1,0,0,0,254,33,1,0,0,0,255,256,5,32,0,0,256,257,
	5,10,0,0,257,258,3,16,8,0,258,259,5,4,0,0,259,289,1,0,0,0,260,261,5,32,
	0,0,261,262,5,8,0,0,262,263,3,4,2,0,263,264,5,9,0,0,264,265,5,10,0,0,265,
	266,3,16,8,0,266,267,5,4,0,0,267,289,1,0,0,0,268,269,5,32,0,0,269,270,5,
	6,0,0,270,271,5,10,0,0,271,278,5,8,0,0,272,274,3,42,21,0,273,275,5,2,0,
	0,274,273,1,0,0,0,274,275,1,0,0,0,275,277,1,0,0,0,276,272,1,0,0,0,277,280,
	1,0,0,0,278,276,1,0,0,0,278,279,1,0,0,0,279,281,1,0,0,0,280,278,1,0,0,0,
	281,282,5,9,0,0,282,289,5,4,0,0,283,284,5,32,0,0,284,285,5,6,0,0,285,286,
	5,10,0,0,286,287,5,6,0,0,287,289,5,4,0,0,288,255,1,0,0,0,288,260,1,0,0,
	0,288,268,1,0,0,0,288,283,1,0,0,0,289,35,1,0,0,0,290,306,3,4,2,0,291,292,
	5,32,0,0,292,306,5,6,0,0,293,306,3,22,11,0,294,299,5,8,0,0,295,297,3,42,
	21,0,296,298,5,2,0,0,297,296,1,0,0,0,297,298,1,0,0,0,298,300,1,0,0,0,299,
	295,1,0,0,0,300,301,1,0,0,0,301,299,1,0,0,0,301,302,1,0,0,0,302,303,1,0,
	0,0,303,304,5,9,0,0,304,306,1,0,0,0,305,290,1,0,0,0,305,291,1,0,0,0,305,
	293,1,0,0,0,305,294,1,0,0,0,306,37,1,0,0,0,307,308,5,31,0,0,308,309,5,26,
	0,0,309,310,5,32,0,0,310,321,5,1,0,0,311,312,5,31,0,0,312,314,5,32,0,0,
	313,315,5,6,0,0,314,313,1,0,0,0,314,315,1,0,0,0,315,317,1,0,0,0,316,318,
	5,2,0,0,317,316,1,0,0,0,317,318,1,0,0,0,318,320,1,0,0,0,319,311,1,0,0,0,
	320,323,1,0,0,0,321,319,1,0,0,0,321,322,1,0,0,0,322,324,1,0,0,0,323,321,
	1,0,0,0,324,325,5,3,0,0,325,329,5,12,0,0,326,328,3,2,1,0,327,326,1,0,0,
	0,328,331,1,0,0,0,329,327,1,0,0,0,329,330,1,0,0,0,330,332,1,0,0,0,331,329,
	1,0,0,0,332,333,5,13,0,0,333,39,1,0,0,0,334,341,5,27,0,0,335,342,3,4,2,
	0,336,337,5,32,0,0,337,338,5,8,0,0,338,339,3,4,2,0,339,340,5,9,0,0,340,
	342,1,0,0,0,341,335,1,0,0,0,341,336,1,0,0,0,342,343,1,0,0,0,343,344,5,4,
	0,0,344,41,1,0,0,0,345,352,5,8,0,0,346,348,3,4,2,0,347,349,5,2,0,0,348,
	347,1,0,0,0,348,349,1,0,0,0,349,351,1,0,0,0,350,346,1,0,0,0,351,354,1,0,
	0,0,352,350,1,0,0,0,352,353,1,0,0,0,353,355,1,0,0,0,354,352,1,0,0,0,355,
	358,5,9,0,0,356,358,3,4,2,0,357,345,1,0,0,0,357,356,1,0,0,0,358,43,1,0,
	0,0,359,360,5,32,0,0,360,367,5,6,0,0,361,362,5,28,0,0,362,363,3,4,2,0,363,
	364,5,4,0,0,364,368,1,0,0,0,365,366,5,29,0,0,366,368,5,4,0,0,367,361,1,
	0,0,0,367,365,1,0,0,0,368,45,1,0,0,0,41,49,59,63,73,80,94,98,102,117,121,
	132,141,147,155,161,170,176,183,196,203,213,221,229,236,244,253,274,278,
	288,297,301,305,314,317,321,329,341,348,352,357,367];

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
	public ID(): TerminalNode {
		return this.getToken(SmartSyncParser.ID, 0);
	}
	public funcReturn_list(): FuncReturnContext[] {
		return this.getTypedRuleContexts(FuncReturnContext) as FuncReturnContext[];
	}
	public funcReturn(i: number): FuncReturnContext {
		return this.getTypedRuleContext(FuncReturnContext, i) as FuncReturnContext;
	}
	public output(): OutputContext {
		return this.getTypedRuleContext(OutputContext, 0) as OutputContext;
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
	public value(): ValueContext {
		return this.getTypedRuleContext(ValueContext, 0) as ValueContext;
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
