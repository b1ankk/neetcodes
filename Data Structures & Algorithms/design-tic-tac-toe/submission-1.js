const Move = {
    D: 'D',
    H: 'H',
    V: 'V',
}


const key = (move, idx) => {
    return `${move}_${idx}`;
}

class TicTacToe {


    /**
     * @param {number} n
     */
    constructor(n) {
        this.target = n;
        this.moves = new Map();

        for (let i = 0; i < n; i++) {
            this.moves.set(key(Move.H, i), 0);
            this.moves.set(key(Move.V, i), 0);
        }
        this.moves.set(key(Move.D, 0), 0);
        this.moves.set(key(Move.D, 1), 0);

    }

    addMove(move, idx, playerValue) {
        const oldScore = this.moves.get(key(move, idx));
        const newScore = oldScore + playerValue;

        if (Math.abs(newScore) === this.target)
            return playerValue;
        
        this.moves.set(key(move, idx), newScore);
        return 0;
    }

    /**
     * @param {number} row
     * @param {number} col
     * @param {number} player
     * @return {number}
     */
    move(row, col, player) {
        const playerValue = player === 1 ? -1 : 1;

        if (this.addMove(Move.H, row, playerValue))
            return player;
        if (this.addMove(Move.V, col, playerValue))
            return player;

        if (row === col && this.addMove(Move.D, 0, playerValue)) {
            return player;
        }
        // 0,2  1,1  2,0
        if ((this.target - 1 === col + row) && this.addMove(Move.D, 1, playerValue)) {
            return player;
        }
        // console.log(this.moves)

        return 0;
    }
}

/**
 * Your TicTacToe object will be instantiated and called as such:
 * var obj = new TicTacToe(n)
 * var param_1 = obj.move(row, col, player)
 */
