const rates = {
  1: { price: 400 },
  2: { price: 550 },
  3: { price: 700 }
};

function getRate(zone) {
  // Fixed: Return 0 for unknown zones instead of crashing on rates[zone].price
  if (!rates[zone]) {
    return 0;
  }
  return rates[zone].price;
}

function applyDiscount(zone, isStudent) {
  const baseRate = getRate(zone);
  return isStudent ? baseRate * 0.75 : baseRate;
}

function calculate(zone, isStudent) {
  const finalAmount = applyDiscount(zone, isStudent);
  console.log(`trace_demo -> Zone ${zone} | Student: ${isStudent} | Total: ₹${finalAmount.toFixed(2)}`);
  return finalAmount;
}

// Calling with zone 5 safely returns 0 after fix
calculate(5, true);
calculate(2, true);