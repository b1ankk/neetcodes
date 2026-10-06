class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights: number[][]): number[][] {

        const canReachPacific = new Array(heights.length).fill(0).map(() => new Array(heights[0].length).fill(false));
        const canReachAtlantic = new Array(heights.length).fill(0).map(() => new Array(heights[0].length).fill(false));


        const dfsSearch = (r: number, c: number, reachable: boolean[][], prevHeight: number) => {
            if (r < 0 || r >= heights.length || c < 0 || c >= heights[0].length) {
                return;
            }

            if (prevHeight > heights[r][c]) {
                return;
            }

            if (reachable[r][c]) {
                return;
            }

            reachable[r][c] = true;

            const height = heights[r][c];


            dfsSearch(r+1, c, reachable, height);
            dfsSearch(r-1, c, reachable, height);
            dfsSearch(r, c+1, reachable, height);
            dfsSearch(r, c-1, reachable, height);
        

        }

        for (let r = 0; r < heights.length; r++) {
            dfsSearch(r, 0, canReachPacific, 0);
            dfsSearch(r, heights[0].length - 1, canReachAtlantic, 0);
        }

        for (let c = 0; c < heights[0].length; c++) {
            dfsSearch(0, c, canReachPacific, 0);
            dfsSearch(heights.length - 1, c, canReachAtlantic, 0);
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
