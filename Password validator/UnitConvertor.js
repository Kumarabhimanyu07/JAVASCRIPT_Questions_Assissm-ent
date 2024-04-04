function celsiusToFahrenheit(celsius) {
    // Convert Celsius to Fahrenheit using the formula: (Celsius * 9/5) + 32
    return (celsius * 9/5) + 32;
}

// Example usage
const celsiusTemperature = 20;
const fahrenheitTemperature = celsiusToFahrenheit(celsiusTemperature);
console.log("Temperature in Fahrenheit:", fahrenheitTemperature);
