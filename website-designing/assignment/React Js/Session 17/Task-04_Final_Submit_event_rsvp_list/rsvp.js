const rsvpForm = document.getElementById("rsvpForm");
const guestNameInput = document.getElementById("guestName");
const seatCountSelect = document.getElementById("seatCount");
const guestList = document.getElementById("guestList");
const countsEl = document.getElementById("counts");
const eventLog = document.getElementById("eventLog");
const clearLogBtn = document.getElementById("clearLogBtn");

const updateCounts = () => {
  const statusButtons = guestList.querySelectorAll(".status-btn");
  let goingCount = 0;
  let maybeCount = 0;

  for (const btn of statusButtons) {
    if (btn.dataset.status === "Going") {
      goingCount += 1;
    } else {
      maybeCount += 1;
    }
  }

  countsEl.textContent = `Going: ${goingCount} | Maybe: ${maybeCount}`;
};

const appendLog = (text) => {
  const line = document.createElement("div");
  line.textContent = text;
  eventLog.appendChild(line);
};

// Capturing listener on document.body (3rd arg = true)
document.body.addEventListener(
  "click",
  () => {
    appendLog("capture: body");
  },
  true
);

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
  updateCounts();

  guestNameInput.value = "";
  seatCountSelect.value = "1";
  guestNameInput.focus();
});

// Single delegated bubbling listener on guestList handling both remove and status toggle
guestList.addEventListener("click", (event) => {
  appendLog("bubble: list");

  if (event.target.classList.contains("remove-btn")) {
    const row = event.target.closest("li");
    if (row) {
      row.remove();
      updateCounts();
    }
    return;
  }

  if (event.target.classList.contains("status-btn")) {
    const nextStatus = event.target.dataset.status === "Maybe" ? "Going" : "Maybe";
    event.target.dataset.status = nextStatus;
    event.target.textContent = nextStatus;
    updateCounts();
  }
});

clearLogBtn.addEventListener("click", () => {
  eventLog.innerHTML = "";
});