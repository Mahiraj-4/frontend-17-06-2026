#include <stdio.h>
#include <string.h>

int main() {
    char songTitle[] = "Tum Hi Ho";

    // strlen() calculates the number of characters in the string
    printf("Song Title: %s\n", songTitle);
    printf("Length of song title: %zu characters\n", strlen(songTitle));

    return 0;
}