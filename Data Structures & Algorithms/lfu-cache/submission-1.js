class Node {
    constructor(value, freq, key, next = null, prev = null) {
        this.value = value;
        this.key = key;
        this.freq = freq;
        this.next = next;
        this.prev = prev;
    }
}


class LFUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.nodeByKey = new Map();
        this.capacity = capacity;
        this.tail = new Node(null, Number.MAX_SAFE_INTEGER, null);
        this.head = this.tail;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        const node = this.nodeByKey.get(key);
        if (node) {
            node.freq += 1;
            this.pushNode(node)
        }
        /// console.log(this.nodeByKey.entries().map(([key, val]) => [val.key, val.value, val.freq]).toArray());

        return node?.value ?? -1;
    }

    /**
     * @param {number} key
     * @param {number} value
     */
    put(key, value) {
        const node = this.nodeByKey.get(key);
        if (!node) {
            if (this.capacity === this.nodeByKey.size) {
                const currHead = this.head;
                const newHead = this.head.next;
                this.head = newHead;
                newHead.prev = null;
                currHead.next = null;

                this.nodeByKey.delete(currHead.key);
            }


            const newNode = new Node(value, 1, key, this.head);
            
            this.nodeByKey.set(key, newNode);
            this.head.prev = newNode;
            this.head = newNode;

            this.pushNode(newNode);

            
        } else {
            node.freq += 1;
            node.value = value;
            this.pushNode(node)
        }

        // console.log(this.nodeByKey.entries().map(([key, val]) => [val.key, val.value, val.freq]).toArray());
        // console.log(this.head);

    }

    pushNode(node) {
        while (node.freq >= node.next.freq) {
            const left = node;
            const right = node.next;
            const prev = node.prev;
            const next = right.next;

            if (prev) {
                prev.next = right;
            }
            right.prev = prev;
            right.next = left;
            left.prev = right;
            left.next = next;
            next.prev = left;

            if (left === this.head) {
                this.head = right;
            }
        }
    }
}

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
