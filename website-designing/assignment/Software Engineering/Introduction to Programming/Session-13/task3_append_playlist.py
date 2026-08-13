# Open file in Append Mode ('a') - adds new data without deleting existing text
with open("playlist.txt", "a") as file:
    file.write("Love Me Like You Do\n")
    file.write("Shape of You\n")

print("2 additional songs appended to playlist.txt!")