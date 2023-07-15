/**
 * Callback funtion - It is named so because it is called some time later by function to which it was passed
 * 
 * Advantages of callback functions - 
 *  Helps in async programming. for example in setTimeout
 *  event listeners are also callbacks
 */


function attachEventListener() {
    let count = 0;
    document.getElementById("clickme").addEventListener("click", function xyz() {
        console.log("Button Clicked", ++ count);
    })
}

attachEventListener();


/**
 * If you place debugger in function xyz you can see value of closure in figure 1.1
 */

/**
 * Then we printed the DOM element on console, there handler represents the event listener.
 * It has prpperty called scope, which is same scope that event handler function has. 
 * inside scope we can see closure.see figure 2.
 * so whenever function is executed it has this scope attached to it.you can even see in what order diffrenert scopes will be
 *  queried.first closure, then global scope.
 */

/**
 * Interview Question - Why remove event listers?
 * Event listeners are heavy,means they take memory. when ever you attach the event listener it forms a closure.even when this
 *  event listener is not executed,this memeory cannot be freeed.because somebody can click on button and event listener needs
 *  to be executed.so to free up this memeory we remove event listeners.if our page has thousands of event listeners
 *  attached to it, then page can become really slow.When we remove event listeners, then all variables which were held by 
 *  this closure will be garbage collected.
 */