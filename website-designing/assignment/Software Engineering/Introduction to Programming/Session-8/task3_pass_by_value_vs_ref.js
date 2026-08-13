// 1. Pass-by-Value (Primitive Number)
function increaseFollowersByValue(count) {
    count += 1000;
    console.log("Inside increaseFollowersByValue:", count);
}

// 2. Pass-by-Reference (Object)
function increaseFollowersByReference(userObj) {
    userObj.followers += 1000;
    console.log("Inside increaseFollowersByReference:", userObj.followers);
}

// Testing Pass-by-Value (Original does NOT change)
let followerCount = 5000;
console.log("BEFORE Value Call:", followerCount); // 5000
increaseFollowersByValue(followerCount);          // Inside: 6000
console.log("AFTER Value Call:", followerCount);  // 5000 (Unchanged)

console.log("-----------------------------------");

// Testing Pass-by-Reference (Original DOES change)
let userProfile = { followers: 5000 };
console.log("BEFORE Reference Call:", userProfile.followers); // 5000
increaseFollowersByReference(userProfile);                   // Inside: 6000
console.log("AFTER Reference Call:", userProfile.followers);  // 6000 (Persisted)