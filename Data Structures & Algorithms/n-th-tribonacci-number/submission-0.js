class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    tribonacci(n) {

        const cache = [0, 1, 1];

        const recurse = (n) => {
            if (cache[n] != null) {
                return cache[n];
            }

            const result = recurse(n-1) + recurse(n-2) + recurse(n-3);

            cache[n] = result;

            return result;

        }

        return recurse(n);
    }
}
