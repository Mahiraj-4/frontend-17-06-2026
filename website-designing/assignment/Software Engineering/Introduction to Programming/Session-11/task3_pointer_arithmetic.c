#include <stdio.h>

int main() {
    int zomatoOrders[5] = {250, 420, 180, 590, 310};
    int *ptr = zomatoOrders; // Array name acts as a pointer to the first element

    printf("Zomato Orders and Memory Addresses:\n");
    for (int i = 0; i < 5; i++) {
        // *(ptr + i) accesses value; (ptr + i) calculates element address
        printf("Order %d: ₹%d | Address: %p\n", i + 1, *(ptr + i), (void*)(ptr + i));
    }

    return 0;
}