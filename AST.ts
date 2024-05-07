export type NodeType = 
    | "Program"
    | "Line"
    | "Identifier" 
    | "Declaration"
    | "Assignment"
    | "Function"
    | "Output"
    | "Delay"
    // Statements
    | "ifStm"
    | "elseStm"
    | "WhileStm"
    // Array Statements
    | "IndexOf"
    | "Push" 
    | "Pull"
    | "Size"
    // Expressions
    | "BinaryOperation"
    | "Type";


export interface Line {
    kind: NodeType;
}

export interface Program extends Line {
    kind: "Program";
    body: Line[];
}

export interface Declaration extends Line {
    kind: "Declaration";
    Type: string;
    identifier: Identifier;
    value: Expression;
}

export interface Statement extends Line {}

export interface IfStm extends Statement {
    kind: "ifStm";
    condition: Expression;
    body: Line[];
}

export interface ElseStm extends Statement {
    kind: "elseStm";
    body: Line[];
}

export interface WhileStm extends Statement {
    kind: "WhileStm";
    condition: Expression;
    body: Line[];
}

export interface ArrayStm extends Statement {}

export interface IndexOf extends ArrayStm {
    kind: "IndexOf"
    identifier: Identifier;
}

export interface Push extends ArrayStm {
    kind: "Push";
    identifier: Identifier;
    value: Expression;
}

export interface Pull extends ArrayStm {
    kind: "Pull";
    identifier: Identifier;
}

export interface Size extends ArrayStm {
    kind: "Size";
    identifier: Identifier;
}

export interface Assignment extends Line {
    kind: "Assignment";
    identifier: Identifier;
    value: Expression;
}

export interface Function extends Line {
    kind: "Function";
    Type: string;
    identifier: Identifier;
    parameters: Identifier[];
    body: Line[];
}

export interface Output extends Line {
    kind: "Output";
    value: Expression;
}

export interface Delay extends Line {
    kind: "Delay";
    value: Expression;
}

export interface Expression extends Line {}

export interface Identifier extends Expression {
    kind: "Identifier";
    Type: string;
    name: string;
}

export interface BinaryOperation extends Expression {
    kind: "BinaryOperation";
    left: Expression;
    right: Expression;
    operator: string;
}

export interface Addition extends BinaryOperation {
    operator: "+";
}

export interface Subtraction extends BinaryOperation {
    operator: "-";
}

export interface Multiplication extends BinaryOperation {
    operator: "*";
}

export interface Division extends BinaryOperation {
    operator: "/";
}

export interface Equal extends BinaryOperation {
    operator: "EQUAL";
}

export interface NotEqual extends BinaryOperation {
    operator: "NOT EQUAL";
}

export interface And extends BinaryOperation {
    operator: "AND";
}

export interface Or extends BinaryOperation {
    operator: "OR";
}

export interface Greater extends BinaryOperation {
    operator: "GREATER";
}

export interface Less extends BinaryOperation {
    operator: "LESS";
}

export interface Type extends Expression {
    kind: "Type";
    Type: Number | Text | Boolean;
}

export type Number = {
    value: number;
}

export type Text = {
    value: string;
}

export type Boolean = {
    value: boolean;
}