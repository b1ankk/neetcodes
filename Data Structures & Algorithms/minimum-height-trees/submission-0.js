class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @return {number[]}
     */
    findMinHeightTrees(n, edges) {

        const graph = new Array(n).fill(0).map(() => []);

        for (const [a, b] of edges) {
            graph[a].push(b);
            graph[b].push(a);
        }


        const dfs = (num, prev) => {
            let result = 0;

            // console.log(graph)

            for (const child of graph[num]) {
                if (child === prev) {
                    continue;
                }

                result = Math.max(result, dfs(child, num));
            }

            return result + 1;
        };


        let results = [];

        for (let i = 0; i < n; i++) {
            results[i] = dfs(i, null);
        }

        const min = Math.min(...results);

        const indexes = [];
        for (let i = 0; i < n; i++) {
            if (results[i] === min) {
                indexes.push(i);
            }
        }

        return indexes;
    }
}
