class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums: number[], target: number): number[][] {

        const results = [];
        const subset = [];

        this.dfs(nums, 0, target, subset, results);

        return results;

    }

    dfs(nums, i, target, subset, results) {

        if (target === 0) {
            results.push([...subset]);
            return;
        }

        if (target < 0) {
            return;
        }

        if (i === nums.length) {
            return;
        }

        subset.push(nums[i]);
        this.dfs(nums, i, target - nums[i], subset, results);
        subset.pop();

        this.dfs(nums, i + 1, target, subset, results);

    }
}
