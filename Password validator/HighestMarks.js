function findHighestMarks(marks) {
    // Initialize highestMarks with the first student's marks
    let highestMarks = marks[0];
    
    // Iterate through the marks array starting from index 1
    for (let i = 1; i < marks.length; i++) {
        // Update highestMarks if the current student's marks are higher
        highestMarks = marks[i] > highestMarks ? marks[i] : highestMarks;
    }

    return highestMarks; // Return the highest marks
}

// Example usage
const marks = [85, 92, 78, 95, 88];
const highestMarks = findHighestMarks(marks);
console.log("Highest marks:", highestMarks);
