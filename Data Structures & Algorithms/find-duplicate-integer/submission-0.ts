class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums: number[]): number {

        let fast = 0;
        let slow = 0;

        while (fast <= nums.length) {
            fast = nums[nums[fast]];
            slow = nums[slow];

            if (slow === fast) {
                break;
            }
        }

        let slow2 = 0;
        while (slow2 !== slow) {
            slow2 = nums[slow2];
            slow = nums[slow];
        }

        return slow;

    }
}
