function calculateRentalCost(daysRented, carType) {
    let rentalCostPerDay;

    // Determine rental cost per day based on car type
    switch (carType.toLowerCase()) {
        case 'economy':
            rentalCostPerDay = 4000;
            break;
        case 'midsize':
            rentalCostPerDay = 15000;
            break;
        case 'luxury':
            rentalCostPerDay = 20000;
            break;
        default:
            return 'Invalid car type';
    }

    // Calculate total rental cost
    const totalCost = rentalCostPerDay * daysRented;

    return totalCost;
}

// Example usage
const daysRented = 5;
const carType = 'economy';
const totalCost = calculateRentalCost(daysRented, carType);
console.log("Total rental cost:", totalCost);
