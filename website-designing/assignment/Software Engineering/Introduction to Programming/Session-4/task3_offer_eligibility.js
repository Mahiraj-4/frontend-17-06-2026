function isEligibleForOffer(age, orderValue) {
    // Relational (>=, >) and Logical (&&) operators combined
    return age >= 18 && orderValue > 500;
}

// Example usage:
console.log(isEligibleForOffer(20, 600)); // Output: true
console.log(isEligibleForOffer(16, 700)); // Output: false