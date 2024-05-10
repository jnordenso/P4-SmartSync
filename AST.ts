export type NodeType = 
    | "Program"
    | "Line"
    | "Identifier" 
    | "ArrayIdentifier"
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
    | "StringConcatenation"
    | "Value"
    | "Type"
    | "Array";


export interface Line {
    kind: NodeType;
    line: number;
}

export interface Program extends Line {
    kind: "Program";
    body: Line[];
}

export interface Declaration extends Line {
    kind: "Declaration";
    Type: types;
    identifier: Identifier;
    value: Expression;
}

export interface Statement extends Line {}

export interface IfStm extends Statement {
    kind: "ifStm";
    condition: Expression;
    body: Line[];
    else?: ElseStm | IfStm;
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
    Type: types;
    identifier: Identifier;
    parameters: Identifier[];
    body: Line[];
    return: Expression;
}

export interface Output extends Line {
    kind: "Output";
    value: Expression;
}

export interface Delay extends Line {
    kind: "Delay";
    value: Expression;
}

export interface Expression extends Line {
}

export interface Value extends Expression {
    kind: "Value";
    Type: types;
    value: string;
}

export interface Array extends Expression {
    kind: "Array";
    Type?: types;
    value: Expression[];
}

export interface StringConcatenation extends Expression {
    kind: "StringConcatenation";
    values: string[];
}

export interface Identifier extends Expression {
    kind: "Identifier" | "ArrayIdentifier";
    Type: types | undefined;
    name: string;
}

export interface BinaryOperation extends Expression {
    kind: "BinaryOperation";
    left: Expression;
    right: Expression;
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
    Type: types;
}

export type types = "Number" | 'Text' | "Boolean";