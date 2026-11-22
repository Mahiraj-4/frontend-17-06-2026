// Task 1: Arithmetic Operators
let monthlyFee = 1800;
let months = 6;
let lateDays = 4;

let baseTotal = monthlyFee * months;
let siblingDiscount = baseTotal * 0.10;
let lateFee = lateDays * 50;
let netPayable = baseTotal - siblingDiscount + lateFee;

console.log("netPayable:", netPayable);