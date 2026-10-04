class Solution {
    /**
     * @param {number} n
     * @param {number} k
     * @return {number[][]}
     */
    combine(n: number, k: number): number[][] {

        const result = [];
        const curr = [];


        this.recurse(1, n, k, curr, result);

        return result;
    }


    recurse(i: number, n: number, k: number, curr: number[], result: number[][]) {
        if (curr.length === k) {
            result.push([...curr]);
            return;
        }


        for (let j = i; j <= n; j++) {
            curr.push(j);
            this.recurse(j + 1, n, k, curr, result);
            curr.pop();
        }


    }
}
