SET SQL_SAFE_UPDATES = 0;

DELETE FROM playlists
WHERE user_id = 101 AND name = 'Workout Mix';

SET SQL_SAFE_UPDATES = 1;