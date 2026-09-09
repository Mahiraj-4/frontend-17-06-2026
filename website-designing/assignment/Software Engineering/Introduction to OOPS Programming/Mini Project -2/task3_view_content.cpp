#include <iostream>
#include <fstream>
#include <sstream>
#include <string>
using namespace std;

void displayAllContent() {
    ifstream inFile("content_list.txt");
    if (!inFile.is_open()) {
        cout << "No content found. 'content_list.txt' does not exist yet." << endl;
        return;
    }

    cout << "\n=== Content Ideas List ===" << endl;
    string line;
    int count = 1;

    while (getline(inFile, line)) {
        if (line.empty()) continue;
        stringstream ss(line);
        string title, platform, viewsStr, status;

        getline(ss, title, '|');
        getline(ss, platform, '|');
        getline(ss, viewsStr, '|');
        getline(ss, status, '|');

        cout << count++ << ". [" << platform << "] " << title << endl;
    }
    inFile.close();
}

int main() {
    displayAllContent();
    return 0;
}