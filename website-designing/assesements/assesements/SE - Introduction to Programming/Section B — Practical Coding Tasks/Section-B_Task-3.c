#include <stdio.h>
#include <string.h>

struct Student {
    char name[50];
    int rollno;
    float marks;
    char grade;
};

/* Function to assign grade based on marks */
void assignGrade(struct Student *s) {
    if (s->marks >= 90)
        s->grade = 'A';
    else if (s->marks >= 80)
        s->grade = 'B';
    else if (s->marks >= 70)
        s->grade = 'C';
    else if (s->marks >= 60)
        s->grade = 'D';
    else
        s->grade = 'F';
}

/* Function to find and print the topper */
void printTopper(struct Student students[], int n) {
    int topIndex = 0;

    for (int i = 1; i < n; i++) {
        if (students[i].marks > students[topIndex].marks) {
            topIndex = i;
        }
    }

    printf("\nTop Performer:\n");
    printf("Name  : %s\n", students[topIndex].name);
    printf("Marks : %.2f\n", students[topIndex].marks);
}

int main() {
    struct Student students[3];

    /* Accept data for 3 students */
    for (int i = 0; i < 3; i++) {
        printf("\nEnter details for Student %d\n", i + 1);

        printf("Name: ");
        scanf(" %[^\n]", students[i].name);

        printf("Roll No: ");
        scanf("%d", &students[i].rollno);

        printf("Marks: ");
        scanf("%f", &students[i].marks);

        /* Assign grade */
        assignGrade(&students[i]);
    }

    /* Display all student records */
    printf("\n\n%-20s %-10s %-10s %-10s\n",
           "Name", "Roll No", "Marks", "Grade");

    printf("--------------------------------------------------------\n");

    for (int i = 0; i < 3; i++) {
        printf("%-20s %-10d %-10.2f %-10c\n",
               students[i].name,
               students[i].rollno,
               students[i].marks,
               students[i].grade);
    }

    /* Print topper */
    printTopper(students, 3);

    return 0;
}