class Solution {
    dfsFloodFill(image, r, c, startColor, color) {
        if (r < 0 || r >= image.length || c < 0 || c >= image[r].length) {
            return;
        }

        if (image[r][c] !== startColor) {
            return;
        }

        image[r][c] = color;

        this.dfsFloodFill(image, r - 1, c, startColor, color);
        this.dfsFloodFill(image, r + 1, c, startColor, color);
        this.dfsFloodFill(image, r, c - 1, startColor, color);
        this.dfsFloodFill(image, r, c + 1, startColor, color);


    }

    /**
     * @param {number[][]} image
     * @param {number} r
     * @param {number} c
     * @param {number} color
     * @return {number[][]}
     */
    floodFill(image, r, c, color) {
        const startColor = image[r][c];
        
        if (startColor === color) {
            return image;
        }

        this.dfsFloodFill(image, r, c, startColor, color);



        return image;
    }
}
