class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {

        let left = 0; 
        let right = heights.length - 1;

        let maxWater = 0;


        while (left < right) {
            const hL = heights[left];
            const hR = heights[right];

            // console.log(left, right, hL, hR)

            const water = (right - left) * Math.min(hL, hR);
            maxWater = Math.max(maxWater, water);

       
            // if (nextL > nextR) {
            //     left++;
            // } else if (nextL < nextR) {
            //     right--;
            // } else {
            //     if (hL > hR) {
            //         right--;
            //     } else {
            //         left++;
            //     }
            // }

            if (hL > hR) {
                right--;
            } else if (hL < hR) {
                left++;
            } else {
                const nextL = heights[left + 1];
                const nextR = heights[right - 1];

                if (nextL > nextR) {
                    left++;
                } else {
                    right--;
                }
            }

        }

        return maxWater;
    }
}
