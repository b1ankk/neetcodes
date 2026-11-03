class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {

        const cache = new Array(coins.length);

        const recurse = (amountLeft) => {
            if (amountLeft === 0) {
                return 0;
            }
            if (cache[amountLeft] != null) {
                return cache[amountLeft];
            }

            let result = Number.MAX_SAFE_INTEGER
            for (let coin of coins) {
                if (amountLeft - coin >= 0) {
                    result = Math.min(result, 1 + recurse(amountLeft - coin));
                }
            }

            cache[amountLeft] = result;

            return result;
        }

        const result = recurse(amount) 
        if (result === Number.MAX_SAFE_INTEGER) {
            return -1;
        }
        return result;
    }
}
