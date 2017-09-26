'use strict';

export default class Move {
  private player: string;
  private playedRow: number;
  private playedColumn: number;

  constructor(player: string, move: { row: number; column: number }) {
    this.player = player;
    this.playedRow = move.row;
    this.playedColumn = move.column;
  }

  getPlayedRow(): number {
    return this.playedRow;
  }

  getPlayedColumn(): number {
    return this.playedColumn;
  }

  getPlayer(): string {
    return this.player;
  }
}