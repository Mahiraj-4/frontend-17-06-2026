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
    throw err;
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

async function handleRequest(action, payload = {}) {
  const defaultFile = path.join(__dirname, "books.json");

  try {
    switch (action) {
      case "list": {
        const books = loadBooks(payload.filePath || defaultFile);
        return { ok: true, data: books };
      }

      case "issue": {
        const filePath = payload.filePath || defaultFile;
        const books = loadBooks(filePath);
        const updatedBook = issueBook(books, payload.id, payload.memberName);
        await saveBooks(books, filePath);
        return { ok: true, data: updatedBook };
      }

      case "save": {
        const filePath = payload.filePath || defaultFile;
        await saveBooks(payload.books, filePath);
        return { ok: true, data: `Saved to ${filePath}` };
      }

      default:
        throw new LibraryError(`Unknown action: "${action}"`, "UNKNOWN_ACTION");
    }
  } catch (err) {
    return {
      ok: false,
      code: err.code || err.name || "ERROR",
      message: err.message
    };
  }
}

async function main() {
  const validFile = path.join(__dirname, "books.json");
  const badSavePath = path.join(__dirname, "data/missing/books.json");

  // 1. Valid 'list'
  const res1 = await handleRequest("list", { filePath: validFile });
  console.log("1. list:", res1);

  // 2. Valid 'issue'
  const res2 = await handleRequest("issue", {
    filePath: validFile,
    id: 2,
    memberName: "Aarav"
  });
  console.log("2. issue (valid):", res2);

  // 3. 'issue' with missing book ID
  const res3 = await handleRequest("issue", {
    filePath: validFile,
    id: 99,
    memberName: "Rohan"
  });
  console.log("3. issue (missing id):", res3);

  // 4. 'issue' with empty member name
  const res4 = await handleRequest("issue", {
    filePath: validFile,
    id: 1,
    memberName: ""
  });
  console.log("4. issue (empty name):", res4);

  // 5. 'save' to a bad folder path
  const currentBooks = res1.ok ? res1.data : [];
  const res5 = await handleRequest("save", {
    books: currentBooks,
    filePath: badSavePath
  });
  console.log("5. save (bad path):", res5);

  // 6. Unknown action
  const res6 = await handleRequest("delete", { id: 1 });
  console.log("6. unknown action:", res6);
}

main();