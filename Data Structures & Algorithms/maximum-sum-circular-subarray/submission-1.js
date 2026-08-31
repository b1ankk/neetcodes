class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubarraySumCircular(nums) {

        let maxCurr = Number.MIN_SAFE_INTEGER;
        let minCurr = Number.MAX_SAFE_INTEGER;

        let maxSum = Number.MIN_SAFE_INTEGER;
        let minSum = Number.MAX_SAFE_INTEGER;

        let totalSum = 0;

        for (const num of nums) {

            maxCurr = Math.max(maxCurr + num, num)
            minCurr = Math.min(minCurr + num, num)

            maxSum = Math.max(maxSum, maxCurr)
            minSum = Math.min(minSum, minCurr)

            totalSum += num;
        }

        if (maxSum < 0) {
            return maxSum;
        }

        return Math.max(totalSum - minSum, maxSum);
    }
}
