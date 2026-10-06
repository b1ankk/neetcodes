class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights: number[][]): number[][] {

        const canReachPacific = new Array(heights.length).fill(0).map(() => new Array(heights[0].length).fill(false));
        const canReachAtlantic = new Array(heights.length).fill(0).map(() => new Array(heights[0].length).fill(false));


        const dfsSearch = (r: number, c: number, reachable: boolean[][]) => {
            if (r < 0 || r >= heights.length || c < 0 || c >= heights[0].length) {
                return;
            }

            if (reachable[r][c]) {
                return;
            }

            reachable[r][c] = true;

            const height = heights[r][c];

            if (height <= heights[r+1]?.[c]) {
                dfsSearch(r+1, c, reachable);
            }
            if (height <= heights[r-1]?.[c]) {
                dfsSearch(r-1, c, reachable);
            }
            if (height <= heights[r]?.[c+1]) {
                dfsSearch(r, c+1, reachable);
            }
            if (height <= heights[r]?.[c-1]) {
                dfsSearch(r, c-1, reachable);
            }

        }

        for (let r = 0; r < heights.length; r++) {
            dfsSearch(r, 0, canReachPacific);
            dfsSearch(r, heights[0].length - 1, canReachAtlantic);
        }

        for (let c = 0; c < heights[0].length; c++) {
            dfsSearch(0, c, canReachPacific);
            dfsSearch(heights.length - 1, c, canReachAtlantic);
        }

        const result = [];

        for (let r = 0; r < heights.length; r++) {
            for (let c = 0; c < heights[0].length; c++) {
                if (canReachPacific[r][c] && canReachAtlantic[r][c]) {
                    result.push([r, c]);
                }
            }
        }

        return result;

    }

    
    
}
