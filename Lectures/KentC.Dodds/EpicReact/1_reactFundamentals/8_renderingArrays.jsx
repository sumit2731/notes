/**
 * 
 * key prop
 *  Read exercise
 *  read kent's blog (3 bolgs)
 *  read react docs -
 *      https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key
 *      https://react.dev/learn/preserving-and-resetting-state
 *  developer article
 * 
 * The key prop has less to do with arrays, and more to do with controlling when a component is reused or disposed of and created anew.
 * 
 * key prop -
 *  a)When react renders array of elements,then it complains about key prop.it uses key props to identify which component is rendered
 *      for which array element. where this can be useful is when you are rendering stateful component, and you remove a item, react 
 *      will which item to remove.otherwise we will have problem as shown in exercise.
 *      
 *      basically key prop is used by react to match the elements rendered before and afterthe change.
 *  b)Then kent's blog we saw that how we can use key prop, when we delibaretly want to unmount a component. i.e destroy existing
 *      component instance with state and create a new instance.so basically when on rerender react calls our component.
 * 
 *      React's key prop gives you the ability to control component instances. Each time React renders your components, it's calling
 *      your functions to retrieve the new React elements that it uses to update the DOM. If you return the same element types, it 
 *      keeps those components/DOM nodes around, even if all the props changed.
 *      
 *      The exception to this is the key prop. This allows you to return the exact same element type, but force React to unmount the 
 *      previous instance, and mount a new one. This means that all state that had existed in the component at the time is completely
 *      removed and the component is "reinitialized" for all intents and purposes.
 */