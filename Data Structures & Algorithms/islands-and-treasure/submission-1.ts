const DIRECTIONS = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1],
];

const INF = 2147483647;

class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid: number[][]): void {

        const queue: [number, number, number][]  = [];

        grid.forEach((row, i) => {
            row.forEach((val, j) => {
                if (val === 0) {
                    queue.push([i, j, 0]);
                }
            })
        })


        while (queue.length > 0) {
            const queueLength = queue.length;
            
            for (let n = 0; n < queueLength; n++) {
                const [i, j, distance] = queue.shift();

                for (const [di, dj] of DIRECTIONS) {
                    const iNew = i + di;
                    const jNew = j + dj;
                    const newDistance = distance + 1;

                    if (iNew < 0 || iNew >= grid.length || jNew < 0 || jNew >= grid[0].length) {
                        continue;
                    }

                    if (grid[iNew][jNew] !== INF) {
                        continue; // TODO Make sure we dont have to overrwrite
                    }

                    grid[iNew][jNew] = newDistance;

                    queue.push([iNew, jNew, newDistance]);
                }
            }

        }

    }
}
