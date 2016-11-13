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
  id: React.PropTypes.string,
};

export default Square;

