# Read file and filter songs case-insensitively using the 'in' keyword
with open("playlist.txt", "r") as file:
    songs = file.readlines()

print("=== SONGS CONTAINING 'LOVE' ===")
for song in songs:
    clean_song = song.strip()
    # Case-insensitive search
    if "love" in clean_song.lower():
        print(f"🎵 {clean_song}")