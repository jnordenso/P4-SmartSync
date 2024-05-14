grammar SmartSync;
program : line+;
line : declaration | statements | assignments | functions | output | delay;

BOOL : 'TRUE' | 'FALSE';
TYPE : 'Number' | 'Text' | 'Boolean';
ID   : [a-zA-Z][a-zA-Z0-9_]*;
STRING : '"' .*? '"';
NUMBER : '-'? [0-9]+ ('.' [0-9]+)?;
DIGIT : [0-9];
ARITHMETIC_OP : '+' | '-' | '*' | '/';
LOGIC_OP : 'EQUAL' | 'NOT EQUAL' | 'AND' | 'OR' | 'GREATER' | 'LESS';

value : BOOL | STRING | NUMBER | ID | ID'[]' 'SIZE' | ID'[' value ']' | ID'(' (funcReturn ','?)* ')';

declaration : TYPE ID '=' expression ';' | TYPE ID'[]' '=' '[' (arrayValue ','?)* ']' ';';

statements : ifStm | 'WHILE' condition '{' line* '}' | arrayStm;
            
ifStm : 'IF' condition '{' line* '}' (elses | else)?;
elses : 'ELSE' 'IF' condition '{' line* '}' (elses | else)?;
else : 'ELSE' '{' line* '}';

expression : arithmetic | stringArithmetic | value | '(' expression ')';

stringArithmetic : stringAtom ('+' stringAtom)*;
stringAtom : STRING | ID;

arithmetic : multExpr (('+' | '-') multExpr)*;
multExpr : atom (('*' | '/') atom)*;
atom : NUMBER | ID | '(' arithmetic ')';

condition : multConExpr (('AND' | 'OR') multConExpr)*;
multConExpr : atomCon (('EQUAL' | 'NOT EQUAL' | 'GREATER' | 'LESS') atomCon)*;
atomCon : NUMBER | ID | '(' condition ')';

assignments : ID '=' expression ';' | ID'[' value ']' '=' expression ';' | ID'[]' '=' '[' (arrayValue ','?)* ']' ';';

funcReturn : value | ID '[]' | arithmetic | '[' (arrayValue ','?)* ']';
functions : TYPE 'FUNCTION' ID '(' (TYPE ID'[]'? ','?)* ')' '{' line* 'RETURN' funcReturn';''}';

output : 'OUTPUT' (value | ID'[' value ']') ';';
delay : 'DELAY' value ';';

arrayValue : '[' value ']' | value;
arrayStm : ID'[]' ('PUSH' value ';'| 'PULL' ';');

WS : [ \t\r\n]+ -> skip ; // skip spaces, tabs, newlines
COMMENT : '#'.*?'#' -> skip ; // skip comments