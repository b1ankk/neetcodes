class TimeMap {
    private map = new Map<string, [string, number][]>();

    constructor() {
        
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key: string, value: string, timestamp: number): void {
        const arr = this.map.get(key) ?? [];
        arr.push([value, timestamp]);
        this.map.set(key, arr);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key: string, timestamp: number): string {
        const arr = this.map.get(key);
        if (!arr || arr.length === 0) {
            return "";
        }

        let left = 0;
        let right = arr.length - 1;
        
        let result = '';

        while (left <= right) {

            let mid = left + Math.floor((right - left) / 2);
            const mt = arr[mid][1];

            if (mt === timestamp) {
                return arr[mid][0];
            }

            if (timestamp > mt) {
                left = mid + 1;
                result = arr[mid][0];
            } else {
                right = mid - 1;
            }
        }

 

        return result;
    }
}
