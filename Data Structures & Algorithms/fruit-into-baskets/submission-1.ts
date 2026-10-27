class Solution {
    /**
     * @param {number[]} fruits
     * @return {number}
     */
    totalFruit(fruits: number[]): number {
        const map = new Map();

        let left = 0;

        let maxFruits = 0;

        for (let right = 0; right < fruits.length; right++) {

            const currFruit = fruits[right];

            if (map.has(currFruit)) {
                map.set(currFruit, map.get(currFruit) + 1);
            } else {
                
                while (map.size > 1) {
                    const fruitToRemove = fruits[left];
                    const count = map.get(fruitToRemove);
                    if (count <= 1) {
                        map.delete(fruitToRemove);
                    } else {
                        map.set(fruitToRemove, count - 1);
                    }
                    left++;
                }

                map.set(currFruit, 1);
            }

            const allFruits = [...map.values()].reduce((a, b) => a + b, 0);
            maxFruits = Math.max(maxFruits, allFruits);


        }

        return maxFruits;


    }
}
