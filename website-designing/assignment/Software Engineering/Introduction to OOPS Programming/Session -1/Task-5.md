# Task 5: Procedural C vs. OOP Comparison

- **Scattered State vs. Unified Entity (Parallel Array Coupling):**  
  In C, task names lived in `char tasks[][]` while status lived in a disconnected array `int is_done[]`. Adding properties like `priority` or `due_date` requires adding more parallel arrays that must be manually tracked by the same index. In OOP, title and status belong to one cohesive `Task` object.

- **Unprotected Global Scope (No Encapsulation):**  
  In the C version, any line of code across any function can mutate `task_count` or rewrite `tasks[0]` directly without validation. In OOP, data attributes are bounded inside objects, and state updates occur through explicit methods like `mark_done()`.

- **Single-Instance Bottleneck (Scalability):**  
  The C implementation uses fixed global variables, meaning you cannot create a second independent task list (e.g., "Work" vs. "Personal") without duplicating all variables or rewriting the code with pointers and manual dynamic allocation. In OOP, you instantiate multiple independent lists using `work = TaskList()` and `home = TaskList()`.