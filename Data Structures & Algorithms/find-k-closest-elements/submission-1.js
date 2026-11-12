class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} x
     * @return {number[]}
     */
    findClosestElements(arr, k, x) {
        

        let left = 0;
        let right = arr.length - 1;

        while (left < right) {
            const mid = Math.floor((right + left) / 2);

            if (x <= arr[mid]) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }

        // console.log(left, right)

        left = left - 1;
        right = left + 1;

        while (right - left - 1 < k) {
            if (left >= 0 && right < arr.length) {
                if (Math.abs(x - arr[left]) <= Math.abs(x - arr[right])) {
                    left--;
                } else {
                    right++;
                }
            } else {
                if (left < 0) {
                    right++
                } else if (right >= arr.length) {
                    left--;
                }
            }
        }


        
        return arr.slice(left + 1, right);

    }
}
