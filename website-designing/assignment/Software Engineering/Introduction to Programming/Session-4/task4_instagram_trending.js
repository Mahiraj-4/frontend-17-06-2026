let likes = 800;
let comments = 250;
let shares = 60;

// Operator precedence: && runs before ||, but parentheses improve clarity
let isTrending = likes >= 1000 || (comments > 200 && shares >= 50);

console.log("Is the post trending?:", isTrending); // Output: true (due to comments & shares condition)