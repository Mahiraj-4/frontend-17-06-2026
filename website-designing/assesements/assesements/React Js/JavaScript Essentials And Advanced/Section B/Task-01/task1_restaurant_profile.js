const restaurantName = "Spice Garden";
const cuisineType = "Indian";
let averageRating = 4.5;
let isOpen = true;

const statusText = isOpen ? "Open Now" : "Closed";
const profileCard = `${restaurantName} | ${cuisineType} | Rating: ${averageRating} | ${statusText}`;

console.log(profileCard);

const restaurantDetails = {
  restaurantName,
  cuisineType,
  averageRating,
  isOpen
};

const serializedJson = JSON.stringify(restaurantDetails);
console.log("Serialized JSON:", serializedJson);