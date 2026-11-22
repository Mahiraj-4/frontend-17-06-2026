const loadingEl = document.getElementById("loading");
const errorEl = document.getElementById("error");
const dishListEl = document.getElementById("dishList");

let favourites = JSON.parse(localStorage.getItem("favDishes")) || [];

async function loadDishes() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();
    loadingEl.style.display = "none";

    posts.slice(0, 15).forEach((post) => {
      const li = document.createElement("li");
      li.textContent = post.title + " ";

      // Bug: 'favourites' holds objects { id, title }, so includes(post.id) is always false on reload
      if (favourites.includes(post.id)) {
        li.classList.add("fav");
      }

      const btn = document.createElement("button");
      btn.textContent = "Add to Favourites";
      btn.addEventListener("click", () => {
        favourites.push({ id: post.id, title: post.title });
        localStorage.setItem("favDishes", JSON.stringify(favourites));
        li.classList.add("fav");
      });

      li.appendChild(btn);
      dishListEl.appendChild(li);
    });
  } catch (err) {
    loadingEl.style.display = "none";
    errorEl.textContent = "Failed to load dishes.";
  }
}

loadDishes();