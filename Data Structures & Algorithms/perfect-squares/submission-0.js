class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    numSquares(num) {

        const cache = new Array(num + 1).fill(null);

        const recurse = (n) => {
            if (n === 0) {
                return 0;
            }

            if (cache[n] != null) {
                return cache[n];
            }

            let result = Number.MAX_SAFE_INTEGER;

            for (let i = Math.floor(Math.sqrt(n)); i >= 1; i--) {
                result = Math.min(result, 1 + recurse(n - i * i));
            }

            cache[n] = result;

            return result;
        }


        return recurse(num);

    }
}
