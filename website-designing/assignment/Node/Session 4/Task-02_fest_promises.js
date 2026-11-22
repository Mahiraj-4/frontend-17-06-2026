const fs = require("fs");
const path = require("path");
const util = require("util");

const readFileAsync = util.promisify(fs.readFile);

const workshopsFile = path.join(__dirname, "workshops.txt");
const participantsFile = path.join(__dirname, "participants.txt");
const feesFile = path.join(__dirname, "fees.txt");

function countLines(text) {
  return text.split(/\r?\n/).filter((line) => line.trim() !== "").length;
}

let workshopsLines = 0;
let participantsLines = 0;

readFileAsync(workshopsFile, "utf8")
  .then((workshopsData) => {
    workshopsLines = countLines(workshopsData);
    return readFileAsync(participantsFile, "utf8");
  })
  .then((participantsData) => {
    participantsLines = countLines(participantsData);
    return readFileAsync(feesFile, "utf8");
  })
  .then((feesData) => {
    const feesLines = countLines(feesData);
    console.log(`workshops.txt lines: ${workshopsLines}`);
    console.log(`participants.txt lines: ${participantsLines}`);
    console.log(`fees.txt lines: ${feesLines}`);
  })
  .catch((err) => {
    console.error("Failed to read fest file:", err.message);
  });