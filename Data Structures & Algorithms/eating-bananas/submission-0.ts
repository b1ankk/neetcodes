class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number): number {

        const tryEat = (k: number) => {

            let pilePointer = 0;
            let hoursPassed = 0;
            for (; pilePointer < piles.length && hoursPassed <= h; pilePointer++) {
                hoursPassed += Math.ceil(piles[pilePointer] / k);
            }
 
            return hoursPassed <= h && pilePointer === piles.length;
        }
        
        
        const maxPile = Math.max(...piles);



        let left = 1;
        let right = maxPile;

        while (left < right) {
            const mid = Math.floor((left + right) / 2);

            const couldEat = tryEat(mid);

            if (couldEat) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }

        return right;

    }
}
