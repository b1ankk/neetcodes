class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost: number[]): number {

        const cache = [];

        const recurse = (n: number): number => {
            if (n === cost.length) {
                return 0;
            }

            if (cache[n] != null) {
                return cache[n];
            }
            
            const currCost = cost[n];

            const nextCost = recurse(n + 1);
            let nextNextCost = Number.MAX_SAFE_INTEGER;

            if (n < cost.length - 1) {
                nextNextCost = recurse(n + 2);
            }

            
            const result =  Math.min(nextCost, nextNextCost) + currCost;
            cache[n] = result;
            
            return result;
        }


        return Math.min(recurse(0), recurse(1));

    }
}
