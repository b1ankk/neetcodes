class Solution {
    /**
     * @param {number} num
     * @return {number}
     */
    maximumSwap(num) {
        if (Math.trunc(num / 10) === 0) {
            return num;
        } 

        const digits = String(num).split('').map(Number);

        const rightMostMaxIndexes = [];
        rightMostMaxIndexes[digits.length - 1] = digits.length - 1;
        for (let i = digits.length - 2; i >= 0; i--) {
            rightMostMaxIndexes[i] = 
                digits[i] > digits[rightMostMaxIndexes[i + 1]]
                    ? i
                    : rightMostMaxIndexes[i + 1];
        }

        for (let i = 0; i < digits.length - 1; i++) {
            const iMax = rightMostMaxIndexes[i + 1];
            if (digits[i] < digits[iMax]) {
                [
                    digits[i], digits[iMax],
                ] = [
                    digits[iMax], digits[i]
                ]
                break;
            }
        }
        // console.log(rightMostMaxIndexes)

        // console.log(digits)

        return Number(digits.join(''));

    }
}
