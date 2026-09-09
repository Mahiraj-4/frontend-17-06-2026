class Playlist {
  constructor(name, createdOn, isPublic) {
    this.name = name;
    this.createdOn = createdOn;
    this.isPublic = isPublic;
  }

  togglePublic() {
    this.isPublic = !this.isPublic;
    return this.isPublic;
  }
}

const myPlaylist = new Playlist("Coding Focus", new Date(), true);
console.log("Initial isPublic:", myPlaylist.isPublic);

// Toggle 1
myPlaylist.togglePublic();
console.log("After 1st toggle:", myPlaylist.isPublic);

// Toggle 2
myPlaylist.togglePublic();
console.log("After 2nd toggle:", myPlaylist.isPublic);