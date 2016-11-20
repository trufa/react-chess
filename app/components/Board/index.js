/**
 *
 * Board
 *
 */

import React from 'react';
import Square from 'components/Square';
import Rank from 'components/Rank';
import { chunk } from 'lodash/array';


function Board(props) {
  const ranksArray = chunk(props.boardArray.toArray(), 10);
  const board = ranksArray.map((rank, i) => {
    const rankIndex = i;
    const squareArray = rank.map((square, j) => {
      const squareIndex = ((rankIndex * 10) + j);
      return <Square indexAndId={`${squareIndex} - ${square}`} id={square} index={squareIndex} key={`${squareIndex} - ${square}`} />;
    });
    return <Rank key={`rank-${i}`}>{squareArray}</Rank>;
  });
  return (
    <div>
      {board}
    </div>
  );
}

Board.propTypes = {
  boardArray: React.PropTypes.object,
};
export default Board;
