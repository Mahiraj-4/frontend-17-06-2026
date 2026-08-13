#include <stdio.h>

void incrementFollowers(int *followers, int n) {
    for (int i = 0; i < n; i++) {
        *(followers + i) += 100; // Pointer arithmetic to add 100 to each friend's count
    }
}

int main() {
    int followerCounts[5] = {1200, 3400, 850, 5000, 2100};
    int size = 5;

    incrementFollowers(followerCounts, size);

    printf("Updated Follower Counts (+100):\n");
    for (int i = 0; i < size; i++) {
        printf("Friend %d: %d followers\n", i + 1, followerCounts[i]);
    }

    return 0;
}