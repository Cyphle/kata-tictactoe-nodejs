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

    expect(game.play('X', { row: 3, column: 0 })).to.deep.equal({ status: -1, message: 'Cannot play outside board'});
  });

  it('should have game won by O in row with board of 3x3 in first line', () => {
    let game = new TicTacToeGame(3, 3);

    game.play('X', { row: 1, column: 0 });
    game.play('O', { row: 0, column: 0 });
    game.play('X', { row: 1, column: 1 });
    game.play('O', { row: 0, column: 1 });
    game.play('X', { row: 2, column: 0 });
    game.play('O', { row: 0, column: 2 });

    expect(game.getWinner()).to.equal('O');
  });

  it('should have game won by O in row with board of 3x3 in second line', () => {
    let game = new TicTacToeGame(3, 3);

    game.play('X', { row: 0, column: 0 });
    game.play('O', { row: 1, column: 0 });
    game.play('X', { row: 0, column: 1 });
    game.play('O', { row: 1, column: 1 });
    game.play('X', { row: 2, column: 0 });
    game.play('O', { row: 1, column: 2 });

    expect(game.getWinner()).to.equal('O');
  });

  it('should have game won by O in row with board of 3x3 in second line', () => {
    let game = new TicTacToeGame(3, 3);

    game.play('X', { row: 0, column: 0 });
    game.play('O', { row: 2, column: 0 });
    game.play('X', { row: 0, column: 1 });
    game.play('O', { row: 2, column: 1 });
    game.play('X', { row: 1, column: 0 });
    game.play('O', { row: 2, column: 2 });

    expect(game.getWinner()).to.equal('O');
  });

  it('should have game won by O in column with board of 3x3 in first column', () => {
    let game = new TicTacToeGame(3, 3);

    game.play('X', { row: 1, column: 1 });
    game.play('O', { row: 0, column: 0 });
    game.play('X', { row: 0, column: 2 });
    game.play('O', { row: 1, column: 0 });
    game.play('X', { row: 2, column: 1 });
    game.play('O', { row: 2, column: 0 });

    expect(game.getWinner()).to.equal('O');
  });

  it('should have game won by O in diagonal up left to down right with board of 3x3', () => {
    let game = new TicTacToeGame(3, 3);

    game.play('X', { row: 1, column: 0 });
    game.play('O', { row: 0, column: 0 });
    game.play('X', { row: 0, column: 2 });
    game.play('O', { row: 1, column: 1 });
    game.play('X', { row: 2, column: 1 });
    game.play('O', { row: 2, column: 2 });

    expect(game.getWinner()).to.equal('O');
  });

  it('should have game won by O in diagonal right left to left down with board of 3x3', () => {
    let game = new TicTacToeGame(3, 3);

    game.play('X', { row: 1, column: 0 });
    game.play('O', { row: 0, column: 2 });
    game.play('X', { row: 0, column: 1 });
    game.play('O', { row: 1, column: 1 });
    game.play('X', { row: 2, column: 1 });
    game.play('O', { row: 2, column: 0 });

    expect(game.getWinner()).to.equal('O');
  });

  it('should not be possible to play on the same place', () => {
    let game = new TicTacToeGame(3, 3);
    game.play('X', { row: 0, column: 0 });
    expect(game.play('0', { row: 0, column: 0 })).to.deep.equal({ status: -2, message: 'Cannot play. This place has already been taken'});
  });
});