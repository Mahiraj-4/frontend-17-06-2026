SET SERVEROUTPUT ON;

DECLARE
    v_order_amount NUMBER := 650;
BEGIN
    IF v_order_amount > 500 THEN
        DBMS_OUTPUT.PUT_LINE('Eligible for free delivery');
    ELSE
        DBMS_OUTPUT.PUT_LINE('Delivery charges apply');
    END IF;
END;
/