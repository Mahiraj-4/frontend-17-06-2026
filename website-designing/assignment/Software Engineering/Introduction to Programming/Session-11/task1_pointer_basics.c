#include <stdio.h>

int main() {
    int likes = 1250;
    int *ptrLikes = &likes; // Pointing ptrLikes to the memory address of likes

    // Print the value using dereferencing (*ptrLikes) and memory address stored in ptrLikes
    printf("Value of likes (via pointer): %d\n", *ptrLikes);
    printf("Memory address stored in ptrLikes: %p\n", (void*)ptrLikes);

    return 0;
}