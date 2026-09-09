class FoodOrder {
  constructor(orderId, restaurantName, isDelivered) {
    this.orderId = orderId;
    this.restaurantName = restaurantName;
    this.isDelivered = isDelivered;
  }

  markDelivered() {
    this.isDelivered = true;
    console.log(`Order #${this.orderId} from ${this.restaurantName} has been successfully delivered!`);
  }
}

// Object instantiation
const order1 = new FoodOrder(101, "Urban Tandoor", false);

console.log("Delivery Status before:", order1.isDelivered);
order1.markDelivered();
console.log("Delivery Status after:", order1.isDelivered);