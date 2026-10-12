class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost: number[]): number {

        let nextNext = cost.at(-1);
        let next = cost.at(-2);

        for (let i = cost.length - 3; i >= 0; i--) {
            const currStepCost = cost[i];

            const currFullStepCost = currStepCost + Math.min(
                nextNext, next
            );

            nextNext = next;
            next = currFullStepCost;
        }

        return Math.min(next, nextNext);

    }
}
