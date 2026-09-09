#include <iostream>
#include <fstream>
#include <string>
using namespace std;

int main() {
    // Open file in write mode (creates new or overwrites)
    ofstream outFile("my_fav_songs.txt");

    if (!outFile.is_open()) {
        cerr << "Error: Unable to open file for writing!" << endl;
        return 1;
    }

    outFile << "Starboy - The Weeknd\n";
    outFile << "Blinding Lights - The Weeknd\n";
    outFile << "Shape of You - Ed Sheeran\n";
    outFile << "Believer - Imagine Dragons\n";
    outFile << "Night Changes - One Direction\n";

    outFile.close();
    cout << "5 songs successfully saved to 'my_fav_songs.txt'." << endl;

    return 0;
}