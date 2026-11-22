const fs = require("fs");
const path = require("path");

const ordersFile = path.join(__dirname, "orders.txt");

const customerName = process.argv[2];
const area = process.argv[3];
const thaliCount = Number(process.argv[4]);

if (!customerName || !area || Number.isNaN(thaliCount) || thaliCount <= 0) {
  console.log("Usage: node tiffin_log.js <Name> <Area> <ThaliCount>");
  process.exit(1);
}

const line = `${customerName},${area},${thaliCount}\n`;
fs.appendFileSync(ordersFile, line, "utf8");
console.log(`Order added: ${customerName}, ${area}, ${thaliCount}`);