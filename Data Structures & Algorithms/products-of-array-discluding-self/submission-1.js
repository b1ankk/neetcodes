class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {

        const result = [];
        result[0] = 1;

        for (let i = 1; i < nums.length; i++) {
            result[i] = result[i - 1] * nums[i - 1]
        }

        let postfix = 1;
        for (let i = nums.length - 1; i >= 0; i--) {
            result[i] = result[i] * postfix;
            postfix *= nums[i];
        }

        return result;
    }
}
