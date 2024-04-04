const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
    // Calculate the discount amount
    const discountAmount = originalPrice - discountedPrice;

    // Calculate the discount percentage
    const discountPercentage = (discountAmount / originalPrice) * 100;

    // Round off the discount percentage to two decimal places
    const roundedDiscountPercentage = Math.round(discountPercentage * 100) / 100;

    // Return the rounded discount percentage
    return roundedDiscountPercentage;
};

// Example usage:
const originalPrice = 100;
const discountedPrice = 80;

const discountPercentage = calculateDiscountPercentage(originalPrice, discountedPrice);
console.log("Discount percentage:", discountPercentage);
