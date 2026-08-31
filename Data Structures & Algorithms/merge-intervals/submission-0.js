class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {

        intervals.sort((a, b) => a[0] - b[0]);

        const result = [];
        let prevInterval = intervals[0];

        for (let i = 1; i < intervals.length; i++) {
            const currInterval = intervals[i];

            if (prevInterval[1] < currInterval[0]) {
                // no overlap
                result.push(prevInterval);
                prevInterval = currInterval;
            } else {
                prevInterval = [
                    Math.min(prevInterval[0], currInterval[0]),
                    Math.max(prevInterval[1], currInterval[1])
                ];
            }
        
        }

        result.push(prevInterval);

        return result;

    }
}
