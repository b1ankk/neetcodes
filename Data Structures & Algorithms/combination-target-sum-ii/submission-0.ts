class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates: number[], target: number): number[][] {

        candidates.sort((a,b) => a - b);
        const results: number[][] = [];

        const recurse = (right: number, target: number, result: number[]) => {
            if (right < 0) {
                return;
            }

            const num = candidates[right];
            // console.log('1. ', right, target, num, result, results)

            if (num === target) {
                results.push([...result, num]);
            }

            if (num < target) {
                result.push(num);
                recurse(right-1, target - num, result);
                result.pop();
            }

            let duplicateOffset = 0;
            while (right-1-duplicateOffset >= 0 && num === candidates[right-1-duplicateOffset]) {
                duplicateOffset++;
            }
            // console.log('2. ', right, target, num, result, results)

            recurse(right-1-duplicateOffset, target, result);
        };

        recurse(candidates.length - 1, target, []);

        return results;

    }
}
