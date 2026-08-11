#include <stdio.h>

int main() {
int numbers[10];
int i, j, temp;
int max, min;
float mean;

// Accept exactly 10 integers
printf("Enter exactly 10 integers:\n");

for (i = 0; i < 10; i++) {
    printf("Enter integer %d: ", i + 1);
    scanf("%d", &numbers[i]);
}

// Find maximum and minimum
max = numbers[0];
min = numbers[0];

for (i = 1; i < 10; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }

    if (numbers[i] < min) {
        min = numbers[i];
    }
}

// Calculate arithmetic mean
int sum = 0;

for (i = 0; i < 10; i++) {
    sum += numbers[i];
}

mean = (float)sum / 10;

// Display maximum, minimum and mean
printf("\nMaximum value: %d\n", max);
printf("Minimum value: %d\n", min);
printf("Arithmetic mean: %.2f\n", mean);

// Sort array in ascending order using Bubble Sort
for (i = 0; i < 9; i++) {
    for (j = 0; j < 9 - i; j++) {
        if (numbers[j] > numbers[j + 1]) {
            temp = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = temp;
        }
    }
}

// Display sorted list
printf("\nSorted list in ascending order:\n");

for (i = 0; i < 10; i++) {
    printf("%d ", numbers[i]);
}

printf("\n");

// Check whether mean is closer to minimum, maximum or exactly midway
float distanceFromMin = mean - min;
float distanceFromMax = max - mean;

printf("\nMean comparison: ");

if (distanceFromMin < distanceFromMax) {
    printf("The mean is closer to the minimum.\n");
}
else if (distanceFromMax < distanceFromMin) {
    printf("The mean is closer to the maximum.\n");
}
else {
    printf("The mean is exactly midway between the minimum and maximum.\n");
}

return 0;

}
