
/**
 * 5)Hooks flow diagram (see hook flow diagram in examples)
 * 
 * Creating a react element does not mean that component function will be called. React will call component function only when
 * it actually needs to draw that element on UI.
 * 
 * Flow -
 *  Parent Render Start
 *  Parent Render End (Noww react have figured out what needs to be drwan on screen, so it calls children component functions now)
 *  
 *  React Updates DOM
 *      ChildRender Start
 *      ChildRender Ends
 *      Child useLayoutEffect Cleanups
 *  Parent useLayoutEffect CleanUp
 *  
 *  Browser paints screen
 *      
 *      Child usseEffect Cleanups
 *  Parent useEffectCleanups
 *      Child useEffect
 * Parent useEffect
 *  
 */