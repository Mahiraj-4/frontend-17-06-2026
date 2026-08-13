/**
 * Formats large numerical follower counts into human-readable strings (e.g., 1.5K, 1.2M)
 * @param {number} count - Total number of followers
 * @returns {string} Formatted count string
 */
function formatFollowersCount(count) {
    // If count is 1 Million (1,000,000) or above
    if (count >= 1000000) {
        let formatted = (count / 1000000).toFixed(1);
        // Remove trailing .0 if exact integer (e.g., 2.0M -> 2M)
        formatted = formatted.endsWith('.0') ? formatted.slice(0, -2) : formatted;
        return formatted + 'M';
    } 
    // If count is 1 Thousand (1,000) or above
    else if (count >= 1000) {
        let formatted = (count / 1000).toFixed(1);
        formatted = formatted.endsWith('.0') ? formatted.slice(0, -2) : formatted;
        return formatted + 'K';
    } 
    // For numbers below 1000, return as-is
    else {
        return count.toString();
    }
}

// Example testing:
console.log(formatFollowersCount(850));     // Output: 850
console.log(formatFollowersCount(1500));    // Output: 1.5K
console.log(formatFollowersCount(1200000)); // Output: 1.2M