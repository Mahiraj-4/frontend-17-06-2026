function suggestFood(mealTime) {
    switch (mealTime.toLowerCase()) {
        case "breakfast":
            console.log("How about some hot Masala Dosa & Filter Coffee?");
            break;
        case "lunch":
            console.log("Try a North Indian Thali or Butter Chicken with Naan!");
            break;
        case "dinner":
            console.log("Enjoy a delicious Hyderabadi Biryani!");
            break;
        case "snack":
            console.log("Craving Samosa and Adrak Chai?");
            break;
        default:
            console.log("Try some fruits!");
            break;
    }
}

// Example usage:
suggestFood("breakfast"); // How about some hot Masala Dosa & Filter Coffee?
suggestFood("midnight");  // Try some fruits!