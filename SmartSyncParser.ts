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
	public static readonly RULE_atomString = 10;
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
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "line", "value", "declaration", "statements", "ifStm", "elses", 
		"arithmeticValue", "expression", "stringArithmetic", "atomString", "arithmetic", 
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
			} while (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & 100663305) !== 0));
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
				this.state = 69;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 68;
					this.match(SmartSyncParser.DIGIT);
					}
					}
					this.state = 71;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===39);
				this.state = 73;
				this.match(SmartSyncParser.T__3);
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 74;
				this.match(SmartSyncParser.ID);
				this.state = 75;
				this.match(SmartSyncParser.T__4);
				this.state = 81;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===3 || _la===5 || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & 29) !== 0)) {
					{
					{
					this.state = 76;
					this.funcReturn();
					this.state = 77;
					this.match(SmartSyncParser.T__5);
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
				while (_la===3 || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & 29) !== 0)) {
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
				while (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & 100663305) !== 0)) {
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
			case 36:
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
			while (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & 100663305) !== 0)) {
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
			this.match(SmartSyncParser.T__13);
			this.state = 146;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				{
				this.state = 136;
				this.elses();
				}
				break;
			case 2:
				{
				this.state = 137;
				this.match(SmartSyncParser.T__14);
				this.state = 138;
				this.match(SmartSyncParser.T__10);
				this.state = 142;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & 100663305) !== 0)) {
					{
					{
					this.state = 139;
					this.line();
					}
					}
					this.state = 144;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 145;
				this.match(SmartSyncParser.T__13);
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
			this.state = 148;
			this.match(SmartSyncParser.T__14);
			this.state = 149;
			this.match(SmartSyncParser.T__12);
			this.state = 150;
			this.condition();
			this.state = 151;
			this.match(SmartSyncParser.T__10);
			this.state = 155;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & 100663305) !== 0)) {
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
			this.match(SmartSyncParser.T__13);
			this.state = 169;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				{
				this.state = 159;
				this.elses();
				}
				break;
			case 2:
				{
				this.state = 160;
				this.match(SmartSyncParser.T__14);
				this.state = 161;
				this.match(SmartSyncParser.T__10);
				this.state = 165;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & 100663305) !== 0)) {
					{
					{
					this.state = 162;
					this.line();
					}
					}
					this.state = 167;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 168;
				this.match(SmartSyncParser.T__13);
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
			this.state = 171;
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
			this.state = 175;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 173;
				this.stringArithmetic();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 174;
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
		this.enterRule(localctx, 18, SmartSyncParser.RULE_stringArithmetic);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 177;
			_la = this._input.LA(1);
			if(!(_la===36 || _la===37)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 182;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===16) {
				{
				{
				this.state = 178;
				this.match(SmartSyncParser.T__15);
				this.state = 179;
				_la = this._input.LA(1);
				if(!(_la===36 || _la===37)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				}
				this.state = 184;
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
		this.enterRule(localctx, 20, SmartSyncParser.RULE_atomString);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 185;
			_la = this._input.LA(1);
			if(!(_la===36 || _la===37)) {
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
			this.state = 187;
			this.multExpr();
			this.state = 192;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===16 || _la===17) {
				{
				{
				this.state = 188;
				_la = this._input.LA(1);
				if(!(_la===16 || _la===17)) {
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
		this.enterRule(localctx, 24, SmartSyncParser.RULE_multExpr);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 195;
			this.atom();
			this.state = 200;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===18 || _la===19) {
				{
				{
				this.state = 196;
				_la = this._input.LA(1);
				if(!(_la===18 || _la===19)) {
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
		this.enterRule(localctx, 26, SmartSyncParser.RULE_atom);
		try {
			this.state = 209;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 38:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 203;
				this.match(SmartSyncParser.NUMBER);
				}
				break;
			case 36:
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
	public condition(): ConditionContext {
		let localctx: ConditionContext = new ConditionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, SmartSyncParser.RULE_condition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 211;
			this.multConExpr();
			this.state = 216;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===20 || _la===21) {
				{
				{
				this.state = 212;
				_la = this._input.LA(1);
				if(!(_la===20 || _la===21)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 213;
				this.multConExpr();
				}
				}
				this.state = 218;
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
			this.state = 219;
			this.atomCon();
			this.state = 224;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 62914560) !== 0)) {
				{
				{
				this.state = 220;
				_la = this._input.LA(1);
				if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 62914560) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 221;
				this.atomCon();
				}
				}
				this.state = 226;
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
			this.state = 233;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 38:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 227;
				this.match(SmartSyncParser.NUMBER);
				}
				break;
			case 36:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 228;
				this.match(SmartSyncParser.ID);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 229;
				this.match(SmartSyncParser.T__4);
				this.state = 230;
				this.condition();
				this.state = 231;
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
			this.state = 267;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 27, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 235;
				this.match(SmartSyncParser.ID);
				this.state = 236;
				this.match(SmartSyncParser.T__7);
				this.state = 237;
				this.expression();
				this.state = 238;
				this.match(SmartSyncParser.T__8);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 240;
				this.match(SmartSyncParser.ID);
				this.state = 241;
				this.match(SmartSyncParser.T__2);
				this.state = 243;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 242;
					this.match(SmartSyncParser.DIGIT);
					}
					}
					this.state = 245;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===39);
				this.state = 247;
				this.match(SmartSyncParser.T__3);
				this.state = 248;
				this.match(SmartSyncParser.T__7);
				this.state = 249;
				this.expression();
				this.state = 250;
				this.match(SmartSyncParser.T__8);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 252;
				this.match(SmartSyncParser.ID);
				this.state = 253;
				this.match(SmartSyncParser.T__0);
				this.state = 254;
				this.match(SmartSyncParser.T__7);
				this.state = 255;
				this.match(SmartSyncParser.T__2);
				this.state = 262;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===3 || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & 29) !== 0)) {
					{
					{
					this.state = 256;
					this.arrayValue();
					this.state = 258;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===6) {
						{
						this.state = 257;
						this.match(SmartSyncParser.T__5);
						}
					}

					}
					}
					this.state = 264;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 265;
				this.match(SmartSyncParser.T__3);
				this.state = 266;
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
			this.state = 286;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 31, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 269;
				this.value();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 270;
				this.match(SmartSyncParser.ID);
				this.state = 272;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===1) {
					{
					this.state = 271;
					this.match(SmartSyncParser.T__0);
					}
				}

				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 274;
				this.arithmetic();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 275;
				this.match(SmartSyncParser.T__2);
				this.state = 282;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===3 || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & 29) !== 0)) {
					{
					{
					this.state = 276;
					this.arrayValue();
					this.state = 278;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===6) {
						{
						this.state = 277;
						this.match(SmartSyncParser.T__5);
						}
					}

					}
					}
					this.state = 284;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 285;
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
			this.state = 288;
			this.match(SmartSyncParser.TYPE);
			this.state = 289;
			this.match(SmartSyncParser.T__25);
			this.state = 290;
			this.match(SmartSyncParser.ID);
			this.state = 291;
			this.match(SmartSyncParser.T__4);
			this.state = 302;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===35) {
				{
				{
				this.state = 292;
				this.match(SmartSyncParser.TYPE);
				this.state = 293;
				this.match(SmartSyncParser.ID);
				this.state = 295;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===1) {
					{
					this.state = 294;
					this.match(SmartSyncParser.T__0);
					}
				}

				this.state = 298;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===6) {
					{
					this.state = 297;
					this.match(SmartSyncParser.T__5);
					}
				}

				}
				}
				this.state = 304;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 305;
			this.match(SmartSyncParser.T__6);
			this.state = 306;
			this.match(SmartSyncParser.T__10);
			this.state = 310;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & 100663305) !== 0)) {
				{
				{
				this.state = 307;
				this.line();
				}
				}
				this.state = 312;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 313;
			this.match(SmartSyncParser.T__8);
			this.state = 314;
			this.match(SmartSyncParser.T__26);
			this.state = 315;
			this.funcReturn();
			this.state = 316;
			this.match(SmartSyncParser.T__27);
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
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 318;
			this.match(SmartSyncParser.T__28);
			this.state = 324;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 37, this._ctx) ) {
			case 1:
				{
				this.state = 319;
				this.value();
				}
				break;
			case 2:
				{
				this.state = 320;
				this.match(SmartSyncParser.ID);
				this.state = 322;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===1) {
					{
					this.state = 321;
					this.match(SmartSyncParser.T__0);
					}
				}

				}
				break;
			}
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
	public delay(): DelayContext {
		let localctx: DelayContext = new DelayContext(this, this._ctx, this.state);
		this.enterRule(localctx, 42, SmartSyncParser.RULE_delay);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 328;
			this.match(SmartSyncParser.T__29);
			this.state = 330;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 329;
				this.match(SmartSyncParser.DIGIT);
				}
				}
				this.state = 332;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===39);
			this.state = 334;
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
			this.state = 341;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 3:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 336;
				this.match(SmartSyncParser.T__2);
				this.state = 337;
				this.value();
				this.state = 338;
				this.match(SmartSyncParser.T__3);
				}
				break;
			case 34:
			case 36:
			case 37:
			case 38:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 340;
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
		let _la: number;
		try {
			this.state = 361;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 42, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 343;
				this.match(SmartSyncParser.ID);
				this.state = 344;
				this.match(SmartSyncParser.T__2);
				this.state = 346;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 345;
					this.match(SmartSyncParser.DIGIT);
					}
					}
					this.state = 348;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===39);
				this.state = 350;
				this.match(SmartSyncParser.T__3);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 351;
				this.match(SmartSyncParser.ID);
				this.state = 352;
				this.match(SmartSyncParser.T__0);
				this.state = 359;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 31:
					{
					this.state = 353;
					this.match(SmartSyncParser.T__30);
					this.state = 354;
					this.value();
					this.state = 355;
					this.match(SmartSyncParser.T__8);
					}
					break;
				case 32:
					{
					this.state = 357;
					this.match(SmartSyncParser.T__31);
					}
					break;
				case 33:
					{
					this.state = 358;
					this.match(SmartSyncParser.T__32);
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

	public static readonly _serializedATN: number[] = [4,1,43,364,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,1,0,4,
	0,50,8,0,11,0,12,0,51,1,1,1,1,1,1,1,1,3,1,58,8,1,1,2,1,2,1,2,1,2,1,2,1,
	2,1,2,1,2,1,2,1,2,4,2,70,8,2,11,2,12,2,71,1,2,1,2,1,2,1,2,1,2,1,2,5,2,80,
	8,2,10,2,12,2,83,9,2,1,2,3,2,86,8,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,
	1,3,1,3,1,3,1,3,3,3,101,8,3,5,3,103,8,3,10,3,12,3,106,9,3,1,3,1,3,3,3,110,
	8,3,1,4,1,4,1,4,1,4,1,4,5,4,117,8,4,10,4,12,4,120,9,4,1,4,1,4,1,4,3,4,125,
	8,4,1,5,1,5,1,5,1,5,5,5,131,8,5,10,5,12,5,134,9,5,1,5,1,5,1,5,1,5,1,5,5,
	5,141,8,5,10,5,12,5,144,9,5,1,5,3,5,147,8,5,1,6,1,6,1,6,1,6,1,6,5,6,154,
	8,6,10,6,12,6,157,9,6,1,6,1,6,1,6,1,6,1,6,5,6,164,8,6,10,6,12,6,167,9,6,
	1,6,3,6,170,8,6,1,7,1,7,1,8,1,8,3,8,176,8,8,1,9,1,9,1,9,5,9,181,8,9,10,
	9,12,9,184,9,9,1,10,1,10,1,11,1,11,1,11,5,11,191,8,11,10,11,12,11,194,9,
	11,1,12,1,12,1,12,5,12,199,8,12,10,12,12,12,202,9,12,1,13,1,13,1,13,1,13,
	1,13,1,13,3,13,210,8,13,1,14,1,14,1,14,5,14,215,8,14,10,14,12,14,218,9,
	14,1,15,1,15,1,15,5,15,223,8,15,10,15,12,15,226,9,15,1,16,1,16,1,16,1,16,
	1,16,1,16,3,16,234,8,16,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,4,17,244,
	8,17,11,17,12,17,245,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,
	1,17,3,17,259,8,17,5,17,261,8,17,10,17,12,17,264,9,17,1,17,1,17,3,17,268,
	8,17,1,18,1,18,1,18,3,18,273,8,18,1,18,1,18,1,18,1,18,3,18,279,8,18,5,18,
	281,8,18,10,18,12,18,284,9,18,1,18,3,18,287,8,18,1,19,1,19,1,19,1,19,1,
	19,1,19,1,19,3,19,296,8,19,1,19,3,19,299,8,19,5,19,301,8,19,10,19,12,19,
	304,9,19,1,19,1,19,1,19,5,19,309,8,19,10,19,12,19,312,9,19,1,19,1,19,1,
	19,1,19,1,19,1,20,1,20,1,20,1,20,3,20,323,8,20,3,20,325,8,20,1,20,1,20,
	1,21,1,21,4,21,331,8,21,11,21,12,21,332,1,21,1,21,1,22,1,22,1,22,1,22,1,
	22,3,22,342,8,22,1,23,1,23,1,23,4,23,347,8,23,11,23,12,23,348,1,23,1,23,
	1,23,1,23,1,23,1,23,1,23,1,23,1,23,3,23,360,8,23,3,23,362,8,23,1,23,0,0,
	24,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,0,
	5,1,0,36,37,1,0,16,17,1,0,18,19,1,0,20,21,1,0,22,25,398,0,49,1,0,0,0,2,
	57,1,0,0,0,4,85,1,0,0,0,6,109,1,0,0,0,8,124,1,0,0,0,10,126,1,0,0,0,12,148,
	1,0,0,0,14,171,1,0,0,0,16,175,1,0,0,0,18,177,1,0,0,0,20,185,1,0,0,0,22,
	187,1,0,0,0,24,195,1,0,0,0,26,209,1,0,0,0,28,211,1,0,0,0,30,219,1,0,0,0,
	32,233,1,0,0,0,34,267,1,0,0,0,36,286,1,0,0,0,38,288,1,0,0,0,40,318,1,0,
	0,0,42,328,1,0,0,0,44,341,1,0,0,0,46,361,1,0,0,0,48,50,3,2,1,0,49,48,1,
	0,0,0,50,51,1,0,0,0,51,49,1,0,0,0,51,52,1,0,0,0,52,1,1,0,0,0,53,58,3,6,
	3,0,54,58,3,8,4,0,55,58,3,34,17,0,56,58,3,38,19,0,57,53,1,0,0,0,57,54,1,
	0,0,0,57,55,1,0,0,0,57,56,1,0,0,0,58,3,1,0,0,0,59,86,5,34,0,0,60,86,5,37,
	0,0,61,86,5,38,0,0,62,86,5,36,0,0,63,64,5,36,0,0,64,65,5,1,0,0,65,86,5,
	2,0,0,66,67,5,36,0,0,67,69,5,3,0,0,68,70,5,39,0,0,69,68,1,0,0,0,70,71,1,
	0,0,0,71,69,1,0,0,0,71,72,1,0,0,0,72,73,1,0,0,0,73,86,5,4,0,0,74,75,5,36,
	0,0,75,81,5,5,0,0,76,77,3,36,18,0,77,78,5,6,0,0,78,80,1,0,0,0,79,76,1,0,
	0,0,80,83,1,0,0,0,81,79,1,0,0,0,81,82,1,0,0,0,82,84,1,0,0,0,83,81,1,0,0,
	0,84,86,5,7,0,0,85,59,1,0,0,0,85,60,1,0,0,0,85,61,1,0,0,0,85,62,1,0,0,0,
	85,63,1,0,0,0,85,66,1,0,0,0,85,74,1,0,0,0,86,5,1,0,0,0,87,88,5,35,0,0,88,
	89,5,36,0,0,89,90,5,8,0,0,90,91,3,16,8,0,91,92,5,9,0,0,92,110,1,0,0,0,93,
	94,5,35,0,0,94,95,5,36,0,0,95,96,5,1,0,0,96,97,5,8,0,0,97,104,5,3,0,0,98,
	100,3,44,22,0,99,101,5,6,0,0,100,99,1,0,0,0,100,101,1,0,0,0,101,103,1,0,
	0,0,102,98,1,0,0,0,103,106,1,0,0,0,104,102,1,0,0,0,104,105,1,0,0,0,105,
	107,1,0,0,0,106,104,1,0,0,0,107,108,5,4,0,0,108,110,5,9,0,0,109,87,1,0,
	0,0,109,93,1,0,0,0,110,7,1,0,0,0,111,125,3,10,5,0,112,113,5,10,0,0,113,
	114,3,28,14,0,114,118,5,11,0,0,115,117,3,2,1,0,116,115,1,0,0,0,117,120,
	1,0,0,0,118,116,1,0,0,0,118,119,1,0,0,0,119,121,1,0,0,0,120,118,1,0,0,0,
	121,122,5,12,0,0,122,125,1,0,0,0,123,125,3,46,23,0,124,111,1,0,0,0,124,
	112,1,0,0,0,124,123,1,0,0,0,125,9,1,0,0,0,126,127,5,13,0,0,127,128,3,28,
	14,0,128,132,5,11,0,0,129,131,3,2,1,0,130,129,1,0,0,0,131,134,1,0,0,0,132,
	130,1,0,0,0,132,133,1,0,0,0,133,135,1,0,0,0,134,132,1,0,0,0,135,146,5,14,
	0,0,136,147,3,12,6,0,137,138,5,15,0,0,138,142,5,11,0,0,139,141,3,2,1,0,
	140,139,1,0,0,0,141,144,1,0,0,0,142,140,1,0,0,0,142,143,1,0,0,0,143,145,
	1,0,0,0,144,142,1,0,0,0,145,147,5,14,0,0,146,136,1,0,0,0,146,137,1,0,0,
	0,146,147,1,0,0,0,147,11,1,0,0,0,148,149,5,15,0,0,149,150,5,13,0,0,150,
	151,3,28,14,0,151,155,5,11,0,0,152,154,3,2,1,0,153,152,1,0,0,0,154,157,
	1,0,0,0,155,153,1,0,0,0,155,156,1,0,0,0,156,158,1,0,0,0,157,155,1,0,0,0,
	158,169,5,14,0,0,159,170,3,12,6,0,160,161,5,15,0,0,161,165,5,11,0,0,162,
	164,3,2,1,0,163,162,1,0,0,0,164,167,1,0,0,0,165,163,1,0,0,0,165,166,1,0,
	0,0,166,168,1,0,0,0,167,165,1,0,0,0,168,170,5,14,0,0,169,159,1,0,0,0,169,
	160,1,0,0,0,169,170,1,0,0,0,170,13,1,0,0,0,171,172,3,22,11,0,172,15,1,0,
	0,0,173,176,3,18,9,0,174,176,3,22,11,0,175,173,1,0,0,0,175,174,1,0,0,0,
	176,17,1,0,0,0,177,182,7,0,0,0,178,179,5,16,0,0,179,181,7,0,0,0,180,178,
	1,0,0,0,181,184,1,0,0,0,182,180,1,0,0,0,182,183,1,0,0,0,183,19,1,0,0,0,
	184,182,1,0,0,0,185,186,7,0,0,0,186,21,1,0,0,0,187,192,3,24,12,0,188,189,
	7,1,0,0,189,191,3,24,12,0,190,188,1,0,0,0,191,194,1,0,0,0,192,190,1,0,0,
	0,192,193,1,0,0,0,193,23,1,0,0,0,194,192,1,0,0,0,195,200,3,26,13,0,196,
	197,7,2,0,0,197,199,3,26,13,0,198,196,1,0,0,0,199,202,1,0,0,0,200,198,1,
	0,0,0,200,201,1,0,0,0,201,25,1,0,0,0,202,200,1,0,0,0,203,210,5,38,0,0,204,
	210,5,36,0,0,205,206,5,5,0,0,206,207,3,22,11,0,207,208,5,7,0,0,208,210,
	1,0,0,0,209,203,1,0,0,0,209,204,1,0,0,0,209,205,1,0,0,0,210,27,1,0,0,0,
	211,216,3,30,15,0,212,213,7,3,0,0,213,215,3,30,15,0,214,212,1,0,0,0,215,
	218,1,0,0,0,216,214,1,0,0,0,216,217,1,0,0,0,217,29,1,0,0,0,218,216,1,0,
	0,0,219,224,3,32,16,0,220,221,7,4,0,0,221,223,3,32,16,0,222,220,1,0,0,0,
	223,226,1,0,0,0,224,222,1,0,0,0,224,225,1,0,0,0,225,31,1,0,0,0,226,224,
	1,0,0,0,227,234,5,38,0,0,228,234,5,36,0,0,229,230,5,5,0,0,230,231,3,28,
	14,0,231,232,5,7,0,0,232,234,1,0,0,0,233,227,1,0,0,0,233,228,1,0,0,0,233,
	229,1,0,0,0,234,33,1,0,0,0,235,236,5,36,0,0,236,237,5,8,0,0,237,238,3,16,
	8,0,238,239,5,9,0,0,239,268,1,0,0,0,240,241,5,36,0,0,241,243,5,3,0,0,242,
	244,5,39,0,0,243,242,1,0,0,0,244,245,1,0,0,0,245,243,1,0,0,0,245,246,1,
	0,0,0,246,247,1,0,0,0,247,248,5,4,0,0,248,249,5,8,0,0,249,250,3,16,8,0,
	250,251,5,9,0,0,251,268,1,0,0,0,252,253,5,36,0,0,253,254,5,1,0,0,254,255,
	5,8,0,0,255,262,5,3,0,0,256,258,3,44,22,0,257,259,5,6,0,0,258,257,1,0,0,
	0,258,259,1,0,0,0,259,261,1,0,0,0,260,256,1,0,0,0,261,264,1,0,0,0,262,260,
	1,0,0,0,262,263,1,0,0,0,263,265,1,0,0,0,264,262,1,0,0,0,265,266,5,4,0,0,
	266,268,5,9,0,0,267,235,1,0,0,0,267,240,1,0,0,0,267,252,1,0,0,0,268,35,
	1,0,0,0,269,287,3,4,2,0,270,272,5,36,0,0,271,273,5,1,0,0,272,271,1,0,0,
	0,272,273,1,0,0,0,273,287,1,0,0,0,274,287,3,22,11,0,275,282,5,3,0,0,276,
	278,3,44,22,0,277,279,5,6,0,0,278,277,1,0,0,0,278,279,1,0,0,0,279,281,1,
	0,0,0,280,276,1,0,0,0,281,284,1,0,0,0,282,280,1,0,0,0,282,283,1,0,0,0,283,
	285,1,0,0,0,284,282,1,0,0,0,285,287,5,4,0,0,286,269,1,0,0,0,286,270,1,0,
	0,0,286,274,1,0,0,0,286,275,1,0,0,0,287,37,1,0,0,0,288,289,5,35,0,0,289,
	290,5,26,0,0,290,291,5,36,0,0,291,302,5,5,0,0,292,293,5,35,0,0,293,295,
	5,36,0,0,294,296,5,1,0,0,295,294,1,0,0,0,295,296,1,0,0,0,296,298,1,0,0,
	0,297,299,5,6,0,0,298,297,1,0,0,0,298,299,1,0,0,0,299,301,1,0,0,0,300,292,
	1,0,0,0,301,304,1,0,0,0,302,300,1,0,0,0,302,303,1,0,0,0,303,305,1,0,0,0,
	304,302,1,0,0,0,305,306,5,7,0,0,306,310,5,11,0,0,307,309,3,2,1,0,308,307,
	1,0,0,0,309,312,1,0,0,0,310,308,1,0,0,0,310,311,1,0,0,0,311,313,1,0,0,0,
	312,310,1,0,0,0,313,314,5,9,0,0,314,315,5,27,0,0,315,316,3,36,18,0,316,
	317,5,28,0,0,317,39,1,0,0,0,318,324,5,29,0,0,319,325,3,4,2,0,320,322,5,
	36,0,0,321,323,5,1,0,0,322,321,1,0,0,0,322,323,1,0,0,0,323,325,1,0,0,0,
	324,319,1,0,0,0,324,320,1,0,0,0,325,326,1,0,0,0,326,327,5,9,0,0,327,41,
	1,0,0,0,328,330,5,30,0,0,329,331,5,39,0,0,330,329,1,0,0,0,331,332,1,0,0,
	0,332,330,1,0,0,0,332,333,1,0,0,0,333,334,1,0,0,0,334,335,5,9,0,0,335,43,
	1,0,0,0,336,337,5,3,0,0,337,338,3,4,2,0,338,339,5,4,0,0,339,342,1,0,0,0,
	340,342,3,4,2,0,341,336,1,0,0,0,341,340,1,0,0,0,342,45,1,0,0,0,343,344,
	5,36,0,0,344,346,5,3,0,0,345,347,5,39,0,0,346,345,1,0,0,0,347,348,1,0,0,
	0,348,346,1,0,0,0,348,349,1,0,0,0,349,350,1,0,0,0,350,362,5,4,0,0,351,352,
	5,36,0,0,352,359,5,1,0,0,353,354,5,31,0,0,354,355,3,4,2,0,355,356,5,9,0,
	0,356,360,1,0,0,0,357,360,5,32,0,0,358,360,5,33,0,0,359,353,1,0,0,0,359,
	357,1,0,0,0,359,358,1,0,0,0,360,362,1,0,0,0,361,343,1,0,0,0,361,351,1,0,
	0,0,362,47,1,0,0,0,43,51,57,71,81,85,100,104,109,118,124,132,142,146,155,
	165,169,175,182,192,200,209,216,224,233,245,258,262,267,272,278,282,286,
	295,298,302,310,322,324,332,341,348,359,361];

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
