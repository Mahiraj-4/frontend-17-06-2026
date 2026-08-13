#include <stdio.h>
#include <string.h>

int main() {
    char fullName[50];
    char username[6]; // Holds up to 5 characters + 1 null terminator ('\0')

    printf("Enter your name: ");
    scanf("%49s", fullName);

    // Check if string length is less than 5 characters
    if (strlen(fullName) < 5) {
        strcpy(username, fullName);
    } else {
        // Copy first 5 characters using strncpy
        strncpy(username, fullName, 5);
        username[5] = '\0'; // Manually add null-terminator at the end
    }

    printf("Generated Username: %s\n", username);

    return 0;
}