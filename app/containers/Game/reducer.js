/*
 *
 * Game reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOAD_BOARD_ARRAY,
} from './constants';

const boardArray = new Array(120);
for (let i = 0; i < boardArray.length; i += 1) {
  boardArray[i] = 99;
}
const initialState = fromJS({
  boardArray,
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
