class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {

        const charToIndex = new Map();

        let left = 0;
        let maxLength = 0;


        for (let right = 0; right < s.length; right++) {
            const char = s.charAt(right);

            const previousLocation = charToIndex.get(char);
            if (previousLocation !== undefined) {
                left = Math.max(left, previousLocation + 1);
            }

            charToIndex.set(char, right);
            const length = right - left + 1;
            maxLength = Math.max(length, maxLength);
            //console.log(char, left, maxLength, charToIndex)

        }

        return maxLength;
    }
}
