class Solution {
    /**
     * @param {number} num
     * @return {number}
     */
    maximumSwap(num) {
        if (Math.trunc(num / 10) === 0) {
            return num;
        } 

        const digits = [];

        let i = 1;
        while (Math.trunc(num / i) > 0) {
            digits.unshift(Math.floor(num / i) % 10)
            i *= 10;
        }

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

        let result = 0;
        let pow = 0;
        for (let i = digits.length - 1; i >= 0; i--) {
            result += digits[i] * Math.pow(10, pow++);
        }
        // console.log(result)

        return result; 

    }
}
