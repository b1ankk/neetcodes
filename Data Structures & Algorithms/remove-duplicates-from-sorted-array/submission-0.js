class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {

        let prevUniqueIndex = 0;

        for (let i = 1; i < nums.length; i++) {
            const prev = nums[i - 1];
            const curr = nums[i];

            if (prev !== curr) {
                prevUniqueIndex++;
                nums[prevUniqueIndex] = curr;
            }


        }

        return prevUniqueIndex + 1;

    }
}
