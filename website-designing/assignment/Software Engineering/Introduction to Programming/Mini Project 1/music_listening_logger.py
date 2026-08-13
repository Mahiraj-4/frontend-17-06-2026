import os

# File name used for persistence
LOG_FILE = "music_log.txt"

def save_to_file(data_list):
    """Saves the listening minutes list into music_log.txt"""
    with open(LOG_FILE, "w") as file:
        for item in data_list:
            file.write(f"{item}\n")

def read_from_file():
    """Reads data from music_log.txt and returns a list of integers"""
    if not os.path.exists(LOG_FILE):
        return []
    
    with open(LOG_FILE, "r") as file:
        lines = file.readlines()
        # Filter valid integers from lines
        return [int(line.strip()) for line in lines if line.strip().isdigit()]

# TASK 1 & 3: Log listening minutes and save to file
def log_daily_minutes(weekly_data):
    days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    weekly_data.clear()
    
    print("\n--- Enter Music Listening Minutes for Each Day ---")
    for day in days:
        while True:
            try:
                mins = int(input(f"Enter minutes for {day}: "))
                if mins < 0:
                    print("Minutes cannot be negative. Try again.")
                    continue
                weekly_data.append(mins)
                break
            except ValueError:
                print("Invalid input! Please enter a valid number.")

    # Save to file (Task 3)
    save_to_file(weekly_data)
    print("✅ Weekly listening minutes saved to 'music_log.txt' successfully!")

# TASK 4: Read music_log.txt and generate weekly report
def generate_weekly_report():
    data = read_from_file()

    if not data:
        print("\n⚠️ No data found in 'music_log.txt'. Please log minutes first.")
        return

    total_minutes = sum(data)
    average_minutes = total_minutes / len(data)
    highest_minutes = max(data)

    print("\n==================================")
    print("     WEEKLY MUSIC PROGRESS REPORT  ")
    print("==================================")
    print(f" Total Listening Time : {total_minutes} mins ({total_minutes / 60:.1f} hrs)")
    print(f" Daily Average        : {average_minutes:.2f} mins/day")
    print(f" Highest Single Day   : {highest_minutes} mins")
    print("==================================")

# TASK 5: Reset weekly data with confirmation
def reset_weekly_data(weekly_data):
    confirm = input("\n⚠️ Are you sure you want to reset all data? (y/n): ").strip().lower()
    
    if confirm == 'y':
        weekly_data.clear()
        
        # Clear/Delete file contents
        if os.path.exists(LOG_FILE):
            open(LOG_FILE, "w").close()
            
        print("✅ All weekly data cleared and 'music_log.txt' has been reset.")
    else:
        print("Action cancelled. Your data remains safe.")

# TASK 2: Menu-driven CLI interface
def main():
    # Load any existing data on app startup
    weekly_data = read_from_file()

    while True:
        print("\n=== MUSIC LISTENING LOGGER ===")
        print("1. Log Daily Listening Minutes (7 Days)")
        print("2. View Weekly Summary Report")
        print("3. Reset Weekly Data")
        print("4. Exit App")

        choice = input("Enter your choice (1-4): ").strip()

        if choice == '1':
            log_daily_minutes(weekly_data)
        elif choice == '2':
            generate_weekly_report()
        elif choice == '3':
            reset_weekly_data(weekly_data)
        elif choice == '4':
            print("\nThank you for using Music Listening Logger! Goodbye! 🎧")
            break
        else:
            print("\n❌ Invalid choice! Please enter a number between 1 and 4.")

if __name__ == "__main__":
    main()