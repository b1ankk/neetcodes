class Solution {
    /**
     * @param {number} x
     * @return {boolean}
     */
    isPalindrome(x: number): boolean {

        if (x < 0) {
            return false;
        }

        const degree = Math.floor(Math.log10(x));

        for (let i = 0; i <= degree / 2; i++) {
            const left = Math.floor((x / Math.pow(10, degree - i)))  % 10;
            const right = Math.floor((x / Math.pow(10, i))) % 10

            if (left !== right) {
                return false;
            }
            
        }

        return true;

    }
}
