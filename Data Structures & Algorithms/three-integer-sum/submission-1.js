class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {

        // nums.sort((a, b) => a - b);
        // console.log(nums)

        // const result = [];

        const numsSet = new Map(nums.map((n, i) => [n, i]));
        const results = new Set();



        for (let i = 0; i < nums.length; i++) {
            for (let j = i+1; j < nums.length; j++) {
                if (i === j)
                    continue;

                const n1 = nums[i];
                const n2 = nums[j];
                const difference = 0 - n1 - n2;
                const diffIndex = numsSet.get(difference);

                if (diffIndex != null && diffIndex !== i && diffIndex !== j) {
                    results.add([n1, n2, difference].sort((a, b) => a - b).join(','))
                }

            }
        }

        return [...results.values()].map(e => e.split(',').map(Number));
    }
}
