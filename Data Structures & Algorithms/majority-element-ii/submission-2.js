class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {

        let n1 = nums[0];
        let n2 = nums[0];

        let n1Count = 0;
        let n2Count = 0;

        for (let i = 0; i < nums.length; i++) {
            console.log(n1, n1Count, n2, n2Count)

            if (nums[i] === n1) {
                n1Count++;
            } else if (nums[i] === n2) {
                n2Count++;
            } else {
                if (n1Count <= 0) {
                    n1 = nums[i];
                    n1Count = 1;
                }
                else if (n2Count <= 0) {
                    n2 = nums[i];
                    n2Count = 1;
                } 
                else {
                    n1Count--;
                    n2Count--;    
                }
            }
        }

        let realN1Count = 0;
        let realN2Count = 0;

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === n1) {
                realN1Count++;
            } else if (nums[i] === n2) {
                realN2Count++;
            }
        }

        const result = [];
        if (realN1Count > nums.length / 3) {
            result.push(n1);
        }
        if (realN2Count > nums.length / 3 && n1 !== n2) {
            result.push(n2);
        }
        return result;

    }
}
