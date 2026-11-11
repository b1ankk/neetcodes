class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        return this.isPalindrome(s, 0, s.length - 1, 1);

    }

    isPalindrome(s, left, right, skips) {
        while (left < right) {
            if (s[left] !== s[right]) {
                return skips > 0 
                    && (this.isPalindrome(s, left + 1, right, skips - 1)
                        || this.isPalindrome(s, left, right - 1, skips - 1))
            }

            left++;
            right--;
        }

        return true;
    }
}
