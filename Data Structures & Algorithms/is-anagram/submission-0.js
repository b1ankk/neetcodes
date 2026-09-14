class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }

        const letterCounts = new Map();

        for (let i = 0; i < s.length; i++) {
            const char = s.charAt(i);
            const count = letterCounts.get(char) ?? 0;
            letterCounts.set(char, count + 1);
        }

        for (let i = 0; i < t.length; i++) {
            const char = t.charAt(i);
            const newCount = (letterCounts.get(char) ?? 0) - 1;
            if (newCount === -1) {
                return false;
            }
            letterCounts.set(char, newCount);
        }

        return true;
    }
}
