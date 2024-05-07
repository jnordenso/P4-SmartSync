Number grade = 85;  # Change this to any grade #
Text letterGrade = "";  # Default to empty string #

IF (grade GREATER 90) OR (grade EQUAL 90) {
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
  Text letterGrade = "";  # Default to empty string #

  IF (grade GREATER 90) OR (grade EQUAL 90) {
    letterGrade = "A";
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

DELAY grades[1];  

