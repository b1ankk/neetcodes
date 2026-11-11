class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {

        people.sort((a, b) => a - b);

        let left = 0;
        let right = people.length - 1;

        let boats = 0;

        while (left <= right) {
            if (left !== right && people[left] + people[right] <= limit) {
                left++;
                right--;
            } else {
                right--;
            }
            boats++;

        }

        return boats;

    }
}
