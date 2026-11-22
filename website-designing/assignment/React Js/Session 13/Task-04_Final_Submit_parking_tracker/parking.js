const vehicleInput = document.getElementById("vehicleInput");
const parkBtn = document.getElementById("parkBtn");
const attemptsEl = document.getElementById("attempts");
const msgEl = document.getElementById("msg");
const slotCountEl = document.getElementById("slotCount");
const parkedListEl = document.getElementById("parkedList");

const MAX_SLOTS = 5;
const parkedVehicles = [];
let attempts = 0;

function validateVehicleNo(no) {
  if (no.length !== 10 || !no.startsWith("GJ")) {
    throw new Error("Invalid vehicle number");
  }
}

function parkVehicle(no) {
  validateVehicleNo(no);

  // Bug fixed: Corrected misspelled variable name 'parkedVehicls' to 'parkedVehicles' to prevent ReferenceError
  if (parkedVehicles.includes(no)) {
    const err = new Error("Vehicle already parked");
    err.name = "DuplicateError";
    throw err;
  }

  if (parkedVehicles.length >= MAX_SLOTS) {
    const err = new Error("Parking full");
    err.name = "ParkingFullError";
    throw err;
  }

  parkedVehicles.push(no);
}

function renderParkedVehicles() {
  parkedListEl.innerHTML = "";
  slotCountEl.textContent = parkedVehicles.length;

  for (const vehicle of parkedVehicles) {
    const li = document.createElement("li");
    li.textContent = vehicle;
    parkedListEl.appendChild(li);
  }
}

parkBtn.addEventListener("click", function () {
  const vehicleNo = vehicleInput.value.trim().toUpperCase();

  try {
    parkVehicle(vehicleNo);
    msgEl.style.color = "green";
    msgEl.textContent = `Parked: ${vehicleNo}`;
    renderParkedVehicles();
  } catch (error) {
    msgEl.style.color = "red";
    if (error.name === "ParkingFullError") {
      msgEl.textContent = "Parking full";
    } else if (error.name === "DuplicateError") {
      msgEl.textContent = "Duplicate vehicle: This vehicle is already parked.";
    } else {
      msgEl.textContent = error.message;
    }
  } finally {
    vehicleInput.value = "";
    vehicleInput.focus();
    attempts += 1;
    attemptsEl.textContent = attempts;
  }
});