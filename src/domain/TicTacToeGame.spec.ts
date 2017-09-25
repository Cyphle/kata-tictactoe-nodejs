import { expect } from 'chai';
import TicTacToeGame from './TicTacToeGame';


describe('Tic tac toe game', () => {
  it('should have game won by x when board is 1x1', () => {
    let game = new TicTacToeGame(1, 1);
    expect(game.getWinner()).to.equal('X');
  });
});