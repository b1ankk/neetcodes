class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {

        const cache = new Array(coins.length).fill(0).map(() => new Map());

        const recurse = (i, amountLeft) => {
            if (i < 0) {
                return amountLeft === 0 ? 0 : -1;
            }

            if (cache[i].has(amountLeft)) {
                return cache[i].get(amountLeft);
            }

            const takable = Math.floor(amountLeft / coins[i]);

            let minCoins = Number.MAX_SAFE_INTEGER;

            for (let t = 0; t <= takable; t++) {
                const recurseResult = recurse(i - 1, amountLeft - coins[i] * t);
                if (recurseResult !== -1) {
                    minCoins = Math.min(minCoins, t + recurseResult);
                }
            }

            const result = minCoins === Number.MAX_SAFE_INTEGER ? -1 : minCoins;
            cache[i].set(amountLeft, result);

            return result;
        }

        return recurse(coins.length - 1, amount)

    }
}
