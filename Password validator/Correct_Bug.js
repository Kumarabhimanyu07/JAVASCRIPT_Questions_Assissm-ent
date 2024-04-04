function doubleCartQuantity(cart) {
    // Iterate through the cart array
    for (let i = 0; i < cart.length; i++) {
        // Double the quantity of each item
        cart[i] *= 2;
    }
}

// Example usage
let cart = [1, 2, 3, 4];
console.log("Original cart:", cart);

doubleCartQuantity(cart);
console.log("Updated cart:", cart);
