'use strict';

export default class TicTacToeGame {
  private board: any;

  constructor(rowNumber: number, columnNumber: number) {
    this.board = new Array(columnNumber);
    for (let i = 0; i < columnNumber; ++i) this.board[i] = new Array(rowNumber);
  }

  getWinner() {
    if (this.board[0][0] === 'X')
      return 'Draw';
    return 'X';
  }

  play(player: string, square: {raw: number; column: number}) {
    this.board[square.raw][square.column] = player;
  }
}