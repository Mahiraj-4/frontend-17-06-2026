public class PaymentProcessor {

    // Overloaded method 1: Only amount
    public void processPayment(double amount) {
        System.out.println("Calling: processPayment(double amount)");
        System.out.println("No coupon applied. Final Amount: ₹" + amount);
        System.out.println("---------------------------------------------");
    }

    // Overloaded method 2: Amount with coupon code
    public void processPayment(double amount, String couponCode) {
        System.out.println("Calling: processPayment(double amount, String couponCode)");
        double discount = 0.0;
        
        if (couponCode.equalsIgnoreCase("SAVE10")) {
            discount = amount * 0.10; // 10% discount
            System.out.println("Coupon '" + couponCode + "' applied! Flat 10% off.");
        } else {
            System.out.println("Invalid coupon code. No discount applied.");
        }

        double finalAmount = amount - discount;
        System.out.println("Final Amount to Pay: ₹" + finalAmount);
        System.out.println("---------------------------------------------");
    }

    public static void main(String[] args) {
        PaymentProcessor processor = new PaymentProcessor();

        // Testing both overloaded methods
        processor.processPayment(1500.00);
        processor.processPayment(2000.00, "SAVE10");
    }
}