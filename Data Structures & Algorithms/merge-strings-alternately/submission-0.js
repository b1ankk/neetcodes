class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {

        let chars = [];

        let p1 = 0;
        let p2 = 0;

        while (p1 < word1.length && p2 < word2.length) {
            chars.push(word1[p1]);
            chars.push(word2[p2]);
            p1++;
            p2++;
        }

        let result = chars.join('');

        if (word1.length > word2.length) {
            result += word1.slice(word2.length);
        } else {
            result += word2.slice(word1.length);
        }

        return result;

    }
}
