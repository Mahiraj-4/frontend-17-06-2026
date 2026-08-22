CREATE TABLE influencers (
    influencer_id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE posts (
    post_id INT PRIMARY KEY,
    influencer_id INT,
    caption VARCHAR(255),
    FOREIGN KEY (influencer_id) REFERENCES influencers(influencer_id)
);

INSERT INTO influencers (influencer_id, name) VALUES
(1, 'Alex Rivera'),
(2, 'Sam Chen'),
(3, 'Maya Patel'),
(4, 'Jordan Lee');

INSERT INTO posts (post_id, influencer_id, caption) VALUES
(101, 1, 'Morning coffee run ☕'),
(102, 1, 'Top 5 productivity hacks for developers 💻'),
(103, 2, 'Sunset views at the beach 🌅'),
(104, 2, 'Unboxing the new setup! 📦'),
(105, 3, 'Healthy meal prep for the week 🥗'),
(106, 3, 'Quick 15-minute home workout 💪');