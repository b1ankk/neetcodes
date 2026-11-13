class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    integerBreak(n) {

        if (n <= 3) {
            return n - 1;
        }

        const cache = new Array(n + 1);

        const recurse = (sumLeft) => {
            if (sumLeft === 0) {
                return 1;
            }

            if (cache[sumLeft] != null) {
                return cache[sumLeft];
            }

            let max = 0;
            for (let i = 1; i <= sumLeft; i++) {
                max = Math.max(max, i * recurse(sumLeft - i))
                console.log(sumLeft, i, max);
            }

            cache[sumLeft] = max;

            return max;
        }

        return recurse(n);

    }
}
