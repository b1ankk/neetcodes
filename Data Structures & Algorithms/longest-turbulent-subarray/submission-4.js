class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */
    maxTurbulenceSize(arr) {
        let left = 0;

        let maxSize = 1;


        let lastSign = 0;
        
        for (let right = 1; right < arr.length; right++) {
            const currentSign = Math.sign(arr[right - 1] - arr[right]);
            if (currentSign === 0) {
                left = right;
            } else if (lastSign === currentSign) {
                left = right -1;
            }

            maxSize = Math.max(maxSize, right - left + 1);
            lastSign = currentSign;
            
            // console.log(left, right, maxSize)

        }


        return maxSize;
    }
}
