class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {

        const heap = new PriorityQueue((a, b) => b - a, stones);

        while (heap.size() > 1) {

            const s1 = heap.dequeue();
            const s2 = heap.dequeue();

            if (s1 === s2) {
                continue;
            }

            const newStone = Math.abs(s1 - s2);

            heap.enqueue(newStone);


        }

        return heap.dequeue() ?? 0;

    }
}
