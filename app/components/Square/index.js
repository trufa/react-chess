/**
 *
 * Square
 *
 */

import React from 'react';
import StyledSquare from './styledSquare';

function Square(props) {
  return (
    <StyledSquare>
      {props.id}
    </StyledSquare>
  );
}

Square.propTypes = {
  id: React.PropTypes.number,
};

export default Square;

