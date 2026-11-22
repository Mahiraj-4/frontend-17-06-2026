const fs = require("fs");
const path = require("path");

const ordersFile = path.join(__dirname, "orders.txt");
const command = process.argv[2];

if (command === "report") {
  if (!fs.existsSync(ordersFile)) {
    console.log("No orders yet");
    process.exit(0);
  }

  const data = fs.readFileSync(ordersFile, "utf8");
  const lines = data.split(/\r?\n/).filter((line) => line.trim() !== "");

  if (lines.length === 0) {
    console.log("No orders yet");
    process.exit(0);
  }

  let totalOrders = 0;
  let totalThalis = 0;

  for (const line of lines) {
    const parts = line.split(",");
    const thalis = Number(parts[2]);
    if (!Number.isNaN(thalis)) {
      totalOrders += 1;
      totalThalis += thalis;
    }
  }

  const revenue = totalThalis * 90;
  console.log(`Total Orders: ${totalOrders}`);
  console.log(`Total Thalis: ${totalThalis}`);
  console.log(`Revenue: ₹${revenue}`);
  process.exit(0);
}

if (command === "backup") {
  if (!fs.existsSync(ordersFile)) {
    console.log("No orders yet");
    process.exit(0);
  }

  const backupDir = path.join(__dirname, "backups");
  fs.mkdirSync(backupDir, { recursive: true });

  const ext = path.extname(ordersFile);
  const baseName = path.basename(ordersFile, ext);

  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const dateStr = `${year}-${month}-${day}`;

  const backupFilePath = path.join(backupDir, `${baseName}_${dateStr}${ext}`);
  fs.copyFileSync(ordersFile, backupFilePath);
  console.log(`Backup saved: ${backupFilePath}`);
  process.exit(0);
}

const customerName = process.argv[2];
const area = process.argv[3];
const thaliCount = Number(process.argv[4]);

if (!customerName || !area || Number.isNaN(thaliCount) || thaliCount <= 0) {
  console.log("Usage: node tiffin_log.js <Name> <Area> <ThaliCount> | report | backup");
  process.exit(1);
}

const line = `${customerName},${area},${thaliCount}\n`;
fs.appendFileSync(ordersFile, line, "utf8");
console.log(`Order added: ${customerName}, ${area}, ${thaliCount}`);