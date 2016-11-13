/*
 *
 * Game reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOAD_BOARD_ARRAY,
} from './constants';

// TODO: be able to flip board
function fillInitialBoardArray() {
  const boardArray = new Array(120);
  // pawn=1, knight=2, bishop=3, rook=4, queen=5 and king=6
  const backRank = [4, 2, 3, 6, 5, 3, 2, 4];
  const reversedBackRank = backRank.reverse();
  for (let i = 0; i < boardArray.length; i += 1) {
    if ((i >= 21) && (i <= 28)) { // White's back rank
      boardArray[i] = backRank[i - 21];
    } else if ((i >= 31) && (i <= 38)) { // White's pawn rank
      boardArray[i] = 1;
    } else if ((i >= 81) && (i <= 88)) { // Black's pawn rank
      boardArray[i] = 1;
    } else if ((i >= 91) && (i <= 98)) { // Black's pawn rank
      boardArray[i] = reversedBackRank[i - 91];
    } else {
      boardArray[i] = 99;
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
