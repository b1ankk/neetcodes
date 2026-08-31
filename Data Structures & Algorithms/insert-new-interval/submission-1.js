class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {

        const result = [];

        for (let i = 0; i < intervals.length; i++) {
            const interval = intervals[i];

            if (newInterval[1] < interval[0]) {
                result.push(newInterval, ...intervals.slice(i))
                return result;
            }
            if (interval[1] < newInterval[0]) {
                result.push(interval);
            } else {
                newInterval = [
                    Math.min(interval[0], newInterval[0]),
                    Math.max(interval[1], newInterval[1])
                ];
            }
            
            
        }

        result.push(newInterval);

        return result;
    }
}
