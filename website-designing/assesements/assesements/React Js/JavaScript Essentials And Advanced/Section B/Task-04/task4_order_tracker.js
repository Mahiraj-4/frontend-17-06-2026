const FAVOURITE_KEY = "favouriteRestaurantId";

const statusMessageEl = document.getElementById("statusMessage");
const restaurantListEl = document.getElementById("restaurantList");

let restaurants = [];

function renderRestaurants() {
  const savedFavouriteId = localStorage.getItem(FAVOURITE_KEY);
  restaurantListEl.innerHTML = "";

  for (const restaurant of restaurants) {
    const li = document.createElement("li");
    const isFavourite = String(restaurant.id) === savedFavouriteId;

    li.textContent = isFavourite
      ? `${restaurant.name} ★ (Favourite)`
      : restaurant.name;

    if (isFavourite) {
      li.classList.add("favourite");
    }

    li.addEventListener("click", () => {
      localStorage.setItem(FAVOURITE_KEY, String(restaurant.id));
      renderRestaurants();
    });

    restaurantListEl.appendChild(li);
  }
}

async function fetchRestaurants() {
  statusMessageEl.style.color = "#333";
  statusMessageEl.textContent = "Loading restaurants…";

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    restaurants = await response.json();
    statusMessageEl.textContent = "";
    renderRestaurants();
  } catch (error) {
    statusMessageEl.style.color = "red";
    statusMessageEl.textContent = `Error loading restaurants: ${error.message}`;
  }
}

fetchRestaurants();