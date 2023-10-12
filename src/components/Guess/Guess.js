import React from 'react';

import { checkGuess } from '../../game-helpers'
import { range } from '../../utils'

function Guess( { handleCorrectGuess, value, answer } ) {
  const letterStatuses = checkGuess(value, answer);

  return (
    <p className="guess">
      {range(5).map((col) => (
        <span key={col} className={value ? `cell ${letterStatuses[col].status}` : 'cell'}>
          {value ? value[col] : ''}
        </span>
      ))}
    </p>
  );
}

export default Guess;
