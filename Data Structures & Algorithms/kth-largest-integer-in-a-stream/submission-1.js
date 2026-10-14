class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.k = k;

        this.heap = new PriorityQueue((a, b) => a - b, nums);

        while (this.heap.size() > k) {
            this.heap.dequeue();
        }

    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {

        this.heap.enqueue(val);
        if (this.heap.size() > this.k) {
            this.heap.dequeue();
        }

        return this.heap.front();

    }
}
