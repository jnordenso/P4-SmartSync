# Function for exponentiation #
Number FUNCTION power(Number base, Number exponent) {
    Number result = 1;

    WHILE exponent GREATER 0 {
        result = result * base;
        exponent = exponent - 1;
    }

    RETURN result;
}


# Function to calculate average of a Number array #
Number FUNCTION average(Number numbers[]) {
    Number sum = 0;
    Number i = 0;
    WHILE i LESS numbers[] SIZE {
        sum = sum + numbers[i];
        i = i + 1;
    }

  RETURN sum / numbers[] SIZE;
}


Text historyText[] = []; # Calculation history #
Number historyNum[] = []; # Calculation history #
Number numbers[] = []; # Array to store numbers for average #

Number FUNCTION main(Text input, Number numToAdd) {
	IF input EQUAL "avg" {
		IF numbers[] SIZE EQUAL 0 {
			OUTPUT "No numbers entered yet";
		} ELSE {
			Number avg = average(numbers[]);
			OUTPUT "Average:";
			OUTPUT avg;
			historyText[] PUSH "Average:";
			historyNum[] PUSH avg;
		}
	} ELSE IF input EQUAL "hist" {
		Number i = 0;
		WHILE i LESS historyText[] SIZE {
			OUTPUT historyText[i];
			OUTPUT historyNum[i];
			i = i + 1;
		}
	} ELSE IF input EQUAL "add" {
		numbers[] PUSH numToAdd;
		OUTPUT "Added number:";
		OUTPUT numToAdd;
	} ELSE {
		OUTPUT "Invalid input";
	}

    RETURN 0;
}

main("add", 5);
main("add", 10);
main("add", 15);
main("avg", 0);
main("add", 20);
main("avg", 0);


OUTPUT "";
OUTPUT "Power of 2 to the power of 3:";
OUTPUT power(2, 3);
OUTPUT "Power of 7 to the power of 10:";
OUTPUT power(7, 10);
OUTPUT "";
OUTPUT "Print Average history:";
OUTPUT "";
main("hist", 0);
