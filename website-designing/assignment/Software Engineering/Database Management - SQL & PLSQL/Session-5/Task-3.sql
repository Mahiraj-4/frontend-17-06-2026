SELECT 
    influencers.name AS influencer_name,
    COALESCE(posts.caption, 'No Posts') AS caption
FROM influencers
LEFT JOIN posts 
    ON influencers.influencer_id = posts.influencer_id;