#include <iostream>
#include <fstream>
#include <string>
using namespace std;

int main() {
    ifstream inFile("my_fav_songs.txt");

    if (!inFile.is_open()) {
        cerr << "Error: File not found! Make sure 'my_fav_songs.txt' exists." << endl;
        return 1;
    }

    cout << "--- Your Favorite Songs ---" << endl;
    string song;
    int index = 1;

    // Read line-by-line until end-of-file
    while (getline(inFile, song)) {
        cout << index++ << ". " << song << endl;
    }

    inFile.close();
    return 0;
}