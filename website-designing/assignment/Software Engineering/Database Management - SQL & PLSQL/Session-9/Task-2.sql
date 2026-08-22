CREATE TABLE OrderItems (
    item_id INT PRIMARY KEY,
    order_id INT,
    item_name VARCHAR(100),
    price DECIMAL(10,2)
);

INSERT INTO OrderItems (item_id, order_id, item_name, price)
VALUES (1, 501, 'Butter Chicken', 380.00);

INSERT INTO OrderItems (item_id, order_id, item_name, price)
VALUES (2, 501, 'Garlic Naan', 60.00);

ROLLBACK;

SELECT COUNT(*) AS total_rows FROM OrderItems WHERE order_id = 501;