class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    tribonacci(n) {
        if (n === 0 || n === 1) {
            return n;
        }

        let p0 = 0;
        let p1 = 1;
        let p2 = 1;

        for (let i = 3; i <= n; i++) {
            [
                p0, 
                p1, 
                p2
            ] = [
                p1,
                p2,
                p0 + p1 + p2
            ];
        }
        

        return p2;

    }
}
