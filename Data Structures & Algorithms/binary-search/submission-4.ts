class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        return this.binarySearch(nums, 0, nums.length - 1, target);
    }

    binarySearch(nums: number[], left: number, right: number, target: number) {
        const mid = left + Math.floor((right - left) / 2);
        const midVal = nums[mid];
        if (midVal === target) {
            return mid;
        } 
        if (left >= right) {
            return -1;
        }

        if (target < midVal) {
            return this.binarySearch(nums, left, mid - 1, target);
        }
        return this.binarySearch(nums, mid + 1, right, target);
    }
}
