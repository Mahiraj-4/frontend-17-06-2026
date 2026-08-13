function addToCart(cart, productName) {
    cart.push(productName);
    console.log("Cart inside function:", cart);
}

let myCart = ["Smartphone", "Wireless Earbuds"];

console.log("Original Cart BEFORE function call:", myCart);

// JavaScript passes arrays by reference
addToCart(myCart, "Smartwatch");

// The original array is modified outside the function as well
console.log("Original Cart AFTER function call:", myCart);