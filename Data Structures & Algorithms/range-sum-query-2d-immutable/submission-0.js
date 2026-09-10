class NumMatrix {
    /**
     * @param {number[][]} matrix
     */
    constructor(matrix) {
        const sumsMatrix = new Array(matrix.length).fill(null).map(_ => []);

        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                const sumUp = row > 0 ? sumsMatrix[row - 1][col] : 0;
                const sumLeft = col > 0 ? sumsMatrix[row][col - 1] : 0;
                const sumLeftUp = row > 0 && col > 0 ? sumsMatrix[row - 1][col - 1] : 0;

                const current = matrix[row][col];
                const sum = sumUp + sumLeft - sumLeftUp + current;

                sumsMatrix[row][col] = sum;
            }
        }

        // console.log(sumsMatrix)

        this.sumsMatrix = sumsMatrix;
    }

    /**
     * @param {number} row1
     * @param {number} col1
     * @param {number} row2
     * @param {number} col2
     * @return {number}
     */
    sumRegion(row1, col1, row2, col2) {
        const sumBottomRight = this.sumsMatrix[row2][col2];
        const sumTopRight = row1 > 0 ? this.sumsMatrix[row1 - 1][col2] : 0;
        const sumBottomLeft = col1 > 0 ? this.sumsMatrix[row2][col1 - 1] : 0;
        const sumTopLeft = row1 > 0 && col1 > 0 ? this.sumsMatrix[row1 - 1][col1 - 1] : 0;

        return sumBottomRight - sumTopRight - sumBottomLeft + sumTopLeft;
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
