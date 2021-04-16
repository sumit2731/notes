let add = function (a,b,c) {
    return a+b+c;
}

let result = add(10,1,5);
console.log(result);

let getScoreText = function(name = 'Annomous', score = 0) {
    console.log(name);
    console.log(score);
}
getScoreText();
getScoreText(undefined, 25);