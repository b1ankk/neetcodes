const numToLetters = {
    '2': 'abc'.split(''),
    '3': 'def'.split(''),
    '4': 'ghi'.split(''),
    '5': 'jkl'.split(''),
    '6': 'mno'.split(''),
    '7': 'pqrs'.split(''),
    '8': 'tuv'.split(''),
    '9': 'wxyz'.split(''),
}

class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits: string): string[] {
        if (digits === '') {
            return [];
        }

        const digitsArr = digits.split('');


        const result = [];

        this.recurse(digitsArr, 0, [], result);



        return result;

    }

    recurse(digits: string[], i: number, curr: string[], results: string[]) {
        if (curr.length === digits.length) {
            results.push(curr.join(''));
            return;
        }

        const letters = numToLetters[digits[i]];

        for (const letter of letters) {
            curr.push(letter)
            this.recurse(digits, i + 1, curr, results);
            curr.pop();
        }


    }
}
