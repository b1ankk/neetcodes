class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {

        let left = 0;
        let right = 0;

        let sum = 0;
        let minWndow = 0;

        while (sum < target && right < nums.length) {
            sum += nums[right];
            right++;
            minWndow++;
        }

        if (sum < target) {
            return 0;
        }

        right--;

        while (right < nums.length && minWndow > 1) {
            console.log(sum)

            sum -= nums[left];
            left++;

            if (sum < target) {
                right++;
                sum += nums[right];

            } else {
                minWndow--;
            }

        }

        return minWndow;
    }
}
