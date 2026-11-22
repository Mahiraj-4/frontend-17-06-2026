const fs = require("fs");
const path = require("path");

process.on("uncaughtException", (err) => {
  console.error("Ledger stopped safely:", err.message);
  process.exit(1);
});

const VALID_MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

function validatePayment(entry) {
  const problems = [];

  if (!entry || typeof entry !== "object") {
    return ["Invalid payment entry object."];
  }

  const name = typeof entry.studentName === "string" ? entry.studentName.trim() : "";
  if (!/^[A-Za-z ]{3,40}$/.test(name)) {
    problems.push("Student name must be 3 to 40 letters or spaces.");
  }

  if (
    typeof entry.amount !== "number" ||
    !Number.isInteger(entry.amount) ||
    entry.amount < 1 ||
    entry.amount > 50000
  ) {
    problems.push("Amount must be a whole number between 1 and 50000.");
  }

  if (!VALID_MONTHS.includes(entry.month)) {
    problems.push("Month must be a valid full month name (e.g. March).");
  }

  const receipt = typeof entry.receiptNo === "string" ? entry.receiptNo.trim() : "";
  if (!/^TF-\d{4}$/.test(receipt)) {
    problems.push("Receipt number must match format TF-XXXX (e.g. TF-2045).");
  }

  return problems;
}

const entry = {
  studentName: process.argv[2] || "",
  amount: Number(process.argv[3]),
  month: process.argv[4] || "",
  receiptNo: process.argv[5] || ""
};

// Optional 5th CLI argument lets you test 'missing/fees.txt' directly
const targetPath = process.argv[6]
  ? path.resolve(__dirname, process.argv[6])
  : path.join(__dirname, "fees.txt");

const problems = validatePayment(entry);

if (problems.length > 0) {
  console.error("Payment validation failed:");
  for (const problem of problems) {
    console.error(`- ${problem}`);
  }
  process.exitCode = 2;
} else {
  const recordLine = `${entry.receiptNo},${entry.studentName.trim()},${entry.amount},${entry.month}\n`;
  fs.appendFileSync(targetPath, recordLine, "utf8");
  console.log(`Payment recorded: ${entry.studentName.trim()} | ₹${entry.amount} | ${entry.month} (${entry.receiptNo})`);
}