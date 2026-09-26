// [3,4,5,6,1,2]

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[]): number {

        let left = 0;
        let right = nums.length - 1;

        while (right > left) {
            const mid = Math.floor((right + left) / 2);
            if (nums[right] < nums[mid]) {
                left = mid + 1;
            }
            else {
                right = mid;
            }
            

        }

        return nums[left]
    }
}
