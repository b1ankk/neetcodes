class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @param {number[]} succProb
     * @param {number} start_node
     * @param {number} end_node
     * @return {number}
     */
    maxProbability(
        n: number,
        edges: number[][],
        succProb: number[],
        start_node: number,
        end_node: number,
    ) {
        type Edge = {
            s: number;
            t: number;
            p: number;
        };

        const graph = new Map<number, Edge[]>();

        edges.forEach(([a, b], i) => {
            const prob = succProb[i];

            const arr1 = graph.get(a) ?? [];
            arr1.push({ s: a, t: b, p: prob });
            graph.set(a, arr1);

            const arr2 = graph.get(b) ?? [];
            arr2.push({ s: b, t: a, p: prob });
            graph.set(b, arr2);
        });

        const queue = new PriorityQueue((a, b) => b.p - a.p, graph.get(start_node));

        const results = new Map<number, number>();
        results.set(start_node, 1);

        while (queue.size() > 0) {
            const edge = queue.dequeue();

            if (results.has(edge.t)) {
                continue;
            }

            // console.log(edge)

            const pToTarget = edge.p;

            if (edge.t === end_node) {
                return pToTarget;
            }

            results.set(edge.t, pToTarget);

            const targetNeighbors = graph.get(edge.t);

            for (const neighbor of targetNeighbors) {
                if (results.has(neighbor.t)) {
                    continue;
                }

                queue.enqueue({ ...neighbor, p: neighbor.p * pToTarget });
            }
        }

        return 0;
    }
}
