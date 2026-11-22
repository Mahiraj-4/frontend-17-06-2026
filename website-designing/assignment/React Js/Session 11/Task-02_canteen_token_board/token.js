const statusEl = document.getElementById("status");

statusEl.textContent = "Order placed for Masala Dosa...";
console.log("Order placed");

function prepareStage(stageName, callback) {
  setTimeout(function () {
    statusEl.textContent = stageName;
    if (callback) {
      callback();
    }
  }, 1000);
}

prepareStage("Cooking...", function () {
  prepareStage("Packing...", function () {
    prepareStage("Token 42: Masala Dosa is Ready!");
  });
});