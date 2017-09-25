'use strict';

import PlayedSquare from './PlayedSquare';

export default class TicTacToeGame {
  private board: any;
  private rowNumber: number;
  private columnNumber: number;

  constructor(rowNumber: number, columnNumber: number) {
    this.rowNumber = rowNumber;
    this.columnNumber = columnNumber;
    this.board = [];
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
    let b = this.isRowWinner('X');
    // console.log(b);
    let b2 = this.isColumnWinner('X');
    // console.log(b2);
    if (b2 || b)
      return 'X';
    else if (this.isColumnWinner('O') || this.isRowWinner('O'))
      return 'O';
    else
      return 'Draw';
  }

  private isColumnWinner(player: string) {
    let playedByPlayer = this.board.filter(playedSquare => playedSquare.getPlayer() === player);
    for (let i = 0; i < this.columnNumber; ++i) {
      if (playedByPlayer.filter(played => played.getColumn() == i).length == this.rowNumber) return true;
    }
    return false;
  }

  private isRowWinner(player: string) {
    let playedByPlayer = this.board.filter(playedSquare => playedSquare.getPlayer() === player);
    for (let i = 0; i < this.rowNumber; ++i) {
      let filter = playedByPlayer.filter(played => played.getRow() == i);
      if (filter.length == this.columnNumber) return true;
    }
    return false;
  }
}