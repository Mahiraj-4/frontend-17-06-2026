# M1 - JavaScript Essentials And Advanced (M1-A1)
## Section D — AI-Augmented Learning

---

### 1. Exact Prompt Given to the AI Tool
> "Write a simple HTML and JavaScript program that fetches a list of posts from `https://jsonplaceholder.typicode.com/posts` using `fetch()` and `async/await`, treats each post title as a dish name inside a `<ul>`, puts an 'Add to Favourites' button next to each item, saves favourites to `localStorage` so they re-load and stay highlighted after page refresh, shows a loading indicator while fetching, and displays an error message in the DOM if the fetch fails."

---

### 2. What I Changed & Why the AI's Version Needed It
In the AI's original code, favourites were saved in `localStorage` as objects (`{ id, title }`), but the reload check used `favourites.includes(post.id)` (comparing an object to a number ID), which always returned `false` and failed to highlight saved favourites after refreshing the page. Additionally, the AI skipped checking `response.ok` before `response.json()`, so HTTP errors like 404 did not trigger the DOM error message, and users could not remove a favourite once added. In my corrected version, I replaced `includes()` with `.some(fav => fav.id === post.id)`, added toggle removal support, and added an explicit `if (!response.ok)` check.