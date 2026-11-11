class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        const sellCache = [];
        const buyCache = [];

        sellCache[prices.length - 1] = prices[prices.length - 1];
        buyCache[prices.length - 1] = 0;

        for (let i = prices.length - 2; i >= 0; i--) {
            sellCache[i] = Math.max(prices[i] + buyCache[i + 1], sellCache[i + 1]);
            buyCache[i] = Math.max(-prices[i] + sellCache[i + 1], buyCache[i + 1]);
        }

        return buyCache[0];
    }
}
