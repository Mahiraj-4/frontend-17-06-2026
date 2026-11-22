const taskList = document.getElementById("taskList");
const messageEl = document.getElementById("message");
const addTaskForm = document.getElementById("addTaskForm");
const taskInput = document.getElementById("taskInput");
const allBtn = document.getElementById("allBtn");
const doneBtn = document.getElementById("doneBtn");
const pendingBtn = document.getElementById("pendingBtn");

let tasks = [];
let currentFilter = "all";

const updateButtonCounts = () => {
  let doneCount = 0;
  let pendingCount = 0;

  for (const task of tasks) {
    if (task.completed) {
      doneCount += 1;
    } else {
      pendingCount += 1;
    }
  }

  allBtn.textContent = `All (${tasks.length})`;
  doneBtn.textContent = `Done (${doneCount})`;
  pendingBtn.textContent = `Pending (${pendingCount})`;
};

const renderTasks = () => {
  taskList.innerHTML = "";
  updateButtonCounts();

  for (const task of tasks) {
    if (currentFilter === "done" && !task.completed) {
      continue;
    }
    if (currentFilter === "pending" && task.completed) {
      continue;
    }

    const li = document.createElement("li");
    const statusText = task.completed ? "Done" : "Pending";
    li.textContent = `${task.title} - [${statusText}]`;
    taskList.appendChild(li);
  }
};

messageEl.textContent = "Loading checklist...";

fetch("https://jsonplaceholder.typicode.com/todos?userId=3")
  .then((response) => {
    if (!response.ok) {
      messageEl.textContent = `Could not load checklist (status ${response.status})`;
      return null;
    }
    return response.json();
  })
  .then((todos) => {
    if (!todos) return;

    messageEl.textContent = "";
    tasks = todos.slice(0, 10);
    renderTasks();
  });

addTaskForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = taskInput.value.trim();
  if (!title) return;

  fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify({
      title: title,
      completed: false,
      userId: 3
    })
  })
    .then((response) => {
      if (!response.ok) {
        messageEl.textContent = `Could not save task (status ${response.status})`;
        return null;
      }
      return response.json();
    })
    .then((savedTodo) => {
      if (!savedTodo) return;

      messageEl.textContent = `Saved with id ${savedTodo.id}`;
      tasks.push({
        id: savedTodo.id,
        title: savedTodo.title,
        completed: false,
        userId: 3
      });
      taskInput.value = "";
      renderTasks();
    });
});

allBtn.addEventListener("click", () => {
  currentFilter = "all";
  renderTasks();
});

doneBtn.addEventListener("click", () => {
  currentFilter = "done";
  renderTasks();
});

pendingBtn.addEventListener("click", () => {
  currentFilter = "pending";
  renderTasks();
});