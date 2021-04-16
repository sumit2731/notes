/**
 * Given two strings, write a function to determine if the second string is an anagram of the first. 
 * An anagram is a word, phrase, or name formed by rearranging the letters of another, such as 
 */

 
function isAagram(word1,word2) {
    if (word1.length != word2.length) return false;
    let wordObj = {}; 
    //let wordObj2 = {};
    for(let char of word1) {
        wordObj[char] = (wordObj[char] || 0) +1;
    }

    for(let char of word2) {
        if(wordObj[char]) wordObj[char]-- ;
        else return false;
    }

    // for (let char in wordObj1) {
    //     if(char in wordObj2) {
    //         if(wordObj1[char] != wordObj2[char]) return false;
    //     }
    //     else return false;
    // }
    return true;
}

console.log(isAagram('cinema', 'iceman'));


/* 
a = 2
a = 1
*/