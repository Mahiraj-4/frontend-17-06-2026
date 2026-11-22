const fs = require("fs");
const path = require("path");

const workshopsFile = path.join(__dirname, "workshops.txt");
const participantsFile = path.join(__dirname, "participants.txt");
const feesFile = path.join(__dirname, "fees.txt");

function countLines(text) {
  return text.split(/\r?\n/).filter((line) => line.trim() !== "").length;
}

fs.readFile(workshopsFile, "utf8", (err1, workshopsData) => {
  if (err1) {
    console.error("Error reading workshops.txt:", err1.message);
    return;
  }

  fs.readFile(participantsFile, "utf8", (err2, participantsData) => {
    if (err2) {
      console.error("Error reading participants.txt:", err2.message);
      return;
    }

    fs.readFile(feesFile, "utf8", (err3, feesData) => {
      if (err3) {
        console.error("Error reading fees.txt:", err3.message);
        return;
      }

      console.log(`workshops.txt lines: ${countLines(workshopsData)}`);
      console.log(`participants.txt lines: ${countLines(participantsData)}`);
      console.log(`fees.txt lines: ${countLines(feesData)}`);
    });
  });
});