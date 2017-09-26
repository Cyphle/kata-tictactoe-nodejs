'use strict';

import Move from './Move';

export default class TicTacToeGame {
  private rowNumber: number;
  private columnNumber: number;
  private moves: Move[];

  constructor(rowNumber: number, columnNumber: number) {
    this.rowNumber = rowNumber;
    this.columnNumber = columnNumber;
    this.moves = [];
  }

  getMoves() {
    return this.moves;
  }

  getWinner(): string {
    let hasOWon = this.hasPlayerWon('O');
    if (hasOWon) return 'O';
    return 'X';
  }

  play(player: string, move: { row: number; column: number }) {
    if (!this.isMoveOutsideBoard(move))
      this.moves.push(new Move(player, move))
  }

  private isMoveOutsideBoard(move: { row: number; column: number }): boolean {
    return move.row > this.rowNumber || move.column > this.columnNumber || move.row < 0 || move.column < 0;
  }

  private hasPlayerWon(player: string): boolean {
    return this.hasPlayerWonInLine(player, 0, 0)
        || this.hasPlayerWonInColumn(player, 0, 0)
        || this.hasPlayerWonInDiagonalLeftUpToRightDown(player, 0, 0)
        || this.hasPlayedWonInDiagonalLeftDownToRightUp(player, this.rowNumber - 1, 0);
  }

  private hasPlayerWonInLine(player: string, rowNumber: number, columnNumber: number): boolean {
    let move = this.moves.find(move => move.getPlayedRow() === rowNumber && move.getPlayedColumn() === columnNumber);
    if (move && move.getPlayer() === player) {
      return columnNumber === this.columnNumber - 1 ? true : this.hasPlayerWonInLine(player, rowNumber, ++columnNumber);
    } else {
      return rowNumber < this.rowNumber ? this.hasPlayerWonInLine(player, ++rowNumber, 0) : false;
    }
  }

  private hasPlayerWonInColumn(player: string, rowNumber: number, columnNumber: number) {
    let move = this.moves.find(move => move.getPlayedRow() === rowNumber && move.getPlayedColumn() === columnNumber);
    if (move && move.getPlayer() === player) {
      return rowNumber === this.rowNumber - 1 ? true : this.hasPlayerWonInColumn(player, ++rowNumber, columnNumber);
    } else {
      return columnNumber < this.columnNumber ? this.hasPlayerWonInColumn(player, 0, ++columnNumber) : false;
    }
  }

  private hasPlayerWonInDiagonalLeftUpToRightDown(player: string, rowNumber: number, columnNumber: number) {
    let move = this.moves.find(move => move.getPlayedRow() === rowNumber && move.getPlayedColumn() === columnNumber);
    if (move && move.getPlayer() === player) {
      return rowNumber === this.rowNumber - 1 ? true : this.hasPlayerWonInDiagonalLeftUpToRightDown(player, ++rowNumber, ++columnNumber);
    } else
      return false;
  }

  private hasPlayedWonInDiagonalLeftDownToRightUp(player: string, rowNumber: number, columnNumber: number) {
    let move = this.moves.find(move => move.getPlayedRow() === rowNumber && move.getPlayedColumn() === columnNumber);
    if (move && move.getPlayer() === player)
      return rowNumber === 0 ? true : this.hasPlayedWonInDiagonalLeftDownToRightUp(player, --rowNumber, ++columnNumber);
    else
      return false;
  }
}