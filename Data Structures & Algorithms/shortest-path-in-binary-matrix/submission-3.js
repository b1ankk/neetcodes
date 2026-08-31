const NEIGHBOR_OFFSETS = (() => {
    const arr = [];

    for (let i = -1; i <= 1; i++)
        for (let j = -1; j <= 1; j++)
            if (!(i === 0 && j === 0))
                arr.push([i , j]);

    return arr;
})();




class Solution {



    /**
     * @param {number[][]} grid
     * @return {number}
     */
    shortestPathBinaryMatrix(grid) {
        if (grid[0][0] === 1) {
            return -1;
        }

        const visited = new Array(grid.length)
            .fill(false)
            .map((_, i) => new Array(grid[i].length).fill(false));


        const queue = [[0, 0]];

        let pathLength = 0;

        while (queue.length > 0) {
            
            const queueLength = queue.length;
            pathLength++;

            for (let i = 0; i < queueLength; i++) {

                const [y, x] = queue.shift();

                if (y === grid.length - 1 && x === grid[0].length - 1) {
                    return pathLength;
                }

                visited[y][x] = true;

                for (const [yOffset, xOffset] of NEIGHBOR_OFFSETS) {
                    const xNeighbor = xOffset + x;
                    const yNeighbor = yOffset + y;

                    if (yNeighbor < 0 || yNeighbor >= grid.length || xNeighbor < 0 || xNeighbor >= grid[y].length) {
                        continue;
                    }

                    if (grid[yNeighbor][xNeighbor] === 1) {
                        continue;
                    }

                    if (visited[yNeighbor][xNeighbor]) {
                        continue;
                    }

                    queue.push([yNeighbor, xNeighbor]);
                }


            }


        }


        return -1;
    }
}
