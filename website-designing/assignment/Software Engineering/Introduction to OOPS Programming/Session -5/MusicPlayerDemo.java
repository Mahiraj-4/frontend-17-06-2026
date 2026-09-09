class MusicPlayer {
    void play(String song) {
        System.out.println("Playing: " + song);
    }
}

class SpotifyPlayer extends MusicPlayer {
    @Override
    void play(String song) {
        System.out.println("Streaming on Spotify: " + song);
    }
}

public class MusicPlayerDemo {
    public static void main(String[] args) {
        // Upcasting: Parent class reference, Child class object
        MusicPlayer player = new SpotifyPlayer();
        player.play("Starboy");
    }
}