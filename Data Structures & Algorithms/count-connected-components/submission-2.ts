class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n: number, edges: number[][]): number {

        const graphMap = new Map<number, number[]>();

        for (const [a, b] of edges) {

            const aArray = graphMap.get(a) ?? [];
            aArray.push(b);
            graphMap.set(a, aArray);

            const bArray = graphMap.get(b) ?? [];
            bArray.push(a);
            graphMap.set(b, bArray);

        }
        console.log(graphMap)


        const visited = new Set<number>();
        let count = 0;


        const dfs = (i: number) => {
            if (visited.has(i)) {
                return;
            }

            visited.add(i);

            const neighbors = graphMap.get(i) ?? [];
            for (const neighbor of neighbors) {
                dfs(neighbor);
            }

        }


        for (let i = 0; i < n; i++) {
            if (!visited.has(i)) {
                count++;
                // console.log('dfs', i, visited)
                dfs(i);
            }

        }

        return count;
    }




}
