class SocialMediaUser:
    def __init__(self, username, followers):
        self.username = username
        self.followers = followers

    def displayProfile(self):
        print(f"Username: {self.username} | Followers: {self.followers}")

class Podcaster(SocialMediaUser):
    def __init__(self, username, followers, podcastName):
        super().__init__(username, followers)
        self.podcastName = podcastName

    def publishEpisode(self, episodeTitle):
        print(f"Episode '{episodeTitle}' published on {self.podcastName}")

pod = Podcaster("amit_talks", 22000, "The Chai & Code Show")
pod.displayProfile()
pod.publishEpisode("Ep 12: Future of AI")