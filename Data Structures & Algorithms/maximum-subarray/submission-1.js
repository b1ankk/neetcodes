class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {

        // let left = 0;
        let right = 1;


        let maxSum = nums[0];
        let sum = nums[0];

        while (right < nums.length) {

            sum = Math.max(nums[right], sum + nums[right]);

            maxSum = Math.max(sum, maxSum);


            right++;
        }


        return maxSum;
    }
}
