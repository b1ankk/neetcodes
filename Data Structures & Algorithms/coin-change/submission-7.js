class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {

        const cache = new Array(coins.length);

        const recurse = (i, amountLeft) => {
            if (i < 0) {
                return amountLeft === 0 ? 0 : -1;
            }

            if (cache[amountLeft] != null) {
                return cache[amountLeft];
            }

            const takable = Math.floor(amountLeft / coins[i]);

            let minCoins = Number.MAX_SAFE_INTEGER;

            for (let t = takable; t >= 0; t--) {
                const recurseResult = recurse(i - 1, amountLeft - coins[i] * t);
                if (recurseResult !== -1) {
                    minCoins = Math.min(minCoins, t + recurseResult);
                }
            }

            const result = minCoins === Number.MAX_SAFE_INTEGER ? -1 : minCoins;
            cache[amountLeft] = result;

            return result;
        }

        return recurse(coins.length - 1, amount)

    }
}
