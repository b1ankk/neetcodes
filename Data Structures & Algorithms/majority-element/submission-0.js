class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {

        const counts = new Map();

        for (let i = 0; i < nums.length; i++) {
            const count = counts.get(nums[i]) ?? 0;
            counts.set(nums[i], count + 1);
        }

        let max = Number.MIN_SAFE_INTEGER;
        let maxKey = 0;
        counts.entries().forEach(([key, val]) => {
            if (val >= max) {
                max = val;
                maxKey = key;
            }
        })

        return maxKey;

    }
}
