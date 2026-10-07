class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums: number[]): number {

        const getMaxRobbed = (start: number, end: number) => {
            let prev = 0;
            let prevPrev = 0;


            for (let i = start; i < end; i++) {
                const num = nums[i];

                const max = Math.max(
                    prev,
                    prevPrev + num
                );

                prevPrev = prev;
                prev = max;

            }

            return prev;
        }

        if (nums.length === 1) {
            return nums[0];
        }

        return Math.max(
            getMaxRobbed(0, nums.length - 1),
            getMaxRobbed(1, nums.length)
        )


    }
}
