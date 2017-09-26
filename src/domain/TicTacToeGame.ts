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
    let hasWonInLine = this.hasPlayerOwnInLineOne(player, 0);
    return hasWonInLine;
  }

  private hasPlayerOwnInLineOne(player: string, columnNumber: number): boolean {
    if (this.moves.find(move => move.getPlayedRow() === 0 && move.getPlayedColumn() === columnNumber).getPlayer() === player) {
      return columnNumber === this.columnNumber - 1 ? true : this.hasPlayerOwnInLineOne(player, ++columnNumber);
    }
    return false;
  }
}