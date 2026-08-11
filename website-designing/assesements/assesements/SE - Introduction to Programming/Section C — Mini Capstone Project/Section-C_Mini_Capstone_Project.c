#include <stdio.h>
#include <string.h>

#define SUBJECTS 3
#define DAYS 7

// Structure definition
struct StudyLog {
    char subject[40];
    float hours[7];
};

// Function to calculate and display weekly report
void displayWeeklyReport(struct StudyLog logs[], int count) {
    int i, j;
    float total, average;

    printf("\n============================================\n");
    printf("          WEEKLY PRODUCTIVITY REPORT\n");
    printf("============================================\n");

    for (i = 0; i < count; i++) {
        total = 0;

        for (j = 0; j < DAYS; j++) {
            total += logs[i].hours[j];
        }

        average = total / DAYS;

        printf("\nSubject: %s\n", logs[i].subject);
        printf("Weekly Total : %.2f hours\n", total);
        printf("Daily Average: %.2f hours\n", average);
    }

    // Progress chart
    printf("\n============================================\n");
    printf("             DAILY PROGRESS CHART\n");
    printf("============================================\n");

    for (j = 0; j < DAYS; j++) {
        printf("\nDay %d:\n", j + 1);

        for (i = 0; i < count; i++) {
            int dots = (int)logs[i].hours[j];

            printf("%-15s: ", logs[i].subject);

            for (int k = 0; k < dots; k++) {
                printf("*");
            }

            printf(" (%.2f hours)\n", logs[i].hours[j]);
        }
    }
}

// Function to log today's study hours
void logToday(struct StudyLog logs[], int count, int day) {
    int i;

    printf("\n============================================\n");
    printf("       LOG TODAY'S STUDY HOURS\n");
    printf("============================================\n");

    printf("Logging hours for Day %d\n\n", day + 1);

    for (i = 0; i < count; i++) {
        printf("Enter study hours for %s: ", logs[i].subject);
        scanf("%f", &logs[i].hours[day]);

        if (logs[i].hours[day] < 0) {
            logs[i].hours[day] = 0;
            printf("Invalid value. Set to 0 hours.\n");
        }
    }

    printf("\nToday's study hours have been recorded successfully!\n");
}

// Function to save data to file
void saveToFile(struct StudyLog logs[], int count) {
    FILE *file;
    int i, j;

    file = fopen("productivity_log.txt", "w");

    if (file == NULL) {
        printf("\nError: Could not open productivity_log.txt\n");
        return;
    }

    for (i = 0; i < count; i++) {
        fprintf(file, "%s", logs[i].subject);

        for (j = 0; j < DAYS; j++) {
            fprintf(file, ",%.2f", logs[i].hours[j]);
        }

        fprintf(file, "\n");
    }

    fclose(file);

    printf("\nData saved successfully to productivity_log.txt\n");
}

int main() {

    // Array of at least 3 subject records
    struct StudyLog logs[SUBJECTS] = {
        {"Programming", {0, 0, 0, 0, 0, 0, 0}},
        {"Mathematics", {0, 0, 0, 0, 0, 0, 0}},
        {"Database", {0, 0, 0, 0, 0, 0, 0}}
    };

    int choice;
    int currentDay = 0;

    printf("============================================\n");
    printf("       STUDENT PRODUCTIVITY TRACKER\n");
    printf("============================================\n");

    do {
        printf("\n--------------- MENU ----------------\n");
        printf("1. Log Today's Study Hours\n");
        printf("2. View Weekly Report\n");
        printf("3. Save & Exit\n");
        printf("-------------------------------------\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);

        switch (choice) {

            case 1:
                if (currentDay < DAYS) {
                    logToday(logs, SUBJECTS, currentDay);
                    currentDay++;
                } else {
                    printf("\nAll 7 days have already been logged.\n");
                }
                break;

            case 2:
                displayWeeklyReport(logs, SUBJECTS);
                break;

            case 3:
                saveToFile(logs, SUBJECTS);
                printf("\nThank you for using Student Productivity Tracker!\n");
                break;

            default:
                printf("\nInvalid choice! Please enter 1, 2, or 3.\n");
        }

    } while (choice != 3);

    return 0;
}