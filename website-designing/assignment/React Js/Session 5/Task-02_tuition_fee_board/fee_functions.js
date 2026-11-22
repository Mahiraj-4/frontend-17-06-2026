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

console.log("lateFee(3):", lateFee(3)); // 150
console.log("lateFee(5):", lateFee(5)); // 250
console.log("lateFee(8):", lateFee(8)); // 550