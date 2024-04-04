function printInvertedRightAngleTriangle(i) {
    // Iterate from i down to 1
    for (let row = i; row >= 1; row--) {
        let pattern = '';
        // Add asterisks for each row
        for (let col = 1; col <= row; col++) {
            pattern += '* ';
        }
        // Print the pattern for the current row
        console.log(pattern);
    }
}

// Example usage
const i = 3;
printInvertedRightAngleTriangle(i);
