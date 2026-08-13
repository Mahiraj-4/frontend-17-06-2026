function calculateCartAmount(cartAmount) {
    let discountPercent = 0;

    // Nested If structure to check discount slabs
    if (cartAmount > 1000) {
        if (cartAmount > 2000) {
            discountPercent = 20; // 20% discount for amount > 2000
        } else {
            discountPercent = 10; // 10% discount for amount > 1000 and <= 2000
        }
    } else {
        discountPercent = 0;     // No discount for amount <= 1000
    }

    let discountAmount = (cartAmount * discountPercent) / 100;
    let finalAmount = cartAmount - discountAmount;

    console.log(`Original Cart Amount: ₹${cartAmount}`);
    console.log(`Discount Applied: ${discountPercent}%`);
    console.log(`Final Amount to Pay: ₹${finalAmount}`);
}

// Example usage:
calculateCartAmount(2500); // 20% discount -> ₹2000
calculateCartAmount(1500); // 10% discount -> ₹1350