import { formatRupees } from "./utils.js";

export const checkBudget = (total, limit) => {
  if (total <= limit) {
    return "Within budget";
  }
  const overAmount = total - limit;
  return `Over budget by ${formatRupees(overAmount)}`;
};