#include <stdio.h>

struct FoodItem {
    char itemName[50];
    float price;
    float rating;
};

int main() {
    // Array of 3 FoodItem structures
    struct FoodItem menu[3] = {
        {"Butter Chicken", 350.0f, 4.5f},
        {"Paneer Tikka", 240.0f, 4.3f},
        {"Masala Dosa", 120.0f, 4.7f}
    };

    printf("=== ZOMATO MENU ===\n");
    for (int i = 0; i < 3; i++) {
        printf("Item %d: %-15s | Price: ₹%.2f | Rating: %.1f★\n", 
               i + 1, menu[i].itemName, menu[i].price, menu[i].rating);
    }

    return 0;
}