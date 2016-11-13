/**
*
* Board
*
*/

import React from 'react';
import Square from 'components/Square';

function Board(props) {
  const squareComponents = props.boardArray.map((item, index) => {
    const sq = [<Square id={item} key={index} />];
    if ((index + 1) % 10 === 0) {
      sq.push(<br />);
    }
    return sq;
  });
  return (
    <div>
      {squareComponents}
    </div>
  );
}

Board.propTypes = {
  boardArray: React.PropTypes.object,
};
export default Board;
