function removeDuplicates(cart) {
    // Create a new Set from the customer's cart to remove duplicates
    const uniqueCart = new Set(cart);

    // Convert the Set back to an array
    const newCart = Array.from(uniqueCart);

    return newCart;
}

// Example usage
const customerCartWithDuplicates = ['item1', 'item2', 'item1', 'item3', 'item2'];
console.log("Customer's cart with duplicates:", customerCartWithDuplicates);

const newCartWithoutDuplicates = removeDuplicates(customerCartWithDuplicates);
console.log("Customer's cart without duplicates:", newCartWithoutDuplicates);
