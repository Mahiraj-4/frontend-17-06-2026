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

async function saveBooks(books, filePath) {
  const formattedJson = JSON.stringify(books, null, 2);
  await fs.promises.writeFile(filePath, formattedJson, "utf8");
}

async function testSave(books, targetPath) {
  try {
    await saveBooks(books, targetPath);
    console.log(`Books successfully saved to: ${targetPath}`);
  } catch (err) {
    console.log(`Could not save books (Code: ${err.code || err.name}) - ${err.message}`);
  } finally {
    console.log("Save attempt finished");
  }
}

async function run() {
  const validPath = path.join(__dirname, "books.json");
  const badPath = path.join(__dirname, "data/missing/books.json");

  const books = loadBooks(validPath) || [];
  issueBook(books, 1, "Meera");

  // 1. Valid save path
  await testSave(books, validPath);

  // 2. Missing folder save path
  await testSave(books, badPath);
}

run();