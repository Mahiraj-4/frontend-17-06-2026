// Task 1: Function Declaration
function calcNetFee(months, monthlyFee, discountPercent) {
  const grossFee = months * monthlyFee;
  const discountAmount = (grossFee * discountPercent) / 100;
  return grossFee - discountAmount;
}

console.log("calcNetFee(6, 1800, 10):", calcNetFee(6, 1800, 10));
console.log("calcNetFee(3, 2200, 0):", calcNetFee(3, 2200, 0));

// Task 2: Function Expression
const lateFee = function (days) {
  if (days <= 0) {
    return 0;
  }
  if (days <= 5) {
    return days * 50;
  }
  return 5 * 50 + (days - 5) * 100;
};

console.log("lateFee(3):", lateFee(3));
console.log("lateFee(5):", lateFee(5));
console.log("lateFee(8):", lateFee(8));

// Task 3: Arrow Function
const formatRupees = amount => `₹${amount.toLocaleString("en-IN")}`;

console.log("formatRupees(950):", formatRupees(950));
console.log("formatRupees(9720):", formatRupees(9720));
console.log("formatRupees(125000):", formatRupees(125000));

// Task 4: buildReceipt calling the three functions
function buildReceipt(name, months, monthlyFee, discountPercent, lateDays) {
  const net = calcNetFee(months, monthlyFee, discountPercent);
  const late = lateFee(lateDays);
  const total = net + late;

  return `${name} | Fee ${formatRupees(net)} | Late ${formatRupees(late)} | Total ${formatRupees(total)}`;
}

console.log("--- Student Receipts ---");
console.log(buildReceipt("Aarav", 6, 1800, 10, 3));  // Aarav | Fee ₹9,720 | Late ₹150 | Total ₹9,870
console.log(buildReceipt("Meera", 3, 2200, 0, 0));   // Meera | Fee ₹6,600 | Late ₹0 | Total ₹6,600
console.log(buildReceipt("Kabir", 12, 2000, 15, 8)); // Kabir | Fee ₹20,400 | Late ₹550 | Total ₹20,950