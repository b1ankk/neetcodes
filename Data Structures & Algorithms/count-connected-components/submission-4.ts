class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n: number, edges: number[][]): number {

        let sets = n;


        const parents = new Array(n).fill(1).map((_, i) => i);
        const ranks = new Array(n).fill(1);


        const findParent = (n: number) => {
            const parent = parents[n];

            if (parent === n) {
                return parent;
            }

            const lastParent = findParent(parent);
            parents[n] = lastParent;
            return lastParent;
        }


        for (const [n1, n2] of edges) {
            const n1Parent = findParent(n1);
            const n2Parent = findParent(n2);

            if (n1Parent === n2Parent) {
                continue;
            }

            sets--;

            const n1ParentRank = ranks[n1Parent];
            const n2ParentRank = ranks[n2Parent];

            if (n1ParentRank > n2ParentRank) {
                parents[n2Parent] = n1Parent;
                ranks[n1Parent] += n2ParentRank;
            } else {
                parents[n1Parent] = n2Parent;
                ranks[n2Parent] += n1ParentRank;
            }

        }

        return sets;

    }
}
