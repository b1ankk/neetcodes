class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s: string): string {

        let l = 0;
        let r = 0;

        let maxPalindrome = '';

        for (let i = 0; i < s.length; i++) {
            
            // Even

            l = i;
            r = i;

            while (l >= 0 && r < s.length && s[l] === s[r]) {
                if ((r - l + 1) > maxPalindrome.length) {
                    maxPalindrome = s.slice(l, r + 1);
                }
                l--;
                r++;
            }


            // Uneven
            l = i;
            r = i+1;

            while (l >= 0 && r < s.length && s[l] === s[r]) {
                if ((r - l + 1) > maxPalindrome.length) {
                    maxPalindrome = s.slice(l, r + 1);
                }
                l--;
                r++;
            }
        }

        return maxPalindrome;

    }
}
