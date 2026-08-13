#include <stdio.h>

int main() {
    // 'const' keyword ensures GST_RATE cannot be changed anywhere in the program
    const float GST_RATE = 0.18f; 
    float basePrice = 450.00f;

    // Calculation
    float gstAmount = basePrice * GST_RATE;
    float finalPrice = basePrice + gstAmount;

    printf("Base Price: ₹%.2f\n", basePrice);
    printf("GST Amount (18%%): ₹%.2f\n", gstAmount);
    printf("Final Order Price: ₹%.2f\n", finalPrice);

    return 0;
}