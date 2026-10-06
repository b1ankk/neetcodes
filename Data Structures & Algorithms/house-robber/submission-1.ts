class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums: number[]): number {

        const cache = [];

        return this.robSlice(0, nums, cache);


    }

    robSlice(start: number, nums: number[], cache): number {
        if (start >= nums.length) {
            return 0;
        }

        if (cache[start] != null) {
            return cache[start];
        }

        const current = nums[start];
        const max = Math.max(
            current + this.robSlice(start + 2, nums, cache),
            this.robSlice(start + 1, nums, cache)
        );

        cache[start] = max;

        return max;
    }
}
