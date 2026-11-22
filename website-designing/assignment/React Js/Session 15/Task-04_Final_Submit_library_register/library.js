class Book {
  constructor(title, author, copies) {
    this.title = title;
    this.author = author;
    this.copies = copies;
  }

  summary() {
    return `${this.title} by ${this.author} (${this.copies} copies)`;
  }
}

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
    this.issued = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  findByTitle(title) {
    return this.books.find(
      (book) => book.title.toLowerCase() === title.trim().toLowerCase()
    );
  }

  issueBook(title, memberName) {
    const book = this.findByTitle(title);
    if (!book) {
      return "Book not found";
    }
    if (book.copies === 0) {
      return "No copies left";
    }

    book.copies -= 1;
    this.issued.push({ title: book.title, memberName });
    return `Issued to ${memberName}`;
  }
}

const myLibrary = new Library("City Central Library");

myLibrary.addBook(new Book("The Monsoon Code", "Aarav Mehta", 3));
myLibrary.addBook(new Book("Echoes of Jaipur", "Kavita Nair", 2));
myLibrary.addBook(new Book("Algorithms in Chai", "Rohan Kulkarni", 4));
myLibrary.addBook(new Book("Midnight Train to Pune", "Sneha Joshi", 1));
myLibrary.addBook(new Book("Stars Over Ladakh", "Vikram Rao", 3));

const libraryHeading = document.getElementById("libraryHeading");
const bookSelect = document.getElementById("bookSelect");
const memberInput = document.getElementById("memberInput");
const issueBtn = document.getElementById("issueBtn");
const messageEl = document.getElementById("message");
const bookTableBody = document.getElementById("bookTableBody");

libraryHeading.textContent = myLibrary.name;

function populateSelect() {
  bookSelect.innerHTML = "";
  for (const book of myLibrary.books) {
    const option = document.createElement("option");
    option.value = book.title;
    option.textContent = book.title;
    bookSelect.appendChild(option);
  }
}

function renderTable() {
  bookTableBody.innerHTML = "";
  for (const book of myLibrary.books) {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.copies}</td>
    `;
    bookTableBody.appendChild(row);
  }
}

issueBtn.addEventListener("click", () => {
  const selectedTitle = bookSelect.value;
  const memberName = memberInput.value.trim();

  if (!memberName) {
    messageEl.style.color = "red";
    messageEl.textContent = "Please enter a member name first.";
    return;
  }

  const resultMessage = myLibrary.issueBook(selectedTitle, memberName);
  messageEl.style.color = resultMessage === "No copies left" ? "red" : "green";
  messageEl.textContent = resultMessage;

  memberInput.value = "";
  renderTable();
});

populateSelect();
renderTable();