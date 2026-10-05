class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums: number[]): number[][] {
        const result = [];
        
        function recurse(nums: number[], i: number) {
            if (i === nums.length) {
                result.push([...nums]);
                return;
            }

            for (let j = i; j < nums.length; j++) {
                [nums[i], nums[j]] = [nums[j], nums[i]];
                
                recurse(nums, i + 1);

                [nums[i], nums[j]] = [nums[j], nums[i]];
            }


        }

        recurse(nums, 0);

        return result;

    }

    
}
