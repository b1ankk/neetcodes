class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {

        const letterCounts = new Map();

        for (const char of t) {
            const count = letterCounts.get(char) ?? 0;
            letterCounts.set(char, count + 1);
        }

        let currSubstringStart = 0;

        let substringStart = -1;
        let substringEnd = Number.MAX_SAFE_INTEGER;

        let charsCorrect = 0;
        let charsNeeded = letterCounts.size;


        for (let i = 0; i < s.length; i++) {
            const char = s.charAt(i);
            const count = letterCounts.get(char);
            
            if (count != null) {

                const newCount = count - 1;
                letterCounts.set(char, newCount);
                if (newCount === 0) {
                    charsCorrect++;
                }
                while (charsCorrect === charsNeeded) {
                    const substringLength = i - currSubstringStart + 1;
                    if (substringEnd - substringStart + 1 > substringLength) {
                        substringStart = currSubstringStart;
                        substringEnd = i;
                    }

                    const count = letterCounts.get(s.charAt(currSubstringStart));
                    if (count != null) {
                        const newCount = count + 1;
                        letterCounts.set(s.charAt(currSubstringStart), newCount);
                        if (newCount > 0) {
                            charsCorrect--;
                        }
                    }
                    currSubstringStart++;
                

                    
                }

            }

        }


        if (substringStart === -1) {
            return '';
        }

        return s.slice(substringStart, substringEnd + 1);
    }
}
