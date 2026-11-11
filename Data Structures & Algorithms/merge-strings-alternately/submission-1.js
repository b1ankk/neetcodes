class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {

        let chars = [];

        let i = 0;

        while (i < word1.length && i < word2.length) {
            chars.push(word1[i]);
            chars.push(word2[i]);
            i++;
        }

        let result = chars.join('');

        if (word1.length > word2.length) {
            result += word1.slice(i);
        } else {
            result += word2.slice(i);
        }

        return result;

    }
}
