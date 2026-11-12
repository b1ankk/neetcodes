class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @param {number[][]} queries
     * @return {boolean[]}
     */
    checkIfPrerequisite(numCourses, prerequisites, queries) {

        const graph = new Map();
        const cache = new Array(numCourses).fill(null).map(() => new Map());
        

        for (const [first, later] of prerequisites) {
            const arr = graph.get(first) ?? [];
            arr.push(later);
            graph.set(first, arr);
        }


        const isPrereq = (child, c) => {
            const cached = cache[child].get(c);
            if (cached != null) {
                return cached;
            }
                
            if (child === c) {
                cache[child].set(c, true);
                return true;
            }

            for (const next of graph.get(child) ?? []) {
                if (isPrereq(next, c)) {
                    return true;
                }
            }

            cache[child].set(c, false);

            return false;
        }

        const results = [];

        for (const [first, later] of queries) {
            results.push(isPrereq(first, later));
        }

        return results;

    }
}
