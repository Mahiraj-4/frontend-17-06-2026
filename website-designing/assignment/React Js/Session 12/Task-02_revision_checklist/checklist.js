const taskList = document.getElementById("taskList");
const messageEl = document.getElementById("message");

messageEl.textContent = "Loading checklist...";

// Test wrong URL by changing '/todos?userId=3' to '/todoz?userId=3'
const apiUrl = "https://jsonplaceholder.typicode.com/todos?userId=3";

fetch(apiUrl)
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
      const li = document.createElement("li");
      const statusText = todo.completed ? "Done" : "Pending";
      li.textContent = `${todo.title} - [${statusText}]`;
      taskList.appendChild(li);
    }
  });