#include <stdio.h>

/* 
command :-
gcc Section-B_Task-1.c -o Section-B_Task-1; .\Section-B_Task-1.exe
*/ 

int main()
{
    float percentage;

    // Accept percentage input
    printf("Enter student's percentage: ");
    scanf("%f", &percentage);

    // Validate input range
    if (percentage < 0 || percentage > 100)
    {
        printf("Error: Invalid percentage. Please enter a value between 0 and 100.\n");
        return 0;
    }

    // Assign grade using if-else if
    if (percentage >= 90)
    {
        printf("Grade: A\n");
        printf("Excellent work! Keep aiming higher.\n");
    }
    else if (percentage >= 75)
    {
        printf("Grade: B\n");
        printf("Good work! Keep pushing.\n");
    }
    else if (percentage >= 60)
    {
        printf("Grade: C\n");
        printf("Nice effort! You can improve further.\n");
    }
    else if (percentage >= 45)
    {
        printf("Grade: D\n");
        printf("Keep practicing and stay focused.\n");
    }
    else
    {
        printf("Grade: F\n");
        printf("Don't give up! Work harder and try again.\n");
    }

    return 0;
}