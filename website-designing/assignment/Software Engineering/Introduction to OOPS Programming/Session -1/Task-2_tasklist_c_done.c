#include <stdio.h>
#include <string.h>

#define MAX_TASKS 5
#define MAX_LEN 100

// Two parallel global arrays that must manually be kept in sync
char tasks[MAX_TASKS][MAX_LEN];
int is_done[MAX_TASKS] = {0}; // 0: Pending, 1: Done
int task_count = 0;

void addTask(const char *task) {
    if (task_count < MAX_TASKS) {
        strncpy(tasks[task_count], task, MAX_LEN - 1);
        tasks[task_count][MAX_LEN - 1] = '\0';
        is_done[task_count] = 0;
        task_count++;
    } else {
        printf("Task list is full.\n");
    }
}

void markTaskDone(int index) {
    if (index >= 0 && index < task_count) {
        is_done[index] = 1;
    } else {
        printf("Invalid task index: %d\n", index);
    }
}

void printTasks() {
    printf("--- Current Tasks ---\n");
    for (int i = 0; i < task_count; i++) {
        printf("%d. [%s] %s\n", i + 1, is_done[i] ? "DONE" : "PENDING", tasks[i]);
    }
}

int main() {
    addTask("Review pull request");
    addTask("Deploy staging build");
    addTask("Write unit tests");

    printf("Before marking done:\n");
    printTasks();

    // Mark second task (index 1) as done
    markTaskDone(1);

    printf("\nAfter marking task 2 done:\n");
    printTasks();

    return 0;
}