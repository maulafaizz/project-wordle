import React from 'react';

function GuessResults({ guessResults }) {

  return (
    <div className="guess-results">
      {guessResults.map(({id, guessResult}) => (
        <p key={id} className="guess">{guessResult}</p>
      ))}
    </div>
  );
}

export default GuessResults;
