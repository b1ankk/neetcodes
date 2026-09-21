class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {

        let prevUniqueIndex = 0;
        let prevNumber = nums[0];
        let prevNumberCount = 1;

        for (let i = 1; i < nums.length; i++) {
            const curr = nums[i];

            // console.log(i, curr, nums)

            if (curr === prevNumber && prevNumberCount < 2) {
                prevUniqueIndex++;
                prevNumberCount++;
                nums[prevUniqueIndex] = curr;
            } else if (curr !== prevNumber) {
                prevUniqueIndex++;
                nums[prevUniqueIndex] = curr;
                prevNumberCount = 1;
                prevNumber = curr;
            } else {
                prevNumberCount++;
            }



        }
        


        return prevUniqueIndex + 1;
    }
}
