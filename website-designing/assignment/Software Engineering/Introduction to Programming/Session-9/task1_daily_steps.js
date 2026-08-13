// 1D array with 7 elements (1 for each day)
const dailySteps = [6500, 8200, 7100, 10500, 9300, 5400, 12000];
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// Loop to print each day's step count
for (let i = 0; i < dailySteps.length; i++) {
    console.log(`${days[i]}: ${dailySteps[i]} steps`);
}