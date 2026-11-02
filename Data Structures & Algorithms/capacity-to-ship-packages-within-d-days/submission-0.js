class Solution {
    /**
     * @param {number[]} weights
     * @param {number} days
     * @return {number}
     */
    shipWithinDays(weights, days) {

        let left = Math.max(...weights); 
        let right = weights.reduce((a, b) => a + b, 0);

        let result = Number.MAX_SAFE_INTEGER;

        while (left <= right) {

            const mid = Math.floor((right + left) / 2);

            let daysUsed = 1;
            let wSum = 0;

            for (let i = 0; i < weights.length; i++) {
                wSum += weights[i];
                if (wSum > mid) {
                    wSum = weights[i];
                    daysUsed++;
                }
            }

            if (daysUsed <= days) {
                result = mid;
                right = mid - 1;
            } else {
                left = mid + 1;
            }


        }

        return result;


    }
}
