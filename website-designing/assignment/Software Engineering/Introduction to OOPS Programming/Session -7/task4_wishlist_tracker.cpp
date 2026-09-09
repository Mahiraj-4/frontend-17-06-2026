#include <iostream>
#include <fstream>
#include <string>
using namespace std;

int main() {
    // 1. Writing user input to wishlist.txt
    ofstream outFile("wishlist.txt");
    if (!outFile.is_open()) {
        cerr << "Error opening wishlist.txt for writing!" << endl;
        return 1;
    }

    cout << "--- Add 3 Items to Your Wishlist ---" << endl;
    for (int i = 1; i <= 3; i++) {
        string name;
        double price;

        cout << "Item " << i << " Name: ";
        getline(cin, name);

        cout << "Item " << i << " Price (Rs.): ";
        cin >> price;
        cin.ignore(); // Clear newline buffer after reading double

        outFile << name << "," << price << "\n";
    }
    outFile.close();
    cout << "\nWishlist saved successfully!\n" << endl;

    // 2. Reading and displaying from wishlist.txt
    ifstream inFile("wishlist.txt");
    if (!inFile.is_open()) {
        cerr << "Error opening wishlist.txt for reading!" << endl;
        return 1;
    }

    cout << "--- Your Saved Flipkart Wishlist ---" << endl;
    string line;
    while (getline(inFile, line)) {
        size_t commaPos = line.find(',');
        if (commaPos != string::npos) {
            string itemName = line.substr(0, commaPos);
            string itemPrice = line.substr(commaPos + 1);
            cout << "• Product: " << itemName << " | Price: ₹" << itemPrice << endl;
        }
    }

    inFile.close();
    return 0;
}