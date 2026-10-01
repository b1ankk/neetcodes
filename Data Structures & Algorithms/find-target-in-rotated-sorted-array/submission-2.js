class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {


        let left = 0;
        let right = nums.length - 1;
        while (left < right) {
            const mid = left + Math.floor((right - left) / 2);

            if (nums[mid] > nums[right]) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        const min = left;

        if (target >= nums[min] && target <= nums[nums.length - 1]) {
            return this.bs(nums, target, min, nums.length - 1) ?? -1;
        }
        return this.bs(nums, target, 0, min) ?? -1;
    }

    bs(nums, target, left, right) {
        while (left <= right) {
            const mid = left + Math.floor((right - left) / 2);

            if (target < nums[mid]) {
                right = mid - 1;
            } else if (target > nums[mid]) {
                left = mid + 1;
            } else {
                return mid;
            }


        }

        return null;
    }
}

// 4 5 6 7 1 2 3
// 6 0 1 2 3 4 5