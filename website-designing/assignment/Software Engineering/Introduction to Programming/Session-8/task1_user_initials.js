function getUserInitials(fullName) {
    return fullName
        .trim()
        .split(" ")
        .filter(word => word.length > 0)
        .map(word => word[0].toUpperCase())
        .join("");
}

// Call with favorite cricketer's name
const cricketer = "Virat Kohli";
console.log(`Initials for ${cricketer}: ${getUserInitials(cricketer)}`); // Output: VK