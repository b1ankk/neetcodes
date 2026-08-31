class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        const courseToBlockedCourses = new Map();
        const courseDependenciesCounts = new Array(numCourses).fill(0);

        for (let i = 0; i < numCourses; i++) {
            courseToBlockedCourses.set(i, []);
        }
        for (const [course, preq] of prerequisites) {
            courseToBlockedCourses.get(preq).push(course);
            courseDependenciesCounts[course]++;
        }


        const noPreqCourseQueue = [];
        for (let i = 0; i < numCourses; i++) {
            if (courseDependenciesCounts[i] === 0) {
                noPreqCourseQueue.push(i);
            }
        }


        let unblockedCoursesCount = 0;
        const result = [];

        while (noPreqCourseQueue.length > 0) {
            const course = noPreqCourseQueue.shift();

            result.push(course);
            unblockedCoursesCount++;

            for (const blockedCourse of courseToBlockedCourses.get(course)) {
                courseDependenciesCounts[blockedCourse]--;
                if (courseDependenciesCounts[blockedCourse] === 0) {
                    noPreqCourseQueue.push(blockedCourse);
                }
            }
        }

        if (unblockedCoursesCount === numCourses) {
            return result;
        }

        return [];
    }
}
