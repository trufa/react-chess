/**
*
* Piece
*
*/

import React from 'react';

function Piece(props) {
  return (
    <div>
      {props.pieceId}, {props.square}
    </div>
  );
}

Piece.propTypes = {
  pieceId: React.PropTypes.number,
  square: React.PropTypes.number,
};

export default Piece;
