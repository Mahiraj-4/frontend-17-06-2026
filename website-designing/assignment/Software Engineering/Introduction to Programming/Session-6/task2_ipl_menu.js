// Note: Install 'readline-sync' using 'npm install readline-sync' for terminal input
const readline = require('readline-sync');

let teams = ["Chennai Super Kings", "Mumbai Indians", "Royal Challengers Bengaluru"];
let choice = 0;

while (choice !== 3) {
    console.log("\n=== IPL FAN APP MENU ===");
    console.log("1. View Favorite IPL Teams");
    console.log("2. Add a New Team");
    console.log("3. Exit");
    
    choice = parseInt(readline.question("Enter your choice (1-3): "));

    if (choice === 1) {
        console.log("\nYour Favorite Teams:");
        teams.forEach((team, index) => console.log(`${index + 1}. ${team}`));
    } else if (choice === 2) {
        let newTeam = readline.question("Enter team name to add: ");
        teams.push(newTeam);
        console.log(`\n'${newTeam}' added successfully!`);
    } else if (choice === 3) {
        console.log("\nExiting app. Goodbye!");
    } else {
        console.log("\nInvalid choice! Please select 1, 2, or 3.");
    }
}