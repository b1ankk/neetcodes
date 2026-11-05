class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {boolean}
     */
    search(nums, target) {

        let left = 0;
        let right = nums.length - 1;


        while (left <= right) {

            const mid = left + Math.floor((right - left) / 2);

            const nLeft = nums[left];
            const nRight = nums[right];
            const nMid = nums[mid];

            if (target === nMid) {
                return true;
            }

            if (nLeft === nMid || nRight === nMid) {
                if (nLeft === nMid) {
                    left++;
                }
                if (nRight === nMid){
                    right--;
                }
                continue;
            }

            if (nLeft < nMid) {
                if (target < nMid && target >= nLeft) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            } else {
                if (target > nMid && target <= nRight) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }


        }

        return false;



    }
}
