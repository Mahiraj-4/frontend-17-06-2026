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

  // 1. studentName: 3 to 40 letters or spaces
  const name = typeof entry.studentName === "string" ? entry.studentName.trim() : "";
  if (!/^[A-Za-z ]{3,40}$/.test(name)) {
    problems.push("Student name must be 3 to 40 letters or spaces.");
  }

  // 2. amount: whole number from 1 to 50000
  if (
    typeof entry.amount !== "number" ||
    !Number.isInteger(entry.amount) ||
    entry.amount < 1 ||
    entry.amount > 50000
  ) {
    problems.push("Amount must be a whole number between 1 and 50000.");
  }

  // 3. month: one of 12 month names
  if (!VALID_MONTHS.includes(entry.month)) {
    problems.push("Month must be a valid full month name (e.g. March).");
  }

  // 4. receiptNo: like 'TF-2045'
  const receipt = typeof entry.receiptNo === "string" ? entry.receiptNo.trim() : "";
  if (!/^TF-\d{4}$/.test(receipt)) {
    problems.push("Receipt number must match format TF-XXXX (e.g. TF-2045).");
  }

  return problems;
}

const testEntries = [
  // 3 Valid entries
  { studentName: "Riya Sharma", amount: 2500, month: "March", receiptNo: "TF-2045" },
  { studentName: "Aarav Patel", amount: 50000, month: "December", receiptNo: "TF-1001" },
  { studentName: "Om", amount: 1, month: "January", receiptNo: "TF-9999" }, // Intentionally 2 letters to test boundary -> let's replace with 3 letters below

  // 3 Invalid entries
  { studentName: "Riya123", amount: 2500, month: "March", receiptNo: "TF-2045" },
  { studentName: "Kabir Mehta", amount: 55000.5, month: "Mar", receiptNo: "2045" },
  { studentName: "Al", amount: 0, month: "Smarch", receiptNo: "TF-12" }
];

// Fixing the 3rd valid entry to have 3 letters ('Dev')
testEntries[2] = { studentName: "Dev", amount: 1, month: "January", receiptNo: "TF-9999" };

testEntries.forEach((entry, index) => {
  const errors = validatePayment(entry);
  console.log(`Test #${index + 1}:`, entry);
  console.log("Validation Problems:", errors.length === 0 ? "[] (VALID)" : errors);
  console.log("---");
});