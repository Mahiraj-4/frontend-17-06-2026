/*******************************************************************************
  SOFTWARE ENGINEERING - M5-A1 ASSESSMENT
  Student Solution File
*******************************************************************************/

-- =============================================================================
-- ITEM 1: EXACT PROMPT GIVEN TO AI
-- =============================================================================
/*
PROMPT:
"Write a MySQL stored procedure named `GetRestaurantMonthlySummary` that accepts 
`p_restaurant_id` (INT) and `p_month` (INT) as inputs. 

Requirements:
1. Return total orders, total revenue, and average order value for that restaurant in that month.
2. Use SELECT with GROUP BY and aggregate functions.
3. If the restaurant has no orders in that month, handle it by returning a meaningful message rather than an empty result set."
*/


-- =============================================================================
-- ITEM 2A: AI'S ORIGINAL STORED PROCEDURE (UNMODIFIED)
-- =============================================================================
/*
DELIMITER //

CREATE PROCEDURE GetRestaurantMonthlySummary(
    IN p_restaurant_id INT,
    IN p_month INT
)
BEGIN
    SELECT 
        restaurant_id,
        COUNT(order_id) AS total_orders,
        COALESCE(SUM(total_amount), 0.00) AS total_revenue,
        COALESCE(AVG(total_amount), 0.00) AS average_order_value
    FROM orders
    WHERE restaurant_id = p_restaurant_id 
      AND MONTH(order_date) = p_month
    GROUP BY restaurant_id;
END //

DELIMITER ;
*/


-- =============================================================================
-- ITEM 2B: CORRECTED & IMPROVED STORED PROCEDURE (EXECUTABLE)
-- =============================================================================

DROP PROCEDURE IF EXISTS GetRestaurantMonthlySummary;

DELIMITER //

CREATE PROCEDURE GetRestaurantMonthlySummary(
    IN p_restaurant_id INT,
    IN p_month INT,
    IN p_year INT
)
BEGIN
    DECLARE v_order_count INT DEFAULT 0;

    -- Step 1: Check if any orders exist for the specific restaurant, month, and year
    SELECT COUNT(*) INTO v_order_count
    FROM orders
    WHERE restaurant_id = p_restaurant_id 
      AND MONTH(order_date) = p_month
      AND YEAR(order_date) = p_year;

    -- Step 2: Return descriptive message if 0 orders, else compute summary
    IF v_order_count = 0 THEN
        SELECT CONCAT('No orders found for Restaurant ID ', p_restaurant_id, 
                      ' during month ', p_month, '/', p_year, '.') AS status_message;
    ELSE
        SELECT 
            restaurant_id,
            COUNT(order_id) AS total_orders,
            ROUND(SUM(total_amount), 2) AS total_revenue,
            ROUND(AVG(total_amount), 2) AS average_order_value
        FROM orders
        WHERE restaurant_id = p_restaurant_id 
          AND MONTH(order_date) = p_month
          AND YEAR(order_date) = p_year
        GROUP BY restaurant_id;
    END IF;
END //

DELIMITER ;


-- =============================================================================
-- ITEM 3: EXPLANATION NOTE (BUG FIXES & IMPROVEMENTS)
-- =============================================================================
/*
EXPLANATION OF CHANGES:
1. Fixed Empty Result Bug: The AI relies on GROUP BY when 0 rows match the WHERE clause, 
   which outputs an empty result set rather than triggering COALESCE. Added an explicit 
   COUNT(*) check with IF-ELSE logic to return a status message when no orders exist.
2. Added Year Parameter: Filtering only by MONTH(order_date) combines data across 
   different years (e.g., March 2024 and March 2025). Added `p_year` to isolate a single calendar year.
3. Formatting: Added ROUND() to output clean 2-decimal currency values.
*/


-- =============================================================================
-- TEST EXECUTION COMMANDS (Run these in Workbench for Screenshots)
-- =============================================================================

-- Test Case 1: Restaurant with orders
CALL GetRestaurantMonthlySummary(1, 3, 2026);

-- Test Case 2: Restaurant without orders (Triggers empty state message)
CALL GetRestaurantMonthlySummary(999, 12, 2026);