#include <iostream>
#include <fstream>
#include <string>
using namespace std;

int main() {
    string newSong;
    cout << "Enter the name of the song to add: ";
    getline(cin, newSong);

    // Open in append mode: preserves existing data and adds to the end
    ofstream outFile("my_fav_songs.txt", ios::app);

    if (!outFile.is_open()) {
        cerr << "Error: Unable to open file!" << endl;
        return 1;
    }

    outFile << newSong << "\n";
    outFile.close();

    cout << "Added '" << newSong << "' to 'my_fav_songs.txt' without overwriting." << endl;
    return 0;
}