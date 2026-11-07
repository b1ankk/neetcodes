class Solution {
    /**
     * @param {number[][]} mat
     * @return {number}
     */
    smallestCommonElement(mat) {

        const bSearch = (target, arr) => {

            let left = 0;
            let right = arr.length - 1;

            while (left <= right) {
                const mid = left + Math.floor((right - left) / 2);

                const nMid = arr[mid];
                const nLeft = arr[left];
                const nRight = arr[right];

                if (nMid === target) {
                    return true;
                }

                if (target > nMid) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }

            return false;

        };

        for (const num of mat[0]) {

            let foundCount = 1;
            for (let i = 1; i < mat.length; i++) {
                const found = bSearch(num, mat[i]);

                if (found) {
                    foundCount++;
                } else {
                    break;
                }
            }

            if (foundCount === mat.length) {
                return num;
            }
        }

        return -1;


    }
}
