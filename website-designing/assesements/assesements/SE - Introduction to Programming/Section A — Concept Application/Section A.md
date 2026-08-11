# (1) Software Development Methodology Recommendation

## Scenario

**You are a junior developer at a fintech startup building a digital wallet app. The team is debating between Waterfall and Agile methodology. The project has frequently changing requirements and the client expects to review working features every two weeks.**

### Question

**Which development methodology would you recommend for this project, and why? Identify two specific risks the team would face if they chose the wrong methodology for this context.**

---

# Answer

## Recommended Development Methodology: Agile

For this project, **Agile** is the most suitable development methodology.

### Why Agile?

Agile is designed for projects where requirements change frequently and continuous client feedback is important. Since the client wants to review working features every two weeks, Agile's iterative development process perfectly matches these requirements.

Key reasons for choosing Agile:

- **Frequent Requirement Changes:** Agile allows the team to adapt quickly without disrupting the entire project.
- **Regular Client Feedback:** Working software is delivered in short iterations (sprints), allowing the client to review progress every two weeks.
- **Faster Delivery:** Features are developed and released incrementally, providing value earlier.
- **Continuous Improvement:** Feedback from each sprint helps improve future development and product quality.
- **Reduced Risk:** Problems are identified and corrected early instead of being discovered at the end of the project.

---

# Risks of Choosing the Wrong Methodology

If the team chooses **Waterfall** instead of Agile for this project, they may face the following risks:

## 1. Difficulty Handling Changing Requirements

Waterfall requires requirements to be finalized before development begins. Since this project has frequently changing requirements, making changes later would be expensive, time-consuming, and could delay the project.

## 2. Delayed Client Feedback

In Waterfall, the client usually reviews the product near the end of development. If the developed features do not meet the client's expectations, significant rework may be required, increasing both development cost and project timeline.

---

# Conclusion

Because the project involves **frequently changing requirements** and **client reviews every two weeks**, **Agile** is the best choice. It provides flexibility, continuous feedback, faster feature delivery, and reduces the risk of costly changes later in the development process.

# (2) Git Workflow to Prevent Breaking the Main Branch

## Scenario

You are collaborating on a college project website with three teammates. Just before a client demo, one teammate pushed incomplete code directly to the main branch, breaking the layout for everyone else on the team.

---

## Answer

To prevent this problem from happening again, the team should adopt a **Feature Branch Workflow** along with **Pull Requests (PRs)** and **Code Reviews**. Instead of pushing code directly to the `main` branch, every team member should create a separate branch for their work. Once the feature is completed and tested, they should open a Pull Request so that another teammate can review the code before it is merged into the `main` branch. This ensures that incomplete or broken code does not affect the entire project.

### Recommended Git Workflow

1. Keep the `main` branch stable at all times.
2. Create a new feature branch for every task or bug fix.
3. Make changes and commit them regularly.
4. Push the feature branch to the remote repository.
5. Create a Pull Request (PR).
6. Let another teammate review and test the changes.
7. Merge the feature branch into the `main` branch only after approval.

---

## Git Commands Used

### 1. `git checkout -b feature-name`

**Role:**  
Creates a new branch and switches to it immediately. This allows developers to work on new features without changing the `main` branch.

**Example:**

```bash
git checkout -b responsive-navbar
```

---

### 2. `git push origin feature-name`

**Role:**  
Uploads the feature branch to the remote Git repository so that teammates can review the changes and create a Pull Request.

**Example:**

```bash
git push origin responsive-navbar
```

---

### 3. `git pull`

**Role:**  
Downloads and merges the latest changes from the remote repository into the current branch. This helps developers stay up to date and reduces merge conflicts.

**Example:**

```bash
git pull origin main
```

---

### 4. `git merge`

**Role:**  
Merges the completed and approved feature branch into the `main` branch after successful testing and code review.

**Example:**

```bash
git merge responsive-navbar
```

---

## Conclusion

By following a Feature Branch Workflow with Pull Requests and Code Reviews, the team can ensure that the `main` branch always remains stable. This prevents unfinished or broken code from affecting the project and reduces the risk of problems before important events such as client demonstrations.

# (3) Scenario

You are building an online internship application form for a college placement portal. The form must collect:
- Applicant name
- Email address
- Phone number
- Preferred domain (one of: Web, Data, Mobile, AI)
- Resume file upload

The institution requires that no field be left empty and that the email field only accepts valid email formats — without writing any JavaScript.

## Question

List the appropriate HTML input types you would use for each of the five fields. Explain how you would use HTML5 built-in validation attributes to enforce the two constraints mentioned, and why these attributes alone are not sufficient for production-level validation.

## Answer

### Appropriate HTML Input Types

| Field | HTML Element / Input Type |
|--------|---------------------------|
| Applicant Name | `<input type="text">` |
| Email Address | `<input type="email">` |
| Phone Number | `<input type="tel">` |
| Preferred Domain | `<select>` (Options: Web, Data, Mobile, AI) |
| Resume Upload | `<input type="file">` |

### HTML5 Validation Attributes

1. **Ensure no field is left empty**
   - Use the `required` attribute on every input field.
   - Example:
     ```html
     <input type="text" required>
     ```

2. **Allow only valid email formats**
   - Use `type="email"` together with the `required` attribute.
   - Example:
     ```html
     <input type="email" required>
     ```
   - The browser automatically checks that the entered value follows a valid email format (e.g., `student@example.com`).

### Why HTML5 Validation Alone Is Not Enough

Although HTML5 validation improves user experience by providing instant feedback, it is **not sufficient for production-level validation** because:

- Client-side validation can be bypassed by disabling JavaScript, modifying requests, or using tools like Postman.
- Browsers may implement validation slightly differently.
- It does not protect against malicious or invalid data submitted directly to the server.
- Security checks such as file type verification, file size limits, duplicate email detection, and data sanitization must be performed on the server.

**Therefore, server-side validation is essential to ensure data integrity, security, and reliability.**

# (4) Bootstrap Responsive Grid System – Scenario Based Answer

## Scenario

You are designing a **news portal** that displays articles in a **3-column grid on desktop screens** and in a **single-column layout on mobile devices**. Your team wants to use **Bootstrap's grid system** to achieve this responsive layout **without writing any custom media query CSS**.

### Question

Explain how Bootstrap's grid class system works to produce this responsive layout.

Write the Bootstrap class combination you would apply to the article column `<div>`, and explain what each class in the combination controls.

---

# Answer

Bootstrap uses a **12-column responsive grid system**. The screen is divided into **12 equal columns**, and different grid classes control how many columns an element occupies at different screen sizes.

Bootstrap includes predefined breakpoints such as:

| Screen Size | Prefix |
|-------------|--------|
| Extra Small (<576px) | `col-` |
| Small (≥576px) | `col-sm-` |
| Medium (≥768px) | `col-md-` |
| Large (≥992px) | `col-lg-` |
| Extra Large (≥1200px) | `col-xl-` |

Using these classes, Bootstrap automatically changes the layout according to the screen width without requiring custom CSS media queries.

---

## Bootstrap Class Combination

```html
<div class="col-12 col-md-4">
    Article Content
</div>
```

---

## Explanation of Each Class

### `col-12`

- Applies to **all screen sizes** (especially mobile devices).
- Makes the column occupy **12 out of 12 grid columns**.
- Each article takes the full width of the screen.
- Results in a **single-column layout** on mobile devices.

---

### `col-md-4`

- Applies to **medium screens (768px and above)**.
- Makes the column occupy **4 out of 12 grid columns**.
- Since `12 ÷ 4 = 3`, three article columns fit in one row.
- Creates a **3-column layout** on tablets and desktop screens.

---

## Example

```html
<div class="container">
    <div class="row">

        <div class="col-12 col-md-4">
            Article 1
        </div>

        <div class="col-12 col-md-4">
            Article 2
        </div>

        <div class="col-12 col-md-4">
            Article 3
        </div>

    </div>
</div>
```

---

## Output

### On Mobile (<768px)

```
Article 1
────────────

Article 2
────────────

Article 3
────────────
```

Each article occupies the full width, resulting in a **single-column layout**.

---

### On Desktop (≥768px)

```
+-----------+-----------+-----------+
| Article 1 | Article 2 | Article 3 |
+-----------+-----------+-----------+
```

Each article occupies **4 columns**, allowing **3 articles per row**.

---

# Conclusion

By using the Bootstrap class combination **`col-12 col-md-4`**, the news portal automatically displays:
- **1 column on mobile devices** using `col-12`.
- **3 columns on medium and larger screens** using `col-md-4`.

Bootstrap's responsive grid system handles the layout changes automatically, eliminating the need for custom media query CSS.

# (5) Rainfall Data Analysis Using Array in C

## Scenario

You are writing a C program to record daily rainfall data for a month (30 days).  
The program needs to store all 30 rainfall readings, calculate the monthly average rainfall, and identify the specific days that recorded rainfall above the calculated average.

---

## Question

Explain why an array is the correct data structure for this task compared to using 30 separate variables.

Describe the two-step logic your program would follow:

1. First to compute the average rainfall.
2. Then to identify the days with rainfall above that average.

Explain why both steps cannot be done in a single loop.

---

## Answer

### Why an Array is the Correct Data Structure

An array is the most suitable data structure for storing the 30 daily rainfall readings because all values belong to the same category of data and need to be processed together.

Instead of creating 30 separate variables like:

```c
float day1, day2, day3, ..., day30;

float rainfall[30];
```

# (6) Debugging Pointer-Based String Traversal in C

## Scenario

You are debugging a C program that uses a pointer to traverse a string entered by the user.

The program works correctly when the user enters a name, but it crashes immediately when the input field is left empty (the user only presses Enter).

The issue occurs because the program tries to access the string through a pointer without checking whether the string contains any characters.

---

# Question

Explain why the program crashes on an empty string input and describe the check your pointer-based solution must perform before dereferencing the pointer.

How does traversing a string using a pointer differ from traversing it using array index notation, and which approach makes the empty-input bug easier to catch?

---

# Answer

## Why does the program crash on empty string input?

In C, a string is stored as an array of characters and always ends with a null terminator (`'\0'`).

When the user enters a name:

Example:

```c
char name[] = "Mahiraj";