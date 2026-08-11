# Question 1 Answer: Database Constraint Justification

## 1. `Restaurants.restaurant_id` — PRIMARY KEY

**Justification:**
Har restaurant ko uniquely identify karta hai.

**Integrity Problem:**
Iske bina **Entity Integrity** toot jayegi — duplicate ya `NULL` IDs ban sakti hain, jisse order galat restaurant ko assign ho jayega.

---

## 2. `MenuItems.restaurant_id` — FOREIGN KEY & NOT NULL

**Justification:**
Menu item ko sahi restaurant ke saath link karta hai.

**Integrity Problem:**
Iske bina **Referential Integrity** toot jayegi — aise menu items ban jayenge jinka koi restaurant hi nahi hoga ("orphan records"), jisse customer checkout fail ho sakta hai.

---

## 3. `MenuItems.price` — NOT NULL

**Justification:**
Guarantees ki har item ka valid price set ho.

**Integrity Problem:**
Iske bina **Domain Integrity** toot jayegi — `NULL` price ki wajah se payment/billing system me problem ho sakti hai ya customer ko incorrect/free order mil sakta hai.


# Question 2 Answer: Importance of `WHERE` Clause in DML Statements

## 1. Importance of `WHERE` Clause

* SQL mein `UPDATE` aur `DELETE` commands default roop se **poore table ke saare rows** par apply hote hain.
* `WHERE` clause ek filter ki tarah kaam karta hai jo execution ko sirf unhi rows tak limit karta hai jo specific criteria ko satisfy karte hain.

## 2. What Could Go Wrong Without a Proper `WHERE` Condition

### Without `WHERE` in `UPDATE` (Task 1 Risk)

* **Consequence:** Database ke **saare orders** ka status badal kar `'Cancelled'` ho jayega, chahe wo Delivered ho, In-Transit ho, ya aaj hi place kiye gaye naye orders ho.
* **Impact:** Active business pipeline disturb ho jayegi aur historical order tracking poori tarah corrupt ho jayegi.

### Without `WHERE` in `DELETE` (Task 2 Risk)

* **Consequence:** `MenuItems` table se **saare menu items permanently delete** ho jayenge, chahe wo active restaurants ke popular items hi kyu na ho.
* **Impact:** Catastrophic data loss hoga, app par saare restaurants ke menu khali dikhenge, aur customers order nahi kar payenge.


# Question 3 Answer: Revenue Dashboard Query Design

## 1. Aggregate Functions Used

- **`COUNT(order_id)`**: Number of orders filter karne aur total orders count karne ke liye.
- **`SUM(amount)`**: Per restaurant ki total revenue calculate karne ke liye.
- **`AVG(amount)`**: Per order ki average value (Average Order Value - AOV) nikalne ke liye.

## 2. SQL Clauses Used

- **`GROUP BY restaurant_id`**: Saare order data ko individual restaurants ke according group karne ke liye.
- **`WHERE`**: Individual records ko filter karne ke liye, jaise current month ke orders select karne ke liye.
- **`HAVING`**: Aggregated counts ke base par final output ko filter karne ke liye (`COUNT > 20`).

## 3. Why `HAVING` is Used Instead of `WHERE`

- **Execution Order:** SQL me `WHERE` clause `GROUP BY` se pehle execute hota hai. Wo individual rows par kaam karta hai, isliye wo aggregate functions (jaise `COUNT`, `SUM`) ke result ko directly filter nahi kar sakta.

- **Aggregated Result Filtering:** `HAVING` clause `GROUP BY` ke baad execute hota hai. Kyunki `>20` orders wala logic group calculate hone ke baad hi check ho sakta hai, isliye aggregate result (`COUNT(order_id) > 20`) par filter lagane ke liye `HAVING` clause ka use kiya jata hai.


# Question 4 Answer: INNER JOIN vs LEFT JOIN Comparison

## 1. Chosen Join Type & Justification

* **Choice:** `LEFT JOIN`
* **Reason:** Scenario me saaf likha hai ki order history page par **saare orders dikhane hain**, even wo orders bhi jinse linked restaurant table me ab exist nahi karta (deleted/missing restaurants). `LEFT JOIN` ye guarantee karta hai ki `Orders` table ka ek bhi record drop nahi hoga.

## 2. Behavior for Unmatched Records (Comparison)

### `LEFT JOIN` (Left Outer Join)

* **Behavior:** Left table (`Orders`) ke saare records ko retain karta hai.
* **Unmatched Case:** Agar kisi order ka `restaurant_id` `Restaurants` table me nahi milta, toh order ka data dikhai dega aur `restaurant_name` column me **`NULL`** fill ho jayega.
* **Result:** Saare orders visible rehte hain, koi data lose nahi hota.

### `INNER JOIN`

* **Behavior:** Sirf unhi records ko laata hai jo dono tables (`Orders` aur `Restaurants`) me match hote hain.
* **Unmatched Case:** Agar kisi order ka `restaurant_id` `Restaurants` table me nahi hai, toh wo pura order record result se **completely remove/hide** kar diya jayega.
* **Result:** Order history incomplete dikhegi aur financial audit me mismatch aayega.

## Conclusion

Is scenario ke liye **`LEFT JOIN`** better choice hai, kyunki iska purpose `Orders` table ke **saare records ko preserve karna** hai, chahe corresponding restaurant record available ho ya nahi.


# Question 5 Answer: Database VIEW Justification & Limitations

## 1. Justification: Why VIEW is Preferred over Direct Table Access

* **Security & Data Abstraction:** Raw database structure aur sensitive primary/foreign key IDs ko front-end team se hide kiya ja sakta hai, jisse unauthorized data exposure ka risk kam hota hai.

* **Query Simplification:** Complex `JOIN` aur `GROUP BY` logic ko database layer par encapsulate kiya ja sakta hai. Front-end developers ko complex queries likhne ke bajaye sirf simple query jaise `SELECT * FROM top_restaurants;` run karni padti hai.

* **Consistency:** Analytics calculations, such as total orders aur average ratings, pure platform par standardized aur consistent rehti hain, chahe koi bhi front-end application VIEW ko access kare.

## 2. Two Limitations for Front-End Developers

### 1. Read-Only / Non-Updatable

Kyunki is VIEW me aggregate functions such as `COUNT()` aur `AVG()` ke saath `GROUP BY` clause ka use hua hai, isliye is VIEW par direct `INSERT`, `UPDATE`, ya `DELETE` operations generally perform nahi kiye ja sakte.

### 2. Performance Overhead

MySQL me standard VIEWs physical disk par separate data storage create nahi karte; ye non-materialized hote hain. Isliye jab front-end team VIEW ko query karti hai, to underlying `JOIN` aur aggregation logic ko execute karna pad sakta hai. Large datasets par is wajah se query performance slow ho sakti hai.


# Question 6 Answer: Database Transaction & Atomicity Control

## 1. Database Mechanism Required

### Database Transactions (ACID - Atomicity Property)

Is inconsistency ko rokne ke liye **Database Transactions** ka use karna mandatory hai.

**Atomicity** rule ye guarantee karta hai ki multiple database operations ka group ya toh poori tarah successfully execute hoga (**"All"**) ya phir kisi bhi operation ka effect database mein save nahi hoga (**"Nothing"**).

For example, agar wallet balance deduction aur payment record insertion do operations hain, toh dono operations successfully complete hone chahiye. Agar kisi ek operation mein failure hota hai, toh poori transaction ko rollback kiya ja sakta hai.

---

## 2. How `COMMIT`, `ROLLBACK`, and `SAVEPOINT` Work Together

### `COMMIT`

**Role:**
Jab wallet balance deduction aur payment record insertion dono operations successfully execute ho jaate hain, tab `COMMIT` command poori transaction ko permanently database mein save karti hai.

```sql
COMMIT;
```

Iske baad transaction ke changes permanent ho jaate hain.

---

### `ROLLBACK`

**Role:**
Agar payment record insert karte waqt koi error ya system failure aata hai, toh `ROLLBACK` transaction mein kiye gaye saare changes ko undo/revert kar deta hai.

```sql
ROLLBACK;
```

For example, agar wallet balance se amount deduct ho gaya hai lekin payment record insert nahi hua, toh `ROLLBACK` wallet deduction ko bhi undo kar dega. Isse customer ka balance wapas previous state mein aa jayega.

---

### `SAVEPOINT`

**Role:**
`SAVEPOINT` transaction ke beech mein ek intermediate checkpoint create karta hai.

Example:

```sql
SAVEPOINT AfterWalletDeduction;
```

Agar payment insertion step fail hota hai, toh developer specific savepoint tak rollback kar sakta hai:

```sql
ROLLBACK TO SAVEPOINT AfterWalletDeduction;
```

Isse poori transaction cancel karne ke bajay transaction ko selected checkpoint tak rollback kiya ja sakta hai.

---

## Conclusion

Database Transactions ke **Atomicity** principle ke through wallet deduction aur payment record insertion jaise related operations ko consistent rakha ja sakta hai.

* **`COMMIT`** → Successfully completed changes ko permanently save karta hai.
* **`ROLLBACK`** → Failed transaction ke changes ko undo karta hai.
* **`SAVEPOINT`** → Transaction ke beech mein checkpoint create karta hai, jahan tak partial rollback kiya ja sakta hai.

Is tarah **Transactions, COMMIT, ROLLBACK, aur SAVEPOINT** ka proper use database inconsistency ko prevent karne mein help karta hai.
