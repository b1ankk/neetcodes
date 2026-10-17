class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {


        const encountered = new Set<string>();

        for (let row = 0; row < board.length; row++) {
            for (let col = 0; col < board[0].length; col++) {
                const val = board[row][col];

                if (val !== '.') {
                    if (encountered.has(val)) 
                        return false;
                    else 
                        encountered.add(val);
                }

            }

            encountered.clear();
        }

        for (let col = 0; col < board[0].length; col++) {
            for (let row = 0; row < board.length; row++) {
                const val = board[row][col];

                if (val !== '.') {
                    if (encountered.has(val)) 
                        return false;
                    else 
                        encountered.add(val);
                }
            }

            encountered.clear();
        }

        for (let row = 0; row < board.length; row += 3) {
            for (let col = 0; col < board[0].length; col += 3) {
                for (let row1 = row; row1 < row + 3; row1++) {
                    for (let col1 = col; col1 < col + 3; col1++) {
                
                        const val = board[row1][col1];

                        if (val !== '.') {
                            if (encountered.has(val)) 
                                return false;
                            else 
                                encountered.add(val);
                        }
                    }
                }
    
                encountered.clear();
            }
        }

        return true;
    }
}
