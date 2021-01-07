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


// XML Reqquest approach
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

//induival fetch call
// fetch("http://puzzle.mead.io/puzzle",{})
//     .then((response) => {
//         if(response.status === 200) {
//             return 'This is string';
//         } else {
//             throw new Error();
            
//         }
//     })
//     .then( data => console.log(data)) 
//     .catch((err) => console.log(err));

getPuzzle("2")
    .then(puzzle => {
        console.log(puzzle);
    })
    .catch((err) => {
        console.log(`Error: ${err}`);
    });

getCountry('US')
    .then(country => {
        console.log(country.name);
    })
    .catch(err => {
        console.log(`Error: ${err}`);
    })

getLocation()
    .then(location => {
        return getCountry(location.country)
    })
    .then(country => {
        console.log(country.name);
    })
    .catch(err => {
        console.log(err);
    });

getCurrentCountry()
    .then(country => {
        console.log(country);
    })
    .catch(err => {
        console.log(`Error ${err}`);
    });