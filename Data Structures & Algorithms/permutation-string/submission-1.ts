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





        for (let l = 0; l <= s2.length - s1.length; l++) {
            const foundletterCounts = new Map<string, number>();
            const r = l + s1.length;

            for (let i = l; i < r; i++) {
                const letter = s2[i];
                const count = foundletterCounts.get(letter) ?? 0;
                foundletterCounts.set(letter, count + 1);
            }

            const matchFound = [...letterCounts.entries()].every(([letter, count]) => foundletterCounts.get(letter) === count);
            if (matchFound) {
                return true;
            }

        }

        return false;

    }
}
