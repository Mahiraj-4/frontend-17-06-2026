class UserProfile {
    private String username;
    // Data Hiding: phone number is private
    private String phoneNumber;

    public UserProfile(String username, String phoneNumber) {
        this.username = username;
        setPhoneNumber(phoneNumber);
    }

    // Public Getter
    public String getPhoneNumber() {
        return phoneNumber;
    }

    // Public Setter with input validation
    public void setPhoneNumber(String phoneNumber) {
        if (phoneNumber != null && phoneNumber.matches("\\d{10}")) {
            this.phoneNumber = phoneNumber;
        } else {
            System.out.println("Invalid phone number format! Must be 10 digits.");
        }
    }

    public void displayProfile() {
        System.out.println("User: " + username + " | Phone: " + phoneNumber);
    }
}

public class UserProfileDemo {
    public static void main(String[] args) {
        UserProfile user = new UserProfile("rahul_verma", "9876543210");
        user.displayProfile();

        // Updating phone number via setter
        user.setPhoneNumber("9123456780");
        System.out.println("Retrieved via getter: " + user.getPhoneNumber());

        // Attempting an invalid update
        user.setPhoneNumber("123");
    }
}