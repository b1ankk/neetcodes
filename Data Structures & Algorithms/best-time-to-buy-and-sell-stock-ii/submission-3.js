class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let lastSellProfit = prices[prices.length - 1];
        let lastBuyProfit = 0;

        for (let i = prices.length - 2; i >= 0; i--) {
            const newSellProfit = Math.max(prices[i] + lastBuyProfit, lastSellProfit);
            const newBuyProfit = Math.max(-prices[i] + lastSellProfit, lastBuyProfit);
            lastSellProfit = newSellProfit;
            lastBuyProfit = newBuyProfit;
        }

        return lastBuyProfit;
    }
}
