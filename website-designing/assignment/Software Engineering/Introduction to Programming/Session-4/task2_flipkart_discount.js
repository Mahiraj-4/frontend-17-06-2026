function calculateFlipkartPrice(productPrice, discountPercentage, isMember) {
    // Base discount calculation
    let discountedPrice = productPrice - (productPrice * (discountPercentage / 100));

    // Extra 5% off if member (Logical AND Arithmetic)
    if (isMember) {
        discountedPrice -= discountedPrice * 0.05;
    }

    return discountedPrice;
}

// Example usage:
console.log("Final Price: ₹" + calculateFlipkartPrice(1000, 10, true)); // Output: ₹855