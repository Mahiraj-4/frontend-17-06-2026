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
const addItemBtn = document.getElementById("addItemBtn");
const removeLastBtn = document.getElementById("removeLastBtn");
const removeNameInput = document.getElementById("removeName");
const deleteItemBtn = document.getElementById("deleteItemBtn");
const updateStockForm = document.getElementById("updateStockForm");
const stockItemNameInput = document.getElementById("stockItemName");
const newShelfQtyInput = document.getElementById("newShelfQty");

function saveItems() {
  localStorage.setItem("kiranaItems", JSON.stringify(items));
}

function renderCards() {
  priceList.innerHTML = "";

  if (items.length === 0) {
    message.textContent = "No items left";
    return;
  }

  for (const item of items) {
    const card = document.createElement("div");
    card.style.border = "1px solid #ccc";
    card.style.padding = "10px";
    card.style.marginBottom = "8px";
    card.style.borderRadius = "6px";

    const lowStockTag = item.stock.shelf < 5
      ? `<span style="background-color: red; color: white; padding: 2px 8px; border-radius: 4px; font-size: 12px; margin-left: 8px;">Low stock</span>`
      : "";

    card.innerHTML = `
      <h3>${item.name} ${lowStockTag}</h3>
      <p>Unit: ${item.unit} | Price: ₹${item.price}</p>
      <p>Shelf Stock: ${item.stock.shelf} | Godown Stock: ${item.stock.godown}</p>
    `;

    priceList.appendChild(card);
  }
}

addItemBtn.addEventListener("click", function () {
  items.push({
    name: "Sunflower Oil",
    unit: "1 L",
    price: 155,
    stock: { shelf: 7, godown: 20 }
  });
  saveItems();
  message.textContent = "";
  renderCards();
});

removeLastBtn.addEventListener("click", function () {
  if (items.length === 0) {
    message.textContent = "No items left";
    return;
  }
  items.pop();
  saveItems();
  message.textContent = "";
  renderCards();
});

deleteItemBtn.addEventListener("click", function () {
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

updateStockForm.addEventListener("submit", function (event) {
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