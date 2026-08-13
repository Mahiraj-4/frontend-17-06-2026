// 2D Array: Rows = IPL Matches, Columns = Runs by competing teams
const cricketScores = [
    [185, 172], // Match 1
    [210, 215], // Match 2
    [150, 154], // Match 3
    [208, 192]  // Match 4
];

// Loop through each match and find the highest score
for (let match = 0; match < cricketScores.length; match++) {
    let highestScore = cricketScores[match][0];

    for (let team = 1; team < cricketScores[match].length; team++) {
        if (cricketScores[match][team] > highestScore) {
            highestScore = cricketScores[match][team];
        }
    }

    console.log(`Match ${match + 1} Highest Score: ${highestScore} runs`);
}