#include <stdio.h>

struct Time {
    int hours;
    int minutes;
};

struct MovieShow {
    char movie[50];
    int screen;
    struct Time time; // Nested structure
};

int main() {
    // Initializing nested structure
    struct MovieShow show = {"Interstellar", 3, {18, 30}};

    // Printing in format 'Movie: X, Screen: Y, Time: HH:MM'
    printf("Movie: %s, Screen: %d, Time: %02d:%02d\n", 
           show.movie, show.screen, show.time.hours, show.time.minutes);

    return 0;
}