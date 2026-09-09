class SocialMediaUploader {
    public void uploadContent() {
        System.out.println("Uploading generic media to social network...");
    }
}

class InstagramUploader extends SocialMediaUploader {
    @Override
    public void uploadContent() {
        System.out.println("Instagram: Uploading 9:16 Reel with filters, hashtags, and music overlay.");
    }
}

class YouTubeUploader extends SocialMediaUploader {
    @Override
    public void uploadContent() {
        System.out.println("YouTube: Uploading 16:9 4K Video with custom thumbnail, title, and tags.");
    }
}

public class SocialMediaDemo {
    public static void main(String[] args) {
        SocialMediaUploader insta = new InstagramUploader();
        SocialMediaUploader yt = new YouTubeUploader();

        insta.uploadContent();
        yt.uploadContent();
    }
}