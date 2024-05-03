Number grade = 85;  # Change this to any grade #
Text letterGrade = "";  # Default to empty string #

IF grade GREATER 90 OR grade EQUAL 90 {
  letterGrade = "A";
} ELSE IF grade GREATER 80 OR grade EQUAL 80 {
  letterGrade = "B";
} ELSE IF grade GREATER 70 OR grade EQUAL 70 {
  letterGrade = "C";
} ELSE IF grade GREATER 60 OR grade EQUAL 60 {
  letterGrade = "D";
} ELSE {
  letterGrade = "F";
}
# Output the grade and letter grade #
