'use strict';

export default class TicTacToeGame {
  private row: number;
  private column: number;
  constructor(row: number, column: number) {
    this.row = row;
    this.column = column;
  }

  getWinner() {
    return 'X';
  }
}