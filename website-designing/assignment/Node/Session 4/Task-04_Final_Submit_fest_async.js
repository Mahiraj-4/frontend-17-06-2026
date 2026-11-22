const fs = require("fs");
const path = require("path");

const workshopsFile = path.join(__dirname, "workshops.txt");
const participantsFile = path.join(__dirname, "participants.txt");
const feesFile = path.join(__dirname, "fees.txt");

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function countLines(text) {
  return text.split(/\r?\n/).filter((line) => line.trim() !== "").length;
}

async function readWithDelay(filePath) {
  await wait(500);
  return fs.promises.readFile(filePath, "utf8");
}

async function main() {
  // 1. Sequential reads (one after another)
  const seqStart = Date.now();
  const workshopsSeq = await readWithDelay(workshopsFile);
  const participantsSeq = await readWithDelay(participantsFile);
  const feesSeq = await readWithDelay(feesFile);
  const seqElapsed = Date.now() - seqStart;

  // 2. Parallel reads (together with Promise.all)
  const parStart = Date.now();
  const [workshopsPar, participantsPar, feesPar] = await Promise.all([
    readWithDelay(workshopsFile),
    readWithDelay(participantsFile),
    readWithDelay(feesFile)
  ]);
  const parElapsed = Date.now() - parStart;

  const feeLines = feesPar.split(/\r?\n/).filter((line) => line.trim() !== "");
  const totalFee = feeLines.reduce(
    (sum, line) => sum + Number(line.replace(/[^0-9.]/g, "")),
    0
  );

  console.log(`workshops.txt lines: ${countLines(workshopsPar)}`);
  console.log(`participants.txt lines: ${countLines(participantsPar)}`);
  console.log(`fees.txt lines: ${feeLines.length}`);
  console.log(`Total Fee Collected: ₹${totalFee}`);
  console.log(`Sequential elapsed: ${seqElapsed} ms`);
  console.log(`Parallel (Promise.all) elapsed: ${parElapsed} ms`);
}

main().catch((err) => {
  console.error("Could not load fest records:", err.message);
});

/*
Sample Output (run with `node fest_async.js`):
workshops.txt lines: 5
participants.txt lines: 5
fees.txt lines: 5
Total Fee Collected: ₹4000
Sequential elapsed: 1516 ms
Parallel (Promise.all) elapsed: 508 ms
*/