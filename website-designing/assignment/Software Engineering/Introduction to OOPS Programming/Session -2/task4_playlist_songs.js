class Playlist {
  constructor(name, createdOn, isPublic) {
    this.name = name;
    this.createdOn = createdOn;
    this.isPublic = isPublic;
    this.songs = []; // Empty array initialize kiya
  }

  addSong(songTitle) {
    this.songs.push(songTitle);
  }
}

const roadTrip = new Playlist("Road Trip Hits", new Date(), false);

// 3 Songs add karna
roadTrip.addSong("Midnight City");
roadTrip.addSong("Hotel California");
roadTrip.addSong("Levitating");

// Updated song list display karna
console.log(`Songs in "${roadTrip.name}":`, roadTrip.songs);