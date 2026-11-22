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
  }

  addBook(book) {
    this.books.push(book);
  }

  findByTitle(title) {
    return this.books.find(
      (book) => book.title.toLowerCase() === title.trim().toLowerCase()
    );
  }
}

const myLibrary = new Library("City Central Library");

myLibrary.addBook(new Book("The Monsoon Code", "Aarav Mehta", 3));
myLibrary.addBook(new Book("Echoes of Jaipur", "Kavita Nair", 2));
myLibrary.addBook(new Book("Algorithms in Chai", "Rohan Kulkarni", 4));
myLibrary.addBook(new Book("Midnight Train to Pune", "Sneha Joshi", 1));
myLibrary.addBook(new Book("Stars Over Ladakh", "Vikram Rao", 3));

console.log("Existing book search:", myLibrary.findByTitle("Echoes of Jaipur"));
console.log("Missing book search:", myLibrary.findByTitle("Lost Horizon"));