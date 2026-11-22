const items = [
  { name: "Toor Dal", unit: "1 kg", price: 165, stock: { shelf: 8, godown: 25 } },
  { name: "Basmati Rice", unit: "5 kg", price: 480, stock: { shelf: 3, godown: 15 } },
  { name: "Sugar", unit: "1 kg", price: 46, stock: { shelf: 12, godown: 40 } },
  { name: "Wheat Atta", unit: "10 kg", price: 430, stock: { shelf: 2, godown: 18 } },
  { name: "Mustard Oil", unit: "1 L", price: 145, stock: { shelf: 6, godown: 20 } },
  { name: "Tea Powder", unit: "500 g", price: 210, stock: { shelf: 4, godown: 12 } }
];

const priceList = document.getElementById("priceList");
const message = document.getElementById("message");
const addItemBtn = document.getElementById("addItemBtn");
const removeLastBtn = document.getElementById("removeLastBtn");
const removeNameInput = document.getElementById("removeName");
const deleteItemBtn = document.getElementById("deleteItemBtn");

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

    card.innerHTML = `
      <h3>${item.name}</h3>
      <p>Unit: ${item.unit} | Price: ₹${item.price}</p>
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
  message.textContent = "";
  renderCards();
});

removeLastBtn.addEventListener("click", function () {
  if (items.length === 0) {
    message.textContent = "No items left";
    return;
  }
  items.pop();
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
  message.textContent = "";
  removeNameInput.value = "";
  renderCards();
});

renderCards();