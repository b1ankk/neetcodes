class Solution {
    /**
     * @param {number} n
     * @param {number[][]} relations
     * @return {number}
     */
    minimumSemesters(n: number, relations: number[][]): number {

        // build an adjacency list
        // store a map for every course and how many requirements it has, remove elements at 0



        const prevToNext = new Map<number, number[]>();
        const nextToPrevsNeeded = new Map<number, number>();

        for (const [prev, next] of relations) { // T = O(E); S = O(E)
            const nexts = prevToNext.get(prev) ?? [];
            nexts.push(next);
            prevToNext.set(prev, nexts);

            const needed = nextToPrevsNeeded.get(next) ?? 0;
            nextToPrevsNeeded.set(next, needed + 1);
        }


        const queue = [];

        for (let i = 1; i <= n; i++) { // T = O(N); S = O(N)
            if (!nextToPrevsNeeded.has(i)) {
                queue.push(i);
            }
        }


        let semesters = 0;

        while (queue.length > 0) { 
            const queueLength = queue.length;
            semesters++;

            // console.log(queue)

            for (let i = 0; i < queueLength; i++) {
                const prev = queue.shift();

                const nexts = prevToNext.get(prev) ?? [];
                // console.log('nexts', nexts)

                for (const next of nexts) {
                    const needed = nextToPrevsNeeded.get(next);

                    if (needed == null) {
                        return -1;
                    }

                    const newNeeded = needed - 1;
                    if (newNeeded === 0) {
                        nextToPrevsNeeded.delete(next);
                        queue.push(next);
                    } else {
                        nextToPrevsNeeded.set(next, newNeeded);
                    }
                }
            }
        }

        return nextToPrevsNeeded.size === 0 ? semesters : -1;


    }
}
