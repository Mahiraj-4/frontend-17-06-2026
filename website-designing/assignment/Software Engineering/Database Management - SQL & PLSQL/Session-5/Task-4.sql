SELECT 
    posts.post_id,
    posts.caption,
    COALESCE(influencers.name, 'Unassigned') AS influencer_name
FROM influencers
RIGHT JOIN posts 
    ON influencers.influencer_id = posts.influencer_id;