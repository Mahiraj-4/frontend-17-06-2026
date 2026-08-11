#include <stdio.h>

int main() {

    // 1) Use a for loop to accept 7 float values
    //    and store them in a float array.

    float studyHours[7];
    int i;

    for (i = 0; i < 7; i++) {

        // 4) Reject and re-prompt if the value is negative
        //    or greater than 24.

        do {
            printf("Enter study hours for Day %d (0-24): ", i + 1);
            scanf("%f", &studyHours[i]);

            if (studyHours[i] < 0 || studyHours[i] > 24) {
                printf("Invalid input! Please enter a value between 0 and 24.\n");
            }

        } while (studyHours[i] < 0 || studyHours[i] > 24);
    }


    // 2) Calculate and print:
    //    - Weekly total
    //    - Daily average
    //    - Day number with the highest study hours

    float total = 0;
    float average;
    float highest;
    int highestDay;

    highest = studyHours[0];
    highestDay = 1;

    for (i = 0; i < 7; i++) {

        total = total + studyHours[i];

        if (studyHours[i] > highest) {
            highest = studyHours[i];
            highestDay = i + 1;
        }
    }

    average = total / 7;

    printf("\n===== Weekly Performance Summary =====\n");
    printf("Weekly Total Study Hours: %.2f\n", total);
    printf("Daily Average Study Hours: %.2f\n", average);
    printf("Day with Highest Study Hours: Day %d (%.2f hours)\n",
           highestDay, highest);


    // 3) Print a visual bar for each day.
    //    One '*' is printed for each hour studied,
    //    truncated to the nearest integer.

    printf("\n===== Daily Study Hours Chart =====\n");

    for (i = 0; i < 7; i++) {

        int stars = (int)studyHours[i];

        printf("Day %d: ", i + 1);

        for (int j = 0; j < stars; j++) {
            printf("*");
        }

        printf("\n");
    }

    return 0;
}
