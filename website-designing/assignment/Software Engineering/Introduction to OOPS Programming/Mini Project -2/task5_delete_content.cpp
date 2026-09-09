#include <iostream>
#include <fstream>
#include <sstream>
#include <vector>
#include <string>
using namespace std;

struct Item {
    string title, platform, status;
    string views;
};

void deleteContent() {
    ifstream inFile("content_list.txt");
    if (!inFile.is_open()) {
        cout << "File not found!" << endl;
        return;
    }

    vector<Item> items;
    string line;
    while (getline(inFile, line)) {
        if (line.empty()) continue;
        stringstream ss(line);
        Item it;
        getline(ss, it.title, '|');
        getline(ss, it.platform, '|');
        getline(ss, it.views, '|');
        getline(ss, it.status, '|');
        items.push_back(it);
    }
    inFile.close();

    if (items.empty()) {
        cout << "No items available to delete." << endl;
        return;
    }

    cout << "\n--- Current Content List ---" << endl;
    for (size_t i = 0; i < items.size(); i++) {
        cout << (i + 1) << ". [" << items[i].platform << "] " << items[i].title << endl;
    }

    int choice;
    cout << "\nEnter item number to delete: ";
    cin >> choice;

    if (choice < 1 || choice > (int)items.size()) {
        cout << "Invalid index!" << endl;
        return;
    }

    cout << "Deleting: '" << items[choice - 1].title << "'..." << endl;
    items.erase(items.begin() + (choice - 1));

    // Overwrite file
    ofstream outFile("content_list.txt");
    for (const auto &it : items) {
        outFile << it.title << "|" << it.platform << "|" << it.views << "|" << it.status << "\n";
    }
    outFile.close();

    cout << "\n--- Updated Content List ---" << endl;
    if (items.empty()) {
        cout << "[Empty - No items remaining]" << endl;
    } else {
        for (size_t i = 0; i < items.size(); i++) {
            cout << (i + 1) << ". [" << items[i].platform << "] " << items[i].title << endl;
        }
    }
}

int main() {
    deleteContent();
    return 0;
}