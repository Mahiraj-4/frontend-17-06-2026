// Run 'npm install readline-sync' in terminal if using Node.js input
const readline = require('readline-sync');

let userRows = parseInt(readline.question("Enter the height of the pyramid: "));

if (isNaN(userRows) || userRows <= 0) {
    console.log("Please enter a valid positive number.");
} else {
    for (let i = 1; i <= userRows; i++) {
        let rowStr = "";
        
        // Print leading spaces
        for (let j = 1; j <= userRows - i; j++) {
            rowStr += " ";
        }
        
        // Print stars
        for (let k = 1; k <= (2 * i - 1); k++) {
            rowStr += "*";
        }
        
        console.log(rowStr);
    }
}