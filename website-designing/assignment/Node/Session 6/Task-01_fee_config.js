const token = process.env.FEE_ADMIN_TOKEN;
const port = process.env.FEE_PORT || "4000";

if (!token || token.trim() === "") {
  console.error("Error: FEE_ADMIN_TOKEN environment variable is missing.");
  process.exit(1);
}

const cleanToken = token.trim();
const maskedToken =
  "*".repeat(Math.max(0, cleanToken.length - 3)) + cleanToken.slice(-3);

console.log(`Fee Server Port: ${port}`);
console.log(`Admin Token: ${maskedToken}`);