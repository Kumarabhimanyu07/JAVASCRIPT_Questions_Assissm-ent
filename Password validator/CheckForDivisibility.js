function printDivisibleByThreeNotByTwo(numbers) {
    for (let number of numbers) {
        // Check if the number is divisible by 2
        if (number % 2 === 0) {
            continue; // Skip the current iteration if the number is divisible by 2
        }
        // Check if the number is divisible by 3
        if (number % 3 === 0) {
            console.log(number); // Print the number if it's divisible by 3 but not by 2
        }
    }
}

// Example usage
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
printDivisibleByThreeNotByTwo(numbers);
