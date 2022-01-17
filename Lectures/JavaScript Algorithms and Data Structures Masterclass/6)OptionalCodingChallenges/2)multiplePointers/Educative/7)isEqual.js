/* 
    Approach 1 - easy but less efficient
*/

function backspace_compare(str1, str2) {
    return getOrignalString(str1) === getOrignalString(str2)
}

function getOrignalString(str){
    let newStr,backSpaceCount = 0;
    
    for(let i = str.length-1; i>=0; i--) {
        let char = str[i];
        if(char === '#') backSpaceCount++;
        else if(backSpaceCount > 0) backSpaceCount--;
        else {
            if(newStr) newStr = char + newStr;
            else newStr = char;
        }
    }
    return newStr;
}
let str1 = 'xy#z';
let str2 = 'xzz#';

console.log(getOrignalString(str1,str2));


/* 
    Approach2 - My Approach, course solution also folllow same algo but course solution is written better.
*/



function backspace_compare(str1, str2) {
    let firstStrPointer = str1.length-1, secondStrPointer = str2.length-1, firstStrChar, secondStrChar;
    while((firstStrPointer > -1) && (secondStrPointer > -1)) {
        ({currentChar:firstStrChar,index:firstStrPointer} = getChar(str1,firstStrPointer));
        ({currentChar:secondStrChar,index:secondStrPointer} = getChar(str2,secondStrPointer));
        if((firstStrPointer > -1) && (secondStrPointer > -1)) {
            if(firstStrChar !== secondStrChar) return false;
        }
        else if( ((firstStrPointer > -1) && (secondStrChar <= -1)) || ((firstStrPointer <= -1) && (secondStrChar > -1))) return false;
        firstStrPointer--;
        secondStrPointer--;
  
    }
    return true;
  }
  
  
  
  function getChar(str,index) {
    let currentChar = str[index],  backSpaceCount = 0;
    
    if(currentChar === '#') {
        backSpaceCount = 1;
        while((backSpaceCount !== 0 && (index > 0))) {
            index--;
            currentChar = str[index];
            if(currentChar === '#') backSpaceCount++;
            else backSpaceCount--;
        }
        index--;
        currentChar = str[index];
    }
    return {currentChar, index};
  }

console.log(backspace_compare('xy#z', 'xyz#'));