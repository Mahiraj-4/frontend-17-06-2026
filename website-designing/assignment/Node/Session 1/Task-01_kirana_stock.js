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

let totalStockValue = 0;

for (const item of stockItems) {
  const itemValue = item.quantity * item.price;
  totalStockValue += itemValue;
  console.log(`${item.name} | Qty: ${item.quantity} | Price: ₹${item.price} | Value: ₹${itemValue}`);
}

console.log(`Total Stock Value: ₹${totalStockValue}`);