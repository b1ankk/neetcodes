





const MATCHING_BRACKETS = new Map(
    [
        [')', '('], 
        [']', '['], 
        ['}', '{'], 

    ]
)



class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        
        const stack = [];

        for (const char of s) {
            const matching = MATCHING_BRACKETS.get(char);
            const last = stack.at(-1);

            if (last === matching && last != undefined) {
                stack.pop();
            } else {
                stack.push(char);
            }
        }

        return stack.length === 0;

    }
}
