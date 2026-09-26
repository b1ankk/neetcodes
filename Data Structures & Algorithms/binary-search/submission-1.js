class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {

        let left = 0;
        let right = nums.length - 1;

        while (right >= left) {
            const mid = Math.floor((right + left) / 2);
            const midVal = nums[mid];

            if (target < midVal) {
                right = mid - 1;
            } else if (target > midVal) {
                left = mid + 1;
            } else {
                return mid;
            }
        }

        return -1;
    }
}
