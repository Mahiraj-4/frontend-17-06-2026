const boardTitle = document.getElementById("boardTitle");
const boardDate = document.getElementById("boardDate");
const noticeCount = document.getElementById("noticeCount");
const categorySelect = document.getElementById("category");
const newNoticeInput = document.getElementById("newNotice");
const addBtn = document.getElementById("addBtn");
const charCount = document.getElementById("charCount");
const noticeList = document.getElementById("noticeList");

boardTitle.innerHTML = "<span>Emerald Greens Residency</span>";
boardDate.innerHTML = "Updated: 12 Nov";

const urgentNotice = document.querySelector("li.urgent");
if (urgentNotice) {
  urgentNotice.style.color = "red";
  urgentNotice.style.fontWeight = "bold";
  urgentNotice.style.backgroundColor = "lightyellow";
}

let count = 3;
let currentBorderColor = "orange";

categorySelect.onchange = function () {
  if (categorySelect.value === "Maintenance") {
    currentBorderColor = "orange";
  } else if (categorySelect.value === "Event") {
    currentBorderColor = "green";
  } else if (categorySelect.value === "Security") {
    currentBorderColor = "red";
  }
};

function addNotice() {
  const text = newNoticeInput.value;
  if (text === "") return;

  const li = document.createElement("li");
  li.textContent = text;
  li.style.borderLeft = "4px solid " + currentBorderColor;
  li.style.paddingLeft = "8px";
  noticeList.appendChild(li);

  count += 1;
  noticeCount.textContent = "Total notices: " + count;
  newNoticeInput.value = "";
  charCount.textContent = "0";

  if (count > 3) {
    boardTitle.style.color = "red";
  }
}

addBtn.addEventListener("click", addNotice);

newNoticeInput.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    addNotice();
  } else {
    charCount.textContent = event.target.value.length;
  }
});