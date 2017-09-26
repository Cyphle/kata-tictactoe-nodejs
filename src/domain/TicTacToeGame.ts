'use strict';

import Move from './Move';

export default class TicTacToeGame {
  private row: number;
  private column: number;
  private moves: Move[];

  constructor(row: number, column: number) {
    this.row = row;
    this.column = column;
    this.moves = [];
  }

  getWinner() {
    return 'X';
  }

  play(player: string, move: { row: number; column: number }) {
    this.moves.push(new Move(player, move))
  }
}