#include <stdio.h>

struct Playlist {
    char title[50];
    char artist[50];
    int duration; // duration in seconds
};

int main() {
    // Initializing structure variable with favorite song details
    struct Playlist mySong = {"Kesariya", "Arijit Singh", 268};

    printf("Song Title : %s\n", mySong.title);
    printf("Artist     : %s\n", mySong.artist);
    printf("Duration   : %d seconds\n", mySong.duration);

    return 0;
}