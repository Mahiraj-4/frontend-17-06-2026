# Task 4: Entry-Controlled vs Exit-Controlled Loops

## 1. Entry-Controlled Loop (`while` / `for`)

Condition is checked **before** entering the loop body. If the condition is `false` initially, the loop body executes **0 times**.

```javascript
let count = 5;

// Condition is false from the start (5 < 3 is false)
while (count < 3) {
    console.log("This will NEVER be printed.");
    count++;
}
```

## 2. Exit-Controlled Loop (`do-while`)

Condition is checked **after** executing the loop body. Even if the condition is `false` initially, the loop body executes **at least once**.

```javascript
let count = 5;

// Condition is false from the start (5 < 3 is false)
do {
    console.log("This will print EXACTLY ONCE despite the false condition.");
    count++;
} while (count < 3);
```

## Key Difference

If the initial condition is `false`:

* `while` loop runs **0 times**.
* `do-while` loop runs **1 time**.
