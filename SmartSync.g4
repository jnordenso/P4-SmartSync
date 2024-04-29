// Define a grammar called Hello
grammar SmartSync;
Program : Line*;
Line : Declaration | Statements | Assignments | Functions;

Bool : 'TRUE' | 'FALSE';
Type : 'Number' | 'Text' | 'Boolean';
Id   : [a-zA-Z][a-zA-Z0-9]*;
String : '"' .*? '"';
Numbers : [0-9]+ ('.' [0-9]+)?;
ArithmeticOperators : '+' | '-' | '*' | '/';
LogicalOperators : 'EQUAL' | 'NOT EQUAL' | 'AND' | 'OR' | 'GREATER' | 'LESS';
DelayTime : 'ms';

Value : Bool | String | Numbers | Id | ArraySize | ArrayIndex | Id(FunctionCallStm);

Declaration : Type Id '=' Value;

Statements : IFS | 'WHILE' Condition '{' Line* '}' | ArrayStm;
IFS : 'IF' Condition '{' Line* '}' (ELSES | 'ELSE' '{' Line* '}')?;
ELSES : 'ELSE' 'IF' Condition '{' Line* '}' (ELSES | 'ELSE' '{' Line* '}')?;

Condition : Id LogicalOperators Id | Id LogicalOperators Value | Condition 'OR' Condition | Condition 'AND' Condition |
            



r  : 'hello' ID ;         // match keyword hello followed by an identifier
ID : [a-z]+ ;             // match lower-case identifiers
WS : [ \t\r\n]+ -> skip ; // skip spaces, tabs, newlines