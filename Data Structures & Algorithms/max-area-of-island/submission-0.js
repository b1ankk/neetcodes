class Solution {
    dfsGetIslandArea(grid, i, j) {
        if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length) {
            return 0;
        }

        if (grid[i][j] === 0) {
            return 0;
        }

        grid[i][j] = 0;

        return 1 
            + this.dfsGetIslandArea(grid, i - 1, j)
            + this.dfsGetIslandArea(grid, i + 1, j)
            + this.dfsGetIslandArea(grid, i, j - 1)
            + this.dfsGetIslandArea(grid, i, j + 1);
    }

    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let maxArea = 0;

        grid.forEach((row, i) => {
            row.forEach((cell, j) => {
                if (cell === 1) {
                    const area = this.dfsGetIslandArea(grid, i, j);
                    maxArea = Math.max(area, maxArea);
                }
            })
        })

        return maxArea;

    }
}
