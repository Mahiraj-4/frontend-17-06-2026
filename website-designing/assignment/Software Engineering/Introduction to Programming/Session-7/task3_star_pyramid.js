let rows = 6;

for (let i = 1; i <= rows; i++) {
    let rowStr = "";
    
    // Print leading spaces for centering
    for (let j = 1; j <= rows - i; j++) {
        rowStr += " ";
    }
    
    // Print stars
    for (let k = 1; k <= (2 * i - 1); k++) {
        rowStr += "*";
    }
    
    console.log(rowStr);
}