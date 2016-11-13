import { createSelector } from 'reselect';

/**
 * Direct selector to the game state domain
 */
const selectGameDomain = () => (state) => state.get('game');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Game
 */

const selectGame = () => createSelector(
  selectGameDomain(),
  (boardState) => boardState.get('boardArray')
);

export default selectGame;
export {
  selectGameDomain,
};
