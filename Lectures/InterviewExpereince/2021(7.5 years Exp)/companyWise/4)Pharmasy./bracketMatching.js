/* 

Closing charcater should belong to last opening chracter

*/

function validMatcher(str) {
    let lastOpeningBracket = [];
    
    let openDic =  {
        '(': true,
        '{': true,
        '[': true
    };
    
    let closingDic = {
        ')': '(',
        '}': '{',
        ']': '['
    }
    
    for(let char of str) {
        if(char in openDic) {
            lastOpeningBracket.push(char);
        }
        else {
            let expectedOpeningBracket = closingDic[char];
            if(expectedOpeningBracket === lastOpeningBracket[lastOpeningBracket.length-1]) {
                lastOpeningBracket.pop();
            }
            else {
                return false;
            }
        }
    }
    return ((lastOpeningBracket.length === 0)? true: false);
} 

let input = '[{[]';
console.log(validMatcher(input));