SET SQL_SAFE_UPDATES = 0;

UPDATE playlists
SET name = 'Evening Chill'
WHERE user_id = 101 AND name = 'Chill Vibes';

SET SQL_SAFE_UPDATES = 1;