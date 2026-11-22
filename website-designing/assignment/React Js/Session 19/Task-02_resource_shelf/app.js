const STORAGE_KEY = "resourceShelfData";

const resourceForm = document.getElementById("resourceForm");
const titleInput = document.getElementById("titleInput");
const urlInput = document.getElementById("urlInput");
const subjectSelect = document.getElementById("subjectSelect");

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
  console.log("Current resources:", resources);
}

function deleteResource(id) {
  console.log("deleteResource", id);
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

renderResources();