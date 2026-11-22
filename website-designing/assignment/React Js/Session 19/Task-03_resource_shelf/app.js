const STORAGE_KEY = "resourceShelfData";

const resourceForm = document.getElementById("resourceForm");
const titleInput = document.getElementById("titleInput");
const urlInput = document.getElementById("urlInput");
const subjectSelect = document.getElementById("subjectSelect");
const shelfEl = document.getElementById("shelf");

function loadResources() {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw !== null ? JSON.parse(raw) : [];
}

let resources = loadResources();

function saveResources() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(resources));
}

function readForm() {
  return {
    id: Date.now(),
    title: titleInput.value.trim(),
    url: urlInput.value.trim(),
    subject: subjectSelect.value
  };
}

function renderResources() {
  if (resources.length === 0) {
    shelfEl.innerHTML = "<p>No resources added yet.</p>";
    return;
  }

  shelfEl.innerHTML = resources
    .map(
      (item) => `
        <div class="card">
          <span class="badge">${item.subject}</span>
          <h3>${item.title}</h3>
          <a href="${item.url}" target="_blank" rel="noopener noreferrer">Open Resource ↗</a>
          <button type="button" class="delete-btn" data-id="${item.id}">Delete</button>
        </div>
      `
    )
    .join("");
}

function deleteResource(id) {
  resources = resources.filter((item) => item.id !== id);
  saveResources();
  renderResources();
}

resourceForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const newResource = readForm();
  if (!newResource.title || !newResource.url) return;

  resources.push(newResource);
  saveResources();
  renderResources();

  resourceForm.reset();
});

shelfEl.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-btn")) {
    const id = Number(event.target.dataset.id);
    deleteResource(id);
  }
});

renderResources();