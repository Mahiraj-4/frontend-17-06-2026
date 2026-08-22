CREATE TABLE Cart (
    cart_item_id INT PRIMARY KEY,
    user_id INT,
    product_name VARCHAR(100),
    price DECIMAL(10,2)
);

INSERT INTO Cart (cart_item_id, user_id, product_name, price)
VALUES (1, 1001, 'Noise Wireless Earbuds', 1499.00);

SAVEPOINT FirstItemAdded;

INSERT INTO Cart (cart_item_id, user_id, product_name, price)
VALUES (2, 1001, 'Silicone Protective Case', 299.00);

ROLLBACK TO SAVEPOINT FirstItemAdded;

COMMIT;

SELECT * FROM Cart WHERE user_id = 1001;