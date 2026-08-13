// Generic function that capitalizes the first letter of each word in any input string
function capitalizeString(str) {
    if (!str || typeof str !== 'string') return '';
    
    return str
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}

// Reusable for Product Names
console.log("Product:", capitalizeString("nike running shoes")); // Output: Nike Running Shoes

// Reusable for Usernames / Full Names
console.log("Username:", capitalizeString("mohit agrawal"));     // Output: Mohit Agrawal