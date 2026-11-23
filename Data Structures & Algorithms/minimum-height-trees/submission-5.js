class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @return {number[]}
     */
    findMinHeightTrees(n, edges) {
        if (n === 1) {
            return [0];
        }

        const graph = new Array(n).fill(0).map(() => []);
        const indegree = new Array(n).fill(0);

        for (const [a, b] of edges) {
            graph[a].push(b);
            indegree[a]++;
            graph[b].push(a);
            indegree[b]++;
        }

        const queue = [];

        for (let i = 0; i < n; i++) {
            if (indegree[i] === 1) {
                queue.push(i);
            }
        }

        while (queue.length > 0) {
            if (n <= 2) {
                return queue;
            }

            const queueLength = queue.length;
            for (let i = 0; i < queueLength; i++) {
                const node = queue.shift();
                n--;

                for (const child of graph[node]) {
                    indegree[child]--;
                    if (indegree[child] === 1) {
                        queue.push(child);
                    }
                }
            }

        }

        return [];

    }
}
