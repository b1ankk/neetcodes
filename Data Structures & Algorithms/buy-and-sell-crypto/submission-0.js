class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {

        const highestPrices = new Array(prices.length);

        for (let i = prices.length - 1; i >= 0; i--) {
            highestPrices[i] = Math.max(prices[i], highestPrices[i+1] ?? 0);
        }

        // console.log(highestPrices)

        let result = 0;
        prices.forEach((price, i) => {
            const profit = highestPrices[i] - price;
            result = Math.max(profit, result)
        })

        return result;
    }
}
