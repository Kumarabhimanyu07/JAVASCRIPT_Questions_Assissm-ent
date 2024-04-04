function calculateTotalBill(costPerDish, numberOfPeople) {
    // Calculate total bill
    const totalBill = costPerDish * numberOfPeople;

    // Calculate bill per person
    const billPerPerson = totalBill / numberOfPeople;

    // Create an object to store the results
    const billDetails = {
        totalBill: totalBill,
        billPerPerson: billPerPerson
    };

    return billDetails;
}

// Example usage
const costPerDish = 250; // Cost of each dish
const numberOfPeople = 4; // Number of people sharing the dish
const bill = calculateTotalBill(costPerDish, numberOfPeople);
console.log("Total bill:", bill.totalBill);
console.log("Bill per person:", bill.billPerPerson);
