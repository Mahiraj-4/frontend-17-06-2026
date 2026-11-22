import { formatRupees, sumAmounts } from "./utils.js";
import categories, { CATEGORY_COLORS } from "./categories.js";
import { loadExpenses, saveExpenses } from "./storage.js";

const expenseForm = document.getElementById("expenseForm");
const titleInput = document.getElementById("titleInput");
const amountInput = document.getElementById("amountInput");
const categorySelect = document.getElementById("category");
const expenseListEl = document.getElementById("expenseList");
const totalEl = document.getElementById("total");

const defaultExpenses = [
  { title: "Morning Chai & Snacks", amount: 60, category: "Food" },
  { title: "Metro Card Recharge", amount: 450, category: "Travel" },
  { title: "Room Rent Share", amount: 4500, category: "Rent" },
  { title: "Mobile Data Pack", amount: 299, category: "Recharge" },
  { title: "Grocery & Vegetables", amount: 1150, category: "Food" },
  { title: "Stationery & Printouts", amount: 180, category: "Other" }
];

const saved = loadExpenses();
let expenses = saved !== null ? saved : [...defaultExpenses];

for (const cat of categories) {
  const option = document.createElement("option");
  option.value = cat;
  option.textContent = cat;
  option.style.color = CATEGORY_COLORS[cat];
  option.style.fontWeight = "bold";
  categorySelect.appendChild(option);
}

const renderExpenses = () => {
  expenseListEl.innerHTML = "";
  const amounts = [];

  for (const expense of expenses) {
    amounts.push(expense.amount);

    const li = document.createElement("li");
    li.style.color = CATEGORY_COLORS[expense.category] || "black";
    li.textContent = `[${expense.category}] ${expense.title} - ${formatRupees(expense.amount)}`;
    expenseListEl.appendChild(li);
  }

  const totalAmount = sumAmounts(amounts);
  totalEl.textContent = `Total Expenses: ${formatRupees(totalAmount)}`;
};

expenseForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = titleInput.value.trim();
  const amount = Number(amountInput.value);
  const category = categorySelect.value;

  if (!title || amount <= 0) return;

  expenses = [...expenses, { title, amount, category }];
  saveExpenses(expenses);
  renderExpenses();

  titleInput.value = "";
  amountInput.value = "";
});

renderExpenses();