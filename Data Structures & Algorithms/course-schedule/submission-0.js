class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {

        const courseToPrerequisites = new Map();

        for (let i = 0; i < numCourses; i++) {
            courseToPrerequisites.set(i, []);
        }

        for (const [course, prerequisite] of prerequisites) {
            let coursePrerequisites = courseToPrerequisites.get(course);
            coursePrerequisites.push(prerequisite);
        }

        const encounteredNodes = new Set();

        
        for (let i = 0; i < numCourses; i++) {
            if (this.dfsHasCycle(i, courseToPrerequisites, encounteredNodes))
                return false;

        }


        return true;
    }

    dfsHasCycle(course, courseToPrerequisites, encounteredNodes) {
        if (encounteredNodes.has(course)) {
            return true;
        }

        const prerequisites = courseToPrerequisites.get(course);

        if (prerequisites.length === 0) {
            return false;
        }

        encounteredNodes.add(course);

        for (const prerequisite of prerequisites) {
            if (this.dfsHasCycle(prerequisite, courseToPrerequisites, encounteredNodes))
                return true;
        }

        courseToPrerequisites.set(course, []);

        encounteredNodes.delete(course);

        return false;

    }
}
