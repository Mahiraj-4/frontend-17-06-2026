public class Song {
    // Private properties: directly accessible only inside this class
    private String title;
    private String artist;

    public Song(String title, String artist) {
        this.title = title;
        this.artist = artist;
    }

    // Getter for title
    public String getTitle() {
        return title;
    }

    // Setter for title
    public void setTitle(String title) {
        this.title = title;
    }

    // Getter for artist
    public String getArtist() {
        return artist;
    }

    // Setter for artist
    public void setArtist(String artist) {
        this.artist = artist;
    }

    public static void main(String[] args) {
        Song mySong = new Song("Blinding Lights", "The Weeknd");
        System.out.println("Original Title: " + mySong.getTitle() + " | Artist: " + mySong.getArtist());

        // Modifying private data using setter
        mySong.setTitle("Save Your Tears");
        System.out.println("Updated Title:  " + mySong.getTitle() + " | Artist: " + mySong.getArtist());
    }
}