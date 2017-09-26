import { expect } from 'chai';
import TicTacToeGame from './TicTacToeGame';


describe('TicTacToGame.ts', () => {
  it('should have game won by X with board of 1x1', () => {
    let game = new TicTacToeGame(1, 1);
    expect(game.getWinner()).to.equal('X');
  });

  it('should have game won by X in row with board of 2x1', () => {
    let game = new TicTacToeGame(2, 1);

    game.play('X', { row: 0, column: 0 });

    expect(game.getWinner()).to.equal('X');
  });
});