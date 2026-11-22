const taskList = document.getElementById("taskList");
const messageEl = document.getElementById("message");
const addTaskForm = document.getElementById("addTaskForm");
const taskInput = document.getElementById("taskInput");

const appendTaskItem = (todo) => {
  const li = document.createElement("li");
  const statusText = todo.completed ? "Done" : "Pending";
  li.textContent = `${todo.title} - [${statusText}]`;
  taskList.appendChild(li);
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
    const firstTen = todos.slice(0, 10);

    for (const todo of firstTen) {
      appendTaskItem(todo);
    }
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
      appendTaskItem(savedTodo);
      taskInput.value = "";
    });
});