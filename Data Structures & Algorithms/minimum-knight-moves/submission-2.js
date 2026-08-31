const MOVES = [[1, 2], [2, 1], [2, -1], [1, -2], [-1, 2], [-2, 1], [-2, -1], [-1, -2]]

const key = (a, b) => {
    return `${a}_${b}`;
}

class Solution {
    /**
     * @param {number} x
     * @param {number} y
     * @return {number}
     */
    minKnightMoves(x, y) {

        const queue = [[0, 0]];
        
        const visited = new Set();

        let steps = 0;
        let closestDistSquared = Number.MAX_SAFE_INTEGER;

        while (true) {
            const queueLength = queue.length;
            for (let i = 0; i < queueLength; i++) {
                const [xCurr, yCurr] = queue.shift();

                if (xCurr === x && yCurr === y) {
                    return steps;
                }

                const targetDistanceSquared = (x - xCurr) ** 2 + (y - yCurr) ** 2;
                if (targetDistanceSquared > closestDistSquared + 3 ** 2) {
                    continue;
                }

                if (visited.has(key(xCurr, yCurr))) {
                    continue;
                }

                closestDistSquared = Math.min(closestDistSquared, targetDistanceSquared)

                visited.add(key(xCurr, yCurr));
                // console.log(queue)

                for (const [xDir, yDir] of MOVES) {
                    const xNew = xCurr + xDir;
                    const yNew = yCurr + yDir;
                    queue.push([xNew, yNew]);
                }
            }

            steps++;
        }

    }
}
