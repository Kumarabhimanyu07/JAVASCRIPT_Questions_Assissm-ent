function countVowels(name) {
    // Define an array of vowels
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let vowelCount = 0;

    // Convert the name to lowercase for case-insensitive comparison
    name = name.toLowerCase();

    // Iterate through each character of the name
    for (let i = 0; i < name.length; i++) {
        // Check if the current character is a vowel
        if (vowels.includes(name[i])) {
            // If it is, increment the vowel count
            vowelCount++;
        }
    }

    return vowelCount;
}

// Example usage
const name1 = "John Doe";
const name2 = "Alicaueiopu";

console.log("Number of vowels in", name1 + ":", countVowels(name1)); // Output: Number of vowels in John Doe: 3
console.log("Number of vowels in", name2 + ":", countVowels(name2)); // Output: Number of vowels in Alice: 3
