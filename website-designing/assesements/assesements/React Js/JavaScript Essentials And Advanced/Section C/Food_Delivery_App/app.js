const CART_STORAGE_KEY = "foodDeliveryCart";

const menuDishes = [
  { id: 1, name: "Paneer Butter Masala", price: 220, category: "Main Course", isVegetarian: true },
  { id: 2, name: "Hyderabadi Chicken Biryani", price: 280, category: "Main Course", isVegetarian: false },
  { id: 3, name: "Masala Dosa", price: 120, category: "South Indian", isVegetarian: true },
  { id: 4, name: "Tandoori Chicken", price: 310, category: "Starters", isVegetarian: false },
  { id: 5, name: "Cold Coffee", price: 95, category: "Beverage", isVegetarian: true },
  { id: 6, name: "Gulab Jamun (2 pcs)", price: 75, category: "Dessert", isVegetarian: true }
];

const restaurantSelect = document.getElementById("restaurantSelect");
const restaurantStatus = document.getElementById("restaurantStatus");
const browseTabBtn = document.getElementById("browseTabBtn");
const viewCartTabBtn = document.getElementById("viewCartTabBtn");
const clearCartBtn = document.getElementById("clearCartBtn");
const cartCountEl = document.getElementById("cartCount");
const browseSection = document.getElementById("browseSection");
const cartSection = document.getElementById("cartSection");
const menuGrid = document.getElementById("menuGrid");
const cartItemsList = document.getElementById("cartItemsList");
const cartTotalEl = document.getElementById("cartTotal");

function loadCart() {
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (error) {
    return [];
  }
}

let cart = loadCart();

function saveCart() {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
}

function updateCartUI() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCountEl.textContent = totalItems;

  cartItemsList.innerHTML = "";
  if (cart.length === 0) {
    cartItemsList.innerHTML = "<li>Your cart is empty.</li>";
    cartTotalEl.textContent = "Total: Rs 0";
    return;
  }

  let grandTotal = 0;
  for (const item of cart) {
    const subtotal = item.price * item.quantity;
    grandTotal += subtotal;

    const li = document.createElement("li");
    li.style.marginBottom = "8px";
    li.textContent = `${item.name} — Qty: ${item.quantity} × Rs ${item.price} = Rs ${subtotal}`;
    cartItemsList.appendChild(li);
  }

  cartTotalEl.textContent = `Grand Total: Rs ${grandTotal}`;
}

function addToCart(dishId) {
  const dish = menuDishes.find((d) => d.id === dishId);
  if (!dish) return;

  const existingItem = cart.find((item) => item.id === dishId);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: dish.id,
      name: dish.name,
      price: dish.price,
      quantity: 1
    });
  }

  saveCart();
  updateCartUI();
}

function renderMenu() {
  menuGrid.innerHTML = menuDishes
    .map(
      (dish) => `
        <div class="dish-card">
          <span class="badge ${dish.isVegetarian ? "veg" : "non-veg"}">
            ${dish.isVegetarian ? "Veg" : "Non-Veg"} • ${dish.category}
          </span>
          <h3>${dish.name}</h3>
          <p><strong>Rs ${dish.price}</strong></p>
          <button type="button" class="add-btn" data-id="${dish.id}">Add to Cart</button>
        </div>
      `
    )
    .join("");
}

async function loadRestaurants() {
  restaurantStatus.style.color = "#475569";
  restaurantStatus.textContent = "Loading restaurants…";

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const users = await response.json();
    restaurantStatus.textContent = "";

    for (const user of users) {
      const option = document.createElement("option");
      option.value = user.id;
      option.textContent = user.name;
      restaurantSelect.appendChild(option);
    }
  } catch (error) {
    restaurantStatus.style.color = "#dc2626";
    restaurantStatus.textContent = `Failed to load restaurants (${error.message})`;
  }
}

browseTabBtn.addEventListener("click", () => {
  browseSection.classList.remove("hidden");
  cartSection.classList.add("hidden");
  browseTabBtn.classList.add("active");
  viewCartTabBtn.classList.remove("active");
});

viewCartTabBtn.addEventListener("click", () => {
  cartSection.classList.remove("hidden");
  browseSection.classList.add("hidden");
  viewCartTabBtn.classList.add("active");
  browseTabBtn.classList.remove("active");
  updateCartUI();
});

clearCartBtn.addEventListener("click", () => {
  cart = [];
  saveCart();
  updateCartUI();
});

menuGrid.addEventListener("click", (event) => {
  if (event.target.classList.contains("add-btn")) {
    const dishId = Number(event.target.dataset.id);
    addToCart(dishId);
  }
});

renderMenu();
updateCartUI();
loadRestaurants();