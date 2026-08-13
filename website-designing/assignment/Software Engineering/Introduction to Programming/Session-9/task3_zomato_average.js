function calculateAverageSpend(orderAmounts) {
    let totalSpend = 0;

    for (let i = 0; i < orderAmounts.length; i++) {
        totalSpend += orderAmounts[i];
    }

    return totalSpend / orderAmounts.length;
}

// 7 days order amounts in Rupees
const weeklyZomatoOrders = [250, 400, 0, 180, 520, 310, 640];

const averageSpend = calculateAverageSpend(weeklyZomatoOrders);
console.log(`Average daily spend on Zomato: ₹${averageSpend.toFixed(2)}`);