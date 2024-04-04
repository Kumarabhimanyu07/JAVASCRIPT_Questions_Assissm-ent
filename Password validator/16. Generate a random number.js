// Self-invoking arrow function to generate a random number between 1 and 100
const randomNum = (() => {
    // Generate a random number between 1 and 100
    return Math.floor(Math.random() * 100) + 1;
})();

// Output the random number
console.log("Random number:", randomNum);
