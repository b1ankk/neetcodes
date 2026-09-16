const isAlphanumeric = /[^a-z\d]/gi;

class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.toLowerCase().replaceAll(isAlphanumeric, '');
        let left = 0;
        let right = s.length - 1;

        while (left < right) {
            const leftChar = s.charAt(left);
            const rightChar = s.charAt(right);

            if (leftChar !== rightChar) {
                return false;
            }

            left++;
            right--;
        }

        return true;
    }
}
