class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums: number[]): number[][] {

        nums.sort((a, b) => a - b);

        const subset = [];
        const result = [];

        this.recurse(nums, 0, subset, result);

        return result;
    }

    recurse(nums: number[], i: number, subset: number[], result: number[][]) {
        if (i === nums.length) {
            result.push([...subset]);
            return;
        }

        const num = nums[i];
        let numCount = 1;

        while (nums[i] === nums[i + numCount]) {
            numCount++;
        }

        this.recurse(nums, i + numCount, subset, result);
        
        for (let j = 0; j < numCount; j++) {
            subset.push(num);
            this.recurse(nums, i + numCount, subset, result);
        }
                
        for (let j = 0; j < numCount; j++) {
            subset.pop();
        }


    }
}
