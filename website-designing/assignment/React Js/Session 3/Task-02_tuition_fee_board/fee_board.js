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

// Student 1: 80%, paid, no permission
attendancePercent = 80;
feePaid = true;
hasPermission = false;
canWriteTest = (attendancePercent >= 75 && feePaid === true) || hasPermission === true;
console.log("Student 1 canWriteTest:", canWriteTest);

// Student 2: 70%, unpaid, permission
attendancePercent = 70;
feePaid = false;
hasPermission = true;
canWriteTest = (attendancePercent >= 75 && feePaid === true) || hasPermission === true;
console.log("Student 2 canWriteTest:", canWriteTest);

// Student 3: 60%, paid, no permission
attendancePercent = 60;
feePaid = true;
hasPermission = false;
canWriteTest = (attendancePercent >= 75 && feePaid === true) || hasPermission === true;
console.log("Student 3 canWriteTest:", canWriteTest);