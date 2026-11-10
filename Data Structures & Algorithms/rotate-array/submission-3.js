class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {

        let moved = 0;
        let index = 0;
        let last = nums.at(-k % nums.length);
        let startIndex = 0;


        while (moved < nums.length) {

            if (startIndex === index && moved !== 0) {
                index++;
                startIndex = index;
                last = nums.at(index - k % nums.length);
            }

            const temp = nums[index];
            nums[index] = last;
            last = temp;
            index = (index + k) % nums.length;
            moved++;
        }


    }
}
