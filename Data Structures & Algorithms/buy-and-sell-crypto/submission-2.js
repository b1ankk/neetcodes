class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {

        let lowestBuyPrice = prices[0];

        let maxProfit = 0;

        for (let i = 1; i < prices.length; i++) {
            const profit = prices[i] - lowestBuyPrice;
            maxProfit = Math.max(profit, maxProfit); 
            lowestBuyPrice = Math.min(lowestBuyPrice, prices[i]);

        }

        return maxProfit;

    }
}
