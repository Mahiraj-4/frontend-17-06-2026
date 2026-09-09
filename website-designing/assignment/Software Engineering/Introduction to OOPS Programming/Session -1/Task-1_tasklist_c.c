#include <stdio.h>
#include <string.h>

#define MAX_TASKS 5
#define MAX_LEN 100

// Global data: accessible and modifiable by any function
char tasks[MAX_TASKS][MAX_LEN];
int task_count = 0;

void addTask(const char *task) {
    if (task_count < MAX_TASKS) {
        strncpy(tasks[task_count], task, MAX_LEN - 1);
        tasks[task_count][MAX_LEN - 1] = '\0';
        task_count++;
    } else {
        printf("Task list is full.\n");
    }
}

void printTasks() {
    printf("--- Current Tasks ---\n");
    for (int i = 0; i < task_count; i++) {
        printf("%d. %s\n", i + 1, tasks[i]);
    }
}

int main() {
    addTask("Buy groceries");
    addTask("Read chapter 3 of OS book");
    addTask("Fix login API bug");
    
    printTasks();
    return 0;
}