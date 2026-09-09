class SocialMediaUser:
    def __init__(self, username, followers):
        self.username = username
        self.followers = followers

    def displayProfile(self):
        print(f"Username: {self.username} | Followers: {self.followers}")

class InstagramInfluencer(SocialMediaUser):
    def __init__(self, username, followers):
        super().__init__(username, followers)

    def postStory(self, storyTitle):
        print(f"{self.username} posted a new story: {storyTitle}")

insta = InstagramInfluencer("sneha_travels", 85000)
insta.displayProfile()
insta.postStory("Exploring the mountains of Manali! 🏔️")