import { Declaration, Expression, Line, types, Program } from "../Syntax Analysis/AST.ts";
import AstVisitor from "./AstVisitor.ts";

/**
 * This interface defines a symbol in the Symbol Table.
 * @param name the name of the symbol
 * @param type the type of the symbol
 * @param reference the reference to the declared node in the AST
 */
interface Symbol { 
    name: string; // ID (name) of the variable
    type: types; // Type of the variable
    reference: Line; // Reference to the declared node in the AST
}

/**
 * This interface defines a scope in the Symbol Table.
 * @param parent the parent scope
 * @param symbols the symbols in the scope
 * @param block the block of lines in the scope
 */
interface Scope {
    parent: Scope | null; // Parent scope (outer scope) or null if it is the global scope
    symbols: Map<string, Symbol>; // Map of symbols in the scope (key: ID, value: Symbol)
    block: Line[];
}

type Result = Program | Line | Declaration | Expression;

export default class SymbolTable extends AstVisitor<void> {
    scopes: Map<Line[], Scope> = new Map(); // Map of scopes in the Symbol Table (key: block of lines, value: Scope)
    stackScopes: Scope[] = []; // Stack of scopes in the Symbol Table
    currentBlock: Line[] = []; // Current block of lines in the Symbol Table

    /**
     * Builds the Symbol Table by visiting the Program node in the Abstract Syntax Tree.
     * @param ast the Abstract Syntax Tree
     * @return the Decorated Abstract Syntax Tree
     */
    BuildSymbolTable = (ast: Result): void => {
        this.visitProgram(ast); // Visits the Program node in the AST
    }

    /**
     * Adds the scope to the scopes map, pushes the scope to the stack of scopes, 
     * and sets the current block to the block of lines in the scope.
     * @param block the block of lines in the scope
     */
    NewScope = (block: Line[]): void => {
        // Creates a new scope
        const scope: Scope = {
            parent: this.stackScopes[this.stackScopes.length - 1] || null,
            symbols: new Map(),
            block: block
        };
        
        this.scopes.set(block, scope); // Adds the scope to the scopes map
        this.stackScopes.push(scope); // Pushes the scope to the stack of scopes
        this.currentBlock = this.stackScopes[this.stackScopes.length - 1].block; // Sets the current block to the block of lines in the scope
    }

    /**
     * Removes the scope from the stack of scopes.
     */
    ExitScope = (): void => {
        this.stackScopes.pop(); // Removes the scope from the stack of scopes
        this.currentBlock = this.stackScopes[this.stackScopes.length - 1].block; // Sets the current block to the block of lines in the scope
    }

    /**
     * Adds the symbol to the current scope.
     * @param name the name of the symbol
     * @param type the type of the symbol
     * @param reference the reference to the declared node in the AST
     */
    AddSymbol = (name: string, type: types, reference: Line): void => {

        if (this.stackScopes[this.stackScopes.length - 1].symbols.has(name)) {
            // TODO: Maybe we should make some error handling in another way
            throw new Error(`Variable '${name}' has already been declared in this scope`);
        }

        const symbol: Symbol = { name, type, reference }; // Creates a new symbol

        // Adds the symbol to the current scope
        this.stackScopes[this.stackScopes.length - 1].symbols.set(name, symbol);
    }

    /**
     * Looks up the symbol in the Symbol Table.
     * @param name the name of the symbol
     * @param reference the reference to the node in the AST
     * @return the symbol in the Symbol Table or null if the symbol is not found
     */
    LookupSymbol = (name: string, reference: Line[]): Symbol | null => {

        let scope = this.scopes.get(reference); // Gets the current scope

        // Loops through the scopes
        while (scope) {
            if (scope.symbols.has(name)) { // If the scope has the symbol
                const symbol = scope.symbols.get(name); // Gets the symbol
                if (symbol) {
                    return symbol;
                }
            }
            if (scope.parent === null) { // If the scope is the global scope
                break;
            }
            scope = scope.parent; // Moves to the parent scope
        }
        return null;
    }

    visitProgram = (ctx: Program): void => {
        this.NewScope(ctx.body); // Adds the global scope
        
        if (ctx.body.length > 0) {
            ctx.body.forEach((line) => {
                this.visitLine(line);
            });
        }

        this.ExitScope(); // Removes the global scope
    }

    visitLine = (ctx: Line): void => {
        if (ctx.kind === "Declaration") {
            this.visitDeclaration(ctx);
        }
    }

}

