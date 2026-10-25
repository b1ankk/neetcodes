class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubarraySumCircular(nums: number[]): number {
        let min = Number.MAX_SAFE_INTEGER;
        let max = Number.MIN_SAFE_INTEGER;
        let currMax = 0;
        let currMin = 0;

        let sum = 0;

        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];

            if (currMax < 0) {
                currMax = 0;
            }
            if (currMin > 0) {
                currMin = 0;
            }

            currMax += num;
            currMin += num;
            sum += num;

            max = Math.max(max, currMax);
            min = Math.min(min, currMin);
        }

        if (max < 0) {
            return max;
        }

        return Math.max(max, sum - min);
    }
}
