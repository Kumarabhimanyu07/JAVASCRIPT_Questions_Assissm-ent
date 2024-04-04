function calculator(num1, num2, operator) {
    let result;

    // Use a switch statement to determine which operation to perform based on the value of the operator
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            // Check if the second number is not zero to avoid division by zero
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                // Log error message if division by zero is attempted
                console.log("Error: Division by zero");
                return; // Exit the function
            }
            break;
        default:
            // Log "Invalid operator" if the operator is not one of the valid operators
            console.log("Invalid operator");
            return; // Exit the function
    }

    // Log the result of the calculation
    console.log("Result:", result);
}

// Example usage
calculator(5, 3, '+'); // Output: Result: 8
calculator(10, 5, '-'); // Output: Result: 5
calculator(6, 2, '*'); // Output: Result: 12
calculator(10, 0, '/'); // Output: Error: Division by zero
calculator(8, 4, '/'); // Output: Result: 2
calculator(5, 3, '%'); // Output: Invalid operator
