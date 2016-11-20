/**
*
* Piece
*
*/

import React from 'react';
import { getPieceInfoById } from 'gameUtils/pieces';
import { showPieceInfo } from 'debug/debugOptions';

function Piece(props) {
  return (
    <div>
      {showPieceInfo ? getPieceInfoById(props.pieceId).name : null}
    </div>
  );
}

Piece.propTypes = {
  pieceId: React.PropTypes.number,
};

export default Piece;
