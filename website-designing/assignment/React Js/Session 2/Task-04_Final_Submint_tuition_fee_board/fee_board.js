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

// Task 2 Code
{
  var batchCode = "M9";
  let seatNo = 12;
}

console.log("Batch Code:", batchCode);
console.log("Type of seatNo outside block:", typeof seatNo);

monthlyFee = 2000;
console.log("Updated Monthly Fee:", monthlyFee);

// Task 3 Code
let feeB = monthlyFee;
feeB = 2500;
console.log("primitive copy -> monthlyFee:", monthlyFee, "| feeB:", feeB);

const student1 = { name: "Aarav", fee: 1800 };
const student2 = student1;
student2.fee = 2200;
console.log("reference copy -> student1.fee:", student1.fee, "| student2.fee:", student2.fee);

// Task 4: Dynamic Typing
let feeStatus = 1800;
console.log("feeStatus (number):", typeof feeStatus);

feeStatus = "1800";
console.log("feeStatus (string):", typeof feeStatus);

feeStatus = false;
console.log("feeStatus (boolean):", typeof feeStatus);