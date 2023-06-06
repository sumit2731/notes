/**
 * Callback funtion - It is named so becaus eit is called some time later by function to which it was passed
 * 
 * Advantages of callback functions - 
 *  Helps in async programming. for example in setTimeout
 *  event listeners are also callbacks
 */

/**
 * then we saw scope in the event listeners in chrome dev tools. see figure1. this scope is lexical scope of fucntion.
 * inside scope we can see closure.see figure 2.
 * so whenever function is executed it has this scope attached to it.you can even see in what order diffrenert scopes will be queried.
 * first closure, then global scope.
 */

/**
 * Why remove event listers?
 * Event listeners are heavy,means they take memory. when ever you attach the event listener it forms a closure.even when this event 
 * lsitener is not executed,this memeory cannot be freeed.because somebody can click on button and event listener needs to be executed.
 * so to free up this memeory we remove event listeners.if our page has thousands of event listeners attached
 * to it, then page can become really slow.When we remove event listeners, then all variables which were held by this closure will be
 * garbage collected.
 */