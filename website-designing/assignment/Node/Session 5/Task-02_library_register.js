const fs = require("fs");
const path = require("path");

class LibraryError extends Error {
  constructor(message, code) {
    super(message);
    this.name = "LibraryError";
    this.code = code;
  }
}

function loadBooks(filePath) {
  try {
    const raw = fs.readFileSync(filePath, "utf8");
    return JSON.parse(raw);
  } catch (err) {
    console.error(`Error [${err.name}]: ${err.message}`);
    return null;
  }
}

function issueBook(books, id, memberName) {
  if (typeof memberName !== "string" || memberName.trim() === "") {
    throw new LibraryError("Member name cannot be empty.", "EMPTY_MEMBER");
  }

  const book = books.find((b) => b.id === id);
  if (!book) {
    throw new LibraryError(`Book with ID ${id} was not found.`, "BOOK_NOT_FOUND");
  }

  if (book.copies <= 0) {
    throw new LibraryError(`No copies left for "${book.title}".`, "NO_COPIES");
  }

  book.copies -= 1;
  return book;
}

const booksFile = path.join(__dirname, "books.json");
const books = loadBooks(booksFile) || [];

function testIssue(id, memberName) {
  try {
    const issued = issueBook(books, id, memberName);
    console.log(`Issued "${issued.title}" to ${memberName}. Remaining copies: ${issued.copies}`);
  } catch (err) {
    if (err instanceof LibraryError) {
      console.log(`LibraryError (${err.code}): ${err.message}`);
    } else {
      throw err;
    }
  }
}

// 1. Valid call (book id 3 starts with 1 copy, drops to 0)
testIssue(3, "Kavya");

// 2. Unknown ID 99
testIssue(99, "Rohan");

// 3. Book with 0 copies left
testIssue(3, "Isha");

// 4. Empty member name
testIssue(1, "   ");