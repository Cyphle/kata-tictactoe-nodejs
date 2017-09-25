import { expect } from 'chai';
import TicTacToeGame from './TicTacToeGame';


describe('Tic tac toe game', () => {
  it('should have game won by x when board is 1x1', () => {
    let game = new TicTacToeGame(1, 1);
    expect(game.getWinner()).to.equal('X');
  });

  it('should have game draw when board is 2x1 and players have played', () => {
    let game = new TicTacToeGame(2, 1);

    game.play('X', { row: 0, column: 0});

    expect(game.getWinner()).to.equal('X');
  });

  it('should have X wins in column with board of 2x2', () => {
    let game = new TicTacToeGame(2, 2);

    game.play('X', { row: 0, column: 0 });
    game.play('O', { row: 0, column: 1 });
    game.play('X', { row: 1, column: 0 });

    expect(game.getWinner()).to.equal('X');
  });

  it('should have X wins in row with board of 2x2', () => {
    let game = new TicTacToeGame(2, 2);

    game.play('X', { row: 0, column: 0 });
    game.play('O', { row: 1, column: 1 });
    game.play('X', { row: 0, column: 1 });

    expect(game.getWinner()).to.equal('X');
  });

  it('should have X wins in column with board of 3x3', function () {
    let game = new TicTacToeGame(3, 3);

    game.play('X', { row: 0, column: 0 });
    game.play('O', { row: 1, column: 1 });
    game.play('X', { row: 1, column: 0 });
    game.play('O', { row: 1, column: 2 });
    game.play('X', { row: 2, column: 0 });

    expect(game.getWinner()).to.equal('X');
  });

  it('should have X wins in row with board of 3x3', function () {
    let game = new TicTacToeGame(3, 3);

    game.play('X', { row: 0, column: 0 });
    game.play('O', { row: 1, column: 1 });
    game.play('X', { row: 0, column: 1 });
    game.play('O', { row: 1, column: 2 });
    game.play('X', { row: 0, column: 2 });

    expect(game.getWinner()).to.equal('X');
  });

  it('should have X wins in diagonal with board of 3x3', function () {
    let game = new TicTacToeGame(3, 3);

    game.play('X', { row: 0, column: 0 });
    game.play('O', { row: 1, column: 0 });
    game.play('X', { row: 1, column: 1 });
    game.play('O', { row: 1, column: 2 });
    game.play('X', { row: 2, column: 2 });

    expect(game.getWinner()).to.equal('X');
  });
});