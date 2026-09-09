class FoodOrder {
  // Single object parameter destructured into properties
  constructor({ orderId, restaurantName, isDelivered }) {
    this.orderId = orderId;
    this.restaurantName = restaurantName;
    this.isDelivered = isDelivered;
  }

  markDelivered() {
    this.isDelivered = true;
    console.log(`Order #${this.orderId} from ${this.restaurantName} is marked delivered.`);
  }
}

// Instantiation using an object argument
const orderDetails = {
  orderId: 2045,
  restaurantName: "Pizza Hub",
  isDelivered: false
};

const order2 = new FoodOrder(orderDetails);

console.log("Order created:", order2);
order2.markDelivered();