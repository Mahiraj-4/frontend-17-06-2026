const resourceForm = document.getElementById("resourceForm");

function readForm() {
  console.log("readForm");
}

function saveResources() {
  console.log("saveResources");
}

function renderResources() {
  console.log("renderResources");
}

function deleteResource(id) {
  console.log("deleteResource", id);
}

resourceForm.addEventListener("submit", (event) => {
  event.preventDefault();
  readForm();
  saveResources();
  renderResources();
});