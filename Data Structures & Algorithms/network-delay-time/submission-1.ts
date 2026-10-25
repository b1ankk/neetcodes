type Edge = {
    s: number;
    t: number;
    c: number;
}

class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    networkDelayTime(times: number[][], n: number, k: number): number {

        const graph = new Map<number, Edge[]>();

        for (const [s, t, c] of times) {
            const arr = graph.get(s) ?? [];
            arr.push({s, t, c });
            graph.set(s, arr);
        }

        const results = new Map<number, number>();
        results.set(k, 0);

        const queue = new PriorityQueue((a: Edge, b: Edge) => a.c - b.c, graph.get(k));
        console.log(queue.toArray())


        while (queue.size() > 0) {
            const edge = queue.dequeue();

            if (results.has(edge.t)) {
                continue;
            }

            results.set(edge.t, edge.c);
            // console.log(results)
            // console.log(edge)

            if (results.size === n) {
                // console.log(results)
                return edge.c;
            }

            const targetEdges = graph.get(edge.t) ?? [];

            for (const targetEdge of targetEdges) {
                queue.enqueue({...targetEdge, c: edge.c + targetEdge.c});
            }
            // console.log(queue.toArray())

        }

        return -1;

    }
}
