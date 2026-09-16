// 1. Count the numbers (hash map) + iterate over hashMap k times = O(n) + O(n * k)
// 2. Count the numbers (hash map) + sort entries = O(n) + O(nlogn)
// 3. Count the numbers (hash map) + build a heap + pop from queue = O(n) + O(n) + O(k * logn)



class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        const numToFreq = new Map();

        for (const num of nums) {
            const freq = numToFreq.get(num) ?? 0;
            numToFreq.set(num, freq + 1);
        }
        
        const freqBuckets = Array.from({length: nums.length + 1}, () => []);
        // console.log(freqBuckets)
        numToFreq.forEach((freq, num) => {
            freqBuckets[freq].push(num);
        });

        const result = [];
        // console.log(freqBuckets)

        for (let i = freqBuckets.length - 1; i >= 0; i--) {
            const bucket = freqBuckets[i];
            // console.log(bucket)
            for (let j = 0; j < bucket.length; j++) {
                result.push(bucket[j]);
                k--;
                if (k === 0) {
                    return result;
                }
            }
        }

        return result;
    }
}
