/*
 *
 * Game actions
 *
 */

import {
  LOAD_BOARD_ARRAY,
} from './constants';

export function loadBoardArray() {
  return {
    type: LOAD_BOARD_ARRAY,
  };
}
