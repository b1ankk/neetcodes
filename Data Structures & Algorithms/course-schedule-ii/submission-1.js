class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        const courseToPreq = new Map();
        for (let i = 0; i < numCourses; i++) {
            courseToPreq.set(i, []);
        }
        for (const [course, preq] of prerequisites) {
            courseToPreq.get(course).push(preq);
        }

        const visited = new Set();

        const topology = [];

        for (const [course] of courseToPreq) {

            if (!visited.has(course)) {
                const hasCycle = this.hasCycleTopological(course, courseToPreq, visited, new Set(), topology);
                if (hasCycle) {
                    return [];
                }
            }

        }

        return topology;

    }

    hasCycleTopological(course, courseToPreq, visited, route, topology) {
        if (route.has(course)) {
            return true;
        }

        if (visited.has(course)) {
            return false;
        }

        visited.add(course);
        route.add(course);

        for (const prereq of courseToPreq.get(course)) {
            const hasCycle = this.hasCycleTopological(prereq, courseToPreq, visited, route, topology)
            if (hasCycle) {
                return true;
            }
        }

        topology.push(course);
        route.delete(course);

        return false;
    }
}
