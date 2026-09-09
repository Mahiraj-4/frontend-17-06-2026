class Ticket:
    def __init__(self, movie_name, seat_no):
        self.movie_name = movie_name
        self.seat_no = seat_no
        print(f"Ticket booked: {self.movie_name} (Seat: {self.seat_no})")

    def __del__(self):
        print("Saving your ticket...")

t1 = Ticket("Interstellar", "A12")
del t1  # Explicitly deletes object to trigger __del__ immediately