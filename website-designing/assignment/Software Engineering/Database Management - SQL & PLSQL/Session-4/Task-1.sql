CREATE TABLE Playlist (
    id INT PRIMARY KEY,
    song_name VARCHAR(100) NOT NULL,
    artist VARCHAR(100) NOT NULL,
    genre VARCHAR(50) NOT NULL,
    play_count INT DEFAULT 0
);

INSERT INTO Playlist (id, song_name, artist, genre, play_count) VALUES
(1, 'Blinding Lights', 'The Weeknd', 'Pop', 250),
(2, 'Levitating', 'Dua Lipa', 'Pop', 120),
(3, 'HUMBLE.', 'Kendrick Lamar', 'Hip-Hop', 180),
(4, 'Lose Yourself', 'Eminem', 'Hip-Hop', 95),
(5, 'As It Was', 'Harry Styles', 'Pop', 85),
(6, 'Starboy', 'The Weeknd', 'R&B', 210);