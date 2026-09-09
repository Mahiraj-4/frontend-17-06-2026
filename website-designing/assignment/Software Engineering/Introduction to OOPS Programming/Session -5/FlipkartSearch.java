public class FlipkartSearch {

    // Overload 1: Search by product name only
    public void searchProduct(String productName) {
        System.out.println("Searching for '" + productName + "' across ALL categories...");
        System.out.println("Found: 124 results matching '" + productName + "'\n");
    }

    // Overload 2: Search by product name AND category
    public void searchProduct(String productName, String category) {
        System.out.println("Searching for '" + productName + "' strictly inside category: [" + category + "]...");
        System.out.println("Found: 18 results matching '" + productName + "' in " + category + "\n");
    }

    public static void main(String[] args) {
        FlipkartSearch searchEngine = new FlipkartSearch();

        // 1. Search by name only
        searchEngine.searchProduct("Running Shoes");

        // 2. Search by name and category
        searchEngine.searchProduct("Running Shoes", "Sports & Fitness");
    }
}