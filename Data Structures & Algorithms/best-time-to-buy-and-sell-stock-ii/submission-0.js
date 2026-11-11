class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {

        const sellCache = [];
        const buyCache = [];

        const recurse = (i, hasStock) => {
            if (i >= prices.length) {
                return 0;
            }

            if (hasStock && sellCache[i] != null) {
                return sellCache[i];
            } else if (!hasStock && buyCache[i] != null) {
                return buyCache[i];
            }

            let result = Number.MIN_SAFE_INTEGER;
            result = Math.max(result, recurse(i + 1, hasStock));
            if (hasStock) {
                result = Math.max(result, prices[i] + recurse(i + 1, false));
            } else {
                result = Math.max(result, -prices[i] + recurse(i + 1, true));
            }

            if (hasStock) {
                sellCache[i] = result;
            } else {
                buyCache[i] = result;
            }

            return result;
        }

        return recurse(0, 0, false);

    }
}
