// Function to check if a number is even or odd
function isEven(num) {
    // Check if the remainder when divided by 2 is equal to 0
    if (num % 2 === 0) {
        return true;  // Returns true if the number is even
    } else {
        return false; // Returns false if the number is odd
    }
}

// Example usage:
console.log(isEven(4)); // Output: true
console.log(isEven(7)); // Output: false