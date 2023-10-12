import React from 'react';

import { range } from '../../utils'

function Guess( { value } ) {
  return (
    <p className="guess">
      {range(5).map((col) => (
        <span key={col} className="cell">
          {value ? value[col] : ''}
        </span>
      ))}
    </p>
  );
}

export default Guess;
