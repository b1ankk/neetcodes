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

        let missmatches = letterCounts.size;

        const update = (letter: string, diff: number) => {
            const count = letterCounts.get(letter) ?? 0;
            letterCounts.set(letter, count + diff);

            if (letterCounts.get(letter) === 0) {
                missmatches--;
            } else if (letterCounts.get(letter) === diff) {
                missmatches++;
            }
        };
 
        for (let i = 0; i < s1.length - 1; i++) {
            const letter = s2[i];
            update(letter, -1);
        }

        for (let l = 0; l <= s2.length - s1.length; l++) {
            const r = l + s1.length - 1;

            update(s2[r], -1)
            
            if (missmatches === 0) {
                return true;
            }

            update(s2[l], 1)
        }

        return false;

    }
}
