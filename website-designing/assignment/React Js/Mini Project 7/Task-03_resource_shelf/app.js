class ResourceStore {
  constructor(storageKey) {
    this.storageKey = storageKey;
    this.loadWarning = "";
    const raw = localStorage.getItem(this.storageKey);

    if (raw === null || raw === "") {
      this.resources = [];
      return;
    }

    try {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        this.resources = parsed;
      } else {
        this.resources = [];
        this.loadWarning = "Saved data was damaged; starting fresh";
      }
    } catch (error) {
      this.resources = [];
      this.loadWarning = "Saved data was damaged; starting fresh";
    }
  }

  _save() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.resources));
  }

  add(resource) {
    this.resources.push(resource);
    this._save();
  }

  update(updatedResource) {
    this.resources = this.resources.map((item) =>
      item.id === updatedResource.id ? updatedResource : item
    );
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
let editingId = null;

const themeToggleBtn = document.getElementById("themeToggleBtn");
const storageWarningEl = document.getElementById("storageWarning");
const resourceForm = document.getElementById("resourceForm");
const titleInput = document.getElementById("titleInput");
const urlInput = document.getElementById("urlInput");
const subjectSelect = document.getElementById("subjectSelect");
const submitBtn = document.getElementById("submitBtn");
const formErrorEl = document.getElementById("formError");
const shelfEl = document.getElementById("shelf");

// Apply saved theme on page load
const savedTheme = localStorage.getItem("shelfTheme");
if (savedTheme === "dark") {
  document.body.classList.add("dark");
  themeToggleBtn.textContent = "Light Mode";
}

themeToggleBtn.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark");
  localStorage.setItem("shelfTheme", isDark ? "dark" : "light");
  themeToggleBtn.textContent = isDark ? "Light Mode" : "Dark Mode";
});

if (store.loadWarning) {
  storageWarningEl.textContent = store.loadWarning;
}

function readForm() {
  return {
    id: editingId !== null ? editingId : Date.now(),
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
          <div class="card-actions">
            <button type="button" class="edit-btn" data-id="${item.id}">Edit</button>
            <button type="button" class="delete-btn" data-id="${item.id}">Delete</button>
          </div>
        </div>
      `
    )
    .join("");
}

function startEditResource(id) {
  const target = store.getAll().find((item) => item.id === id);
  if (!target) return;

  editingId = id;
  titleInput.value = target.title;
  urlInput.value = target.url;
  subjectSelect.value = target.subject;
  submitBtn.textContent = "Update";
  formErrorEl.textContent = "";
  titleInput.focus();
}

function deleteResource(id) {
  store.remove(id);
  if (editingId === id) {
    editingId = null;
    submitBtn.textContent = "Add";
    resourceForm.reset();
  }
  renderResources();
}

resourceForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = readForm();
  const errorMsg = validateForm(formData);

  if (errorMsg) {
    formErrorEl.textContent = errorMsg;
    return;
  }

  const isDuplicate = store.getAll().some(
    (item) =>
      item.id !== editingId &&
      item.title.toLowerCase() === formData.title.toLowerCase() &&
      item.subject.toLowerCase() === formData.subject.toLowerCase()
  );

  if (isDuplicate) {
    formErrorEl.textContent = "Already on your shelf";
    return;
  }

  formErrorEl.textContent = "";
  storageWarningEl.textContent = "";

  if (editingId !== null) {
    store.update(formData);
    editingId = null;
    submitBtn.textContent = "Add";
  } else {
    store.add(formData);
  }

  renderResources();
  resourceForm.reset();
});

shelfEl.addEventListener("click", (event) => {
  if (event.target.classList.contains("edit-btn")) {
    const id = Number(event.target.dataset.id);
    startEditResource(id);
    return;
  }

  if (event.target.classList.contains("delete-btn")) {
    const id = Number(event.target.dataset.id);
    deleteResource(id);
  }
});

renderResources();