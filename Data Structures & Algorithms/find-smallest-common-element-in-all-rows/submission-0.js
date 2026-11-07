// m*n * m log n

class Solution {
    /**
     * @param {number[][]} mat
     * @return {number}
     */
    smallestCommonElement(mat) {

        const counts = new Map();

        let min = Number.MAX_SAFE_INTEGER;


        for (let arr of mat) {
            for (const num of arr) {
                const count = (counts.get(num) ?? 0) + 1;
                counts.set(num, count);

                if (count === mat.length) {
                    min = Math.min(min, num);
                }

            }
        }

        return min === Number.MAX_SAFE_INTEGER ? -1 : min;

    }
}
