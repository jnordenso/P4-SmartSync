export type NodeType = 
    | "Program"
    | "Line"
    | "Identifier" 
    | "ArrayIdentifier"
    | "Declaration"
    | "ArrayDeclaration"
    | "Assignment"
    | "Function"
    | "Output"
    | "Delay"
    // Statements
    | "IfStm"
    | "ElseStm"
    | "WhileStm"
    // Array Statements
    | "IndexOf"
    | "IndexAssignment"
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
    type: types;
    identifier: Identifier;
    value: Expression;
}

export interface ArrayDeclaration extends Line {
    kind: "ArrayDeclaration";
    type: types;
    identifier: Identifier;
    value: Expression[];
}

export interface Statement extends Line {}

export interface IfStm extends Statement {
    kind: "IfStm";
    condition: Expression;
    body: Line[];
    else?: ElseStm | IfStm;
}

export interface ElseStm extends Statement {
    kind: "ElseStm";
    body: Line[];
}

export interface WhileStm extends Statement {
    kind: "WhileStm";
    condition: Expression;
    body: Line[];
}

export interface ArrayStm extends Statement {}

export interface IndexAssignment extends ArrayStm {
    kind: "IndexAssignment";
    identifier: Identifier;
    index: Expression;
    value: Expression;

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

export interface Assignment extends Line {
    kind: "Assignment";
    identifier: Identifier;
    value: Expression;
}

export interface Function extends Line {
    kind: "Function";
    type?: types;
    identifier: Identifier;
    parameters: Identifier[];
    body?: Line[];
    return?: Expression;
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
    type: types;
    value: string;
}

export interface Array extends Expression {
    kind: "Array";
    type?: types;
    identifier?: Identifier;
    value?: Expression[];
}

export interface IndexOf extends ArrayStm {
    kind: "IndexOf"
    identifier: Identifier;
    index: Expression;
}

export interface Size extends Expression {
    kind: "Size";
    identifier: Identifier;
}
export interface StringConcatenation extends Expression {
    kind: "StringConcatenation";
    type: "Text";
    values: Expression[];
}

export interface Identifier extends Expression {
    kind: "Identifier" | "ArrayIdentifier";
    type: types | undefined;
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

export type types = "Number" | 'Text' | "Boolean";