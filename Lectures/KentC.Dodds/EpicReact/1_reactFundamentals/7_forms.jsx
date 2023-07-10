/**
 * Step 1 - getting value from input field
 *  
    * synthetic event -Synthetic event is actually not a real event from the browser. It's an object that React creates for us that looks
    *  and behaves exactly like a regular event.Most of the time, you won't know that you're interacting with a fake event or a 
    *  SyntheticEvent from React. You'll just assume that you're interacting with the native event. 
    * 
    * They do this for performance reasons. React also uses event delegation,all to just improve the performance of your application.
    * If you ever need to access the native event, then you can do so with .nativeEvent.then we saw diffrent ways of getting 
    * values from the form.
    * 
    * 
 Step 2 - Getting value using ref
 
 Step 3 -Adding a validation on form input and showing error message to user and disabling the submit button
 
 Step 4 - Implementing controlled input field
   here we used value prop on input field. then we are updating the value prop by using onChange event handler.
   if we do not use onChnage event handler to update the js value that value prop points to, react will give us warning and will
   make field as readonly, if we want to use js value as defaultValue only, then we need to use defaultValue prop.


   Reason - Hey, React, I want the value to be this username," React is going to make sure that the value is always what you provide. 
      If you don't have an onChange handler, then you can't update that value.I'm typing in here, and nothing's happening. That's because
      React is ensuring that our value of the input never changes from the value that we passed as this prop. We can do a read-only prop
      here. That will get rid of the warning, but now it's a read-only field. That's not exactly what I want.

   Also here we chnaged the state of component, if we do not use state and store simple value in variable then also our inut is read
   only i,e we cnt enter any value.react is not giving us any warning because we have provided onChnage event handler.but react is not
   updating the value

   when we bind the input to js value using value prop, in order to update the value of input that js varaible needs to change and 
   state needs to be updated so that react can update the value of input.
 * 
 */