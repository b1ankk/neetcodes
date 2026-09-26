class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {

        let up = 0;
        let down = matrix.length;


        while (up <= down) {
            const mid = Math.floor((up + down) / 2);

            if (target >= matrix[mid][0]) {
                if (mid === matrix.length - 1 || matrix[mid+1][0] > target) {
                    return this.searchRow(matrix[mid], target)
                } else {
                    up = mid + 1;
                }

            } else {
                down = mid - 1;
            }


        }


        return false;
    }

    searchRow(row: number[], target: number) {
        let left = 0;
        let right = row.length - 1;

        while (left <= right) {
            const mid =  Math.floor((left + right) / 2);
            const midVal = row[mid];

            if (target < midVal) {
                right = mid - 1;
            } else if (target > midVal) {
                left = mid + 1;
            } else {
                return true;
            }
        }

        return false;
    }
}
