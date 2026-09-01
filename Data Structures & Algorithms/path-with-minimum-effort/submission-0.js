const NEIGHBOR_OFFSETS = [[0, 1], [-1, 0], [0, -1], [1, 0]];

class Solution {
    /**
     * @param {number[][]} heights
     * @return {number}
     */
    minimumEffortPath(heights) {


        const minCostToNode = new Array(heights.length).fill(0);
        minCostToNode.forEach((_, i) => {
            minCostToNode[i] = new Array(heights[i].length).fill(null);
        });

        const firstNode = {x: 0, y: 0, c: 0};
        // {x: number, y: number, c: number }
        const nextNodeToCheck = new PriorityQueue((a, b) => a.c - b.c, [firstNode]);
        minCostToNode[0][0] = firstNode;

        let maxEffort = 0;


        while (!nextNodeToCheck.isEmpty()) {
            const node = nextNodeToCheck.dequeue();
            // console.log('dequeued - ', node)

            // if (minCostToNode[node.x][node.y] != null) {
            //     continue;
            // }

            // minCostToNode[node.x][node.y] = node;

            minCostToNode[node.x][node.y] = node.c;
            // console.log('min costs\n', minCostToNode)

            maxEffort = Math.max(maxEffort, node.c);

            if (node.x === heights.length - 1 && node.y === heights[0].length - 1) {
                return maxEffort;
            }
            

            for (const [xOffset, yOffset] of NEIGHBOR_OFFSETS) {
                const x = node.x + xOffset;
                const y = node.y + yOffset;


                if (x < 0 || x >= heights.length || y < 0 || y >= heights[x].length) {
                    continue;
                }

                if (minCostToNode[x][y] != null) {
                    continue;
                }

                const cost = Math.abs(heights[x][y] - heights[node.x][node.y]);
                const newNode = {x, y, c: cost};

                nextNodeToCheck.enqueue(newNode);
                // console.log(nextNodeToCheck.toArray())

            }
        }



    }
}
