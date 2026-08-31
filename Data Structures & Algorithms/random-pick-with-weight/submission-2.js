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
        })
        this.sum = sum;

        // console.log(probabilities)

    }

    /**
     * @return {number}
     */
    pickIndex() {
        const p = Math.floor(Math.random() * this.sum + 1);

        return this.probabilities.findIndex((sum) => sum >= p);
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
