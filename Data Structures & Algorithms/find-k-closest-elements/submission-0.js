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


        while (right - left + 1 > k && right >= left) {
            if (Math.abs(x - arr[left]) > Math.abs(x - arr[right])) {
                left++;
            } else {
                right--;
            }
        }

        return arr.slice(left, right + 1);

    }
}
