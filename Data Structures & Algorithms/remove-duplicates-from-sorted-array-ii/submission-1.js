class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {

        let prevUniqueIndex = 0;
        
        for (let i = 0; i < nums.length; i++) {
            const curr = nums[i];

            if (prevUniqueIndex < 2 || curr !== nums[prevUniqueIndex - 2]) {
                nums[prevUniqueIndex] = curr;
                prevUniqueIndex++;
            }

        }
        


        return prevUniqueIndex;
    }
}
