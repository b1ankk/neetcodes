class Solution {
    /**
     * @param {number[][]} mat
     * @return {number}
     */
    smallestCommonElement(mat) {

        const indexes = new Array(mat.length).fill(0);

        let curr = mat[0][0];
        let currCount = 0;
        let maxIndex = 0;

        while (maxIndex < mat[0].length) {
            
            for (let j = 0; j < mat.length; j++) {

                while (curr > mat[j][indexes[j]]) {
                    indexes[j]++;
                    maxIndex = Math.max(maxIndex, indexes[j]);
                }

                if (indexes[j] >= mat[0].length) {
                    return -1;
                }

                if (mat[j][indexes[j]] !== curr) {
                    curr = mat[j][indexes[j]];
                    currCount = 0;
                    break;
                }

                currCount++;
            }

            if (currCount === mat.length) {
                return curr;
            }
        }
    }
}
