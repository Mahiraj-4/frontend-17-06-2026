function checkAgeEligibility(age) {
    console.log(`Eligibility for Age ${age}:`);

    if (age >= 18) {
        console.log("- Eligible for Driving License");
        
        if (age >= 21) {
            console.log("- Eligible for Credit Card");
            
            if (age >= 25) {
                console.log("- Eligible for Car Rental");
            }
        }
    } else {
        console.log("- Not eligible for any of these services.");
    }
}

// Example usage:
checkAgeEligibility(22);
// Output:
// - Eligible for Driving License
// - Eligible for Credit Card