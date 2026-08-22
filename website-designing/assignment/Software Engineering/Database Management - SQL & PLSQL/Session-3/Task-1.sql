CREATE TABLE Restaurants (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    cuisine VARCHAR(50),
    rating DECIMAL(2, 1),
    city VARCHAR(50)
);

INSERT INTO Restaurants (name, cuisine, rating, city) VALUES
('Spice Villa', 'North Indian', 4.2, 'Ahmedabad'),
('Dragon Wok', 'Chinese', 4.5, 'Ahmedabad'),
('Little Italy', 'Italian', 3.8, 'Mumbai'),
('Quick Bites', 'Fast Food', 3.2, 'Delhi'),
('Flavors of South', 'South Indian', 4.6, 'Ahmedabad');