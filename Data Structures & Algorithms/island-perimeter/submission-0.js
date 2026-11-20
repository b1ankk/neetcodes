const DIRECTIONS = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
];

class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    islandPerimeter(grid) {

        let perimiter = 0;

        const visited = new Array(grid.length).fill(0).map(() => new Array(grid[0].length).fill(false));

        const dfs = (row, col) => {
            if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length) {
                perimiter++;
                return;
            }

            if (grid[row][col] === 0) {
                perimiter++;
                return;
            }

            if (visited[row][col]) {
                return;
            }

            visited[row][col] = true;

            for (const [rowOffset, colOffset] of DIRECTIONS) {
                dfs(row + rowOffset, col + colOffset);
            }
        };

        for (let row = 0; row < grid.length; row++) {
            for (let col = 0; col < grid[0].length; col++) {
                if (grid[row][col] !== 0) {
                    dfs(row, col);
                    return perimiter;
                }
            }
        }

        return perimiter;

    }
}
