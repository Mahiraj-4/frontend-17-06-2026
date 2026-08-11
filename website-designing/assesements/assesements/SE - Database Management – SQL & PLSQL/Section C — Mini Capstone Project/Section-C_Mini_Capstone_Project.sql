USE foodapp_db;

-- Step 1: Clean Reset (Tables, Views, Trigger, aur Procedure drop karein)
SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE IF EXISTS order_audit;
DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS menu_items;
DROP TABLE IF EXISTS restaurants;
DROP VIEW IF EXISTS restaurant_sales_summary;
DROP PROCEDURE IF EXISTS add_order;
DROP TRIGGER IF EXISTS after_order_insert;
SET FOREIGN_KEY_CHECKS = 1;

-- =========================================================
-- DDL STATEMENTS (Table Creation)
-- =========================================================

-- 1. Restaurants Table
CREATE TABLE restaurants (
    restaurant_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    city VARCHAR(50) NOT NULL,
    cuisine_type VARCHAR(50) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 2. Menu Items Table
CREATE TABLE menu_items (
    item_id INT AUTO_INCREMENT PRIMARY KEY,
    restaurant_id INT NOT NULL,
    item_name VARCHAR(100) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    category VARCHAR(50) NOT NULL,
    FOREIGN KEY (restaurant_id) REFERENCES restaurants(restaurant_id) ON DELETE CASCADE
);

-- 3. Orders Table
CREATE TABLE orders (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    customer_name VARCHAR(100) NOT NULL,
    restaurant_id INT NOT NULL,
    item_id INT NOT NULL,
    quantity INT NOT NULL,
    total_amount DECIMAL(10, 2) NOT NULL,
    order_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (restaurant_id) REFERENCES restaurants(restaurant_id) ON DELETE CASCADE,
    FOREIGN KEY (item_id) REFERENCES menu_items(item_id) ON DELETE CASCADE
);

-- 4. Order Audit Log Table (Trigger ke liye)
CREATE TABLE order_audit (
    audit_id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT NOT NULL,
    restaurant_id INT NOT NULL,
    action VARCHAR(20) DEFAULT 'INSERT',
    log_time DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- =========================================================
-- TRIGGER CREATION
-- =========================================================

DELIMITER //

CREATE TRIGGER after_order_insert
AFTER INSERT ON orders
FOR EACH ROW
BEGIN
    INSERT INTO order_audit (order_id, restaurant_id, action, log_time)
    VALUES (NEW.order_id, NEW.restaurant_id, 'INSERT', NOW());
END //

DELIMITER ;

-- =========================================================
-- STORED PROCEDURE CREATION
-- =========================================================

DELIMITER //

CREATE PROCEDURE add_order(
    IN p_customer_name VARCHAR(100),
    IN p_restaurant_id INT,
    IN p_item_id INT,
    IN p_quantity INT
)
BEGIN
    DECLARE v_price DECIMAL(10, 2) DEFAULT 0.00;
    DECLARE v_restaurant_count INT DEFAULT 0;
    DECLARE v_total_amount DECIMAL(10, 2);

    START TRANSACTION;

    -- Restaurant Validation Check
    SELECT COUNT(*) INTO v_restaurant_count
    FROM restaurants
    WHERE restaurant_id = p_restaurant_id;

    IF v_restaurant_count = 0 THEN
        ROLLBACK;
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Error: Restaurant does not exist!';
    ELSE
        -- Item Price Fetch
        SELECT price INTO v_price
        FROM menu_items
        WHERE item_id = p_item_id AND restaurant_id = p_restaurant_id;

        IF v_price IS NULL THEN
            ROLLBACK;
            SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'Error: Menu item not found for this restaurant!';
        ELSE
            -- Total Amount Calculation & Order Insertion
            SET v_total_amount = v_price * p_quantity;

            INSERT INTO orders (customer_name, restaurant_id, item_id, quantity, total_amount, order_date)
            VALUES (p_customer_name, p_restaurant_id, p_item_id, p_quantity, v_total_amount, NOW());

            COMMIT;
        END IF;
    END IF;
END //

DELIMITER ;

-- =========================================================
-- DML STATEMENTS (Sample Data Insertion)
-- =========================================================

-- 1. Insert 3 Restaurants
INSERT INTO restaurants (name, city, cuisine_type) VALUES
('The Spice Route', 'Delhi', 'North Indian'),
('Bawarchi', 'Hyderabad', 'Biryani'),
('Punjab Grill', 'Mumbai', 'Punjabi');

-- 2. Insert Menu Items across 4 Categories (Starter, Main Course, Dessert, Beverage)
INSERT INTO menu_items (restaurant_id, item_name, price, category) VALUES
(1, 'Paneer Tikka', 250.00, 'Starter'),
(1, 'Butter Chicken', 400.00, 'Main Course'),
(1, 'Gulab Jamun', 100.00, 'Dessert'),
(1, 'Mango Lassi', 80.00, 'Beverage'),

(2, 'Chicken 65', 280.00, 'Starter'),
(2, 'Hyderabadi Biryani', 350.00, 'Main Course'),
(2, 'Double Ka Meetha', 120.00, 'Dessert'),
(2, 'Masala Chai', 40.00, 'Beverage'),

(3, 'Amritsari Kulcha', 150.00, 'Starter'),
(3, 'Dal Makhani', 300.00, 'Main Course'),
(3, 'Rasmalai', 140.00, 'Dessert'),
(3, 'Fresh Lime Soda', 70.00, 'Beverage');

-- 3. Insert 15 Orders using the Stored Procedure (Automating Order Creation & Trigger Logging)
CALL add_order('Rahul Sharma', 1, 2, 2);  -- Restaurant 1
CALL add_order('Priya Singh', 1, 1, 1);
CALL add_order('Amit Patel', 1, 4, 3);
CALL add_order('Sneha Kapur', 1, 3, 2);
CALL add_order('Vikas Verma', 1, 2, 1);

CALL add_order('Ananya Roy', 2, 6, 2);   -- Restaurant 2
CALL add_order('Rohan Das', 2, 5, 1);
CALL add_order('Kavita Joshi', 2, 7, 2);
CALL add_order('Sanjay Kumar', 2, 8, 4);
CALL add_order('Neha Gupta', 2, 6, 3);

CALL add_order('Manish Reddy', 3, 10, 2); -- Restaurant 3
CALL add_order('Pooja Mehta', 3, 9, 2);
CALL add_order('Aarav Nair', 3, 11, 1);
CALL add_order('Divya Iyer', 3, 12, 3);
CALL add_order('Karan Malhotra', 3, 10, 1);

-- =========================================================
-- VIEW CREATION
-- =========================================================

CREATE VIEW restaurant_sales_summary AS
SELECT 
    r.name AS restaurant_name,
    COUNT(o.order_id) AS total_orders,
    IFNULL(SUM(o.total_amount), 0.00) AS total_revenue
FROM restaurants r
LEFT JOIN orders o ON r.restaurant_id = o.restaurant_id
GROUP BY r.restaurant_id, r.name;

-- =========================================================
-- VERIFICATION QUERIES
-- =========================================================

-- View Result
SELECT * FROM restaurant_sales_summary;

-- Audit Log Result (Trigger Validation)
SELECT * FROM order_audit;