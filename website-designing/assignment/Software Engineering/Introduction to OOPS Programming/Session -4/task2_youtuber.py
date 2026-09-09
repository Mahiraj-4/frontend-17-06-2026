class SocialMediaUser:
    def __init__(self, username, followers):
        self.username = username
        self.followers = followers

    def displayProfile(self):
        print(f"Username: {self.username} | Followers: {self.followers}")

class YouTuber(SocialMediaUser):
    def __init__(self, username, followers, channelName):
        super().__init__(username, followers)
        self.channelName = channelName

    def uploadVideo(self, title):
        print(f"Video '{title}' uploaded to {self.channelName}")

yt = YouTuber("rahul_codes", 50000, "CodeWithRahul")
yt.displayProfile()
yt.uploadVideo("Python Inheritance Tutorial")