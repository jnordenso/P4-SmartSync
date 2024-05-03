// Generated from SmartSync.g4 by ANTLR 4.13.1

import {ParseTreeVisitor} from 'antlr4';


import { ProgramContext } from "./SmartSyncParser.ts";
import { LineContext } from "./SmartSyncParser.ts";
import { ValueContext } from "./SmartSyncParser.ts";
import { DeclarationContext } from "./SmartSyncParser.ts";
import { StatementsContext } from "./SmartSyncParser.ts";
import { ConditionContext } from "./SmartSyncParser.ts";
import { ConditionBaseContext } from "./SmartSyncParser.ts";
import { IfStmContext } from "./SmartSyncParser.ts";
import { ElsesContext } from "./SmartSyncParser.ts";
import { ArithmeticValueContext } from "./SmartSyncParser.ts";
import { ExpressionContext } from "./SmartSyncParser.ts";
import { ArithmeticContext } from "./SmartSyncParser.ts";
import { MultExprContext } from "./SmartSyncParser.ts";
import { AtomContext } from "./SmartSyncParser.ts";
import { StringArithmeticContext } from "./SmartSyncParser.ts";
import { AtomStringContext } from "./SmartSyncParser.ts";
import { AssignmentsContext } from "./SmartSyncParser.ts";
import { FuncReturnContext } from "./SmartSyncParser.ts";
import { FunctionsContext } from "./SmartSyncParser.ts";
import { OutputContext } from "./SmartSyncParser.ts";
import { DelayContext } from "./SmartSyncParser.ts";
import { ArrayValueContext } from "./SmartSyncParser.ts";
import { ArrayStmContext } from "./SmartSyncParser.ts";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `SmartSyncParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class SmartSyncVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `SmartSyncParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;
	/**
	 * Visit a parse tree produced by `SmartSyncParser.line`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLine?: (ctx: LineContext) => Result;
	/**
	 * Visit a parse tree produced by `SmartSyncParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue?: (ctx: ValueContext) => Result;
	/**
	 * Visit a parse tree produced by `SmartSyncParser.declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclaration?: (ctx: DeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `SmartSyncParser.statements`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatements?: (ctx: StatementsContext) => Result;
	/**
	 * Visit a parse tree produced by `SmartSyncParser.condition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCondition?: (ctx: ConditionContext) => Result;
	/**
	 * Visit a parse tree produced by `SmartSyncParser.conditionBase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditionBase?: (ctx: ConditionBaseContext) => Result;
	/**
	 * Visit a parse tree produced by `SmartSyncParser.ifStm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfStm?: (ctx: IfStmContext) => Result;
	/**
	 * Visit a parse tree produced by `SmartSyncParser.elses`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElses?: (ctx: ElsesContext) => Result;
	/**
	 * Visit a parse tree produced by `SmartSyncParser.arithmeticValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArithmeticValue?: (ctx: ArithmeticValueContext) => Result;
	/**
	 * Visit a parse tree produced by `SmartSyncParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `SmartSyncParser.stringArithmetic`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringArithmetic?: (ctx: StringArithmeticContext) => Result;
	/**
	 * Visit a parse tree produced by `SmartSyncParser.atomString`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtomString?: (ctx: AtomStringContext) => Result;
	/**
	 * Visit a parse tree produced by `SmartSyncParser.arithmetic`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArithmetic?: (ctx: ArithmeticContext) => Result;
	/**
	 * Visit a parse tree produced by `SmartSyncParser.multExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultExpr?: (ctx: MultExprContext) => Result;
	/**
	 * Visit a parse tree produced by `SmartSyncParser.atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtom?: (ctx: AtomContext) => Result;
	/**
	 * Visit a parse tree produced by `SmartSyncParser.assignments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignments?: (ctx: AssignmentsContext) => Result;
	/**
	 * Visit a parse tree produced by `SmartSyncParser.funcReturn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFuncReturn?: (ctx: FuncReturnContext) => Result;
	/**
	 * Visit a parse tree produced by `SmartSyncParser.functions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctions?: (ctx: FunctionsContext) => Result;
	/**
	 * Visit a parse tree produced by `SmartSyncParser.output`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOutput?: (ctx: OutputContext) => Result;
	/**
	 * Visit a parse tree produced by `SmartSyncParser.delay`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDelay?: (ctx: DelayContext) => Result;
	/**
	 * Visit a parse tree produced by `SmartSyncParser.arrayValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayValue?: (ctx: ArrayValueContext) => Result;
	/**
	 * Visit a parse tree produced by `SmartSyncParser.arrayStm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayStm?: (ctx: ArrayStmContext) => Result;
}

