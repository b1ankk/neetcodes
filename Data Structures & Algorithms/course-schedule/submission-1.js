class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const courseToPre = new Map();

        for (let i = 0; i < numCourses; i++) {
            courseToPre.set(i, []);
        }
        for (const [course, pre] of prerequisites) {
            courseToPre.get(course).push(pre);
        }

        const visited = new Set();

        for (const [course] of courseToPre) {
            if (!visited.has(course)) {
                const hasCycle = this.topoligicalCycleCheck(course, courseToPre, visited, new Set())
                if (hasCycle) {
                    return false;
                }
            }

        }

        return true;
    }


    topoligicalCycleCheck(course, courseToPre, visited, route) {
        if (route.has(course)) {
            return true;
        }

        if (visited.has(course)) {
            return false;
        }

        visited.add(course);
        route.add(course);

        const prereqs = courseToPre.get(course);
        
        for (const prereq of prereqs) {
            const hasCycle = this.topoligicalCycleCheck(prereq, courseToPre, visited, route);
            if (hasCycle)
                return true;
        }

        route.delete(course);

        return false;
    }

}
