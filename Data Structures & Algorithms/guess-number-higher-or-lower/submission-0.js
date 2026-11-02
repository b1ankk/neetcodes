/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * function guess(num) {}
 */

class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    guessNumber(n) {

        let left = 1;
        let right = n;


        while (left <= right) {
            let mid = left + Math.floor((right - left) / 2);

            const guessResult = guess(mid) ;
            if (guessResult === 0) {
                return mid;
            }

            if (guessResult === 1) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }

        }

        return -1;
        
    }
}
