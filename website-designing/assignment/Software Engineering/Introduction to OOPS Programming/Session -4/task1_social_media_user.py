class SocialMediaUser:
    def __init__(self, username, followers):
        self.username = username
        self.followers = followers

    def displayProfile(self):
        print(f"Username: {self.username} | Followers: {self.followers}")

user = SocialMediaUser("tech_guru", 12500)
user.displayProfile()