abstract class Product {
    protected String title;
    protected double price;

    public Product(String title, double price) {
        this.title = title;
        this.price = price;
    }

    // Abstract method: defines the contract without implementation
    public abstract void upload();
}

class Electronics extends Product {
    private int warrantyMonths;

    public Electronics(String title, double price, int warrantyMonths) {
        super(title, price);
        this.warrantyMonths = warrantyMonths;
    }

    @Override
    public void upload() {
        System.out.println("Uploading Electronic Item: " + title + " (₹" + price + ") with " + warrantyMonths + " months warranty. Technical specs verified.");
    }
}

class Clothing extends Product {
    private String size;

    public Clothing(String title, double price, String size) {
        super(title, price);
        this.size = size;
    }

    @Override
    public void upload() {
        System.out.println("Uploading Clothing Item: " + title + " (₹" + price + ") [Size: " + size + "]. Size chart attached.");
    }
}

public class ProductUploadDemo {
    public static void main(String[] args) {
        Product phone = new Electronics("Smartphone", 29999.00, 12);
        Product shirt = new Clothing("Cotton Casual Shirt", 1299.00, "L");

        phone.upload();
        shirt.upload();
    }
}