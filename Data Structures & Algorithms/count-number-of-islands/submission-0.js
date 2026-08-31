class Solution {
    dfsWalkIsland(grid, i, j) {
        if (i < 0 || j < 0 || i >= grid.length || j >= grid[i].length) {
            return;
        }

        if (grid[i][j] === '0') {
            return;
        }

        grid[i][j] = '0';

        this.dfsWalkIsland(grid, i - 1, j)
        this.dfsWalkIsland(grid, i + 1, j)
        this.dfsWalkIsland(grid, i, j - 1)
        this.dfsWalkIsland(grid, i, j + 1)
    }

    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {

        let islandsCount = 0;

        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i].length; j++) {

                if (grid[i][j] === '1') {
                    islandsCount++;
                    this.dfsWalkIsland(grid, i, j);
                }

            }
        }



        return islandsCount;
    }
}
