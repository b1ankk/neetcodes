class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        const visited = new Map();

        for (let i = 0; i < nums.length; i++) {
            const thisNum = nums[i];
            const otherIndex = visited.get(target - thisNum);
            if (otherIndex != null) {
                return [otherIndex, i];
            }

            visited.set(thisNum, i);
        }

    }
}
