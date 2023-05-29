
/**
 * Before the optional chaining operator (?.) existed, it was sometimes troublesome to access deeply-nested properties in huge 
 * JavaScript objects when some of the intermediate properties might not be present.
 * 
 * The function gets the value at path of object. If the resolved value is undefined, the defaultValue is returned in its place.
 * The function signature is as such:
 *      get(object, path, [defaultValue]);
 * 
 * object: The object to query.
   path: The path of the property to get. It can be a string with . as the separator between fields, or an array of path strings.
   defaultValue: Optional parameter. The value returned if the resolved value is undefined.
 */

/**
 * My Solution using recursion
 */
function get(object, path, defaultValue) {
    if(!Array.isArray(path)) path = path.split('.')
    return getHelper(object,path,0,defaultValue);
}

function getHelper(object,path, index, defaultValue) {
    if((typeof object != 'object') || (object == null)) return defaultValue;
    if(path[index] in object) {
        if(index == path.length-1) return object[path[index]];
        else return getHelper(object[path[index]],path,index+1,defaultValue)
    }
    else return defaultValue;
}


/**
 * Course solution using iteration
 * 
 * null and undefined aare equal to each other
 */


function get(objectParam, pathParam, defaultValue) {
    const path = Array.isArray(pathParam) ? pathParam : pathParam.split('.');
  
    let index = 0;
    let length = path.length;
    let object = objectParam;
  
    while (object != null && index < length) {
      object = object[String(path[index])];
      index++;
    }
  
    const value = index && index === length ? object : undefined;
    return value !== undefined ? value : defaultValue;
  }
  
