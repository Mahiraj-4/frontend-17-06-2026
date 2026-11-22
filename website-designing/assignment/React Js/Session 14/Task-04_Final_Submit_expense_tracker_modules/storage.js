const STORAGE_KEY = "expenseTrackerData";

export const loadExpenses = () => {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw !== null ? JSON.parse(raw) : null;
};

export const saveExpenses = (expenses) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(expenses));
};