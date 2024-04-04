function validatePassword(password, confirmPassword) {
    // Check if passwords match using if else statement
    if (password === confirmPassword) {
        console.log("Password Matched. Password validation Successful.");
    } else {
        console.log("Password didn't match. Password validation unsuccessful");
    }
}

// Example usage
let password = "password123";
let confirmPassword = "password123";

validatePassword(password, confirmPassword);
