class SocialMediaUser:
    def __init__(self, username, followers):
        self.username = username
        self.followers = followers

class YouTuber(SocialMediaUser):
    def __init__(self, username, followers, channelName):
        super().__init__(username, followers)
        self.channelName = channelName

class GamingYouTuber(YouTuber):
    def __init__(self, username, followers, channelName):
        super().__init__(username, followers, channelName)

    def streamGame(self, gameName):
        print(f"{self.username} is now streaming {gameName} on {self.channelName}")

gamer = GamingYouTuber("mortal_fan", 1200000, "MortalPlayz")
gamer.streamGame("BGMI")