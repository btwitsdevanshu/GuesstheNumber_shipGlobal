;(() => {
  const userInput = document.querySelector('.user-input')
  const form = document.querySelector('form')
  const result = document.querySelector('.result')
  const allGuesses = document.querySelector('.all-guesses')
  const submitBtn = document.querySelector('.submit-btn')
  const startGameBtn = document.querySelector('.start-game')
  const attemptsCounter = document.querySelector('.attempts');

  const allGuessesArray = []
  let randomNumber = Math.round(Math.random() * 100)
 let attempts = 0;  // Initialize the attempt counter
    let wrongAttempts = 0;

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const userInputValue = parseInt(userInput.value)
    if (isNaN(userInputValue) || userInputValue < 1 || userInputValue > 100) {
        result.innerText = 'Please enter a valid number between 1 and 100.';
        return;
    }
    attempts += 1; 

    if (userInputValue < randomNumber) {
      result.innerText = 'Too low!';
      wrongAttempts += 1;
    } else if (userInputValue > randomNumber) {
      result.innerText = 'Too high!';
      wrongAttempts += 1;
    } else {
      result.innerText = 'You got it! Congrats'
      startGameBtn.disabled = false
      submitBtn.disabled = true
    }
    allGuessesArray.push(userInputValue)
    allGuesses.innerText = 'Your guesses: ' + allGuessesArray.join(', ');
    attemptsCounter.innerText = `Wrong Attempts: ${wrongAttempts}`;
    form.reset()
  })

  startGameBtn.addEventListener('click', () => {
    result.innerText = ''
    allGuesses.innerText = ''
    startGameBtn.disabled = true
    submitBtn.disabled = false
    randomNumber = Math.round(Math.random() * 100);
    attempts = 0;  // Reset the total attempt counter
    wrongAttempts = 0;
  })
})()