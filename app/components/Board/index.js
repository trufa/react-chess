/**
 *
 * Board
 *
 */

import React from 'react';
import Square from 'components/Square';
import Rank from 'components/Rank';
import Piece from 'components/Piece';
import { chunk } from 'lodash/array';
import { isPiece } from 'gameUtils/pieces';

function Board(props) {
  const ranksArray = chunk(props.boardArray.toArray(), 10);
  const board = ranksArray.map((rank, i) => {
    const rankIndex = i;
    const squareArray = rank.map((squareContent, j) => {
      const squareIndex = ((rankIndex * 10) + j);
      const piece = isPiece(squareContent) ? <Piece pieceId={squareContent} /> : null;
      return (
        <Square squareContent={squareContent} squareIndex={squareIndex} key={`square-${squareIndex}`} >
          {piece}
        </Square>
      );
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
