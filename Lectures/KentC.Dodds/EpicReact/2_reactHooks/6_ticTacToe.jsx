/**
 * The first thing that we want to do is in react mutation is a problem, and you don't want to mutate the state that's being 
 * managed in part.Because if you do that, then you can have some unexpected bugs, because react pretty much relies on the 
 * fact that anytime there is a state change, you're going to trigger a rerender. If you're mutating things, then you could 
 * have some stale closures that are referencing the mutated values, and it just, in general, mutation leads to some pretty 
 * hard to track down bugs.
 * 
 * here we saw the concept of derived state. -That means that their value can be derived (or calculated) based on other values rather than managed on their own. 
 *from one managed state we are calculating some varaibles that we are using in
 * our component. when  we update the state, these will be calcuated again and in UI these will be updated
 */