class Task:
    def __init__(self, title: str):
        self.title = title
        self.is_done = False

    def mark_done(self) -> None:
        self.is_done = True

    def display(self, index: int = 1) -> None:
        status = "DONE" if self.is_done else "PENDING"
        print(f"{index}. [{status}] {self.title}")