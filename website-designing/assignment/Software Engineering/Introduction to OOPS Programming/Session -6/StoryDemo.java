class InstaStory {
    // Protected property: accessible within the same package and by subclasses
    protected int storyViews;

    public InstaStory(int views) {
        this.storyViews = views;
    }
}

class SponsoredStory extends InstaStory {
    private String sponsorBrand;

    public SponsoredStory(int views, String sponsorBrand) {
        super(views);
        this.sponsorBrand = sponsorBrand;
    }

    public void displayStoryStats() {
        // Accessing protected member directly from subclass
        System.out.println("Brand Sponsor : " + sponsorBrand);
        System.out.println("Total Views   : " + storyViews);
    }
}

public class StoryDemo {
    public static void main(String[] args) {
        SponsoredStory adStory = new SponsoredStory(45000, "Nike");
        adStory.displayStoryStats();
    }
}