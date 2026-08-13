# Session 3 - Task 4: C Variable Naming Rules Analysis

## Overview
In C programming, variable names (identifiers) must follow specific rules to be valid. Below is the detailed identification, explanation, and correction for the provided list of variable names.

---

## 1. Standard Rules for Naming Variables in C

1. **First Character:** Must start with a letter (`a-z`, `A-Z`) or an underscore (`_`). It **cannot** start with a digit.
2. **Allowed Characters:** Can contain uppercase and lowercase letters, digits (`0-9`), and underscores (`_`).
3. **Special Characters & Spaces:** Special characters (e.g., `$`, `@`, `%`, `-`) and whitespace are **not allowed**.
4. **Keywords:** C reserved keywords (e.g., `int`, `float`, `return`, `char`) cannot be used as variable names.
5. **Case Sensitivity:** Variable names are case-sensitive (`playerAge` and `playerage` are two distinct variables).

---

## 2. Variable Analysis & Correction Table

| Variable Name | Status | Reason for Invalid Status | Corrected Variable Name |
| :--- | :--- | :--- | :--- |
| `1stPlayer` | ❌ **Invalid** | Starts with a digit (`1`). Variable names must start with a letter or underscore. | `firstPlayer` or `player1` |
| `player_age` | ✅ **Valid** | Uses allowed characters (letters and underscore). Follows `snake_case` convention. | `player_age` |
| `$score` | ❌ **Invalid** | Contains the special character `$`, which is not allowed in standard C identifiers. | `score` or `_score` |
| `total-marks` | ❌ **Invalid** | Contains a hyphen (`-`). In C, `-` is treated as a subtraction operator. | `total_marks` or `totalMarks` |
| `userName` | ✅ **Valid** | Uses allowed characters and follows `camelCase` naming convention. | `userName` |

---

## 3. Best Practices
- Use meaningful names that describe the variable's purpose (e.g., `studentAge` instead of `a`).
- Follow consistent naming conventions like **camelCase** (`totalScore`) or **snake_case** (`total_score`).
- Keep variable names concise yet descriptive.