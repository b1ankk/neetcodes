class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums: number[]): number[][] {

        const subsets = [[]];

        for (const num of nums) {
            const subsetsLength = subsets.length;

            for (let i = 0; i < subsetsLength; i++) {
                const subset = subsets[i];
                subsets.push([...subset, num]);

            }
            

        }

        return subsets;
    }
}
