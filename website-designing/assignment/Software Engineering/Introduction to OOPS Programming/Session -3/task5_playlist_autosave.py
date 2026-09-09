class Playlist:
    def __init__(self, name="My Favourites"):
        self.name = name
        print(f"Playlist '{self.name}' opened.")

    def __del__(self):
        with open("autosave.txt", "w") as f:
            f.write(f"Playlist Name: {self.name}\n")
        print(f"Auto-saved '{self.name}' to autosave.txt upon exit.")

user_playlist = Playlist("Late Night Lo-Fi")
del user_playlist