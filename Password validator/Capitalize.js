function capitalizeFirstName(name) {
    // Check if the first character is lowercase
    const modifiedName = name.charAt(0).toLowerCase() === name.charAt(0) ?
        // Capitalize the first character if it's lowercase
        name.charAt(0).toUpperCase() + name.slice(1) :
        // Return the original string if the first character is already uppercase
        name;
    
    return modifiedName;
}

// Example usage
const userName1 = "john";
const userName2 = "mlice";

console.log(capitalizeFirstName(userName1)); // Output: "John"
console.log(capitalizeFirstName(userName2)); // Output: "Alice" (no change)
