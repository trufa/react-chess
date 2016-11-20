/**
*
* Rank
*
*/

import React from 'react';

function Rank(props) {
  return (
    <div className="rank">
      {props.children}
    </div>
  );
}

Rank.propTypes = {
  children: React.PropTypes.array,
};

export default Rank;
