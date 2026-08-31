const DIR_OFFSETS = [
    [-1, 0],
    [0, -1],
    [1, 0],
    [0, 1],
];

class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const HEIGHT = grid.length;
        const WIDTH = grid[0].length;

        let minutesPassed = 0;
        let fresh = 0;
        let rottenQueue = [];

        grid.forEach((row, i) => {
            row.forEach((cell, j) => {
                if (cell === 1) {
                    fresh++;
                } else if (cell === 2) {
                    rottenQueue.push([i, j]);
                }
            });
        });

        while (rottenQueue.length > 0 && fresh > 0) {
            const rottenCount = rottenQueue.length;

            for (let i = 0; i < rottenCount; i++) {
                const [y, x] = rottenQueue.shift();

                for (const [yOffset, xOffset] of DIR_OFFSETS) {
                    const yNeighbor = y + yOffset;
                    const xNeighbor = x + xOffset;

                    if (
                        xNeighbor < 0 ||
                        xNeighbor >= WIDTH ||
                        yNeighbor < 0 ||
                        yNeighbor >= HEIGHT
                    ) {
                        continue;
                    }

                    if (grid[yNeighbor][xNeighbor] !== 1) {
                        continue;
                    }

                    grid[yNeighbor][xNeighbor] = 2;
                    fresh--;

                    rottenQueue.push([yNeighbor, xNeighbor]);
                }
            }

            minutesPassed++;
        }

        if (fresh === 0) {
            return minutesPassed;
        }

        return -1;
    }
}
