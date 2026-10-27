class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1: number[], m: number, nums2: number[], n: number): void {

        let n1Index = m - 1;
        let n2Index = n - 1;

        let resultIndex = nums1.length - 1;

        while (resultIndex >= 0) {
            if (n1Index >= 0 && nums1[n1Index] >= nums2[n2Index]) {
                nums1[resultIndex] = nums1[n1Index];
                n1Index--;
            } else if (n2Index >= 0) {
                nums1[resultIndex] = nums2[n2Index];
                n2Index--;
            }
            // console.log(nums1)

            resultIndex--;
        }

        

    }
}
