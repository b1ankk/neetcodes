class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n: number, edges: number[][]): boolean {
        if (n === 1) {
            return true;
        }

        const graphMap = new Map<number, number[]>(); 

        for (const edge of edges) {
            const arr = graphMap.get(edge[0]) ?? [];
            arr.push(edge[1]);
            graphMap.set(edge[0], arr);

            const arr2 = graphMap.get(edge[1]) ?? [];
            arr2.push(edge[0]);
            graphMap.set(edge[1], arr2);
        }


        const visited = new Set<number>();

        const dfs = (n: number, prev: number | null) => {

            const neighbors = graphMap.get(n);

            if (visited.has(n)) {
                return false;
            }
            visited.add(n);

            let result = true;

            for (let neighbor of neighbors) {
                if (neighbor === prev) {
                    continue;
                }

                result &&= dfs(neighbor, n);
            }

            return result;
        }

        const isTree = dfs(0, null);

        return visited.size === graphMap.size && isTree;

    }


}
