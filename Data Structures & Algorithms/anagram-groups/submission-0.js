class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        const countsToWords = new Map();

        for (const str of strs) {
            const countsStr = this.getLetterCounts(str)
            const countsArr = countsToWords.get(countsStr) ?? [];
            countsArr.push(str);
            countsToWords.set(countsStr, countsArr);

        }
        //  console.log(countsToWords)

        return [...countsToWords.values()];
    }

    getLetterCounts(word) {
        const counts = new Map();

        for (const letter of word) {
            const letterCount = counts.get(letter) ?? 0;
            counts.set(letter, letterCount + 1);
        }


        return [...counts.entries()].sort((a, b) => a[0].localeCompare(b[0])).toString();
    }
}
