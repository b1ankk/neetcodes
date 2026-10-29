// x = 9, sqrt = 3
// x = 12, sqrt = 3

class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    mySqrt(x: number): number {
        if (x < 2) {
            return x;
        }

        let left = 0;
        let right = Math.floor(x / 2);

        let result = 0;
        while (right - left >= 0) {
            let mid = left + Math.floor((right - left) / 2);
            const mid2 = mid * mid;
            
            if (mid2 === x) {
                return mid;
            }

            if (x > mid2) {
                result = mid;
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return result;

    }
}
