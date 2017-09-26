'use strict';

export const PLAY_STATUS: any = {
  PLAYED: {
    status: 0,
    message: 'Move played'
  },
  OUTSIDE_BOARD: {
    status: -1,
    message: 'Cannot play outside board'
  },
  ALREADY_PLAYED: {
    status: -2,
    message: 'Cannot play. This place has already been taken'
  }
};