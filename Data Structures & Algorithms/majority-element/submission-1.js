class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {

        nums.sort((a, b) => a - b);

        let max = 0;
        let maxCount = 0;

        let currCount = 0;
        let currNum = nums[0];

        nums.forEach((num) => {
            if (num === currNum) {
                currCount++;
            } else {
                currCount = 1;
                currNum = num;
            }
            if (maxCount <= currCount) {
                maxCount = currCount;
                max = num;
            }

        })


        return max;


    }
}
