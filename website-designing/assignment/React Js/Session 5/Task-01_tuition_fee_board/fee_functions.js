// Task 1: Function Declaration (no default parameter values)
function calcNetFee(months, monthlyFee, discountPercent) {
  const grossFee = months * monthlyFee;
  const discountAmount = (grossFee * discountPercent) / 100;
  return grossFee - discountAmount;
}

console.log("calcNetFee(6, 1800, 10):", calcNetFee(6, 1800, 10)); // 9720
console.log("calcNetFee(3, 2200, 0):", calcNetFee(3, 2200, 0));   // 6600