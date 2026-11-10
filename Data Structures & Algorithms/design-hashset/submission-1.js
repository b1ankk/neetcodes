class MyHashSet {
    constructor() {
        this.arr = new Array(8).fill(null);
        this.size = 0;
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        if (this.size >= this.arr.length * 0.666) {
            this.resize();
        }

        let hash = key % this.arr.length;
    
        for (let i = 0; i < this.arr.length; i++) {
            const index = (hash + i) % this.arr.length;
            if (this.arr[index] === key) {
                return;
            }
            if (this.arr[index] === null) {
                this.arr[index] = key;
                this.size++;
                return;
            }
        }

        // console.error(this.arr);
        
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        let hash = key % this.arr.length;
    
        for (let i = 0; i < this.arr.length; i++) {
            const index = (hash + i) % this.arr.length;
            if (this.arr[index] === key) {
                this.arr[index] = null;
                this.size--;
                return;
            }
            // if (this.arr[index] === null) {
            //     return;
            // }
        }
        
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        let hash = key % this.arr.length;
    
        for (let i = 0; i < this.arr.length; i++) {
            const index = (hash + i) % this.arr.length;
            if (this.arr[index] === key) {
                return true;
            }
            // if (this.arr[index] === null) {
            //     return false;
            // }
        }

        return false;
    }

    resize() {
        const oldArr = this.arr;
        this.arr = new Array(this.arr.length * 2).fill(null);
        this.size = 0;

        oldArr.forEach((num) => {
            if (num !== null) {
                this.add(num);
            }
        })

    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
