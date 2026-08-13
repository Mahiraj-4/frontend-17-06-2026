# Open file in Write Mode ('w') - creates playlist.txt or overwrites if exists
with open("playlist.txt", "w") as file:
    file.write("Kesariya\n")
    file.write("Love Nwantiti\n")
    file.write("Apna Bana Le\n")

print("Top 3 songs written to playlist.txt successfully!")