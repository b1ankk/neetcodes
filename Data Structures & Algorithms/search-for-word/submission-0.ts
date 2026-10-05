class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board: string[][], word: string): boolean {

        const visited = new Array(board.length)
            .fill(0)
            .map(() => new Array(board[0].length).fill(false));

        for (let row = 0; row < board.length; row++) {
            for (let col = 0; col < board[row].length; col++) {

                if (this.searchWord(board, row, col, word, 0, visited)) {
                    return true;
                }

            }
        }

        return false;


    }


    searchWord(board: string[][], row: number, col: number, word: string, i: number, visited: boolean[][]) {
        if (row < 0 || row >= board.length || col < 0 || col >= board[0].length) {
            return false;
        } 

        if (visited[row][col]) {
            return false;
        }

        if (board[row][col] !== word.charAt(i)) {
            return false;
        }

        if (i === word.length - 1) {
            return true;
        }

        visited[row][col] = true;

        
        // console.log(row, col, i, word.charAt(i))
        

        const result = 
            this.searchWord(board, row - 1, col, word, i + 1, visited)
            || this.searchWord(board, row + 1, col, word, i + 1, visited)
            || this.searchWord(board, row, col - 1, word, i + 1, visited)
            || this.searchWord(board, row, col + 1, word, i + 1, visited);

        visited[row][col] = false;

        return result;
    }
}
