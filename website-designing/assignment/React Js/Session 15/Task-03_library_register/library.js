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

// Test issuing a book with 2 copies to Kavya, Rohan, and Isha
console.log("1st Issue:", myLibrary.issueBook("Echoes of Jaipur", "Kavya")); // Issued to Kavya
console.log("2nd Issue:", myLibrary.issueBook("Echoes of Jaipur", "Rohan")); // Issued to Rohan
console.log("3rd Issue:", myLibrary.issueBook("Echoes of Jaipur", "Isha"));  // No copies left
console.log("Issued Register:", myLibrary.issued);