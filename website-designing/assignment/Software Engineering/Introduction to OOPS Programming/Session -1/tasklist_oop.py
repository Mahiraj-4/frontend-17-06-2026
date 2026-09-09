from task import Task

class TaskList:
    def __init__(self):
        self.tasks: list[Task] = []

    def add_task(self, title: str) -> None:
        self.tasks.append(Task(title))

    def mark_task_done(self, index: int) -> None:
        if 0 <= index < len(self.tasks):
            self.tasks[index].mark_done()
        else:
            print(f"Error: Index {index} is out of bounds.")

    def show_tasks(self) -> None:
        if not self.tasks:
            print("No tasks available.")
            return
        
        print("--- Task List ---")
        for i, task in enumerate(self.tasks, start=1):
            task.display(index=i)


if __name__ == "__main__":
    my_tasks = TaskList()

    # 1. Add 3 tasks
    my_tasks.add_task("Set up database migrations")
    my_tasks.add_task("Implement JWT authentication")
    my_tasks.add_task("Document REST endpoints")

    # 2. Mark task at index 1 as done
    my_tasks.mark_task_done(1)

    # 3. Display tasks with status
    my_tasks.show_tasks()