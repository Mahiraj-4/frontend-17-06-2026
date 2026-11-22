const stockItems = [
  { name: "Toor Dal (1 kg)", quantity: 4, price: 165 },
  { name: "Basmati Rice (5 kg)", quantity: 3, price: 480 },
  { name: "Sugar (1 kg)", quantity: 18, price: 46 },
  { name: "Wheat Atta (10 kg)", quantity: 7, price: 430 },
  { name: "Mustard Oil (1 L)", quantity: 12, price: 145 },
  { name: "Tea Powder (500 g)", quantity: 9, price: 210 },
  { name: "Moong Dal (1 kg)", quantity: 22, price: 130 },
  { name: "Salt Pack (1 kg)", quantity: 30, price: 28 }
];

const rawArg = process.argv[2];
const limit = rawArg === undefined ? 10 : Number(rawArg);

if (rawArg !== undefined && (rawArg.trim() === "" || Number.isNaN(limit))) {
  console.log(`Invalid low-stock limit "${rawArg}". Please provide a valid number (e.g. node kirana_stock.js 10).`);
  process.exit(1);
}

let totalStockValue = 0;
for (const item of stockItems) {
  totalStockValue += item.quantity * item.price;
}

console.log(`--- Low-Stock Report (Quantity below ${limit}) ---`);

let lowStockCount = 0;
for (const item of stockItems) {
  if (item.quantity < limit) {
    console.log(`${item.name} | Qty: ${item.quantity} | Price: ₹${item.price}`);
    lowStockCount += 1;
  }
}

if (lowStockCount === 0) {
  console.log("All items are sufficiently stocked.");
}

console.log(`Total Store Stock Value: ₹${totalStockValue}`);