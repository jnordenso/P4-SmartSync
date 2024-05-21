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
			} while (((((_la - 1)) & ~0x1F) === 0 && ((1 << (_la - 1)) & 3288343553) !== 0));
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
			this.state = 60;
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
				this.match(SmartSyncParser.T__0);
				this.state = 57;
				this.funcReturn();
				this.state = 58;
				this.match(SmartSyncParser.T__1);
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
			this.state = 89;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 62;
				this.match(SmartSyncParser.BOOL);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 63;
				this.match(SmartSyncParser.STRING);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 64;
				this.match(SmartSyncParser.NUMBER);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 65;
				this.match(SmartSyncParser.ID);
				this.state = 67;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===3) {
					{
					this.state = 66;
					this.match(SmartSyncParser.T__2);
					}
				}

				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 69;
				this.match(SmartSyncParser.ID);
				this.state = 70;
				this.match(SmartSyncParser.T__2);
				this.state = 71;
				this.match(SmartSyncParser.T__3);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 72;
				this.match(SmartSyncParser.ID);
				this.state = 73;
				this.match(SmartSyncParser.T__4);
				this.state = 74;
				this.value();
				this.state = 75;
				this.match(SmartSyncParser.T__5);
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 77;
				this.match(SmartSyncParser.ID);
				this.state = 78;
				this.match(SmartSyncParser.T__6);
				this.state = 85;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 5)) & ~0x1F) === 0 && ((1 << (_la - 5)) & 973078533) !== 0)) {
					{
					{
					this.state = 79;
					this.funcReturn();
					this.state = 81;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===8) {
						{
						this.state = 80;
						this.match(SmartSyncParser.T__7);
						}
					}

					}
					}
					this.state = 87;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 88;
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
	public declaration(): DeclarationContext {
		let localctx: DeclarationContext = new DeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, SmartSyncParser.RULE_declaration);
		let _la: number;
		try {
			this.state = 119;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 91;
				this.match(SmartSyncParser.TYPE);
				this.state = 92;
				this.match(SmartSyncParser.ID);
				this.state = 93;
				this.match(SmartSyncParser.T__9);
				this.state = 94;
				this.expression();
				this.state = 95;
				this.match(SmartSyncParser.T__1);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 97;
				this.match(SmartSyncParser.TYPE);
				this.state = 98;
				this.match(SmartSyncParser.ID);
				this.state = 99;
				this.match(SmartSyncParser.T__2);
				this.state = 100;
				this.match(SmartSyncParser.T__9);
				this.state = 101;
				this.match(SmartSyncParser.T__4);
				this.state = 108;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 5)) & ~0x1F) === 0 && ((1 << (_la - 5)) & 973078529) !== 0)) {
					{
					{
					this.state = 102;
					this.arrayValue();
					this.state = 104;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===8) {
						{
						this.state = 103;
						this.match(SmartSyncParser.T__7);
						}
					}

					}
					}
					this.state = 110;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 111;
				this.match(SmartSyncParser.T__5);
				this.state = 112;
				this.match(SmartSyncParser.T__1);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 113;
				this.match(SmartSyncParser.TYPE);
				this.state = 114;
				this.match(SmartSyncParser.ID);
				this.state = 115;
				this.match(SmartSyncParser.T__2);
				this.state = 116;
				this.match(SmartSyncParser.T__9);
				this.state = 117;
				this.match(SmartSyncParser.T__2);
				this.state = 118;
				this.match(SmartSyncParser.T__1);
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
			this.state = 134;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 14:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 121;
				this.ifStm();
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 122;
				this.match(SmartSyncParser.T__10);
				this.state = 123;
				this.condition();
				this.state = 124;
				this.match(SmartSyncParser.T__11);
				this.state = 128;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 1)) & ~0x1F) === 0 && ((1 << (_la - 1)) & 3288343553) !== 0)) {
					{
					{
					this.state = 125;
					this.line();
					}
					}
					this.state = 130;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 131;
				this.match(SmartSyncParser.T__12);
				}
				break;
			case 32:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 133;
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
			this.state = 136;
			this.match(SmartSyncParser.T__13);
			this.state = 137;
			this.condition();
			this.state = 138;
			this.match(SmartSyncParser.T__11);
			this.state = 142;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 1)) & ~0x1F) === 0 && ((1 << (_la - 1)) & 3288343553) !== 0)) {
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
			this.match(SmartSyncParser.T__12);
			this.state = 148;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				{
				this.state = 146;
				this.elses();
				}
				break;
			case 2:
				{
				this.state = 147;
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
			this.state = 150;
			this.match(SmartSyncParser.T__14);
			this.state = 151;
			this.match(SmartSyncParser.T__13);
			this.state = 152;
			this.condition();
			this.state = 153;
			this.match(SmartSyncParser.T__11);
			this.state = 157;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 1)) & ~0x1F) === 0 && ((1 << (_la - 1)) & 3288343553) !== 0)) {
				{
				{
				this.state = 154;
				this.line();
				}
				}
				this.state = 159;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 160;
			this.match(SmartSyncParser.T__12);
			this.state = 163;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				{
				this.state = 161;
				this.elses();
				}
				break;
			case 2:
				{
				this.state = 162;
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
			this.state = 165;
			this.match(SmartSyncParser.T__14);
			this.state = 166;
			this.match(SmartSyncParser.T__11);
			this.state = 170;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 1)) & ~0x1F) === 0 && ((1 << (_la - 1)) & 3288343553) !== 0)) {
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
			this.state = 183;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 175;
				this.arithmetic();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 176;
				this.stringArithmetic();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 177;
				this.value();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 178;
				this.match(SmartSyncParser.T__6);
				this.state = 179;
				this.expression();
				this.state = 180;
				this.match(SmartSyncParser.T__8);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 182;
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
			this.state = 185;
			this.stringAtom();
			this.state = 190;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===16) {
				{
				{
				this.state = 186;
				this.match(SmartSyncParser.T__15);
				this.state = 187;
				this.stringAtom();
				}
				}
				this.state = 192;
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
			this.state = 193;
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
			this.state = 195;
			this.multExpr();
			this.state = 200;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===16 || _la===17) {
				{
				{
				this.state = 196;
				_la = this._input.LA(1);
				if(!(_la===16 || _la===17)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 197;
				this.multExpr();
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
	public multExpr(): MultExprContext {
		let localctx: MultExprContext = new MultExprContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, SmartSyncParser.RULE_multExpr);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 203;
			this.atom();
			this.state = 208;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===18 || _la===19) {
				{
				{
				this.state = 204;
				_la = this._input.LA(1);
				if(!(_la===18 || _la===19)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 205;
				this.atom();
				}
				}
				this.state = 210;
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
			this.state = 217;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 34:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 211;
				this.match(SmartSyncParser.NUMBER);
				}
				break;
			case 32:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 212;
				this.match(SmartSyncParser.ID);
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 213;
				this.match(SmartSyncParser.T__6);
				this.state = 214;
				this.arithmetic();
				this.state = 215;
				this.match(SmartSyncParser.T__8);
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
			this.state = 219;
			this.multConExpr();
			this.state = 224;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===20 || _la===21) {
				{
				{
				this.state = 220;
				_la = this._input.LA(1);
				if(!(_la===20 || _la===21)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 221;
				this.multConExpr();
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
	public multConExpr(): MultConExprContext {
		let localctx: MultConExprContext = new MultConExprContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, SmartSyncParser.RULE_multConExpr);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 227;
			this.atomCon();
			this.state = 232;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 62914560) !== 0)) {
				{
				{
				this.state = 228;
				_la = this._input.LA(1);
				if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 62914560) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 229;
				this.atomCon();
				}
				}
				this.state = 234;
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
			this.state = 241;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 23, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 235;
				this.arithmetic();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 236;
				this.value();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 237;
				this.match(SmartSyncParser.T__6);
				this.state = 238;
				this.condition();
				this.state = 239;
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
	public assignments(): AssignmentsContext {
		let localctx: AssignmentsContext = new AssignmentsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 34, SmartSyncParser.RULE_assignments);
		let _la: number;
		try {
			this.state = 276;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 26, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 243;
				this.match(SmartSyncParser.ID);
				this.state = 244;
				this.match(SmartSyncParser.T__9);
				this.state = 245;
				this.expression();
				this.state = 246;
				this.match(SmartSyncParser.T__1);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 248;
				this.match(SmartSyncParser.ID);
				this.state = 249;
				this.match(SmartSyncParser.T__4);
				this.state = 250;
				this.value();
				this.state = 251;
				this.match(SmartSyncParser.T__5);
				this.state = 252;
				this.match(SmartSyncParser.T__9);
				this.state = 253;
				this.expression();
				this.state = 254;
				this.match(SmartSyncParser.T__1);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 256;
				this.match(SmartSyncParser.ID);
				this.state = 257;
				this.match(SmartSyncParser.T__2);
				this.state = 258;
				this.match(SmartSyncParser.T__9);
				this.state = 259;
				this.match(SmartSyncParser.T__4);
				this.state = 266;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 5)) & ~0x1F) === 0 && ((1 << (_la - 5)) & 973078529) !== 0)) {
					{
					{
					this.state = 260;
					this.arrayValue();
					this.state = 262;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===8) {
						{
						this.state = 261;
						this.match(SmartSyncParser.T__7);
						}
					}

					}
					}
					this.state = 268;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 269;
				this.match(SmartSyncParser.T__5);
				this.state = 270;
				this.match(SmartSyncParser.T__1);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 271;
				this.match(SmartSyncParser.ID);
				this.state = 272;
				this.match(SmartSyncParser.T__2);
				this.state = 273;
				this.match(SmartSyncParser.T__9);
				this.state = 274;
				this.match(SmartSyncParser.T__2);
				this.state = 275;
				this.match(SmartSyncParser.T__1);
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
			this.state = 293;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 29, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 278;
				this.value();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 279;
				this.match(SmartSyncParser.ID);
				this.state = 280;
				this.match(SmartSyncParser.T__2);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 281;
				this.arithmetic();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 282;
				this.match(SmartSyncParser.T__4);
				this.state = 289;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 5)) & ~0x1F) === 0 && ((1 << (_la - 5)) & 973078529) !== 0)) {
					{
					{
					this.state = 283;
					this.arrayValue();
					this.state = 285;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===8) {
						{
						this.state = 284;
						this.match(SmartSyncParser.T__7);
						}
					}

					}
					}
					this.state = 291;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 292;
				this.match(SmartSyncParser.T__5);
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
			this.state = 295;
			this.match(SmartSyncParser.TYPE);
			this.state = 296;
			this.match(SmartSyncParser.T__25);
			this.state = 297;
			this.match(SmartSyncParser.ID);
			this.state = 298;
			this.match(SmartSyncParser.T__6);
			this.state = 309;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===31) {
				{
				{
				this.state = 299;
				this.match(SmartSyncParser.TYPE);
				this.state = 300;
				this.match(SmartSyncParser.ID);
				this.state = 302;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===3) {
					{
					this.state = 301;
					this.match(SmartSyncParser.T__2);
					}
				}

				this.state = 305;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===8) {
					{
					this.state = 304;
					this.match(SmartSyncParser.T__7);
					}
				}

				}
				}
				this.state = 311;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 312;
			this.match(SmartSyncParser.T__8);
			this.state = 313;
			this.match(SmartSyncParser.T__11);
			this.state = 317;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 1)) & ~0x1F) === 0 && ((1 << (_la - 1)) & 3288343553) !== 0)) {
				{
				{
				this.state = 314;
				this.line();
				}
				}
				this.state = 319;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 320;
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
			this.state = 322;
			this.match(SmartSyncParser.T__26);
			this.state = 329;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 34, this._ctx) ) {
			case 1:
				{
				this.state = 323;
				this.value();
				}
				break;
			case 2:
				{
				this.state = 324;
				this.match(SmartSyncParser.ID);
				this.state = 325;
				this.match(SmartSyncParser.T__4);
				this.state = 326;
				this.value();
				this.state = 327;
				this.match(SmartSyncParser.T__5);
				}
				break;
			}
			this.state = 331;
			this.match(SmartSyncParser.T__1);
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
			this.state = 345;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 5:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 333;
				this.match(SmartSyncParser.T__4);
				this.state = 340;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 30)) & ~0x1F) === 0 && ((1 << (_la - 30)) & 29) !== 0)) {
					{
					{
					this.state = 334;
					this.value();
					this.state = 336;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===8) {
						{
						this.state = 335;
						this.match(SmartSyncParser.T__7);
						}
					}

					}
					}
					this.state = 342;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 343;
				this.match(SmartSyncParser.T__5);
				}
				break;
			case 30:
			case 32:
			case 33:
			case 34:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 344;
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
			this.state = 347;
			this.match(SmartSyncParser.ID);
			this.state = 348;
			this.match(SmartSyncParser.T__2);
			this.state = 355;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 28:
				{
				this.state = 349;
				this.match(SmartSyncParser.T__27);
				this.state = 350;
				this.value();
				this.state = 351;
				this.match(SmartSyncParser.T__1);
				}
				break;
			case 29:
				{
				this.state = 353;
				this.match(SmartSyncParser.T__28);
				this.state = 354;
				this.match(SmartSyncParser.T__1);
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

	public static readonly _serializedATN: number[] = [4,1,39,358,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,1,0,4,0,48,8,0,11,
	0,12,0,49,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,61,8,1,1,2,1,2,1,2,1,
	2,1,2,3,2,68,8,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,82,
	8,2,5,2,84,8,2,10,2,12,2,87,9,2,1,2,3,2,90,8,2,1,3,1,3,1,3,1,3,1,3,1,3,
	1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,105,8,3,5,3,107,8,3,10,3,12,3,110,9,3,1,
	3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,120,8,3,1,4,1,4,1,4,1,4,1,4,5,4,127,8,
	4,10,4,12,4,130,9,4,1,4,1,4,1,4,3,4,135,8,4,1,5,1,5,1,5,1,5,5,5,141,8,5,
	10,5,12,5,144,9,5,1,5,1,5,1,5,3,5,149,8,5,1,6,1,6,1,6,1,6,1,6,5,6,156,8,
	6,10,6,12,6,159,9,6,1,6,1,6,1,6,3,6,164,8,6,1,7,1,7,1,7,5,7,169,8,7,10,
	7,12,7,172,9,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,184,8,8,1,9,
	1,9,1,9,5,9,189,8,9,10,9,12,9,192,9,9,1,10,1,10,1,11,1,11,1,11,5,11,199,
	8,11,10,11,12,11,202,9,11,1,12,1,12,1,12,5,12,207,8,12,10,12,12,12,210,
	9,12,1,13,1,13,1,13,1,13,1,13,1,13,3,13,218,8,13,1,14,1,14,1,14,5,14,223,
	8,14,10,14,12,14,226,9,14,1,15,1,15,1,15,5,15,231,8,15,10,15,12,15,234,
	9,15,1,16,1,16,1,16,1,16,1,16,1,16,3,16,242,8,16,1,17,1,17,1,17,1,17,1,
	17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,
	3,17,263,8,17,5,17,265,8,17,10,17,12,17,268,9,17,1,17,1,17,1,17,1,17,1,
	17,1,17,1,17,3,17,277,8,17,1,18,1,18,1,18,1,18,1,18,1,18,1,18,3,18,286,
	8,18,5,18,288,8,18,10,18,12,18,291,9,18,1,18,3,18,294,8,18,1,19,1,19,1,
	19,1,19,1,19,1,19,1,19,3,19,303,8,19,1,19,3,19,306,8,19,5,19,308,8,19,10,
	19,12,19,311,9,19,1,19,1,19,1,19,5,19,316,8,19,10,19,12,19,319,9,19,1,19,
	1,19,1,20,1,20,1,20,1,20,1,20,1,20,1,20,3,20,330,8,20,1,20,1,20,1,21,1,
	21,1,21,3,21,337,8,21,5,21,339,8,21,10,21,12,21,342,9,21,1,21,1,21,3,21,
	346,8,21,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,3,22,356,8,22,1,22,0,0,
	23,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,0,5,
	1,0,32,33,1,0,16,17,1,0,18,19,1,0,20,21,1,0,22,25,395,0,47,1,0,0,0,2,60,
	1,0,0,0,4,89,1,0,0,0,6,119,1,0,0,0,8,134,1,0,0,0,10,136,1,0,0,0,12,150,
	1,0,0,0,14,165,1,0,0,0,16,183,1,0,0,0,18,185,1,0,0,0,20,193,1,0,0,0,22,
	195,1,0,0,0,24,203,1,0,0,0,26,217,1,0,0,0,28,219,1,0,0,0,30,227,1,0,0,0,
	32,241,1,0,0,0,34,276,1,0,0,0,36,293,1,0,0,0,38,295,1,0,0,0,40,322,1,0,
	0,0,42,345,1,0,0,0,44,347,1,0,0,0,46,48,3,2,1,0,47,46,1,0,0,0,48,49,1,0,
	0,0,49,47,1,0,0,0,49,50,1,0,0,0,50,1,1,0,0,0,51,61,3,6,3,0,52,61,3,8,4,
	0,53,61,3,34,17,0,54,61,3,38,19,0,55,61,3,40,20,0,56,57,5,1,0,0,57,58,3,
	36,18,0,58,59,5,2,0,0,59,61,1,0,0,0,60,51,1,0,0,0,60,52,1,0,0,0,60,53,1,
	0,0,0,60,54,1,0,0,0,60,55,1,0,0,0,60,56,1,0,0,0,61,3,1,0,0,0,62,90,5,30,
	0,0,63,90,5,33,0,0,64,90,5,34,0,0,65,67,5,32,0,0,66,68,5,3,0,0,67,66,1,
	0,0,0,67,68,1,0,0,0,68,90,1,0,0,0,69,70,5,32,0,0,70,71,5,3,0,0,71,90,5,
	4,0,0,72,73,5,32,0,0,73,74,5,5,0,0,74,75,3,4,2,0,75,76,5,6,0,0,76,90,1,
	0,0,0,77,78,5,32,0,0,78,85,5,7,0,0,79,81,3,36,18,0,80,82,5,8,0,0,81,80,
	1,0,0,0,81,82,1,0,0,0,82,84,1,0,0,0,83,79,1,0,0,0,84,87,1,0,0,0,85,83,1,
	0,0,0,85,86,1,0,0,0,86,88,1,0,0,0,87,85,1,0,0,0,88,90,5,9,0,0,89,62,1,0,
	0,0,89,63,1,0,0,0,89,64,1,0,0,0,89,65,1,0,0,0,89,69,1,0,0,0,89,72,1,0,0,
	0,89,77,1,0,0,0,90,5,1,0,0,0,91,92,5,31,0,0,92,93,5,32,0,0,93,94,5,10,0,
	0,94,95,3,16,8,0,95,96,5,2,0,0,96,120,1,0,0,0,97,98,5,31,0,0,98,99,5,32,
	0,0,99,100,5,3,0,0,100,101,5,10,0,0,101,108,5,5,0,0,102,104,3,42,21,0,103,
	105,5,8,0,0,104,103,1,0,0,0,104,105,1,0,0,0,105,107,1,0,0,0,106,102,1,0,
	0,0,107,110,1,0,0,0,108,106,1,0,0,0,108,109,1,0,0,0,109,111,1,0,0,0,110,
	108,1,0,0,0,111,112,5,6,0,0,112,120,5,2,0,0,113,114,5,31,0,0,114,115,5,
	32,0,0,115,116,5,3,0,0,116,117,5,10,0,0,117,118,5,3,0,0,118,120,5,2,0,0,
	119,91,1,0,0,0,119,97,1,0,0,0,119,113,1,0,0,0,120,7,1,0,0,0,121,135,3,10,
	5,0,122,123,5,11,0,0,123,124,3,28,14,0,124,128,5,12,0,0,125,127,3,2,1,0,
	126,125,1,0,0,0,127,130,1,0,0,0,128,126,1,0,0,0,128,129,1,0,0,0,129,131,
	1,0,0,0,130,128,1,0,0,0,131,132,5,13,0,0,132,135,1,0,0,0,133,135,3,44,22,
	0,134,121,1,0,0,0,134,122,1,0,0,0,134,133,1,0,0,0,135,9,1,0,0,0,136,137,
	5,14,0,0,137,138,3,28,14,0,138,142,5,12,0,0,139,141,3,2,1,0,140,139,1,0,
	0,0,141,144,1,0,0,0,142,140,1,0,0,0,142,143,1,0,0,0,143,145,1,0,0,0,144,
	142,1,0,0,0,145,148,5,13,0,0,146,149,3,12,6,0,147,149,3,14,7,0,148,146,
	1,0,0,0,148,147,1,0,0,0,148,149,1,0,0,0,149,11,1,0,0,0,150,151,5,15,0,0,
	151,152,5,14,0,0,152,153,3,28,14,0,153,157,5,12,0,0,154,156,3,2,1,0,155,
	154,1,0,0,0,156,159,1,0,0,0,157,155,1,0,0,0,157,158,1,0,0,0,158,160,1,0,
	0,0,159,157,1,0,0,0,160,163,5,13,0,0,161,164,3,12,6,0,162,164,3,14,7,0,
	163,161,1,0,0,0,163,162,1,0,0,0,163,164,1,0,0,0,164,13,1,0,0,0,165,166,
	5,15,0,0,166,170,5,12,0,0,167,169,3,2,1,0,168,167,1,0,0,0,169,172,1,0,0,
	0,170,168,1,0,0,0,170,171,1,0,0,0,171,173,1,0,0,0,172,170,1,0,0,0,173,174,
	5,13,0,0,174,15,1,0,0,0,175,184,3,22,11,0,176,184,3,18,9,0,177,184,3,4,
	2,0,178,179,5,7,0,0,179,180,3,16,8,0,180,181,5,9,0,0,181,184,1,0,0,0,182,
	184,3,28,14,0,183,175,1,0,0,0,183,176,1,0,0,0,183,177,1,0,0,0,183,178,1,
	0,0,0,183,182,1,0,0,0,184,17,1,0,0,0,185,190,3,20,10,0,186,187,5,16,0,0,
	187,189,3,20,10,0,188,186,1,0,0,0,189,192,1,0,0,0,190,188,1,0,0,0,190,191,
	1,0,0,0,191,19,1,0,0,0,192,190,1,0,0,0,193,194,7,0,0,0,194,21,1,0,0,0,195,
	200,3,24,12,0,196,197,7,1,0,0,197,199,3,24,12,0,198,196,1,0,0,0,199,202,
	1,0,0,0,200,198,1,0,0,0,200,201,1,0,0,0,201,23,1,0,0,0,202,200,1,0,0,0,
	203,208,3,26,13,0,204,205,7,2,0,0,205,207,3,26,13,0,206,204,1,0,0,0,207,
	210,1,0,0,0,208,206,1,0,0,0,208,209,1,0,0,0,209,25,1,0,0,0,210,208,1,0,
	0,0,211,218,5,34,0,0,212,218,5,32,0,0,213,214,5,7,0,0,214,215,3,22,11,0,
	215,216,5,9,0,0,216,218,1,0,0,0,217,211,1,0,0,0,217,212,1,0,0,0,217,213,
	1,0,0,0,218,27,1,0,0,0,219,224,3,30,15,0,220,221,7,3,0,0,221,223,3,30,15,
	0,222,220,1,0,0,0,223,226,1,0,0,0,224,222,1,0,0,0,224,225,1,0,0,0,225,29,
	1,0,0,0,226,224,1,0,0,0,227,232,3,32,16,0,228,229,7,4,0,0,229,231,3,32,
	16,0,230,228,1,0,0,0,231,234,1,0,0,0,232,230,1,0,0,0,232,233,1,0,0,0,233,
	31,1,0,0,0,234,232,1,0,0,0,235,242,3,22,11,0,236,242,3,4,2,0,237,238,5,
	7,0,0,238,239,3,28,14,0,239,240,5,9,0,0,240,242,1,0,0,0,241,235,1,0,0,0,
	241,236,1,0,0,0,241,237,1,0,0,0,242,33,1,0,0,0,243,244,5,32,0,0,244,245,
	5,10,0,0,245,246,3,16,8,0,246,247,5,2,0,0,247,277,1,0,0,0,248,249,5,32,
	0,0,249,250,5,5,0,0,250,251,3,4,2,0,251,252,5,6,0,0,252,253,5,10,0,0,253,
	254,3,16,8,0,254,255,5,2,0,0,255,277,1,0,0,0,256,257,5,32,0,0,257,258,5,
	3,0,0,258,259,5,10,0,0,259,266,5,5,0,0,260,262,3,42,21,0,261,263,5,8,0,
	0,262,261,1,0,0,0,262,263,1,0,0,0,263,265,1,0,0,0,264,260,1,0,0,0,265,268,
	1,0,0,0,266,264,1,0,0,0,266,267,1,0,0,0,267,269,1,0,0,0,268,266,1,0,0,0,
	269,270,5,6,0,0,270,277,5,2,0,0,271,272,5,32,0,0,272,273,5,3,0,0,273,274,
	5,10,0,0,274,275,5,3,0,0,275,277,5,2,0,0,276,243,1,0,0,0,276,248,1,0,0,
	0,276,256,1,0,0,0,276,271,1,0,0,0,277,35,1,0,0,0,278,294,3,4,2,0,279,280,
	5,32,0,0,280,294,5,3,0,0,281,294,3,22,11,0,282,289,5,5,0,0,283,285,3,42,
	21,0,284,286,5,8,0,0,285,284,1,0,0,0,285,286,1,0,0,0,286,288,1,0,0,0,287,
	283,1,0,0,0,288,291,1,0,0,0,289,287,1,0,0,0,289,290,1,0,0,0,290,292,1,0,
	0,0,291,289,1,0,0,0,292,294,5,6,0,0,293,278,1,0,0,0,293,279,1,0,0,0,293,
	281,1,0,0,0,293,282,1,0,0,0,294,37,1,0,0,0,295,296,5,31,0,0,296,297,5,26,
	0,0,297,298,5,32,0,0,298,309,5,7,0,0,299,300,5,31,0,0,300,302,5,32,0,0,
	301,303,5,3,0,0,302,301,1,0,0,0,302,303,1,0,0,0,303,305,1,0,0,0,304,306,
	5,8,0,0,305,304,1,0,0,0,305,306,1,0,0,0,306,308,1,0,0,0,307,299,1,0,0,0,
	308,311,1,0,0,0,309,307,1,0,0,0,309,310,1,0,0,0,310,312,1,0,0,0,311,309,
	1,0,0,0,312,313,5,9,0,0,313,317,5,12,0,0,314,316,3,2,1,0,315,314,1,0,0,
	0,316,319,1,0,0,0,317,315,1,0,0,0,317,318,1,0,0,0,318,320,1,0,0,0,319,317,
	1,0,0,0,320,321,5,13,0,0,321,39,1,0,0,0,322,329,5,27,0,0,323,330,3,4,2,
	0,324,325,5,32,0,0,325,326,5,5,0,0,326,327,3,4,2,0,327,328,5,6,0,0,328,
	330,1,0,0,0,329,323,1,0,0,0,329,324,1,0,0,0,330,331,1,0,0,0,331,332,5,2,
	0,0,332,41,1,0,0,0,333,340,5,5,0,0,334,336,3,4,2,0,335,337,5,8,0,0,336,
	335,1,0,0,0,336,337,1,0,0,0,337,339,1,0,0,0,338,334,1,0,0,0,339,342,1,0,
	0,0,340,338,1,0,0,0,340,341,1,0,0,0,341,343,1,0,0,0,342,340,1,0,0,0,343,
	346,5,6,0,0,344,346,3,4,2,0,345,333,1,0,0,0,345,344,1,0,0,0,346,43,1,0,
	0,0,347,348,5,32,0,0,348,355,5,3,0,0,349,350,5,28,0,0,350,351,3,4,2,0,351,
	352,5,2,0,0,352,356,1,0,0,0,353,354,5,29,0,0,354,356,5,2,0,0,355,349,1,
	0,0,0,355,353,1,0,0,0,356,45,1,0,0,0,39,49,60,67,81,85,89,104,108,119,128,
	134,142,148,157,163,170,183,190,200,208,217,224,232,241,262,266,276,285,
	289,293,302,305,309,317,329,336,340,345,355];

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
	public funcReturn(): FuncReturnContext {
		return this.getTypedRuleContext(FuncReturnContext, 0) as FuncReturnContext;
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
