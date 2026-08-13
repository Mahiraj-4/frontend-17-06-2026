function formatPrice(price) {
    // Formats numbers according to Indian currency numbering system
    const formatted = new Intl.NumberFormat('en-IN').format(price);
    return `₹${formatted}`;
}

// Product prices demonstration
console.log("Product 1 (Headphones):", formatPrice(1599));   // ₹1,599
console.log("Product 2 (Laptop):", formatPrice(49999));       // ₹49,999
console.log("Product 3 (Smart TV):", formatPrice(129900));    // ₹1,29,900