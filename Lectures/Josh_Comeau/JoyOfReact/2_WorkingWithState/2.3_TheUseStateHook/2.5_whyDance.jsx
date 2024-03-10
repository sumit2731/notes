/**
 * Here we had a look at svetle syntax that just declares a variable. then we had a look why cannot
 *  we had same syntax for state in react
 *
 *
 * Read Video Description(THis is my explanation)
 *
 * 1)In react we need to know when that state was updated, so that we can re-render the UI. so if
 * declare a simple variable and change its value, react will never know when to re-render the componnet.
 * there is no way in js to observe the variables
 *
 * 2)problem 1 can be solved by giving a method to user - React.reRender() , user can call to call
 * the component function again. Still there are some problems -
 *  a)another problem is when function is called again then variable declared with 'let', will be
 *     redefined,we will loose last value.
 *  b)solution to that can be to declared that variable outside component function context.but then
 *      there are other problems-
 *          a)how to handle multiple instances of component.so variables needs to be defined inside
 *              component, so that every variable has its own  dynamic state
 */
