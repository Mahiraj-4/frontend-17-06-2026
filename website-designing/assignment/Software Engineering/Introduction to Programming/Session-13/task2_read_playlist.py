# Open file in Read Mode ('r')
with open("playlist.txt", "r") as file:
    songs = file.readlines()

print("=== SPOTIFY PLAYLIST ===")
for song in songs:
    print(song.strip()) # strip() removes extra newlines