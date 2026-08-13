let items = ["Burger", "Pizza", "Fries"];
let prices = [120, 250, 90];
let total = 0;

// Fixed: Added 'let' before loop variable 'i'
for (let i = 0; i < items.length; i++) {
    // Fixed: Corrected '=+' operator to '+=' for addition assignment
    total += prices[i];
}

console.log("Total price is: ₹" + total); // Output: Total price is: ₹460