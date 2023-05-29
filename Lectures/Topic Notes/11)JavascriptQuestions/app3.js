let words = [{name: 'Sumeet'}, {name: 'Rahul'}, {name: 'Rakesh'}];
let newWords = words.filter(element => {
    element.name = 'sumeet';
    return true;
});


console.log(words);
console.log(newWords);