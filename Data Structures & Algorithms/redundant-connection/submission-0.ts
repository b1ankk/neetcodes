class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges: number[][]): number[] {

        const parents = new Array(edges.length + 1).fill(0).map((_, i) => i);
        const ranks = new Array(edges.length + 1).fill(1);


        const findParent = (n: number) => {
            let nParent = parents[n];
            if (nParent === n) {
                return nParent;
            }
            
            const lastParent = findParent(nParent);
            parents[n] = lastParent;
            return lastParent;

        }


        let lastCycle = null;

        for (const [n1, n2] of edges) {
            const n1Parent = findParent(n1);
            const n2Parent = findParent(n2);
            // console.log(n1Parent, n2Parent)

            if (n1Parent === n2Parent) {
                lastCycle = [n1, n2];
                continue;
            }
            
            const n1PRank = ranks[n1Parent];
            const n2PRank = ranks[n2Parent];
            // console.log(n1PRank, n2PRank)

            if (n1PRank > n2PRank) {
                parents[n2Parent] = n1Parent;
                ranks[n1Parent] += n2PRank;
            } else {
                parents[n1Parent] = n2Parent;
                ranks[n2Parent] += n1PRank;
            }


        }


        return lastCycle;
    }
}
