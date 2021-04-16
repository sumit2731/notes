const puzzleEl = document.querySelector('#puzzle');
const guessEl = document.querySelector('#guesses');
const game1 = new Hangman('Cat', 2);
game1.getPuzzle();

puzzleEl.textContent = game1.getPuzzle();
guessEl.textContent = game1.getStatusMessage();

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode);
    game1.makeGuess(guess);
    puzzleEl.textContent = game1.getPuzzle();
    guessEl.textContent = game1.getStatusMessage();

});