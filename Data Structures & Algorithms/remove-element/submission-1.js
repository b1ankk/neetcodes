class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {

        let lastNonValIndex = 0;

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] !== val) {
                nums[lastNonValIndex] = nums[i];
                lastNonValIndex++;
            }
        }

        return lastNonValIndex;

    }
}
