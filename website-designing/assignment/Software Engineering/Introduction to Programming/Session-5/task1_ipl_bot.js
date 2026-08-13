function iplFanBot(teamName) {
    let team = teamName.toUpperCase();

    if (team === "CSK" || team === "CHENNAI SUPER KINGS") {
        console.log("Whistle Podu! Chennai Super Kings for the win!");
    } else if (team === "MI" || team === "MUMBAI INDIANS") {
        console.log("Duniya Hila Denge! Go Mumbai Indians!");
    } else if (team === "RCB" || team === "ROYAL CHALLENGERS BENGALURU") {
        console.log("Ee Sala Cup Namde! Go RCB!");
    } else if (team === "KKR" || team === "KOLKATA KNIGHT RIDERS") {
        console.log("Korbo Lorbo Jeetbo! Go KKR!");
    } else {
        console.log("Team not found!");
    }
}

// Example usage:
iplFanBot("CSK");          // Whistle Podu! Chennai Super Kings for the win!
iplFanBot("Mumbai Indians"); // Duniya Hila Denge! Go Mumbai Indians!
iplFanBot("GT");           // Team not found!