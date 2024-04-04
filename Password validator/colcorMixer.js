function mixColors(color1, color2) {
    // Convert both colors to lowercase for case-insensitive comparison
    color1 = color1.toLowerCase();
    color2 = color2.toLowerCase();

    // Use a switch statement to determine the resulting color based on the input colors
    switch (color1) {
        case 'red':
            switch (color2) {
                case 'blue':
                    console.log("Purple");
                    break;
                case 'yellow':
                    console.log("Orange");
                    break;
                default:
                    console.log("Invalid color combination");
                    break;
            }
            break;
        case 'blue':
            switch (color2) {
                case 'red':
                    console.log("Purple");
                    break;
                case 'yellow':
                    console.log("Green");
                    break;
                default:
                    console.log("Invalid color combination");
                    break;
            }
            break;
        case 'yellow':
            switch (color2) {
                case 'red':
                    console.log("Orange");
                    break;
                case 'blue':
                    console.log("Green");
                    break;
                default:
                    console.log("Invalid color combination");
                    break;
            }
            break;
        default:
            console.log("Invalid color combination");
            break;
    }
}

// Example usage
mixColors("red", "blue"); // Output: Purple
mixColors("blue", "yellow"); // Output: Green
mixColors("red", "green"); // Output: Invalid color combination
