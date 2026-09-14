class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {

        const subarraySumCount = new Map();
        subarraySumCount.set(0, 1);

        let sum = 0;
        let count = 0;

        for (let i = 0; i < nums.length; i++) {
            sum += nums[i];
            
            const diff = sum - k;
            count += subarraySumCount.get(diff) ?? 0
           
            const sumCount = subarraySumCount.get(sum) ?? 0;
            subarraySumCount.set(sum, sumCount + 1);
        }

        return count;
    }
}
