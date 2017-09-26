'use strict';

import Move from './Move';
import { PLAY_STATUS } from "./PlayStatus";

export default class TicTacToeGame {
  private rowNumber: number;
  private columnNumber: number;
  private moves: Move[];

  constructor(rowNumber: number, columnNumber: number) {
    this.rowNumber = rowNumber;
    this.columnNumber = columnNumber;
    this.moves = [];
  }

  getWinner(): string {
    let hasOWon = this.hasPlayerWon('O');
    if (hasOWon) return 'O';
    return 'X';
  }

  play(player: string, move: { row: number; column: number }) {
    if (this.isMoveOutsideBoard(move.row, move.column))
      return PLAY_STATUS.OUTSIDE_BOARD;

    if (this.isAlreadyPlayed(move.row, move.column))
      return PLAY_STATUS.ALREADY_PLAYED;

    this.moves.push(new Move(player, move));
    return PLAY_STATUS.PLAYED;
  }

  private isMoveOutsideBoard(row: number, column: number): boolean {
    return row > this.rowNumber || column > this.columnNumber || row < 0 || column < 0;
  }


  private isAlreadyPlayed(row: number, column: number ) {
    return !!this.moves.find(move => move.getPlayedRow() === row && move.getPlayedColumn() === column);
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