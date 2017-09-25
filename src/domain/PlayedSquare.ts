'use strict';

export default class PlayedSquare {
  private player: string;
  private square: { row: number; column: number };

  constructor(player: string, square: { row: number; column: number }) {
    this.player = player;
    this.square = square;
  }

  getPlayer() {
    return this.player;
  }

  getColumn() {
    return this.square.column;
  }

  getRow() {
    return this.square.row;
  }
}