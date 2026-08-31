class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */
    maxTurbulenceSize(arr) {
        if (arr.length === 1) {
            return 1;
        }
        if (arr.length === 2) {
            return ((arr[0] - arr[1]) !== 0) ? 2 : 1;
        }


        let left = 0;

        let maxSize = 1;


        let lastSign = 0;

        // if (lastSign === 0) {
        //     left++;
        // }
        
        for (let right = 1; right < arr.length; right++) {
            const currentSign = arr[right - 1] - arr[right];
            if (currentSign === 0) {
                left = right;
            } else if (Math.sign(lastSign) === Math.sign(currentSign)) {
                left = right -1;
            }

            maxSize = Math.max(maxSize, right - left + 1);
            lastSign = currentSign;
            
            console.log(left, right, maxSize)

        }


        return maxSize;
    }
}
