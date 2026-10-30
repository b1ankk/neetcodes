class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    searchInsert(nums: number[], target: number): number {

        let left = 0;
        let right = nums.length - 1;

        let mid = -1;

        let result = 0;
        while (left <= right) {
            mid = left + Math.floor((right - left) / 2);

            if (target === nums[mid]) {
                return mid;
            }

            if (target > nums[mid]) {
                left = mid + 1;
                result = mid + 1;
            } else {
                right = mid - 1;
            }


        }


        return result;
    }
}
