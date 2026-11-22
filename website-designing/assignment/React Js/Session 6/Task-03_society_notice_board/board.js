// Task 1: Select elements by ID and update innerHTML
const boardTitle = document.getElementById("boardTitle");
const boardDate = document.getElementById("boardDate");

boardTitle.innerHTML = "<span>Emerald Greens Residency</span>";
boardDate.innerHTML = "Updated: 12 Nov";

// Task 2: Style the urgent notice via JS
const urgentNotice = document.querySelector("li.urgent");
urgentNotice.style.color = "red";
urgentNotice.style.fontWeight = "bold";
urgentNotice.style.backgroundColor = "lightyellow";

// Task 3: Read input value and add as 4th notice
const newNoticeInput = document.getElementById("newNotice");
const noticeList = document.getElementById("noticeList");

const text = newNoticeInput.value;
noticeList.innerHTML += "<li>" + text + "</li>";