class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums) {

        const sums = [];
        let sum = 0;
        for (let i = 0; i < nums.length; i++) {
            sum += nums[i];
            sums.push(sum);
        }

        for (let i = 0; i < nums.length; i++) {
            const localSumLeft = sums[i] - nums[i];
            const localSumRight = sum - sums[i];

            if (localSumLeft === localSumRight)
                return i;
        }

        return -1;
    }
}
