const vehicleInput = document.getElementById("vehicleInput");
const parkBtn = document.getElementById("parkBtn");
const msgEl = document.getElementById("msg");

function validateVehicleNo(no) {
  if (no.length !== 10 || !no.startsWith("GJ")) {
    throw new Error("Invalid vehicle number");
  }
}

parkBtn.addEventListener("click", function () {
  const vehicleNo = vehicleInput.value.trim().toUpperCase();

  try {
    validateVehicleNo(vehicleNo);
    msgEl.style.color = "green";
    msgEl.textContent = `Valid vehicle number: ${vehicleNo}`;
  } catch (error) {
    msgEl.style.color = "red";
    msgEl.textContent = error.message;
  }
});