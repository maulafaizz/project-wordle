import React from 'react';
import { checkGuess } from '../../game-helpers'

function GuessInput({ handleCorrectGuess, handleGuessResults, disabled, answer }) {
  const [guess, setGuess] = React.useState('');
  const letterStatuses = checkGuess(guess, answer);

  function handleSubmit(event) {
    event.preventDefault();
    console.log({ guess });
    handleGuessResults(guess);
    handleCorrectGuess(letterStatuses);
    setGuess('');
  }

  return (
    <form 
      className="guess-input-wrapper" 
      onSubmit={handleSubmit}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        disabled={disabled}
        required
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        id="guess-input" 
        type="text" 
        value={guess}
        onChange={(event) => {
          setGuess(event.target.value.toUpperCase())
        }}  
      />
    </form>
  );
}

export default GuessInput;
