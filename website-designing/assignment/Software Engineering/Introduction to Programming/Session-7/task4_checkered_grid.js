let gridSize = 4;

for (let i = 0; i < gridSize; i++) {
    let rowStr = "";
    for (let j = 0; j < gridSize; j++) {
        // Alternate 0 and 1 using the sum of row and column indices
        if ((i + j) % 2 === 0) {
            rowStr += "0 ";
        } else {
            rowStr += "1 ";
        }
    }
    console.log(rowStr);
}