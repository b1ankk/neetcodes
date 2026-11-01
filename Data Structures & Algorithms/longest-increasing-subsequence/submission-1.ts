class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums: number[]): number {

        const cache = new Map<number, Map<number, number>>();

        const subsequence = (index: number, prev: number): number => {
            if (index === nums.length - 1) {
                return nums[index] > prev ? 1 : 0;
            }

            if (cache.get(index)?.has(prev)) {
                return cache.get(index).get(prev);
            }

            let result = subsequence(index + 1, prev);

            if (nums[index] > prev) {
                result = Math.max(result, 1 + subsequence(index + 1, nums[index]));
            }

            const map = cache.get(index) ?? new Map();
            map.set(prev, result);
            cache.set(index, map);
        
            return result;

        }


        return subsequence(0, Number.MIN_SAFE_INTEGER);


    }
}
