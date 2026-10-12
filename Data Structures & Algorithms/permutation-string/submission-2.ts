class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {


        if (s1.length > s2.length) {
            return false;
        }

        const letterCounts = new Map<string, number>();
        for (const letter of s1) {
            const count = letterCounts.get(letter) ?? 0;
            letterCounts.set(letter, count + 1);
        }

        const foundletterCounts = new Map<string, number>();
        
        for (let i = 0; i < s1.length - 1; i++) {
            const letter = s2[i];
            const count = foundletterCounts.get(letter) ?? 0;
            foundletterCounts.set(letter, count + 1);
        }

        for (let l = 0; l <= s2.length - s1.length; l++) {
            const r = l + s1.length - 1;

            const countR = foundletterCounts.get(s2[r]) ?? 0;
            foundletterCounts.set(s2[r], countR + 1);

            const matchFound = [...letterCounts.entries()].every(([letter, count]) => foundletterCounts.get(letter) === count);
            if (matchFound) {
                return true;
            }

            const countL = foundletterCounts.get(s2[l]) ?? 0;
            foundletterCounts.set(s2[l], countL - 1);
        }

        return false;

    }
}
