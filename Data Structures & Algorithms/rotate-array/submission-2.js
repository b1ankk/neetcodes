class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {

        const copy = [...nums];
        for (let i = 0; i < nums.length; i++) {
            nums[i] = copy.at((i - k) % nums.length);
        }
    }
}
