const statusEl = document.getElementById("status");

statusEl.textContent = "Preparing your Masala Dosa...";
console.log("Order placed");

setTimeout(function () {
  statusEl.textContent = "Token 42: Masala Dosa is ready";
}, 2000);