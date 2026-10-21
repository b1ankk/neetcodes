class Solution {
    /**
     * @param {string} a
     * @param {string} b
     * @return {string}
     */
    addBinary(a: string, b: string): string {

        const result = [];

        let overflow = 0;

        let i = 1
        for (; i <= Math.max(a.length, b.length) + 1; i++) {
            const aDigit: number = Number(a.at(-i) ?? 0);
            const bDigit: number = Number(b.at(-i) ?? 0);

            const curr = (aDigit + bDigit + overflow) % 2;
            overflow = Math.floor((aDigit + bDigit + overflow) / 2);

            result.push(curr);
        }

        if (result.at(-1) === 0) {
            result.pop();
        }

        return result.reverse().join('');

    }
}


//  "00001011111111111111111111111111111111111110111111111111111111011111111111111100000001111111111111111111111101"
// "100001011111111111111111111111111111111111110111111111111111111011111111111111100000001111111111111111111111101"

