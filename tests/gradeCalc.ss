Number grade = 99.75;  # Change this to any grade #
Text letterGrade = "";  # Default to empty string #

OUTPUT "Grade: ";
OUTPUT grade;

IF grade + 5 / 20 GREATER 90 {
  OUTPUT "Grade is greater than 90";

  IF grade + 5 / 20 EQUAL 100 {
    OUTPUT "Grade is 100";
  } ELSE {
    Number grade1 = grade + 5 / 20;
    OUTPUT grade1;
  }
} ELSE {
  OUTPUT "Grade is less than 90";
  Number grade1 = grade + 5 / 20;
  OUTPUT grade1;
}

Boolean isGradeGreaterThan90 = grade GREATER 90;

IF isGradeGreaterThan90 OR (grade EQUAL 90) {
  letterGrade = "A";
} ELSE IF (grade GREATER 80) OR (grade EQUAL 80) {
  letterGrade = "B";
} ELSE IF (grade GREATER 70) OR (grade EQUAL 70) {
  letterGrade = "C";
} ELSE {
  letterGrade = "F";
}

# Output the grade and letter grade #
Text outputString = "Letter Grade: " + letterGrade;
OUTPUT outputString;

Text FUNCTION calculateGrade(Number grade) {
  letterGrade = "";  # Default to empty string #

  IF (grade GREATER 90) OR (grade EQUAL 90) {
    letterGrade = "A";
    Text outputString2 = "Grade: " + letterGrade;
    OUTPUT outputString2;
  } ELSE IF (grade GREATER 80) OR (grade EQUAL 80) {
    letterGrade = "B";
  } ELSE IF (grade GREATER 70) OR (grade EQUAL 70) {
    letterGrade = "C";
  } ELSE {
    letterGrade = "F";
  }

  RETURN letterGrade;
}

letterGrade = calculateGrade(85);

# Output the grade and letter grade #
Text outputString2 = "Letter Grade2: " + letterGrade;
OUTPUT outputString2;

WHILE grade LESS 100 {
  grade = grade + 1;
  letterGrade = calculateGrade(grade);
  OUTPUT "Grade: ";
  OUTPUT grade;
  Text outputString3 = " Letter Grade: " + letterGrade;
  OUTPUT outputString3;
}


Number grades[] = [1, 2, 3, 4, 5];
OUTPUT grades[1];
grades[1] = 0;
grades[] PULL;
grades[] PUSH 6;
Number length = grades[] SIZE;
grades[] = [1, 2, 3];

Text firstName = "John";
Text lastName = "Doe";
Text fullName = firstName + " " + lastName;
OUTPUT fullName;
