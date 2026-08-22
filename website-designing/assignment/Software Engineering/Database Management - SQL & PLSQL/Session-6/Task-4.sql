USE instaclone;

CREATE TABLE IF NOT EXISTS movies (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    rating DECIMAL(3, 1) NOT NULL
);

INSERT INTO movies (title, rating) VALUES
('Inception', 9.0),
('Inception', 8.6),
('Interstellar', 8.8),
('Interstellar', 8.4),
('Avatar', 7.8),
('Avatar', 7.4),
('Morbius', 5.2),
('Morbius', 5.0);

SELECT 
    title,
    ROUND(AVG(rating), 2) AS avg_movie_rating
FROM movies
GROUP BY title
HAVING AVG(rating) > (
    SELECT AVG(rating) 
    FROM movies
);