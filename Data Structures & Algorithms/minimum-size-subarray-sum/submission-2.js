class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {

        let left = 0;
        let sum = 0;

        let window = Number.MAX_SAFE_INTEGER;

        for (let right = 0; right < nums.length; right++) {
            sum += nums[right];

            while (sum >= target) {
                window = Math.min(window, right - left + 1);

                sum -= nums[left];
                left++;


            }


        }   

        
        return window < Number.MAX_SAFE_INTEGER ? window : 0;
    }
}
