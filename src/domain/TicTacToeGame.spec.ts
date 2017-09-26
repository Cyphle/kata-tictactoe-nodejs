import { expect } from 'chai';
import TicTacToeGame from './TicTacToeGame';


describe('TicTacToGame.ts', () => {
  it('should have game won by X with board of 1x1', () => {
    let game = new TicTacToeGame(1, 1);

    game.play('X', { row: 0, column: 0 });

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

  it('should not be possible to play outside board', () => {
    let game = new TicTacToeGame(2, 2);

    game.play('X', { row: 3, column: 0 });

    expect(game.getMoves()).to.have.lengthOf(0);
  });

  it('should have game won by O in row with board of 3x3 in first line', () => {
    let game = new TicTacToeGame(2, 2);

    game.play('X', { row: 1, column: 0 });
    game.play('O', { row: 0, column: 0 });
    game.play('X', { row: 1, column: 1 });
    game.play('O', { row: 0, column: 1 });
    game.play('X', { row: 2, column: 0 });
    game.play('O', { row: 0, column: 2 });

    expect(game.getWinner()).to.equal('O');
  });

  it('should have game won by O in row with board of 3x3 in second line', () => {
    let game = new TicTacToeGame(2, 2);

    game.play('X', { row: 0, column: 0 });
    game.play('O', { row: 1, column: 0 });
    game.play('X', { row: 0, column: 1 });
    game.play('O', { row: 1, column: 1 });
    game.play('X', { row: 2, column: 0 });
    game.play('O', { row: 1, column: 2 });

    expect(game.getWinner()).to.equal('O');
  });

  it('should have game won by O in row with board of 3x3 in second line', () => {
    let game = new TicTacToeGame(2, 2);

    game.play('X', { row: 0, column: 0 });
    game.play('O', { row: 2, column: 0 });
    game.play('X', { row: 0, column: 1 });
    game.play('O', { row: 2, column: 1 });
    game.play('X', { row: 1, column: 0 });
    game.play('O', { row: 2, column: 2 });

    expect(game.getWinner()).to.equal('O');
  });

  it('should have game won by O in column with board of 3x3 in first column', () => {
    let game = new TicTacToeGame(2, 2);

    game.play('X', { row: 1, column: 1 });
    game.play('O', { row: 0, column: 0 });
    game.play('X', { row: 0, column: 2 });
    game.play('O', { row: 1, column: 0 });
    game.play('X', { row: 2, column: 1 });
    game.play('O', { row: 2, column: 0 });

    expect(game.getWinner()).to.equal('O');
  });
});