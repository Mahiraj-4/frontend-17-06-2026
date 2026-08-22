USE instaclone;

CREATE TABLE IF NOT EXISTS payments (
    payment_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    payment_date DATE
);

INSERT INTO payments (user_id, amount, payment_date) VALUES
(101, 1500.00, '2026-08-01'),
(101, 2500.00, '2026-08-05'),  -- ₹2000 se jyada
(102, 1800.00, '2026-08-02'),
(103, 3500.00, '2026-08-10'),  -- ₹2000 se jyada
(104, 800.00,  '2026-08-12'),
(102, 2200.00, '2026-08-15');  -- ₹2000 se jyada

SELECT DISTINCT user_id
FROM payments
WHERE user_id IN (
    SELECT user_id 
    FROM payments 
    WHERE amount > 2000
);