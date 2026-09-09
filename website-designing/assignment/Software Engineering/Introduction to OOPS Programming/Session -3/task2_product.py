class Product:
    def __init__(self, product_name, price, rating):
        self.product_name = product_name
        self.price = price
        self.rating = rating

    def display_info(self):
        print(f"Product: {self.product_name} | Price: ₹{self.price} | Rating: {self.rating}★")

item = Product("Wireless Headphones", 2499.00, 4.5)
item.display_info()