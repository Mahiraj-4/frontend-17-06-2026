const readline = require('readline-sync');

// Song pool
const songs = ["Kesariya", "Apna Bana Le", "Chaleya"];

// Pick a random song
const randomIndex = Math.floor(Math.random() * songs.length);
const secretSong = songs[randomIndex];

let userGuess = "";

console.log("🎵 Welcome to Guess the Song Game! 🎵");
console.log("Options: " + songs.join(" | "));

// do-while ensures the game prompts at least once
do {
    userGuess = readline.question("Guess the song: ");

    if (userGuess.toLowerCase() !== secretSong.toLowerCase()) {
        console.log("❌ Wrong guess! Try again.\n");
    }
} while (userGuess.toLowerCase() !== secretSong.toLowerCase());

console.log(`🎉 Correct! The song was '${secretSong}'.`);