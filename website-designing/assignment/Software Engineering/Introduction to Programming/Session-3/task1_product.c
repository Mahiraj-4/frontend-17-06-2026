#include <stdio.h>

int main() {
    // Variable declarations with sample values
    char productName[] = "Wireless Headphones"; // String (array of char)
    float price = 1499.50f;                     // Float (decimal number)
    double rating = 4.3;                         // Double (high-precision decimal)

    // Printing variables with their data types labeled
    printf("Product Name (String): %s\n", productName);
    printf("Price (Float): ₹%.2f\n", price);
    printf("Rating (Double): %.1lf\n", rating);

    return 0;
}