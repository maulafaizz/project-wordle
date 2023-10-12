import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import Guess from '../Guess/Guess';
import GuessResults from '../GuessResults/GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessResults, setGuessResults] = React.useState([]);

  function handleGuessResults(result) {
    const newGuestResults = [...guessResults, result];
    setGuessResults(newGuestResults);
  }

  return (
    <>
      <GuessResults guesses={guessResults}/>
      <GuessInput handleGuessResults={handleGuessResults}/>
    </>
  );
}

export default Game;
