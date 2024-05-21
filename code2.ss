Number FUNCTION add(Number a, Number b ) {
    WHILE (b GREATER 0) {
        a = a + 1;
        b = b - 1;
        IF (b EQUAL 1) {
            RETURN a;
        }
    }
    RETURN b;
}

OUTPUT add(0, 4);