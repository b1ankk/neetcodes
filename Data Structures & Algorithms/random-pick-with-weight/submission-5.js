class Solution {
    /**
     * @param {number[]} w
     */
    constructor(w) {
        this.probabilities = [];
        const probabilities = this.probabilities;

        let sum = 0;
        w.forEach((weight, i) => {
            sum += weight;
            probabilities.push(sum);
        });
        this.sum = sum;

        // console.log(probabilities)
    }

    /**
     * @return {number}
     */
    pickIndex() {
        const p = Math.floor(Math.random() * this.sum + 1);

        const getIndexFromProbability = () => {
            
            let left = 0;
            let right = this.probabilities.length - 1;

            while (left < right) {
                const mid = Math.floor((right + left) / 2);

                if (this.probabilities[mid] < p) {
                    left = mid + 1;
                } else {
                    right = mid;
                }
            }

            return left;
        };

        return getIndexFromProbability();
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
