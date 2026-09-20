class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);

        const frequency = new Map();

        for (const num of nums) {
            const currFreq = frequency.get(num) ?? 0;
            frequency.set(num, currFreq + 1);
        }

        const result = [];

        // console.log(nums)

        for (let i = 0; i < nums.length; i++) {
            const n1 = nums[i];

            frequency.set(n1, frequency.get(n1) - 1);
            
            if (i > 0 && n1 === nums[i - 1])
              continue;


            for (let j = i + 1; j < nums.length; j++) {
                const n2 = nums[j];

                const freq2 = frequency.get(n2);
                frequency.set(n2, freq2 - 1);

                if (j > i + 1 && n2 === nums[j - 1]) 
                    continue;


                const difference = 0 - n1 - n2;

                if (frequency.get(difference) > 0) 
                    result.push([n1, n2, difference]);
            }

            for (let j = i + 1; j < nums.length; j++) {
                const n2 = nums[j];
                frequency.set(n2, frequency.get(n2) + 1);
            }

            // frequency.set(n1, frequency.get(n1) + 1);
        }

        return result;
    }
}
