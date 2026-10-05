let indent = 0;

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permuteUnique(nums: number[]): number[][] {
        nums.sort((a, b) => a - b);

        const frequences = new Map();
        for (const num of nums) {
            const count = frequences.get(num) ?? 0;
            frequences.set(num, count + 1); 
        }


        const result = [];


        const recurse = (curr: number[], ind) => {
            // console.log('  '.repeat(ind), 'rec', curr);
            if (curr.length === nums.length) {
                result.push([...curr]);
                return;
            }


            for (let i = 0; i < nums.length; i++) {
                if (nums[i] === nums[i-1]) {
                    continue;
                }

                const num = nums[i];
                const count = frequences.get(num);
                // console.log('  '.repeat(ind), 'checking', num);
                if (count === 0) {
                    continue;
                }

                frequences.set(num, count - 1);
                curr.push(num);

                // console.log('  '.repeat(ind), 'loop', curr);
                recurse(curr, ind + 1);

                curr.pop();
                frequences.set(num, count);
                
            }


        }


        recurse([], 0);

        return result;
    }
}
