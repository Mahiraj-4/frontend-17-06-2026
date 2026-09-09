#include <iostream>
#include <fstream>
#include <string>
using namespace std;

void addContent() {
    string title, platform, status;
    int views;

    cout << "Enter Content Title: ";
    getline(cin, title);
    cout << "Enter Platform (YouTube/Instagram/Podcast): ";
    getline(cin, platform);
    cout << "Enter Projected/Current Views: ";
    cin >> views;
    cin.ignore();
    cout << "Enter Status (Draft/In Progress/Published): ";
    getline(cin, status);

    // Open in append mode
    ofstream outFile("content_list.txt", ios::app);
    if (outFile.is_open()) {
        outFile << title << "|" << platform << "|" << views << "|" << status << "\n";
        outFile.close();
        cout << "Idea successfully saved to content_list.txt!" << endl;
    } else {
        cerr << "Error opening file!" << endl;
    }
}

int main() {
    addContent();
    return 0;
}