const batters = [
  { name: "Aarav Sharma", runs: 68, balls: 48 },
  { name: "Rohan Verma", runs: 45, balls: 30 },
  { name: "Kabir Nair", runs: 14, balls: 12 },
  { name: "Devansh Patel", runs: 82, balls: 55 },
  { name: "Yash Malhotra", runs: 9, balls: 8 },
  { name: "Siddharth Rao", runs: 34, balls: 25 },
  { name: "Kunal Joshi", runs: 22, balls: 19 },
  { name: "Harshvardhan Gill", runs: 18, balls: 15 },
  { name: "Nikhil Deshmukh", runs: 6, balls: 7 },
  { name: "Pranav Iyer", runs: 11, balls: 10 },
  { name: "Varun Kulkarni", runs: 4, balls: 6 }
];

const scorecardBody = document.getElementById("scorecardBody");
const summaryLine = document.getElementById("summaryLine");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const findBadge = document.getElementById("findBadge");
const centuryBadge = document.getElementById("centuryBadge");
const allBattedBadge = document.getElementById("allBattedBadge");

const rowsHTML = batters
  .map((batter) => {
    const strikeRate = ((batter.runs / batter.balls) * 100).toFixed(1);
    return `
      <tr>
        <td>${batter.name}</td>
        <td>${batter.runs}</td>
        <td>${batter.balls}</td>
        <td>${strikeRate}</td>
      </tr>
    `;
  })
  .join("");

scorecardBody.innerHTML = rowsHTML;

const thirtyPlusCount = batters.filter((p) => p.runs >= 30).length;
const teamTotal = batters.reduce((sum, p) => sum + p.runs, 0);
summaryLine.textContent = `Players with 30+: ${thirtyPlusCount} | Team total: ${teamTotal}`;

const hasCentury = batters.some((p) => p.runs >= 100);
centuryBadge.textContent = `Century (100+): ${hasCentury ? "Yes" : "No"}`;

const allFacedBall = batters.every((p) => p.balls >= 1);
allBattedBadge.textContent = `All 11 faced 1+ ball: ${allFacedBall ? "Yes" : "No"}`;

searchBtn.addEventListener("click", () => {
  const query = searchInput.value.trim().toLowerCase();
  if (!query) {
    findBadge.textContent = "Enter a name to search";
    return;
  }

  const matchedBatter = batters.find((p) =>
    p.name.toLowerCase().includes(query)
  );

  if (matchedBatter) {
    const sr = ((matchedBatter.runs / matchedBatter.balls) * 100).toFixed(1);
    findBadge.textContent = `Found: ${matchedBatter.name} (${matchedBatter.runs} runs, ${matchedBatter.balls} balls, SR ${sr})`;
  } else {
    findBadge.textContent = "Batter not found";
  }
});

// Task 4: One-line alternative to team-total reduce() and Match/Mismatch verification
const totalRunsAlt = batters.map((p) => p.runs).reduce((a, b) => a + b, 0);

console.log(
  `teamTotal: ${teamTotal} | totalRunsAlt: ${totalRunsAlt} -> ${
    teamTotal === totalRunsAlt ? "Match" : "Mismatch"
  }`
);