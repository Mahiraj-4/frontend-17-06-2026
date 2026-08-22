# Task 5: Buggy Trigger Scenario & Fix

## 1. Scenario & Buggy Trigger
A developer writes a trigger intended to deduct expense amounts from a user's balance whenever a new expense row is added. However, they omit the `WHERE` clause inside the `UPDATE` statement.

```sql
-- BUGGY TRIGGER: Missing WHERE clause
DELIMITER //

CREATE TRIGGER trg_deduct_expense_buggy
AFTER INSERT ON Expenses
FOR EACH ROW
BEGIN
    UPDATE Users
    SET balance = balance - NEW.amount; -- Omits: WHERE user_id = NEW.user_id
END //

DELIMITER ;
```

---

## 2. Test Case Exposing the Bug

```sql
-- Seed users
INSERT INTO Users (user_id, balance) VALUES 
(1, 1000.00), 
(2, 1000.00);

-- User 1 records an expense of 200.00
INSERT INTO Expenses (expense_id, user_id, amount) VALUES 
(101, 1, 200.00);

-- Check balances
SELECT * FROM Users;
```

### Bug Result:
> **Critical Issue:** Both User 1 and User 2 balances drop to `800.00`. Every account in the entire system gets debited instead of just User 1.

---

## 3. Corrected Trigger Code

```sql
-- FIXED TRIGGER: Properly scoped with WHERE clause
DELIMITER //

CREATE TRIGGER trg_deduct_expense_fixed
AFTER INSERT ON Expenses
FOR EACH ROW
BEGIN
    UPDATE Users
    SET balance = balance - NEW.amount
    WHERE user_id = NEW.user_id;
END //

DELIMITER ;
```

---

## 4. Fix Explanation

1. **WHERE Clause Addition:** Added `WHERE user_id = NEW.user_id` to ensure the scope of the `UPDATE` query targets only the specific user associated with the newly inserted record (`NEW` pseudorow).
2. **Integrity Constraint (Recommendation):** Added a database-level `CHECK (balance >= 0)` constraint on the `balance` column to prevent deductions from pushing an account balance below zero.