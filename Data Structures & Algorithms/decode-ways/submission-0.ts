const codes = new Set<string>();

for (let i = 1; i <= 26; i++) {
    codes.add(String(i))
}

class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s: string): number {

        const cache = new Array(s.length);

        function recurse(s: string, start: number) {
            console.log(s.slice(start));
            
            if (start === s.length) {
                return 1;
            }

            if (cache[start] != null) {
                return cache[start];
            }

            if (!codes.has(s[start])) {
                return 0;
            }

            let result = 0;
            result += recurse(s, start + 1);

            if (start < s.length - 1 && codes.has(s[start] + s[start + 1])) {
                result += recurse(s, start + 2);
            }

            cache[start] = result;

            return result;
        }


        return recurse(s, 0);

    }

    
}
