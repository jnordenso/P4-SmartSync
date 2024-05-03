grammar SmartSync;
program : line+;
line : declaration | statements | assignments | functions;

BOOL : 'TRUE' | 'FALSE';
TYPE : 'Number' | 'Text' | 'Boolean';
ID   : [a-zA-Z][a-zA-Z0-9]*;
STRING : '"' .*? '"';
NUMBER : '-'? [0-9]+ ('.' [0-9]+)?;
DIGIT : [0-9];
ARITHMETIC_OP : '+' | '-' | '*' | '/';
LOGIC_OP : 'EQUAL' | 'NOT EQUAL' | 'AND' | 'OR' | 'GREATER' | 'LESS';

value : BOOL | STRING | NUMBER | ID | ID'[]' 'SIZE' | ID '[' DIGIT+ ']' | ID'(' (funcReturn ',')* ')';

declaration : TYPE ID '=' expression ';' | TYPE ID'[]' '=' '[' (arrayValue ','?)* ']' ';';

statements : ifStm | 'WHILE' condition '{' line* '};' | arrayStm;
/* Condition : (Id | Number) LogicOp (Id | Number) | Condition ('AND' | 'OR') Condition | 
            (String | Bool | Id) ('EQUAL' | 'NOT EQUAL') (String | Bool | Id) | '(' Condition ')'; big no no, cuz left recursion, instead tilføje the conditionbase for and and or, for the condition condition recursion... <3*/

/* condition : conditionBase (('AND' | 'OR') conditionBase)*; */

//conditionBase : (ID | NUMBER) LOGIC_OP (ID | NUMBER) | (STRING | BOOL | ID) ('EQUAL' | 'NOT EQUAL') (STRING | BOOL | ID) | '(' condition ')';

/* arithmetic : arithmeticBase (ARITHMETIC_OP arithmeticBase)*;

arithmeticBase : value | STRING '+' STRING | ('(' arithmetic ')'); */
            
ifStm : 'IF' condition '{' line* '}' (elses | 'ELSE' '{' line* '}')?;
elses : 'ELSE' 'IF' condition '{' line* '}' (elses | 'ELSE' '{' line* '}')?;

arithmeticValue : arithmetic;

/* arithmetic : arithmetic ARITHMETIC_OP arithmetic | (ID | NUMBER) | (STRING | ID | NUMBER) '+' (STRING | ID | NUMBER) | '(' arithmetic ')';
 */
expression : stringArithmetic | arithmetic;

stringArithmetic : (STRING | ID) ('+' (STRING | ID))*;
atomString : STRING | ID;

arithmetic : multExpr (('+' | '-') multExpr)*;
multExpr : atom (('*' | '/') atom)*;
atom : NUMBER | ID | '(' arithmetic ')';

condition : multConExpr (('AND' | 'OR') multConExpr)*;
multConExpr : atomCon (('EQUAL' | 'NOT EQUAL' | 'GREATER' | 'LESS') atomCon)*;
atomCon : NUMBER | ID | '(' condition ')';

/* Arithmetic : ArithmeticValue ArithmeticOp ArithmeticValue | (String | ArithmeticValue) '+' (String | ArithmeticValue) | ('(' Arithmetic ')'); big nono fix from above */

assignments : ID '=' expression ';' | ID'[' DIGIT+ ']' '=' expression ';' | ID'[]' '=' '[' (arrayValue ','?)* ']' ';';

funcReturn : value | ID '[]'? | arithmetic | '[' (arrayValue ','?)* ']';
functions : TYPE 'FUNCTION' ID '(' (TYPE ID'[]'? ','?)* ')' '{' line* ';' 'RETURN' funcReturn ';};';

output : 'OUTPUT' (value | ID'[]'?) ';';
delay : 'DELAY' DIGIT+ ';';

arrayValue : '[' value ']' | value;
arrayStm : ID'[' DIGIT+ ']' | ID'[]' ('PUSH' value ';'| 'PULL;' | 'SIZE;');

WS : [ \t\r\n]+ -> skip ; // skip spaces, tabs, newlines
COMMENT : '#'.*?'#' -> skip ; // skip comments