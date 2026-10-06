class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums: number[]): number {

        let prev = 0;
        let prevPrev = 0;

        for (const num of nums) {

            const max = Math.max(
                prev, 
                prevPrev + num
            );

            prevPrev = prev;
            prev = max;
        }

        return prev;
        
    }
}
