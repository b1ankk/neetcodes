class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {

        const heap = new PriorityQueue((a, b) => {
            return (a[0]** 2 + a[1] ** 2) - (b[0]** 2 + b[1] ** 2)
        }, points);

        console.log(heap.toArray())

        const result = [];
        while (k-- > 0) {
            result.push(heap.dequeue());
        }
        return result;
    }
}
