Number grade = 10;

IF grade GREATER 9 {
    OUTPUT "Excellent";
} ELSE {
    OUTPUT "Not Excellent";
}

Text FUNCTION add(Number a, Number b) {
    IF a LESS 0 {
        RETURN "a is less than 0";
    } ELSE {
        RETURN "a is greater than 0";
    }
}

OUTPUT add(1, 2);