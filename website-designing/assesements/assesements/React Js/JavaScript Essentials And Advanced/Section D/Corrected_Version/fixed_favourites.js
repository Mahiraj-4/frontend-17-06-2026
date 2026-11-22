const STORAGE_KEY = "favDishes";

const loadingEl = document.getElementById("loading");
const errorEl = document.getElementById("error");
const dishListEl = document.getElementById("dishList");

function loadFavourites() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    return [];
  }
}

let favourites = loadFavourites();

function saveFavourites() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(favourites));
}

function isDishFavourite(id) {
  return favourites.some((fav) => fav.id === id);
}

async function loadDishes() {
  loadingEl.style.display = "block";
  errorEl.textContent = "";

  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!res.ok) {
      throw new Error(`Server responded with status ${res.status}`);
    }

    const posts = await res.json();
    dishListEl.innerHTML = "";

    posts.slice(0, 15).forEach((post) => {
      const li = document.createElement("li");
      const titleSpan = document.createElement("span");
      titleSpan.textContent = post.title;

      const btn = document.createElement("button");
      btn.type = "button";

      const updateRowState = () => {
        const saved = isDishFavourite(post.id);
        li.classList.toggle("fav", saved);
        btn.textContent = saved ? "Remove Favourite ★" : "Add to Favourites";
      };

      updateRowState();

      btn.addEventListener("click", () => {
        if (isDishFavourite(post.id)) {
          favourites = favourites.filter((fav) => fav.id !== post.id);
        } else {
          favourites.push({ id: post.id, title: post.title });
        }
        saveFavourites();
        updateRowState();
      });

      li.appendChild(titleSpan);
      li.appendChild(btn);
      dishListEl.appendChild(li);
    });
  } catch (err) {
    errorEl.textContent = `Could not load dishes: ${err.message}`;
  } finally {
    loadingEl.style.display = "none";
  }
}

loadDishes();