const taskList = document.getElementById("taskList");

fetch("https://jsonplaceholder.typicode.com/todos?userId=3")
  .then((response) => response.json())
  .then((todos) => {
    const firstTen = todos.slice(0, 10);

    for (const todo of firstTen) {
      const li = document.createElement("li");
      const statusText = todo.completed ? "Done" : "Pending";
      li.textContent = `${todo.title} - [${statusText}]`;
      taskList.appendChild(li);
    }
  });