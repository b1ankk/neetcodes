class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        const countsToWords = new Map();

        for (const str of strs) {
            const sorted = [...str].sort().join();
            const countsArr = countsToWords.get(sorted) ?? [];
            countsArr.push(str);
            countsToWords.set(sorted, countsArr);

        }

        return [...countsToWords.values()];
    }

}
