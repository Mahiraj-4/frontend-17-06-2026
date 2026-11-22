# M1 - JavaScript Essentials And Advanced (M1-A1)
## Section A — Concept Application

---

### Question 1: Variable Declarations (`var`, `let`, `const`) & Scope

#### 1. Keyword Selection
* **Restaurant Name (`const restaurantName`):** The restaurant's name stays constant throughout the entire session. Using `const` prevents accidental reassignment (throwing a `TypeError` if overwritten) and signals that the value is read-only.
* **Minimum Order Value (`const minOrderValue`):** Because the minimum order threshold is a fixed rule for that restaurant during the session, `const` protects it from accidental modification during cart calculations.
* **Currently Selected Dish (`let selectedDish`):** As the user browses and clicks different menu items, this variable must be updated repeatedly. `let` allows clean reassignment while keeping the variable safely scoped.

#### 2. How Scope and Reassignment Rules Influence These Choices
* **Block Scope (`let` and `const`):** Both `let` and `const` are block-scoped (`{ ... }`), meaning they are accessible only inside the nearest enclosing curly braces (`if`, loop, or function). This prevents accidental leaks into the global scope or unintended overwrites from unrelated functions.
* **Temporal Dead Zone (TDZ):** Unlike `var`, `let` and `const` cannot be accessed before their declaration line, preventing bugs caused by `undefined` hoisted variables.
* **Why `var` is Avoided:** `var` is function-scoped, ignores block boundaries, permits accidental re-declaration of the same variable name in the same scope, and hoists as `undefined`.

#### 3. ES6+ Code Example
```javascript
const restaurantName = "Spice Route Kitchen";
const minOrderValue = 199;

let selectedDish = "Paneer Tikka";
console.log(`${restaurantName} (Min Order: Rs ${minOrderValue}) - Selected: ${selectedDish}`);

// Reassigning 'let' when the user selects another dish
selectedDish = "Masala Dosa";
console.log(`Updated Selection: ${selectedDish}`);
```

---

### Question 2: Delivery Fee Engine, Equality Operators & Condition Ordering

#### 1. Conditional Logic (ES6+)
```javascript
const calculateDeliveryFee = (orderAmount, userType) => {
  if (userType === "VIP") {
    return 0;
  } else if (orderAmount > 500) {
    return 0;
  } else if (orderAmount >= 200) {
    return 40;
  } else {
    return 70;
  }
};
```

#### 2. Strict Equality (`===`) vs. Loose Equality (`==`)
* **Choice:** Always use **strict equality (`===`)** when checking `userType === "VIP"`.
* **Justification:** Loose equality (`==`) performs implicit type coercion before comparing values, which can cause unexpected truthy/falsy matches when inputs come from forms, APIs, or `localStorage`. Strict equality checks both **value and data type** without coercion, guaranteeing that only the exact string `"VIP"` qualifies for free delivery.

#### 3. Why the Order of Conditions Matters
1. **VIP Override Must Come First:** Checking `userType === "VIP"` at the very top ensures VIP users always get `0` delivery fee regardless of order value. If amount checks came first, a VIP ordering Rs 150 would match `orderAmount < 200` and wrongly be charged Rs 70.
2. **Descending Thresholds Prevent Overlap:** Checking `orderAmount > 500` before `orderAmount >= 200` ensures orders above Rs 500 exit early with `0`, allowing `else if (orderAmount >= 200)` to cleanly cover the exact inclusive range `200` to `500`, while `else` handles orders strictly below `200`.

---

### Question 3: Loop Constructs (`for...of` vs. `forEach`)

#### 1. Loop Choices for Each Task
* **Displaying Every Dish Name (`forEach`):** `dishes.forEach(dish => console.log(dish.name))` is concise and expressive for performing a straightforward side effect (logging every item) without managing a loop counter.
* **Counting Vegetarian Dishes (`for...of`):** A `for...of` loop with a `let vegCount = 0` counter is clean, readable, and avoids callback overhead:
  ```javascript
  // Task 1: Display all dish names
  dishes.forEach((dish) => console.log(dish.name));

  // Task 2: Count vegetarian dishes
  let vegCount = 0;
  for (const dish of dishes) {
    if (dish.isVegetarian) {
      vegCount += 1;
    }
  }
  console.log(`Vegetarian Dishes: ${vegCount}`);
  ```

#### 2. Practical Differences & When to Prefer One Over the Other
| Feature | `for...of` Loop | `.forEach()` Method |
| :--- | :--- | :--- |
| **Early Exit (`break` / `continue`)** | Supports `break`, `continue`, and `return` from the enclosing function. | Cannot stop early with `break` (`return` only skips the current callback). |
| **Async / `await` Support** | Works naturally with `await` inside sequential loops. | Does not await promises properly across iterations. |
| **Best Use Case** | Accumulating counters, searching with early exit, or async loops. | Short, declarative side effects on every element in an array. |

---

### Question 4: Reusable Tax Function & Function Syntax Comparison

#### 1. Reusable Tax Calculation Utility
```javascript
function calculateItemTax(price, category) {
  const taxRate = category === "Beverage" ? 0.18 : 0.05;
  return Number((price * taxRate).toFixed(2));
}
```

#### 2. Comparison of Function Syntaxes
* **Function Declaration (`function calculateItemTax(price, category) { ... }`):** Hoisted completely to the top of its scope, so it can be called anywhere in the file—even before its definition line—and carries an explicit name in stack traces.
* **Function Expression (`const calculateItemTax = function(price, category) { ... }`):** Not hoisted as a callable function (subject to `const` TDZ); must be defined before it is invoked.
* **Arrow Function (`const calculateItemTax = (price, category) => { ... }`):** Concise syntax with lexical `this` binding, also subject to `const` TDZ (cannot be called before initialization).

#### 3. Chosen Form & Justification
For a shared utility used across the cart preview, checkout summary, and order confirmation screen, a **Function Declaration** is ideal because **hoisting** guarantees availability regardless of call order in the module, and the `function` keyword makes top-level business logic immediately readable and self-documenting in stack traces.

---

### Question 5: 'Place Order' Event Handling & `event.preventDefault()`

#### 1. Event Type & Attachment Method
* **Event Type:** Use the **`submit`** event on the `<form>` element (or `click` on the submit button inside the form) so validation runs whether the user clicks "Place Order" or presses `Enter` inside the address field.
* **Attachment Method:** Use **`element.addEventListener("submit", handler)`** in JavaScript rather than inline HTML `onclick` attributes. `addEventListener` keeps HTML and JS cleanly separated, supports multiple listeners, and automatically passes the `event` object.

#### 2. Role of `event.preventDefault()`
* **What it does:** `event.preventDefault()` stops the browser's built-in default action for that event while still executing our custom JavaScript logic.
* **When it is necessary here:** When the "Place Order" button is inside an HTML `<form>` (default `type="submit"`), the browser's default behavior upon submission is to submit form data and **reload/refresh the page**. Calling `event.preventDefault()` prevents that page reload so validation errors or the confirmation message can be displayed dynamically in the DOM without losing the user's cart data.

---

### Question 6: `.then()/.catch()` vs. `async/await` for Live API Fetching

#### 1. Syntax Comparison
* **Promise Chaining (`.then().catch().finally()`):** Passes callbacks to `.then()` for each asynchronous step (`fetch` -> `res.json()` -> render). While functional, managing shared UI state across separate `.then()` blocks can feel fragmented.
* **`async/await` with `try / catch / finally`:** Lets asynchronous code read top-to-bottom like synchronous code, making control flow, error handling, and loading state transitions straightforward.

#### 2. Chosen Approach & Justification
**`async/await` wrapped in `try / catch / finally`** is the cleaner choice for managing loading and error states:
```javascript
async function loadRestaurants() {
  spinner.style.display = "block";
  errorBox.textContent = "";

  try {
    const response = await fetch("[https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)");
    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }
    const restaurants = await response.json();
    renderRestaurants(restaurants);
  } catch (error) {
    errorBox.textContent = "Unable to load restaurants right now. Please try again.";
  } finally {
    spinner.style.display = "none";
  }
}
```
* **Loading State (`finally`):** The `finally` block executes whether the fetch succeeds or fails, guaranteeing that the `'Loading…'` spinner is always hidden without duplicating cleanup logic in both `.then()` and `.catch()`.
* **Failure Handling (`try/catch`):** Both network failures and manual `throw new Error()` checks for bad HTTP statuses (`!response.ok`) funnel into one `catch` block to render a clear, user-friendly message in the DOM.