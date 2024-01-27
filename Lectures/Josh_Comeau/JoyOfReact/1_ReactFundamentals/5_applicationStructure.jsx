/**
 * Index - t's responsible for rendering our React application, turning the React elements we
 * write into live DOM nodes.
 *
 * It's common to do "setup" tasks in this file as well. For example, this file is a good place
 * to import global CSS files, or set up any error-logging services.
 * 
 * Because index.js is more of a setup file than an active part of the application, we don't 
 * typically want to render a bunch of JSX here. It would be weird to include headers and
 * buttons and footers here; that stuff happens in the app, and we're still setting up the app here.

    *Aside from some provider components (discussed later in the course), this file generally 
    only renders a single element: <App />.
 */

/**
 *App.jsx - the component that is an ancestor to every other component. Pick a random component
    in a React app, and you should be able to trace its lineage to App.

    This component will sometimes manage "core" layout stuff, like headers and footers
    If you're using a routing solution like React Router, our top-level routes are often 
        included in this file.

    Every project is different, and there are no hard rules for how to structure this component.
    The important thing is that App should show developers how the application is structured.
    It's a home base for developers to check, to get acquainted with how things work.
 */
