class Solution {
    /**
     * @param {number} num
     * @return {number}
     */
    maximumSwap(num) {
        const digits = String(num).split(''),
            last = Array(10).fill(-1);
        for (let i = 0; i < digits.length; i++) last[Number(digits[i])] = i;
        for (let i = 0; i < digits.length; i++)
            for (let d = 9; d > Number(digits[i]); d--) {
                const j = last[d];
                if (j > i) {
                    [digits[i], digits[j]] = [digits[j], digits[i]];
                    return Number(digits.join(''));
                }
            }
        return num;
    }
}