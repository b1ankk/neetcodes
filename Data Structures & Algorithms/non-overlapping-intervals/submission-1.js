class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {

        intervals.sort((a, b) => a[0] - b[0]);


        let removalCount = 0;

        let prevEnd = intervals[0][1];

        for (let i = 1; i < intervals.length; i++) {
            let currInterval = intervals[i];

            if (prevEnd > currInterval[0] ) {
                // overlap
                removalCount++;
                prevEnd = Math.min(prevEnd, currInterval[1]);

            } else {
                prevEnd = currInterval[1];
            }
        }

        
        return removalCount;
    }
}
