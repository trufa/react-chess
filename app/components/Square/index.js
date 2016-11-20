/**
 *
 * Square
 *
 */

import React from 'react';
import StyledSquare from './styledSquare';
import isValidSquare from 'gameUtils/validSquareCalculator';
import { showIdAndIndexString } from 'debug/debugOptions';

function Square(props) {
  const isValid = isValidSquare(props.index);
  return (
    <StyledSquare isValid={isValid} >
      {props.children}
      {showIdAndIndexString ? props.indexAndId : null}
    </StyledSquare>
  );
}

Square.propTypes = {
  indexAndId: React.PropTypes.string,
  index: React.PropTypes.number,
  children: React.PropTypes.object,
};

export default Square;

