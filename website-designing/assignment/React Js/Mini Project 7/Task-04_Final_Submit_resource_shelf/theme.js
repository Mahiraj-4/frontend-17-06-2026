const THEME_KEY = "shelfTheme";

export function applySavedTheme(toggleBtn) {
  const savedTheme = localStorage.getItem(THEME_KEY);
  const isDark = savedTheme === "dark";

  if (isDark) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }

  if (toggleBtn) {
    toggleBtn.textContent = isDark ? "Light Mode" : "Dark Mode";
  }
}

export function toggleTheme(toggleBtn) {
  const isDark = document.body.classList.toggle("dark");
  localStorage.setItem(THEME_KEY, isDark ? "dark" : "light");

  if (toggleBtn) {
    toggleBtn.textContent = isDark ? "Light Mode" : "Dark Mode";
  }
}

export function initTheme(toggleBtn) {
  applySavedTheme(toggleBtn);
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => toggleTheme(toggleBtn));
  }
}