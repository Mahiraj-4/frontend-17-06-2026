const menuDishes = [
  { name: "Paneer Tikka", price: 180, category: "Food", isVegetarian: true },
  { name: "Butter Chicken", price: 260, category: "Food", isVegetarian: false },
  { name: "Veg Biryani", price: 210, category: "Food", isVegetarian: true },
  { name: "Mango Lassi", price: 90, category: "Beverage", isVegetarian: true },
  { name: "Chicken Seekh Kebab", price: 240, category: "Food", isVegetarian: false },
  { name: "Masala Chaas", price: 60, category: "Beverage", isVegetarian: true }
];

// 1. filter() to extract only vegetarian dishes
const vegetarianDishes = menuDishes.filter((dish) => dish.isVegetarian);
console.log("Vegetarian Dishes Array:", vegetarianDishes);

// 2. map() to produce formatted strings
const formattedMenu = menuDishes.map((dish) => `${dish.name} – Rs ${dish.price}`);

// 3. reduce() to calculate total price of all dishes
const totalMenuPrice = menuDishes.reduce((sum, dish) => sum + dish.price, 0);

// Three clearly labelled console outputs
console.log(`Count of Vegetarian Dishes: ${vegetarianDishes.length}`);
console.log("Formatted Menu Array:", formattedMenu);
console.log(`Total Price of All Dishes: Rs ${totalMenuPrice}`);