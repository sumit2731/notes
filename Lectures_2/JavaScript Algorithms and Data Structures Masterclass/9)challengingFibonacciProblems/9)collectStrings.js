/**
 * write a function called "collectStrings", which accepts an object and returns an array of all the values in the object
 *  that have a typeof string
 */

/**
 * 
 *@MySoltion
 */
function collectStrings (obj,newArray) {
    if (!newArray) newArray = [];
    for (let property in obj) {
        if (typeof obj[property] == 'object' && !(Array.isArray(typeof obj[property]))) collectStrings(obj[property], newArray);
        else if(typeof obj[property] == 'string') newArray.push(obj[property]);
    }
    return newArray;
}


/**
 * Tutorial Solution 1
 */

function collectStrings2(obj) {
  var stringsArr = [];

  function gatherStrings(o) {
    for (var key in o) {
      if (typeof o[key] === "string") {
        stringsArr.push(o[key]);
      } else if (typeof o[key] === "object") {
        return gatherStrings(o[key]);
      }
    }
  }

  gatherStrings(obj);

  return stringsArr;
}

/**
 * Tutorial Solution 3
 */

 function collectStrings(obj) {
   var stringsArr = [];
   for (var key in obj) {
     if (typeof obj[key] === "string") {
       stringsArr.push(obj[key]);
     } else if (typeof obj[key] === "object") {
       stringsArr = stringsArr.concat(collectStrings(obj[key]));
     }
   }

   return stringsArr;
 }