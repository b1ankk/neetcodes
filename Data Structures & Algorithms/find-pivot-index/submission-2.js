class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums) {

        const globalSum = nums.reduce((acc, curr) => acc + curr, 0);
        let leftSum = 0;

        for (let i = 0; i < nums.length; i++) {
            const localSumRight = globalSum - leftSum - nums[i];

            if (leftSum === localSumRight)
                return i;

            leftSum += nums[i];
        }

        return -1;
    }
}
