class ResourceStore {
  constructor(storageKey) {
    this.storageKey = storageKey;
    const raw = localStorage.getItem(this.storageKey);
    this.resources = raw !== null ? JSON.parse(raw) : [];
  }

  _save() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.resources));
  }

  add(resource) {
    this.resources.push(resource);
    this._save();
  }

  remove(id) {
    this.resources = this.resources.filter((item) => item.id !== id);
    this._save();
  }

  getAll() {
    return this.resources;
  }
}

const store = new ResourceStore("resourceShelfData");

const resourceForm = document.getElementById("resourceForm");
const titleInput = document.getElementById("titleInput");
const urlInput = document.getElementById("urlInput");
const subjectSelect = document.getElementById("subjectSelect");
const shelfEl = document.getElementById("shelf");

function readForm() {
  return {
    id: Date.now(),
    title: titleInput.value.trim(),
    url: urlInput.value.trim(),
    subject: subjectSelect.value
  };
}

function renderResources() {
  const allResources = store.getAll();

  if (allResources.length === 0) {
    shelfEl.innerHTML = "<p>No resources added yet.</p>";
    return;
  }

  shelfEl.innerHTML = allResources
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
  store.remove(id);
  renderResources();
}

resourceForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const newResource = readForm();
  if (!newResource.title || !newResource.url) return;

  store.add(newResource);
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