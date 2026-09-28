class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.map = new Map();
        this.capacity = capacity;

    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        const value = this.map.get(key);
        if (value == null) {
            return -1;
        }

        this.map.delete(key);
        this.map.set(key, value);

        return value;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        this.map.delete(key);
        this.map.set(key, value);

        if (this.capacity < this.map.size) {
            const firstKey = this.map.keys().next().value;
            this.map.delete(firstKey);
        } 
    }
}
