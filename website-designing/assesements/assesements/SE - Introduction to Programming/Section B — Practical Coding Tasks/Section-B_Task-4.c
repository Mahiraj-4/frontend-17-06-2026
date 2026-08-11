#include <stdio.h>

struct Expense {
    char category[30];
    float amount;
};

int main() {
    struct Expense expenses[10];
    int count = 0;
    int choice;
    float total;

    do {
        printf("\n===== Daily Expense Tracker =====\n");
        printf("1. Add Expense\n");
        printf("2. View All Expenses\n");
        printf("3. Save & Exit\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);

        if (choice == 1) {
            if (count >= 10) {
                printf("Maximum of 10 expenses can be added.\n");
            } else {
                printf("Enter expense category: ");
                scanf(" %[^\n]", expenses[count].category);

                printf("Enter amount: ");
                scanf("%f", &expenses[count].amount);

                count++;

                printf("Expense added successfully!\n");
            }
        }

        else if (choice == 2) {
            if (count == 0) {
                printf("\nNo expenses logged yet.\n");
            } else {
                total = 0;

                printf("\n===== All Expenses =====\n");
                printf("%-5s %-30s %10s\n", "No.", "Category", "Amount");
                printf("-----------------------------------------------\n");

                for (int i = 0; i < count; i++) {
                    printf("%-5d %-30s %10.2f\n",
                           i + 1,
                           expenses[i].category,
                           expenses[i].amount);

                    total += expenses[i].amount;
                }

                printf("-----------------------------------------------\n");
                printf("%-36s %10.2f\n", "Running Total:", total);
            }
        }

        else if (choice == 3) {
            FILE *file = fopen("expenses.txt", "w");

            if (file == NULL) {
                printf("Error: Could not open expenses.txt\n");
                return 1;
            }

            for (int i = 0; i < count; i++) {
                fprintf(file, "%s,%.2f\n",
                        expenses[i].category,
                        expenses[i].amount);
            }

            fclose(file);

            printf("\nAll expenses saved to expenses.txt\n");
            printf("Exiting program...\n");
        }

        else {
            printf("Invalid choice! Please select 1, 2, or 3.\n");
        }

    } while (choice != 3);

    return 0;
}
