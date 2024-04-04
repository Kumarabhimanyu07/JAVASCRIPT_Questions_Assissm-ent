const calculateTotalCost = (cart) => {
    // Initialize total cost
    let totalCost = 0;

    // Iterate over each item in the cart
    cart.forEach(item => {
        // Calculate the cost of the item (unit price * quantity)
        const itemCost = item.unitPrice * item.quantity;
        
        // Add the cost of the item to the total cost
        totalCost += itemCost;
    });

    // Return the total cost
    return totalCost;
};

// Example usage:
const cart = [
    { unitPrice: 10, quantity: 2 },
    { unitPrice: 15, quantity: 1 },
    { unitPrice: 5, quantity: 3 }
];

const totalCost = calculateTotalCost(cart);
console.log("Total cost:", totalCost);
