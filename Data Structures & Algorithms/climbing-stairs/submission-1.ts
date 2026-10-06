class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n: number): number {

        if (n <= 2) {
            return n;
        }

        let two = 1;
        let one = 2;

        for (let i = 3; i <= n; i++) {

            const tempOne = one;
            one = two + one;
            two = tempOne;

        }

        return one;

    }
}
