/**
 * “callback-based” style of asynchronous programming. A function that does something asynchronously should provide a 
 *  callback argument where we put the function to run after it’s complete.
 */

function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;
  script.onload = () => callback(script);
  document.head.append(script);
}

loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', script => {
  alert(`Cool, the script ${script.src} is loaded`);
  alert( _ ); // function declared in the loaded script
});

/* 
 “error-first callback” style.The convention is:

The first argument of the callback is reserved for an error if it occurs. Then callback(err) is called.
The second argument (and the next ones if needed) are for the successful result,
  Then callback(null, result1, result2…) is called.
So the single callback function is used both for reporting errors and passing back results.
*/
function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;

  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error(`Script load error for ${src}`));

  document.head.append(script);
}

loadScript('/my/script.js', function(error, script) {
  if (error) {
    // handle error
  } else {
    // script loaded successfully
  }
});


/*
Problem with Callback Approach -Pyramid of Doomr or Callback hell.
Here when script1 loads we want to load script2, when script2 loads we want to load script3.
As calls become more nested, the code becomes deeper and increasingly more difficult to manage, 
especially if we have real code instead of ... that may include more loops, conditional statements and so on.
The “pyramid” of nested calls grows to the right with every asynchronous action. Soon it spirals out of control.
So this way of coding isn’t very good.

*/
loadScript('script1.js', function(error, script) {
  if (error) {
    // handle error
  } else {
    loadScript('script2.js', function(error,script) {
        if(error) {
            //handle error
        } else {
            loadScript('script2.js', function(error,script) {
                if(error) {
                    //handle error
                } else {
                  loadScript("script3.js", function(error,script) {
                    if(error) {
                      //handle error
                    }
                    else {
                      console.log("Script Loaded")
                    }
                  });
                    console.log("All Scripts loaded");
                }
            });
        }
    });
  }
});

/**
 * See blog, how we can avoid it by defining a separate function for each action.
 */