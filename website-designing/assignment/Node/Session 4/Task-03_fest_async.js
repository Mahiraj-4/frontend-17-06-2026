const fs = require("fs");
const path = require("path");

const workshopsFile = path.join(__dirname, "workshops.txt");
const participantsFile = path.join(__dirname, "participants.txt");
const feesFile = path.join(__dirname, "fees.txt");

function countLines(text) {
  return text.split(/\r?\n/).filter((line) => line.trim() !== "").length;
}

async function main() {
  const workshopsData = await fs.promises.readFile(workshopsFile, "utf8");
  const participantsData = await fs.promises.readFile(participantsFile, "utf8");
  const feesData = await fs.promises.readFile(feesFile, "utf8");

  const feeLines = feesData.split(/\r?\n/).filter((line) => line.trim() !== "");
  const totalFee = feeLines.reduce(
    (sum, line) => sum + Number(line.replace(/[^0-9.]/g, "")),
    0
  );

  console.log(`workshops.txt lines: ${countLines(workshopsData)}`);
  console.log(`participants.txt lines: ${countLines(participantsData)}`);
  console.log(`fees.txt lines: ${feeLines.length}`);
  console.log(`Total Fee Collected: ₹${totalFee}`);
}

main().catch((err) => {
  console.error("Could not load fest records:", err.message);
});