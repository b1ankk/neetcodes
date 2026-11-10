class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let candidate = nums[0];
        let candidateCount = 0;


        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === candidate) {
                candidateCount++;
            } else {
                candidateCount--;
            }

            if (candidateCount === 0) {
                candidate = nums[i];
                candidateCount = 1;
            }


        }

        return candidate;

    }
}
