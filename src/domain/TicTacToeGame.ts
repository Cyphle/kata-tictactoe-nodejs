'use strict';

import PlayedSquare from './PlayedSquare';

export default class TicTacToeGame {
  private board: any;
  private rowNumber: number;
  private columnNumber: number;

  constructor(rowNumber: number, columnNumber: number) {
    this.rowNumber = rowNumber;
    this.columnNumber = columnNumber;
    this.board = new Array();
  }

  getWinner() {
    if (this.board.length > 0)
      return this.findWinner();
    return 'X';
  }

  play(player: string, square: { row: number; column: number }) {
    this.board.push(new PlayedSquare(player, square));
  }

  private findWinner() {
    if (this.isColumnWinner('X'))
      return 'X';
    else if (this.isColumnWinner('O'))
      return 'O';
    else
      return 'Draw';
  }

  private isColumnWinner(player: string) {
    let playedByX = this.board.filter(playedSquare => playedSquare.getPlayer() === player);
    for (let i = 0; i < this.columnNumber; ++i) {
      if (playedByX.filter(played => played.getColumn() == i).length == this.rowNumber) return true;
    }
    return false;
  }
}