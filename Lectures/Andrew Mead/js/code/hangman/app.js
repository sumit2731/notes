const puzzleEl = document.querySelector('#puzzle');
const guessEl = document.querySelector('#guesses');
const game1 = new Hangman('Cat', 2);

puzzleEl.textContent = game1.puzzle;
guessEl.textContent = game1.statusMessage;

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode);
    game1.makeGuess(guess);
    puzzleEl.textContent = game1.puzzle;
    guessEl.textContent = game1.statusMessage();

});
getPuzzle("1",(error,puzzle) => {
    if (error) {
        console.log(`Error: ${error}`);
    } else {
        console.log(puzzle);
    }
});


// const request = new XMLHttpRequest();
// request.open('GET','http://puzzle.mead.io/puzzle');
// request.send();
// request.addEventListener('readystatechange', (e) => {
//     if(e.target.readyState === 4 && e.target.status ===200) {
//         console.log(e.target.status);
//         const data = JSON.parse(e.target.responseText);
//         console.log(data);
//     } else if (e.target.readyState === 4) {
//         console.log('An error occured');    
//     }
// });