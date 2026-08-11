USE foodapp_db;

-- Step 1: Foreign key constraint errors se bachne ke liye safe reset
SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE IF EXISTS menu_items;
DROP TABLE IF EXISTS restaurants;
DROP VIEW IF EXISTS restaurant_menu_summary;
SET FOREIGN_KEY_CHECKS = 1;

-- Step 2: Restaurants Table Create karein
CREATE TABLE restaurants (
    restaurant_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    city VARCHAR(50)
);

-- Step 3: Menu Items Table Create karein (Foreign Key Link ke saath)
CREATE TABLE menu_items (
    item_id INT AUTO_INCREMENT PRIMARY KEY,
    restaurant_id INT,
    item_name VARCHAR(100) NOT NULL,
    price DECIMAL(8, 2) NOT NULL,
    category VARCHAR(50),
    FOREIGN KEY (restaurant_id) REFERENCES restaurants(restaurant_id) ON DELETE CASCADE
);

-- Step 4: 5 Restaurants Insert karein (Karavalli me 0 items honge)
INSERT INTO restaurants (name, city) VALUES
('The Spice Route', 'Delhi'),
('Bawarchi', 'Hyderabad'),
('Punjab Grill', 'Mumbai'),
('Dakshin', 'Chennai'),
('Karavalli', 'Bengaluru');

-- Step 5: 12 Menu Items Insert karein (Pehle 4 restaurants me distributed)
INSERT INTO menu_items (restaurant_id, item_name, price, category) VALUES
-- The Spice Route
(1, 'Butter Chicken', 450.00, 'Main Course'),
(1, 'Garlic Naan', 60.00, 'Bread'),
(1, 'Paneer Tikka', 320.00, 'Starter'),
-- Bawarchi
(2, 'Hyderabadi Biryani', 350.00, 'Main Course'),
(2, 'Mirchi Ka Salan', 180.00, 'Side Dish'),
(2, 'Double Ka Meetha', 150.00, 'Dessert'),
-- Punjab Grill
(3, 'Dal Makhani', 280.00, 'Main Course'),
(3, 'Amritsari Kulcha', 120.00, 'Bread'),
(3, 'Lassi', 90.00, 'Beverage'),
-- Dakshin
(4, 'Masala Dosa', 160.00, 'Main Course'),
(4, 'Idli Sambar', 100.00, 'Breakfast'),
(4, 'Filter Coffee', 50.00, 'Beverage');

-- Task Requirement 1: INNER JOIN Query (Sirf available items wale restaurants)
SELECT 
    r.name AS restaurant_name,
    m.item_name,
    m.price
FROM restaurants r
INNER JOIN menu_items m ON r.restaurant_id = m.restaurant_id;

-- Task Requirement 2: LEFT JOIN Query (Bina items wale restaurants bhi NULL ke sath dikhenge)
SELECT 
    r.name AS restaurant_name,
    m.item_name,
    m.price
FROM restaurants r
LEFT JOIN menu_items m ON r.restaurant_id = m.restaurant_id;

-- Task Requirement 3: VIEW Create karein (Summary: Total items aur Avg price)
CREATE VIEW restaurant_menu_summary AS
SELECT 
    r.name AS restaurant_name,
    COUNT(m.item_id) AS total_items,
    IFNULL(ROUND(AVG(m.price), 2), 0) AS avg_item_price
FROM restaurants r
LEFT JOIN menu_items m ON r.restaurant_id = m.restaurant_id
GROUP BY r.restaurant_id, r.name;

-- VIEW ka output check karne ke liye SELECT query
SELECT * FROM restaurant_menu_summary;