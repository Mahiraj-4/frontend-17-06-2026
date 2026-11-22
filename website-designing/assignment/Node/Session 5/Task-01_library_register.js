const fs = require("fs");
const path = require("path");

function loadBooks(filePath) {
  try {
    const raw = fs.readFileSync(filePath, "utf8");
    const books = JSON.parse(raw);
    return books;
  } catch (err) {
    console.error(`Error [${err.name}]: ${err.message}`);
    return null;
  }
}

// 1. Test with valid books.json (also test after deleting one comma in books.json for SyntaxError)
const validPath = path.join(__dirname, "books.json");
const loadedBooks = loadBooks(validPath);
if (loadedBooks) {
  console.log(`Loaded ${loadedBooks.length} books successfully.`);
}

// 2. Test with a renamed / missing file (triggers ENOENT)
const missingPath = path.join(__dirname, "renamed_books.json");
loadBooks(missingPath);