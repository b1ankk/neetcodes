class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s: string, wordDict: string[]): boolean {

        const words = new Set(wordDict);

        const cache = new Map<number, boolean>();

        const canSegment = (start:number): boolean => {
            
            if (cache.get(start) != null) {
                return cache.get(start);
            }

            // console.log('canSegment', start)
            for (let i = start + 1; i <= s.length; i++) {

                if (words.has(s.slice(start, i))) {
                    // console.log('hasSlice', start, i)
                    if (i === s.length || canSegment(i)) {
                        cache.set(start, true);
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
