// Task 1: Indexed for loop
const fees = [1800, 2200, 1500, 2500, 1800, 3000, 1200, 2000];
let totalFees = 0;

for (let i = 0; i < fees.length; i++) {
  console.log(`Student ${i + 1}: ₹${fees[i]}`);
  totalFees += fees[i];
}

console.log("Total Fees:", totalFees);

// Task 2: while loop for instalments
let due = 16000;

while (due > 0) {
  due = Math.max(due - 3000, 0);
  console.log("Remaining due:", due);
}

// Task 3: do...while payment retry simulation
let attempt = 1;
let successAttempt = 3; // Change to 7 to verify max 5 failed attempts
let isPaid = false;

do {
  if (attempt === successAttempt) {
    console.log(`Attempt ${attempt}: paid`);
    isPaid = true;
  } else {
    console.log(`Attempt ${attempt}: failed`);
  }
  attempt++;
} while (!isPaid && attempt <= 5);