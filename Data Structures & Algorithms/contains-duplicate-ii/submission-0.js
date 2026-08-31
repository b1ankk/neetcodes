class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        
        const window = new Set();

        let left = 0;
        let right = 0;

        while (right < nums.length) {
            
            if (right >= k + 1) {
                window.delete(nums[left]);
                left++;
            }

            if (window.has(nums[right])) {
                return true;
            }

            window.add(nums[right]);
            right++;
        }

        return false;
    }
}
