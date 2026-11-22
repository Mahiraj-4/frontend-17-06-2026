export const formatRupees = (amount) => {
  return `₹${amount.toLocaleString("en-IN")}`;
};

export const sumAmounts = (amounts) => {
  let total = 0;
  for (const amount of amounts) {
    total += amount;
  }
  return total;
};