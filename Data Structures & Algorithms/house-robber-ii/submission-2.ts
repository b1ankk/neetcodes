class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums: number[]): number {
        if (nums.length === 1) {
            return nums[0];
        }

        const robRec = (curr: number, end: number, cache: number[]): number => {
            if (curr >= end) {
                // console.log(curr, start)
                return 0;
            }

            if (cache[curr] != null) {
                return cache[curr];
            }

            const max = Math.max(
                nums[curr] + robRec(curr + 2, end, cache),
                robRec(curr + 1, end, cache)
            );
            cache[curr] = max;

            return max;
        };



        return Math.max(
            robRec(0, nums.length - 1, []),
            robRec(1, nums.length, [])
        );

    }

}
