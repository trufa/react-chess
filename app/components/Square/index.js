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
  const isValid = isValidSquare(props.squareIndex);
  return (
    <StyledSquare isValid={isValid} >
      {props.children}
      {showIdAndIndexString ? `${props.squareIndex}-${props.squareContent}` : null}
    </StyledSquare>
  );
}

Square.propTypes = {
  squareIndex: React.PropTypes.number,
  squareContent: React.PropTypes.number,
  children: React.PropTypes.object,
};

export default Square;

