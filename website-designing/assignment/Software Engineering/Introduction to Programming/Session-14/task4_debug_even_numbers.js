// Loop through numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
    // Fixed: Used strict comparison (===) instead of single assignment (=)
    if (i % 2 === 0) {
        console.log(i); // Prints the number if it is even
    }
}