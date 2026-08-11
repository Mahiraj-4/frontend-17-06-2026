/*During testing, I checked the program with identical values, positive and negative values, and a case where the mean was exactly midway between the minimum and maximum. I found that the original program used an `int` variable for the sum, which could overflow when very large integer values were entered. I changed the sum variable to `long long` and used `double` for the mean and distance calculations. This makes the calculations safer and more reliable for large input values.*/

#include <stdio.h>

int main() {
int numbers[10];
int i, j, temp;
int max, min;
long long sum = 0;
double mean;

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
for (i = 0; i < 10; i++) {
    sum += numbers[i];
}

mean = (double)sum / 10.0;

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
double distanceFromMin = mean - min;
double distanceFromMax = max - mean;

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
