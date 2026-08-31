class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {

        const windowCharacterCounts = new Array(26).fill(0); 
 
        let left = 0;
        let maxLength = 0;

        let maxCharacterCount = 0;

        for (let right = 0; right < s.length; right++) {
            const char = s.charAt(right);
            const charCode = char.codePointAt(0) - 'A'.codePointAt(0);

            windowCharacterCounts[charCode]++;
            maxCharacterCount = Math.max(maxCharacterCount, windowCharacterCounts[charCode]);

            let windowSize = right - left + 1;
            let wrongCharacters = windowSize - maxCharacterCount;

            if (wrongCharacters <= k) {
                maxLength = Math.max(windowSize, maxLength);
            } else {
                const charToRemove = s.charAt(left);
                const codePointToRemove = charToRemove.codePointAt(0) - 'A'.codePointAt(0);
                windowCharacterCounts[codePointToRemove]--;
                left++;
            }
        }

        return maxLength;
    }
}