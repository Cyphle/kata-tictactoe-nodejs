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
    if (this.isColumnWinner('X') || this.isRowWinner('X') || this.isDiagonalWinner('X'))
      return 'X';
    else if (this.isColumnWinner('O') || this.isRowWinner('O') || this.isDiagonalWinner('O'))
      return 'O';
    else
      return 'Draw';
  }

  private isColumnWinner(player: string) {
    let playedByPlayer = this.board.filter(playedSquare => playedSquare.getPlayer() === player);
    for (let i = 0; i < this.columnNumber; ++i) {
      if (playedByPlayer.filter(played => played.getColumn() === i).length === this.rowNumber) return true;
    }
    return false;
  }

  private isRowWinner(player: string) {
    let playedByPlayer = this.board.filter(playedSquare => playedSquare.getPlayer() === player);
    for (let i = 0; i < this.rowNumber; ++i) {
      if (playedByPlayer.filter(played => played.getRow() === i).length === this.columnNumber) return true;
    }
    return false;
  }

  private isDiagonalWinner(player: string) {
    if (this.rowNumber === this.columnNumber) {
      let playedByPlayer = this.board.filter(playedSquare => playedSquare.getPlayer() === player);

      let leftDiagonal = [];
      let rightDiagonal = [];
      for (let i = 0; i < this.rowNumber; ++i) {
        leftDiagonal.push(playedByPlayer.filter(played => played.getRow() === i && played.getColumn() === i));
        rightDiagonal.push(playedByPlayer.filter(played => played.getRow() === this.rowNumber - 1 - i && played.getColumn() === i));
      }

      return leftDiagonal.length === this.columnNumber || rightDiagonal.length === this.columnNumber;

    }
    return false;
  }
}