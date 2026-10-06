class Solution {
    /**
     * @param {number} n
     * @return {number}
     */

    private cache = [];

    constructor() {
        
    }

    climbStairs(n: number): number {

        if (n <= 2) {
            return n;
        }

        if (this.cache[n]) {
            return this.cache[n];
        }

        this.cache[n] = this.climbStairs(n - 1) + this.climbStairs(n - 2)

        return this.cache[n];
    }
}
