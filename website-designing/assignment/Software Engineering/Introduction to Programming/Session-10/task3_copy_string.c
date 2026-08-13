#include <stdio.h>
#include <string.h>

int main() {
    // Declated 20 bytes memory to ensure enough space for "Flipkart"
    char shoppingApp[20];

    // Copying string 'Flipkart' into shoppingApp
    strcpy(shoppingApp, "Flipkart");

    printf("Value of shoppingApp: %s\n", shoppingApp);

    return 0;
}