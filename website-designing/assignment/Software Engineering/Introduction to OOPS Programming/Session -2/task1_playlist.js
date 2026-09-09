class Playlist {
  constructor(name, createdOn, isPublic) {
    this.name = name;
    this.createdOn = createdOn;
    this.isPublic = isPublic;
  }
}

// Object instantiation
const myPlaylist = new Playlist("Chill Beats", new Date("2026-03-01"), true);

// Properties print karna
console.log("Playlist Name:", myPlaylist.name);
console.log("Created On:", myPlaylist.createdOn.toDateString());
console.log("Is Public:", myPlaylist.isPublic);