class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {

        nums.sort((a, b) => a - b);

        const results = [];

        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];

            if (i > 0 && num === nums[i-1]) {
                continue;
            }

            let left = i + 1;
            let right = nums.length - 1;

            while (left < right) {
                const numL = nums[left];
                const numR = nums[right];
                
                if (left > i+1 && numL === nums[left-1]) {
                    left++;
                    continue;
                }
                if (right < nums.length - 1 && numR === nums[right+1]) {
                    right--;
                    continue;
                }

                const currSum = num + numL + numR;

                if (currSum === 0) {
                    results.push([num, numL, numR])
                    left++;
                    right--;
                } else if (currSum > 0) {
                    right--;
                } else {
                    left++;
                }

            }




        }


        return results;

    }
}
