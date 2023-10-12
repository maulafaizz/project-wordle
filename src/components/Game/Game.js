import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import WinBanner from '../WinBanner/WinBanner';
import LoseBanner from '../LoseBanner/LoseBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessResults, setGuessResults] = React.useState([]);
  const [isCorrect, setIsCorrect] = React.useState(false);

  const isLose = !isCorrect && guessResults.length === 6;
  const isGameOver = isLose || isCorrect;

  function handleCorrectGuess(letterStatuses) {
    let correctCounter = 0;

    for (let idx = 0; idx < letterStatuses.length; idx++) {
      if (letterStatuses[idx].status === 'correct') {
        correctCounter++;
      }
    }

    const correctness = correctCounter === 5;

    setIsCorrect(correctness);
  }

  function handleGuessResults(result) {
    const newGuestResults = [...guessResults, result];
    setGuessResults(newGuestResults);
  }

  return (
    <>
      <GuessResults guesses={guessResults} answer={answer}/>
      <GuessInput 
        handleCorrectGuess={handleCorrectGuess} 
        handleGuessResults={handleGuessResults} 
        disabled={isGameOver} 
        answer={answer}
      />
      {isCorrect && <WinBanner guessCount={guessResults.length}/>}
      {isLose && <LoseBanner answer={answer}/>}
    </>
  );
}

export default Game;
