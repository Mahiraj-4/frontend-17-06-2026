#include <iostream>
#include <string>
using namespace std;

class Content {
public:
    string title;
    string platform;
    int views;
    string status; // e.g., Idea, In Progress, Published

    Content(string t, string p, int v, string s) 
        : title(t), platform(p), views(v), status(s) {}

    void displayDetails() const {
        cout << "------------------------------------------" << endl;
        cout << "Title    : " << title << endl;
        cout << "Platform : " << platform << endl;
        cout << "Views    : " << views << endl;
        cout << "Status   : " << status << endl;
        cout << "------------------------------------------" << endl;
    }
};

int main() {
    Content c1("Top 10 AI Tools in 2026", "YouTube", 15000, "Published");
    c1.displayDetails();
    return 0;
}