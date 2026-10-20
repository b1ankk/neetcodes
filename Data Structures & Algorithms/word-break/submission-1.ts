class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s: string, wordDict: string[]): boolean {
        const cache = new Map<number, boolean>();

        const canSegment = (start:number): boolean => {
            if (start === s.length) {
                return true;
            }

            if (cache.get(start) != null) {
                return cache.get(start);
            }

            // console.log('canSegment', start)
            for (const word of wordDict) {
                if (s.startsWith(word, start)) {
                    // console.log('hasSlice', start, i)
                    if (canSegment(start + word.length)) {
                        return true;
                    }
                }

            }

            cache.set(start, false);
            return false;
        };
 
        return canSegment(0);

    }
}
