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
    let hasWonInLine = this.hasPlayerOwnInLine(player, 0, 0);
    return hasWonInLine;
  }

  private hasPlayerOwnInLine(player: string, rowNumber: number, columnNumber: number): boolean {
    let move = this.moves.find(move => move.getPlayedRow() === rowNumber && move.getPlayedColumn() === columnNumber);
    if (move && move.getPlayer() === player) {
      return columnNumber === this.columnNumber - 1 ? true : this.hasPlayerOwnInLine(player, rowNumber, ++columnNumber);
    } else {
      return rowNumber < this.rowNumber - 1 ? this.hasPlayerOwnInLine(player, ++rowNumber, 0) : false;
    }
  }
}