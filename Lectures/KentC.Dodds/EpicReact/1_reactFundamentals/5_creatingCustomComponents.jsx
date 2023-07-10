/**
 * To reuse code in react we write functions,In React we call these functions "components" and they have some special properties.
    Components are basically functions which return something that is "renderable" (more React elements, strings, null, numbers, etc.)

    In Step 1 - Here we created a function that returns a react element and then used it as children of another react element
    In Step 2 - Instead of directly calling the react function inside children of another react element. we stored the function
        result in other variables and then used them as chilren of anotherbreact element

    Note - In both of these steps see how babel transpiles the code.function that returns JSX, upon trabspile starts returns react 
        elements i.e React.createElement

    In Step 3 - Instead of calling a function to get jsx and insert it as children of other component,here we passed our function
        as type of ReactElement.When React goes to create a DOM node representing this element, it doesn't create a DOM node, and 
        instead, it creates an element that is just sitting around in memory. Then it calls into this function to get the DOM nodes
        that should represent that element on the page.

        It's only when we render onto the page will this message function be called by React because it's saying, "Hey, this element 
        needs to render. I need to find out the elements that it needs to render."

        Also In ReactDev tools in components tab we see a separate component when we create component by passing function to 
            React.createElement, but we directly call the function to get jsx, we do not see component type in component tab of ract
            dev tools.

        here we saw instead of calling function we can mention the type of function in React.createElement,instaed of passing
        params we pass props object to react.createElement

    In Step 4 - Instead of passing function which returns jsx directly into react.createElement, we used that function in jsx, so
        that babel will convert it into React.createElement call. Also we saw why customComponent names should start from capital 
        letters.

    In Step 5 - We added proptype validation for our component.This can actually be problematic for performance. React actually does 
        not do this in production mode.docs recommend to use typescript for type checking instead of doing it at run time.


    Also in exerise output see how babel handles different html tag i.e capital letters, small letters etc.
 */



/**
 * Extra reading from new DOCS -
 *
 * a)keep components pure (https://react.dev/learn/keeping-components-pure)
 *      same input same output - Given the same inputs, a component should always return the same JSX.
 *      It minds its own business - It should not change any objects or variables that existed before rendering
 *      
 *      detecting bugs in React.Strict mode
 * 
 *      Local mutations -
 *          a)It can chnage variable that are created in same render for rendering.onoutside code will know that this has changed -
 *              This is called “local mutation”—it’s like your component’s little secret.
 *      
 *      side effects can happen in - (updating the screen, starting an animation, changing the data—are called side effects.)
 *          a)Event handlers- they dnt need to be pure because they do not happen during rendering
 *          b)If you’ve exhausted all other options and can’t find the right event handler for your side effect, you can still attach 
 *              it to your returned JSX with a useEffect call in your component. This tells React to execute it later, after rendering,
 *              when side effects are allowed. However, this approach should be your last resort.
 * 
 *      Why react cars about pure components?
 * 
 * 
 * Why React
 */

