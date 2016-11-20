/**
 *
 * Square
 *
 */

import React from 'react';
import StyledSquare from './styledSquare';
import isValidSquare from 'rules/validSquareCalculator';
import { showIdAndIndexString } from 'debug/debugOptions';

function Square(props) {
  const isValid = isValidSquare(props.index);
  return (
    <StyledSquare isValid={isValid} >
      {showIdAndIndexString ? props.indexAndId : null}
    </StyledSquare>
  );
}

Square.propTypes = {
  indexAndId: React.PropTypes.string,
  index: React.PropTypes.number,
};

export default Square;

