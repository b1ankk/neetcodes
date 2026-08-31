/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {

        intervals.sort((a, b) => a.start - b.start);

        
        let prevInterval = intervals[0];

        for (let i = 1; i < intervals.length; i++) {
            const currInterval = intervals[i];
            if (prevInterval.end > currInterval.start) {
                return false;
            }

            prevInterval = currInterval;
        }


        return true;
    }
}
