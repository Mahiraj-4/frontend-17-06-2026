#include <iostream>
#include <fstream>
#include <sstream>
#include <vector>
#include <string>
using namespace std;

struct Item {
    string title, platform, status;
    int views;
};

void updateStatus() {
    ifstream inFile("content_list.txt");
    if (!inFile.is_open()) {
        cout << "No content file found!" << endl;
        return;
    }

    vector<Item> items;
    string line;
    while (getline(inFile, line)) {
        if (line.empty()) continue;
        stringstream ss(line);
        Item item;
        string vStr;
        getline(ss, item.title, '|');
        getline(ss, item.platform, '|');
        getline(ss, vStr, '|');
        getline(ss, item.status, '|');
        item.views = stoi(vStr);
        items.push_back(item);
    }
    inFile.close();

    if (items.empty()) {
        cout << "List is empty." << endl;
        return;
    }

    // Display numbered list
    for (size_t i = 0; i < items.size(); i++) {
        cout << (i + 1) << ". " << items[i].title << " [Current Status: " << items[i].status << "]" << endl;
    }

    int choice;
    cout << "\nEnter item number to update: ";
    cin >> choice;
    cin.ignore();

    if (choice < 1 || choice > (int)items.size()) {
        cout << "Invalid item selection!" << endl;
        return;
    }

    cout << "Enter new status (Draft / In Progress / Published): ";
    getline(cin, items[choice - 1].status);

    // Overwrite file with updated vector data
    ofstream outFile("content_list.txt");
    for (const auto &item : items) {
        outFile << item.title << "|" << item.platform << "|" << item.views << "|" << item.status << "\n";
    }
    outFile.close();

    cout << "Status updated successfully!" << endl;
}

int main() {
    updateStatus();
    return 0;
}