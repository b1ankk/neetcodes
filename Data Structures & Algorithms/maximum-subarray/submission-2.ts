class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums: number[]): number {

        let maxSum = Number.MIN_SAFE_INTEGER;
        let currSum = 0;

        for (const num of nums) {

            let newSum = num;
            if (currSum > 0) {
                newSum += currSum;
            }

            currSum = newSum;
            
            maxSum = Math.max(maxSum, currSum);
        }

        return maxSum;

    }
}
