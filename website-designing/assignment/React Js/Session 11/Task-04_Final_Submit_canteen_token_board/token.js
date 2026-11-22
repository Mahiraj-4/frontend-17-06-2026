const statusEl = document.getElementById("status");
const orderBtn = document.getElementById("orderBtn");

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

let tokenNumber = 42;

async function runOrder() {
  orderBtn.disabled = true;

  const currentToken = tokenNumber;
  tokenNumber += 1;

  statusEl.textContent = `Order placed (Token ${currentToken})...`;
  console.log(`Order placed: Token ${currentToken}`);

  await wait(1000);
  statusEl.textContent = `Token ${currentToken}: Cooking...`;

  await wait(1000);
  statusEl.textContent = `Token ${currentToken}: Packing...`;

  await wait(1000);
  statusEl.textContent = `Token ${currentToken}: Masala Dosa is Ready!`;

  orderBtn.disabled = false;
}

orderBtn.addEventListener("click", runOrder);