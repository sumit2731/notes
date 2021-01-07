function camelcase(str) {
    let wordCount = 0;
    for(let char of str) {
        if(char == char.toUpperCase()) wordCount++;
    }
    return ++wordCount;
}

console.log(camelcase("save"));