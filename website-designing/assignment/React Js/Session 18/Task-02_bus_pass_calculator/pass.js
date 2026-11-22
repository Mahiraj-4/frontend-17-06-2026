const zoneRates = [
  { zone: 1, monthlyRate: 400 },
  { zone: 2, monthlyRate: 550 },
  { zone: 3, monthlyRate: 700 }
];

console.table(zoneRates);

const passForm = document.getElementById("passForm");
const zoneInput = document.getElementById("zoneInput");
const daysInput = document.getElementById("daysInput");
const studentCheckbox = document.getElementById("studentCheckbox");
const resultEl = document.getElementById("result");

passForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const zone = Number(zoneInput.value);
  const travelDays = Number(daysInput.value);
  const isStudent = studentCheckbox.checked;

  console.log("Checkpoint - Inputs:", { zone, travelDays, isStudent });

  if (travelDays < 10) {
    console.warn("Daily tickets may be cheaper");
  }

  let rate;
  if (zone === 1) {
    rate = 400;
  } else if (zone === 2) {
    rate = 550;
  } else if (zone === 3) {
    rate = 700;
  } else {
    console.error("Invalid zone entered:", zone);
    resultEl.style.color = "red";
    resultEl.textContent = "Invalid zone";
    return;
  }

  const discount = isStudent ? rate * 0.25 : 0;
  const finalPrice = rate - discount;

  console.log("Checkpoint - Result:", { rate, discount, finalPrice });

  resultEl.style.color = "green";
  resultEl.textContent = `Monthly Pass Price: ₹${finalPrice.toFixed(2)}`;
});