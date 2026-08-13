#include <stdio.h>

// Pass-by-reference using pointers to swap values permanently
void swapPlaylistCounts(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

int main() {
    int playlist1 = 45;
    int playlist2 = 80;

    printf("Before Swap: Playlist 1 = %d, Playlist 2 = %d\n", playlist1, playlist2);

    // Passing memory addresses using '&'
    swapPlaylistCounts(&playlist1, &playlist2);

    printf("After Swap:  Playlist 1 = %d, Playlist 2 = %d\n", playlist1, playlist2);

    return 0;
}