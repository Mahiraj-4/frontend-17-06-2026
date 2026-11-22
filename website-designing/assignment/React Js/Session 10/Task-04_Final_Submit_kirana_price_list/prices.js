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
  : [...defaultItems];

const priceList = document.getElementById("priceList");
const basketTotalEl = document.getElementById("basketTotal");
const message = document.getElementById("message");
const jsonView = document.getElementById("jsonView");
const addItemBtn = document.getElementById("addItemBtn");
const removeLastBtn = document.getElementById("removeLastBtn");
const resetPricesBtn = document.getElementById("resetPricesBtn");
const removeNameInput = document.getElementById("removeName");
const deleteItemBtn = document.getElementById("deleteItemBtn");
const updatePriceForm = document.getElementById("updatePriceForm");
const priceItemNameInput = document.getElementById("priceItemName");
const newItemPriceInput = document.getElementById("newItemPrice");
const updateStockForm = document.getElementById("updateStockForm");
const stockItemNameInput = document.getElementById("stockItemName");
const newShelfQtyInput = document.getElementById("newShelfQty");

const saveItems = () => {
  localStorage.setItem("kiranaItems", JSON.stringify(items));
};

// Task 4: Arrow function with rest parameter
const basketTotal = (...prices) => prices.reduce((sum, price) => sum + price, 0);

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

const updateBasketDisplay = () => {
  const firstThreePrices = items.slice(0, 3).map(({ price }) => price);
  const total = basketTotal(...firstThreePrices);
  const summaryText = `Basket total: ₹${total}`;
  basketTotalEl.textContent = summaryText;
  console.log(summaryText);
};

const renderCards = () => {
  priceList.innerHTML = "";
  jsonView.textContent = JSON.stringify(items, null, 2);
  updateBasketDisplay();

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

const addItem = (name, price, unit = "1 kg", shelf = 10) => {
  const newItem = {
    name,
    unit,
    price,
    stock: { shelf, godown: 20 }
  };
  items = [...items, newItem];
  saveItems();
  message.textContent = "";
  renderCards();
};

const updatePrice = (itemName, newPrice) => {
  const target = itemName.trim().toLowerCase();
  let found = false;
  const updatedItems = [];

  for (const item of items) {
    if (item.name.toLowerCase() === target) {
      updatedItems.push({ ...item, price: newPrice });
      found = true;
    } else {
      updatedItems.push(item);
    }
  }

  if (!found) {
    message.textContent = "Item not found";
    return;
  }

  items = updatedItems;
  saveItems();
  message.textContent = "";
  renderCards();
};

addItemBtn.addEventListener("click", () => {
  addItem("Sunflower Oil", 155, "1 L", 7);
});

removeLastBtn.addEventListener("click", () => {
  if (items.length === 0) {
    message.textContent = "No items left";
    return;
  }
  items = items.slice(0, -1);
  saveItems();
  message.textContent = "";
  renderCards();
});

resetPricesBtn.addEventListener("click", () => {
  localStorage.removeItem("kiranaItems");
  items = [...defaultItems];
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

  const copy = [...items];
  copy.splice(foundIndex, 1);
  items = copy;
  saveItems();
  message.textContent = "";
  removeNameInput.value = "";
  renderCards();
});

updatePriceForm.addEventListener("submit", (event) => {
  event.preventDefault();
  updatePrice(priceItemNameInput.value, Number(newItemPriceInput.value));
  priceItemNameInput.value = "";
  newItemPriceInput.value = "";
});

updateStockForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const targetName = stockItemNameInput.value.trim().toLowerCase();
  const updatedShelf = Number(newShelfQtyInput.value);
  let found = false;
  const updatedItems = [];

  for (const item of items) {
    if (item.name.toLowerCase() === targetName) {
      updatedItems.push({
        ...item,
        stock: { ...item.stock, shelf: updatedShelf }
      });
      found = true;
    } else {
      updatedItems.push(item);
    }
  }

  if (!found) {
    message.textContent = "Item not found";
    return;
  }

  items = updatedItems;
  saveItems();
  message.textContent = "";
  stockItemNameInput.value = "";
  newShelfQtyInput.value = "";
  renderCards();
});

renderCards();