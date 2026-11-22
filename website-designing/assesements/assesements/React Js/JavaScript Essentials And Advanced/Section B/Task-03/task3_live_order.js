const dishNameInput = document.getElementById("dishNameInput");
const quantityInput = document.getElementById("quantityInput");
const addToCartBtn = document.getElementById("addToCartBtn");
const errorMessageEl = document.getElementById("errorMessage");
const cartListEl = document.getElementById("cartList");

addToCartBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const dishName = dishNameInput.value.trim();
  const rawQuantity = quantityInput.value.trim();
  const quantity = Number(rawQuantity);

  if (dishName === "" || rawQuantity === "" || Number.isNaN(quantity) || quantity <= 0) {
    errorMessageEl.textContent = "Please enter both a valid dish name and a quantity of at least 1.";
    return;
  }

  errorMessageEl.textContent = "";

  const li = document.createElement("li");
  li.textContent = `${dishName} — Quantity: ${quantity}`;
  cartListEl.appendChild(li);

  dishNameInput.value = "";
  quantityInput.value = "";
  dishNameInput.focus();
});