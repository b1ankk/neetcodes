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
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        const intervalsCount = intervals.length;
        const starts = intervals.map(i => i.start).sort((a, b) => a - b)
        const ends = intervals.map(i => i.end).sort((a, b) => a - b)

        // console.log(starts)
        // console.log(ends)

        let iStart = 0;
        let iEnd = 0;

        let roomsUsed = 0;
        let roomsMax = 0;


        while (iStart < intervalsCount && iEnd < intervalsCount) {
            if (starts[iStart] < ends[iEnd]) {
                iStart++;
                roomsUsed++;
            } else if (starts[iStart] > ends[iEnd]) {
                iEnd++;
                roomsUsed--;
            } else if (starts[iStart] === ends[iEnd]) {
                iStart++;
                iEnd++;
            }
            roomsMax = Math.max(roomsMax, roomsUsed)
        }

        return roomsMax;
    }
}
