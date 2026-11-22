// Task 1 Code
const instituteName = "Apex Tuition Academy";
let studentName = "Rohan";
let monthlyFee = 1800;
let batchName = "Alpha Morning";
let isPaid = true;

console.log("Institute Name:", instituteName);
console.log("Student Name:", studentName);
console.log("Monthly Fee:", monthlyFee);
console.log("Batch Name:", batchName);
console.log("Fee Paid:", isPaid);

// Task 2: Scope Test & Reassignment
{
  var batchCode = "M9";
  let seatNo = 12;
}

console.log("Batch Code:", batchCode);
console.log("Type of seatNo outside block:", typeof seatNo);

monthlyFee = 2000;
console.log("Updated Monthly Fee:", monthlyFee);