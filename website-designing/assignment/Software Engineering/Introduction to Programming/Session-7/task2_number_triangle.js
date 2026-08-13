let totalRows = 5;

for (let i = 1; i <= totalRows; i++) {
    let rowStr = "";
    for (let j = 1; j <= i; j++) {
        rowStr += j + " ";
    }
    console.log(rowStr);
}