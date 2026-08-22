CREATE TABLE Orders (
    order_id INT PRIMARY KEY,
    customer_name VARCHAR(100),
    total_amount DECIMAL(10,2),
    order_status VARCHAR(50) DEFAULT 'Pending'
);

INSERT INTO Orders (order_id, customer_name, total_amount, order_status)
VALUES (101, 'Aarav Sharma', 2499.00, 'Confirmed');

COMMIT;

SELECT * FROM Orders WHERE order_id = 101;