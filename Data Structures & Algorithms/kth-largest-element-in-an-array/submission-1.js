class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {


        const heap = new PriorityQueue((a, b) => a - b);

        for (const num of nums) {
            heap.enqueue(num);
            // console.log(heap.toArray())

            if (heap.size() > k) {
                heap.dequeue();
            }
        }

        return heap.front();

    }
}
