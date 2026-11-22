// Task 1: Arithmetic Operators
let monthlyFee = 1800;
let months = 6;
let lateDays = 4;

let baseTotal = monthlyFee * months;
let siblingDiscount = baseTotal * 0.10;
let lateFee = lateDays * 50;
let netPayable = baseTotal - siblingDiscount + lateFee;

console.log("netPayable:", netPayable);

// Task 2: Logical & Comparison Operators
let attendancePercent;
let feePaid;
let hasPermission;
let canWriteTest;

attendancePercent = 80;
feePaid = true;
hasPermission = false;
canWriteTest = (attendancePercent >= 75 && feePaid === true) || hasPermission === true;
console.log("Student 1 canWriteTest:", canWriteTest);

attendancePercent = 70;
feePaid = false;
hasPermission = true;
canWriteTest = (attendancePercent >= 75 && feePaid === true) || hasPermission === true;
console.log("Student 2 canWriteTest:", canWriteTest);

attendancePercent = 60;
feePaid = true;
hasPermission = false;
canWriteTest = (attendancePercent >= 75 && feePaid === true) || hasPermission === true;
console.log("Student 3 canWriteTest:", canWriteTest);

// Task 3: Fee Band Label (if / else if / else) + Ternary
let testFee;
let isFeePaid;
let bandLabel;

// Test 1: 1200
testFee = 1200;
isFeePaid = true;
if (testFee < 1500) {
  bandLabel = "Basic";
} else if (testFee >= 1500 && testFee <= 2500) {
  bandLabel = "Standard";
} else {
  bandLabel = "Premium";
}
console.log("Fee 1200:", bandLabel, "-", isFeePaid ? "Paid" : "Due");

// Test 2: 1800
testFee = 1800;
isFeePaid = false;
if (testFee < 1500) {
  bandLabel = "Basic";
} else if (testFee >= 1500 && testFee <= 2500) {
  bandLabel = "Standard";
} else {
  bandLabel = "Premium";
}
console.log("Fee 1800:", bandLabel, "-", isFeePaid ? "Paid" : "Due");

// Test 3: 2500
testFee = 2500;
isFeePaid = true;
if (testFee < 1500) {
  bandLabel = "Basic";
} else if (testFee >= 1500 && testFee <= 2500) {
  bandLabel = "Standard";
} else {
  bandLabel = "Premium";
}
console.log("Fee 2500:", bandLabel, "-", isFeePaid ? "Paid" : "Due");

// Test 4: 3000
testFee = 3000;
isFeePaid = false;
if (testFee < 1500) {
  bandLabel = "Basic";
} else if (testFee >= 1500 && testFee <= 2500) {
  bandLabel = "Standard";
} else {
  bandLabel = "Premium";
}
console.log("Fee 3000:", bandLabel, "-", isFeePaid ? "Paid" : "Due");