class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {

        const result = [];
        const subset = [];

        this.dfs(nums, 0, subset, result);

        return result;

    }


    dfs(nums, i, subset, result) {
        if (i === nums.length) {
            result.push([...subset]);
            return;
        }

        subset.push(nums[i]);
        this.dfs(nums, i + 1, subset, result);

        subset.pop();
        this.dfs(nums, i + 1, subset, result);

    }
 }
