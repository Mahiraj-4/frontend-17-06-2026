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