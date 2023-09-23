/* 
    A Component is just a function that accepts an argument (props) and returns Elements that should be rendered when this 
        Component renders on the screen. const A = () => <B /> is a Component.

    An Element is an object that describes what needs to be rendered on the screen, with the type either a string for DOM 
        elements or a reference to a Component for components. const b = <B /> is an Element.
    Re-render is just React calling the Component's function.
    A component re-renders when its element object changes, as determined by Object.is comparison of it before and after
        re- render.
    When elements are passed as props to a component, and this component triggers a re-render through a state update,
        elements that are passed as props won't re-render.
    "children" are just props and behave like any other prop when they are passed via JSX nesting syntax:

*/


<Parent>
  <Child />
</Parent>


// the same as:

<Parent children={<Child />} />