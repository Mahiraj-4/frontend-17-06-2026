class Movie:
    def __init__(self, title, director=None, year=None):
        if isinstance(title, Movie):
            # Copy constructor logic
            self.title = title.title
            self.director = title.director
            self.year = title.year
        else:
            # Parameterized constructor logic
            self.title = title
            self.director = director
            self.year = year

    def display(self):
        print(f"Title: {self.title}, Director: {self.director}, Year: {self.year}")

original_movie = Movie("Inception", "Christopher Nolan", 2010)
copied_movie = Movie(original_movie)

print("Original Movie:")
original_movie.display()

print("Copied Movie:")
copied_movie.display()