/**
 * Here we had a look at svetle syntax that just declares a variable. then we had a look why cannot we had same syntax for state
 *  in react
 *
 *
 * read Video Description(THis is my explanation)
 *
 * 1)In react we need to know when that variable was updated, so that we can re-render the UI. so if declare a simple variable and
 *  change its value, UI will never re-rerender as component is never called again.
 * 2)problem 1 can be solved by giving amethod to user , user can call to call the component function again.
 * 3)another problem is when function is called again then variable declared with 'let', will be redefined,we will loose
 *  last value.
 * 4)solution to that can be to declared that variable outside component function context. problem - how to handle multiple
 *      instances of component.
 * 5)
 */
