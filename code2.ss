Number grade = 5; 

grade = grade + 1 / 20 * 30;

OUTPUT "grade: ";
OUTPUT grade;

Number grades[] = [1,2,3,4]; 
grades[] PULL;
grades[] PUSH 5;

OUTPUT "grades: ";
OUTPUT grades[];

OUTPUT "Length of grades: ";
OUTPUT grades[] SIZE;

IF grades[] SIZE EQUAL 4 {
    OUTPUT "grades[] has 4 elements";
} ELSE IF grades[] SIZE GREATER 4 {
    OUTPUT "grades[] has more than 4 elements";
} ELSE {
    OUTPUT "grades[] has less than 4 elements";
}

OUTPUT "grades[0]: ";
OUTPUT grades[2];

WHILE grades[] SIZE LESS 10 {
    grades[] PUSH grades[] SIZE;
}

grades[5] = 10;

OUTPUT grades[];


WHILE grade LESS 10 {
    grade = grade + 1;
}

Boolean isGradeGreaterThan90 = grade GREATER 90;

OUTPUT "isGradeGreaterThan90: ";
OUTPUT isGradeGreaterThan90;

OUTPUT "grade: ";
OUTPUT grade;

Text name = "John";
Text lastName = "Doe";

Text fullName = name + " " + lastName;

OUTPUT "fullName: ";
OUTPUT fullName;

Number FUNCTION add(Number a, Number b) {
    Number c = a + b;
    RETURN c;
}

Number sum = add(1, grade);

OUTPUT "sum: ";
OUTPUT sum;