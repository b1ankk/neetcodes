// avg = (n_1 + n_2 + ... n_i) / i

class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} threshold
     * @return {number}
     */
    numOfSubarrays(arr, k, threshold) {

        let left = 0;
        let right = 0;

        let sum = 0;
        let result = 0;
        
        while (right < arr.length) {

            while (right - left < k) {
                sum += arr[right] 
                right++;
            }

            const avg = sum / k;

            // console.log(sum)
            // console.log(avg)
            // console.log('---')

            if (avg >= threshold) {
                result++;
            }

            sum -= arr[left];
            left++;

        }
 
        return result;
    }
}
