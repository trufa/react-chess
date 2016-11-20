import styled from 'styled-components';
import { showInvalidSquares, showSquareOutlines } from 'debug/debugOptions';

const styledSquare = styled.div`
  width: 60px;
  height: 60px;
  vertical-align: bottom;
  outline: ${showSquareOutlines ? '1px solid red' : 'none'};
  display: ${(props) => (props.isValid || showInvalidSquares ? 'inline-block' : 'none')};
`;

export default styledSquare;
