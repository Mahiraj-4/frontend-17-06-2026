SELECT *
FROM Restaurants
WHERE city = 'Ahmedabad' AND rating > 4.0
ORDER BY rating DESC
LIMIT 2;