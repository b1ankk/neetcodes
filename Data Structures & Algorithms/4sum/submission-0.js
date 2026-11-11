class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[][]}
     */
    fourSum(nums, target) {

        nums.sort((a, b) => a - b);
        
        console.log(nums);

        const results = [];

        for (let i = 0; i < nums.length - 3; i++) {
            if (nums[i] === nums[i - 1]) {
                continue;
            }

            for (let j = i + 1; j < nums.length - 2; j++) {
                if (nums[j] === nums[j - 1] && j - 1 >= i + 1) {
                    continue;
                }

                let left = j + 1;
                let right = nums.length - 1;

                const subSum = nums[i] + nums[j];

                while (left < right) {
                    const sum = subSum + nums[left] + nums[right];
                    if (sum === target) {
                        results.push([nums[i], nums[j], nums[left], nums[right]]);
                        left++;
                        right--;

                        while (nums[left] === nums[left - 1]) {
                            left++;
                        }
                        while (nums[right] === nums[right + 1]) {
                            right--;
                        }
                    } else if (sum < target) {
                        left++;
                    } else {
                        right--;
                    }
                }

            }


        } 


        return results;

    }
}
