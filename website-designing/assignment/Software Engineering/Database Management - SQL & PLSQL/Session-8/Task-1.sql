DECLARE
    v_user_name VARCHAR2(50) := 'John Doe';
    v_age       NUMBER := 28;
BEGIN
    DBMS_OUTPUT.PUT_LINE('User Name: ' || v_user_name);
    DBMS_OUTPUT.PUT_LINE('Age: ' || v_age);
END;