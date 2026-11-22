const rsvpForm = document.getElementById("rsvpForm");
const guestNameInput = document.getElementById("guestName");
const seatCountSelect = document.getElementById("seatCount");
const guestList = document.getElementById("guestList");

rsvpForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = guestNameInput.value.trim();
  const seats = seatCountSelect.value;
  if (!name) return;

  const li = document.createElement("li");
  li.style.marginBottom = "8px";
  li.innerHTML = `
    <span><strong>${name}</strong> (${seats} ${seats === "1" ? "seat" : "seats"})</span>
    <button type="button" class="status-btn" data-status="Maybe">Maybe</button>
    <button type="button" class="remove-btn">X</button>
  `;

  guestList.appendChild(li);

  guestNameInput.value = "";
  seatCountSelect.value = "1";
  guestNameInput.focus();
});