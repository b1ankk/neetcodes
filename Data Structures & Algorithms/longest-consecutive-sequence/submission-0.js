class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

        const numbers = new Set(nums);


        let maxLength = 0;

        for (const num of nums) {

            if (numbers.has(num-1)) {
                continue;
            }

            let nextNum = num;

            let length = 0;

            while (numbers.has(nextNum)) {
                length++;
                nextNum++;
            }

            maxLength = Math.max(maxLength, length);
        }

        return maxLength;



    }
}
