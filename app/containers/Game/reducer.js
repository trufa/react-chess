/*
 *
 * Game reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOAD_BOARD_ARRAY,
} from './constants';
import isValidSquare from 'gameUtils/validSquareCalculator';

// TODO: be able to flip board
function fillInitialBoardArray() {
  const boardArray = new Array(120);
  // WHITE pawn=1, knight=2, bishop=3, rook=4, queen=5 and king=6
  // BLACK pawn=-1, knight=-2, bishop=-3, rook=-4, queen=-5 and king=-6
  const whiteBackRank = [4, 2, 3, 6, 5, 3, 2, 4];
  const blackBackRank = [-4, -2, -3, -6, -5, -3, -2, -4];
  for (let i = 0; i < boardArray.length; i += 1) {
    if ((i >= 21) && (i <= 28)) { // White's back rank
      boardArray[i] = whiteBackRank[i - 21];
    } else if ((i >= 31) && (i <= 38)) { // White's pawn rank
      boardArray[i] = 1;
    } else if ((i >= 81) && (i <= 88)) { // Black's pawn rank
      boardArray[i] = -1;
    } else if ((i >= 91) && (i <= 98)) { // Black's pawn rank
      boardArray[i] = blackBackRank[i - 91];
    } else {
      boardArray[i] = isValidSquare(i) ? 0 : 99; // 0 is empty, 99 is invalid
    }
  }
  return boardArray;
}
const initialState = fromJS({
  boardArray: fillInitialBoardArray(),
});

function gameReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_BOARD_ARRAY:
      return state;
    default:
      return state;
  }
}

export default gameReducer;
