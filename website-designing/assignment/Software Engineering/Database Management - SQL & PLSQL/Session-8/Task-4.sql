SET SERVEROUTPUT ON;

CREATE TABLE products (
    product_id NUMBER,
    product_name VARCHAR2(100)
);

INSERT INTO products VALUES (101, 'Laptop');
INSERT INTO products VALUES (102, 'Wireless Mouse');
INSERT INTO products VALUES (103, 'Mechanical Keyboard');

DECLARE
    CURSOR c_products IS
        SELECT product_name FROM products;
        
    v_product_name products.product_name%TYPE;
BEGIN
    OPEN c_products;
    LOOP
        FETCH c_products INTO v_product_name;
        EXIT WHEN c_products%NOTFOUND;
        
        DBMS_OUTPUT.PUT_LINE('Product: ' || v_product_name);
    END LOOP;
    CLOSE c_products;
END;
/