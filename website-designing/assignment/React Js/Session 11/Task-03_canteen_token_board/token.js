const statusEl = document.getElementById("status");

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

statusEl.textContent = "Order placed for Masala Dosa...";
console.log("Order placed");

wait(1000)
  .then(() => {
    statusEl.textContent = "Cooking...";
    return wait(1000);
  })
  .then(() => {
    statusEl.textContent = "Packing...";
    return wait(1000);
  })
  .then(() => {
    statusEl.textContent = "Token 42: Masala Dosa is Ready!";
  });