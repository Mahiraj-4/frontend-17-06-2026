USE foodapp_db;

-- Step 1: Purani orders table delete karein (Agar pehle se bani ho)
DROP TABLE IF EXISTS orders;

-- Step 2: Orders Table Create karein
CREATE TABLE orders (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    restaurant_id INT,
    customer_name VARCHAR(100) NOT NULL,
    total_amount DECIMAL(10, 2) NOT NULL,
    order_date DATETIME NOT NULL,
    FOREIGN KEY (restaurant_id) REFERENCES restaurants(restaurant_id) ON DELETE CASCADE
);

-- Step 3: 12 Orders Insert karein (4 alag restaurants par distributed)
INSERT INTO orders (restaurant_id, customer_name, total_amount, order_date) VALUES
(1, 'Rahul Sharma', 2500.00, '2026-08-01 12:30:00'),
(1, 'Priya Singh', 1800.00, '2026-08-02 14:15:00'),
(1, 'Amit Patel', 1200.00, '2026-08-03 19:45:00'),

(2, 'Neha Gupta', 1500.00, '2026-08-04 13:00:00'),
(2, 'Vikas Verma', 2000.00, '2026-08-05 20:10:00'),
(2, 'Sanjay Kumar', 1700.00, '2026-08-06 21:00:00'),

(4, 'Ananya Roy', 800.00, '2026-08-07 11:30:00'),
(4, 'Rohan Das', 600.00, '2026-08-08 15:20:00'),
(4, 'Kavita Joshi', 1200.00, '2026-08-09 18:00:00'),

(5, 'Manish Reddy', 3000.00, '2026-08-10 19:30:00'),
(5, 'Sneha Iyer', 2800.00, '2026-08-11 10:00:00'),
(5, 'Pooja Mehta', 2200.00, '2026-08-11 13:45:00');

-- Query 1: Total Revenue aur Average Order Value (Har Restaurant ka)
SELECT 
    restaurant_id,
    SUM(total_amount) AS total_revenue,
    AVG(total_amount) AS avg_order_value
FROM orders
GROUP BY restaurant_id;

-- Query 2: Sirf wo Restaurants jinaka Total Revenue Rs 5,000 se zyada hai (HAVING Clause)
SELECT 
    restaurant_id,
    SUM(total_amount) AS total_revenue,
    AVG(total_amount) AS avg_order_value
FROM orders
GROUP BY restaurant_id
HAVING SUM(total_amount) > 5000;

-- Query 3: Top 5 Recent Orders (ORDER BY & LIMIT)
SELECT *
FROM orders
ORDER BY order_date DESC
LIMIT 5;