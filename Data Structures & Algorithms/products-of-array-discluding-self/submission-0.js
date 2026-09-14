class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let product = 1;
        let zeros = 0;

        for (const num of nums) {
            if (num !== 0) product *= num;
            else zeros++;
        }

        const result = [];

        for (const num of nums) {
            if (zeros > 1 || (num !== 0 && zeros === 1)) {
                result.push(0);
            } else if (num === 0) {
                result.push(product);
            } else {
                result.push(product / num);
            }
        }

        return result;
    }
}
