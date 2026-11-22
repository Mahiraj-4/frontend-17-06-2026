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

const book1 = new Book("The Monsoon Code", "Aarav Mehta", 3);
const book2 = new Book("Echoes of Jaipur", "Kavita Nair", 2);
const book3 = new Book("Algorithms in Chai", "Rohan Kulkarni", 4);
const book4 = new Book("Midnight Train to Pune", "Sneha Joshi", 1);
const book5 = new Book("Stars Over Ladakh", "Vikram Rao", 3);

const bookList = [book1, book2, book3, book4, book5];

for (const book of bookList) {
  console.log(book.summary());
}