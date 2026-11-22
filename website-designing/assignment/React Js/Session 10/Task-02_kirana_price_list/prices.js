const defaultItems = [
  { name: "Toor Dal", unit: "1 kg", price: 165, stock: { shelf: 8, godown: 25 } },
  { name: "Basmati Rice", unit: "5 kg", price: 480, stock: { shelf: 3, godown: 15 } },
  { name: "Sugar", unit: "1 kg", price: 46, stock: { shelf: 12, godown: 40 } },
  { name: "Wheat Atta", unit: "10 kg", price: 430, stock: { shelf: 2, godown: 18 } },
  { name: "Mustard Oil", unit: "1 L", price: 145, stock: { shelf: 6, godown: 20 } },
  { name: "Tea Powder", unit: "500 g", price: 210, stock: { shelf: 4, godown: 12 } }
];

const savedData = localStorage.getItem("kiranaItems");
let items = savedData !== null
  ? JSON.parse(savedData)
  : JSON.parse(JSON.stringify(defaultItems));

const priceList = document.getElementById("priceList");
const message = document.getElementById("message");
const jsonView = document.getElementById("jsonView");
const addItemBtn = document.getElementById("addItemBtn");
const removeLastBtn = document.getElementById("removeLastBtn");
const resetPricesBtn = document.getElementById("resetPricesBtn");
const removeNameInput = document.getElementById("removeName");
const deleteItemBtn = document.getElementById("deleteItemBtn");
const updateStockForm = document.getElementById("updateStockForm");
const stockItemNameInput = document.getElementById("stockItemName");
const newShelfQtyInput = document.getElementById("newShelfQty");

const saveItems = () => {
  localStorage.setItem("kiranaItems", JSON.stringify(items));
};

const buildCard = ({ name, unit, price, stock }) => {
  const lowStockTag = stock.shelf < 5
    ? `<span style="background-color: red; color: white; padding: 2px 8px; border-radius: 4px; font-size: 12px; margin-left: 8px;">Low stock</span>`
    : "";

  return `
    <div style="border: 1px solid #ccc; padding: 10px; margin-bottom: 8px; border-radius: 6px;">
      <h3>${name} - ₹${price} ${lowStockTag}</h3>
      <p>Unit: ${unit} | Price: ₹${price}</p>
      <p>Shelf Stock: ${stock.shelf} | Godown Stock: ${stock.godown}</p>
    </div>
  `;
};

const renderCards = () => {
  priceList.innerHTML = "";
  jsonView.textContent = JSON.stringify(items, null, 2);

  if (items.length === 0) {
    message.textContent = "No items left";
    return;
  }

  let cardsHTML = "";
  for (const item of items) {
    cardsHTML += buildCard(item);
  }
  priceList.innerHTML = cardsHTML;
};

// Task 2: Default parameters in addItem
const addItem = (name, price, unit = "1 kg", shelf = 10) => {
  const newItem = {
    name,
    unit,
    price,
    stock: { shelf, godown: 20 }
  };
  items.push(newItem);
  saveItems();
  message.textContent = "";
  renderCards();
};

// Seed the two test calls once if not already present
if (!items.some(item => item.name === "Atta" && item.price === 420)) {
  addItem("Sugar", 48);
  addItem("Atta", 420, "5 kg", 3);
}

addItemBtn.addEventListener("click", () => {
  addItem("Sunflower Oil", 155, "1 L", 7);
});

removeLastBtn.addEventListener("click", () => {
  if (items.length === 0) {
    message.textContent = "No items left";
    return;
  }
  items.pop();
  saveItems();
  message.textContent = "";
  renderCards();
});

resetPricesBtn.addEventListener("click", () => {
  localStorage.removeItem("kiranaItems");
  items = JSON.parse(JSON.stringify(defaultItems));
  message.textContent = "";
  renderCards();
});

deleteItemBtn.addEventListener("click", () => {
  const targetName = removeNameInput.value.trim().toLowerCase();
  let foundIndex = -1;

  for (let i = 0; i < items.length; i++) {
    if (items[i].name.toLowerCase() === targetName) {
      foundIndex = i;
      break;
    }
  }

  if (foundIndex === -1) {
    message.textContent = "Item not found";
    return;
  }

  items.splice(foundIndex, 1);
  saveItems();
  message.textContent = "";
  removeNameInput.value = "";
  renderCards();
});

updateStockForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const targetName = stockItemNameInput.value.trim().toLowerCase();
  const updatedShelf = Number(newShelfQtyInput.value);
  let matchedItem = null;

  for (const item of items) {
    if (item.name.toLowerCase() === targetName) {
      matchedItem = item;
      break;
    }
  }

  if (!matchedItem) {
    message.textContent = "Item not found";
    return;
  }

  matchedItem.stock.shelf = updatedShelf;
  saveItems();
  message.textContent = "";
  stockItemNameInput.value = "";
  newShelfQtyInput.value = "";
  renderCards();
});

renderCards();