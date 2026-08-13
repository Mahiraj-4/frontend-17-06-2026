#include <stdio.h>

int main() {
    char playlistName[] = "Bollywood Chill Hits";
    int totalSongs = 42;
    float avgDuration = 3.5f;

    // Printing all values in a single formatted sentence
    printf("My favorite Spotify playlist '%s' has %d songs with an average duration of %.1f minutes.\n", 
           playlistName, totalSongs, avgDuration);

    return 0;
}