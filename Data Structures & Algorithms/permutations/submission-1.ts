class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums: number[]): number[][] {

        const numsSet = new Set<number>();
        const result = [];

        this.recurse(nums, numsSet, result);

        return result;
    }

    recurse(nums:number[], numsSet: Set<number>, result:number[][]) {

        if (numsSet.size === nums.length) {
            result.push([...numsSet]);
            return;
        }


        for (let i = 0; i < nums.length; i++) {
            if (numsSet.has(nums[i])) {
                continue;
            }

            numsSet.add(nums[i]);

            this.recurse(nums, numsSet, result);

            numsSet.delete(nums[i]);
        }





    }
}
