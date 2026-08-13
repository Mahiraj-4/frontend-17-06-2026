let followerCount = 500;

console.log("Initial count:", followerCount); // 500

// 1. Post-increment (count++): Returns current value first, then increments
console.log("During followerCount++:", followerCount++); // Logs: 500
console.log("After followerCount++:", followerCount);   // Logs: 501

// Reset for clear comparison
followerCount = 500;

// 2. Pre-increment (++count): Increments value first, then returns
console.log("During ++followerCount:", ++followerCount); // Logs: 501
console.log("After ++followerCount:", followerCount);   // Logs: 501