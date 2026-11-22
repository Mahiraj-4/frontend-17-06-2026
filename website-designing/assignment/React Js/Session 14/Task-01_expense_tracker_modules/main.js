import { formatRupees, sumAmounts } from "./utils.js";

const sampleExpenses = [
  { title: "Morning Chai & Snacks", amount: 60 },
  { title: "Metro Card Recharge", amount: 450 },
  { title: "Room Rent Share", amount: 4500 },
  { title: "Mobile Data Pack", amount: 299 },
  { title: "Grocery & Vegetables", amount: 1150 },
  { title: "Electricity Bill", amount: 1850 }
];

const expenseListEl = document.getElementById("expenseList");
const totalEl = document.getElementById("total");

const amounts = [];
for (const expense of sampleExpenses) {
  amounts.push(expense.amount);

  const li = document.createElement("li");
  li.textContent = `${expense.title} - ${formatRupees(expense.amount)}`;
  expenseListEl.appendChild(li);
}

const totalAmount = sumAmounts(amounts);
totalEl.textContent = `Total Expenses: ${formatRupees(totalAmount)}`;