class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxWidthRamp(nums) {

        const postfixMax = new Array(nums.length);
        postfixMax[postfixMax.length - 1] = nums.at(-1);

        for (let i = nums.length - 2; i >= 0; i--) {
            postfixMax[i] = Math.max(nums[i], postfixMax[i + 1]);
        }

        let result = 0;

        let left = 0;
        let right = 0;

        while (right < nums.length) {
            if (nums[left] <= postfixMax[right]) {
                result = Math.max(result, right - left);
                right++;
            } else {
                left++;
                right = Math.max(right, left);
            }
        }


        return result;
    }
}
