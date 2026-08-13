// 2D Array: 3 rows (playlists) x 5 columns (days)
const playlistRatings = [
    [4.5, 4.2, 4.8, 4.0, 4.6], // Playlist 1
    [3.8, 4.1, 4.0, 4.3, 4.5], // Playlist 2
    [4.9, 4.7, 5.0, 4.8, 4.9]  // Playlist 3
];

// Accessing the second playlist (Row index 1)
console.log("Ratings for Playlist 2 across 5 days:");

for (let day = 0; day < playlistRatings[1].length; day++) {
    console.log(`Day ${day + 1}: ${playlistRatings[1][day]} ⭐`);
}