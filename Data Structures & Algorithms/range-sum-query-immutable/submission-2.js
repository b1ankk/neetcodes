class NumArray {
    /**
     * @param {number[]} nums
     */
    constructor(nums) {
        const sums = [];

        let sum = 0;
        for (let i = 0; i < nums.length; i++) {
            sum += nums[i];
            sums.push(sum);
        }

        this.sums = sums;
    }

    /**
     * @param {number} left
     * @param {number} right
     * @return {number}
     */
    sumRange(left, right) {
        if (left === 0) {
            return this.sums[right];
        }

        return this.sums[right] - this.sums[left - 1];
    }
}
