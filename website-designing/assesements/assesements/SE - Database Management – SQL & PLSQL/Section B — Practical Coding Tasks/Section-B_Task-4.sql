USE foodapp_db;

-- Step 1: Safe Reset (Purani tables aur procedure drop karein)
SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS customers;
DROP PROCEDURE IF EXISTS place_order;
SET FOREIGN_KEY_CHECKS = 1;

-- Step 2: Customers Table Create karein
CREATE TABLE customers (
    customer_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    wallet_balance DECIMAL(10, 2) NOT NULL
);

-- Step 3: Orders Table Create karein
CREATE TABLE orders (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    customer_id INT,
    restaurant_id INT,
    total_amount DECIMAL(10, 2) NOT NULL,
    order_date DATETIME NOT NULL,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id),
    FOREIGN KEY (restaurant_id) REFERENCES restaurants(restaurant_id)
);

-- Step 4: Sample Customer Insert karein (Balance: Rs 1000)
INSERT INTO customers (name, wallet_balance) VALUES
('Rahul Sharma', 1000.00);

-- Step 5: Stored Procedure Create karein (Transaction Control ke saath)
DELIMITER //

CREATE PROCEDURE place_order(
    IN p_customer_id INT,
    IN p_restaurant_id INT,
    IN p_amount DECIMAL(10, 2)
)
BEGIN
    DECLARE current_balance DECIMAL(10, 2) DEFAULT 0.00;

    -- Transaction Shuru Karein
    START TRANSACTION;

    -- Customer ka current balance check karein
    SELECT wallet_balance INTO current_balance
    FROM customers
    WHERE customer_id = p_customer_id
    FOR UPDATE;

    -- Sufficient Balance Check
    IF current_balance >= p_amount THEN
        -- 1. Balance Deduct karein
        UPDATE customers
        SET wallet_balance = wallet_balance - p_amount
        WHERE customer_id = p_customer_id;

        -- 2. Order Insert karein
        INSERT INTO orders (customer_id, restaurant_id, total_amount, order_date)
        VALUES (p_customer_id, p_restaurant_id, p_amount, NOW());

        -- 3. Permanent Save (COMMIT)
        COMMIT;
        SELECT 'Order Placed Successfully!' AS Status, (current_balance - p_amount) AS Remaining_Wallet_Balance;
    ELSE
        -- 4. Balance Kam Hone Par Changes Rollback Karein (ROLLBACK)
        ROLLBACK;
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Error: Insufficient wallet balance!';
    END IF;
END //

DELIMITER ;
CALL place_order(1, 1, 400.00);
CALL place_order(1, 1, 1500.00);