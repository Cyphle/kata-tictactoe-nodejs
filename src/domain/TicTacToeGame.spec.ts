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

  it('should have game won by X in row with board of 2x2', () => {
    let game = new TicTacToeGame(2, 2);

    game.play('X', { row: 0, column: 0 });
    game.play('O', { row: 1, column: 0 });
    game.play('X', { row: 0, column: 1 });

    expect(game.getWinner()).to.equal('X');
  });
});