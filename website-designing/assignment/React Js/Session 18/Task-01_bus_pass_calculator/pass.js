const zoneRates = [
  { zone: 1, monthlyRate: 400 },
  { zone: 2, monthlyRate: 550 },
  { zone: 3, monthlyRate: 700 }
];

// Page load table of zone rates
console.table(zoneRates);

const passForm = document.getElementById("passForm");
const zoneInput = document.getElementById("zoneInput");
const studentCheckbox = document.getElementById("studentCheckbox");
const resultEl = document.getElementById("result");

passForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const zone = Number(zoneInput.value);
  const isStudent = studentCheckbox.checked;

  // Input checkpoint
  console.log("Checkpoint - Inputs:", { zone, isStudent });

  let rate = 0;
  if (zone === 1) rate = 400;
  else if (zone === 2) rate = 550;
  else if (zone === 3) rate = 700;

  const discount = isStudent ? rate * 0.25 : 0;
  const finalPrice = rate - discount;

  // Result checkpoint
  console.log("Checkpoint - Result:", { rate, discount, finalPrice });

  resultEl.textContent = `Monthly Pass Price: ₹${finalPrice.toFixed(2)}`;
});