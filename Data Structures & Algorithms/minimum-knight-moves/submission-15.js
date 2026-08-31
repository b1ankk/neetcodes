const MOVES = [
    [1, 2], [2, 1], [2, -1], [1, -2],
    [-1, 2], [-2, 1], [-2, -1], [-1, -2]
];

const key = (x, y) => `${x}_${y}`;

class Solution {
    /**
     * @param {number} x
     * @param {number} y
     * @return {number}
     */
    minKnightMoves(x, y) {
        if (x === 0 && y === 0) {
            return 0;
        }

        let front = new Set([key(0, 0)]);
        let back = new Set([key(x, y)]);

        let visitedFront = new Set(front);
        let visitedBack = new Set(back);

        let steps = 0;

        while (front.size > 0 && back.size > 0) {
            // Always expand the smaller side
            if (front.size > back.size) {
                [front, back] = [back, front];
                [visitedFront, visitedBack] =
                    [visitedBack, visitedFront];
            }

            const nextFront = new Set();

            for (const position of front) {
                const [xCurr, yCurr] =
                    position.split("_").map(Number);

                for (const [dx, dy] of MOVES) {
                    const xNew = xCurr + dx;
                    const yNew = yCurr + dy;

                    const newKey = key(xNew, yNew);

                    // The two searches meet
                    if (visitedBack.has(newKey)) {
                        return steps + 1;
                    }

                    if (visitedFront.has(newKey)) {
                        continue;
                    }

                    visitedFront.add(newKey);
                    nextFront.add(newKey);
                }
            }

            front = nextFront;
            steps++;
        }
    }
}