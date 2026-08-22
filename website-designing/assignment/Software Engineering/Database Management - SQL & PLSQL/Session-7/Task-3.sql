CREATE TABLE SpotifyUser (
    user_id INT PRIMARY KEY,
    username VARCHAR(50) UNIQUE,
    email VARCHAR(100) NOT NULL,
    subscription_type VARCHAR(20)
);

INSERT INTO SpotifyUser (user_id, username, email, subscription_type) VALUES
(1, 'alex_m', 'alex@example.com', 'Premium'),
(2, 'sarah_k', 'sarah@example.com', 'Free'),
(3, 'dev_r', 'dev@example.com', 'Family'),
(4, 'priya_s', 'priya@example.com', 'Premium'),
(5, 'john_d', 'john@example.com', 'Student'),
(6, 'maya_l', 'maya@example.com', 'Free');