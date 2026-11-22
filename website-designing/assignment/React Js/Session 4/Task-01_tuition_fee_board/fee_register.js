// Task 1: Indexed for loop
const fees = [1800, 2200, 1500, 2500, 1800, 3000, 1200, 2000];
let totalFees = 0;

for (let i = 0; i < fees.length; i++) {
  console.log(`Student ${i + 1}: ₹${fees[i]}`);
  totalFees += fees[i];
}

console.log("Total Fees:", totalFees);