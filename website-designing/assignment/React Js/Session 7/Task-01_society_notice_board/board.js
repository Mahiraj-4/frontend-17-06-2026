const boardTitle = document.getElementById("boardTitle");
const boardDate = document.getElementById("boardDate");
const noticeCount = document.getElementById("noticeCount");
const newNoticeInput = document.getElementById("newNotice");
const addBtn = document.getElementById("addBtn");
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

addBtn.addEventListener("click", function () {
  const text = newNoticeInput.value;
  if (text === "") return;

  const li = document.createElement("li");
  li.textContent = text;
  noticeList.appendChild(li);

  count += 1;
  noticeCount.textContent = "Total notices: " + count;
  newNoticeInput.value = "";

  if (count > 3) {
    boardTitle.style.color = "red";
  }
});