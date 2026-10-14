class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.k = k;

        this.heap = new PriorityQueue((a, b) => b - a, nums);



    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {

        this.heap.enqueue(val);

        return this.heap.toArray()[this.k - 1];

    }
}
