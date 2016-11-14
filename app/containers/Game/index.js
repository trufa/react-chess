/*
 *
 * Game
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectGame from './selectors';
import Board from 'components/Board';
import { loadBoardArray } from './actions';
import { createStructuredSelector } from 'reselect';

export class Game extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.loadBoardArray();
  }
  render() {
    return (
      <div>
        <Board boardArray={this.props.boardArray} />
      </div>
    );
  }
}

Game.propTypes = {
  loadBoardArray: React.PropTypes.func,
  boardArray: React.PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  boardArray: selectGame(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadBoardArray: () => {
      dispatch(loadBoardArray());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
