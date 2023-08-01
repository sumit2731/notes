/* 
a)Passed data through prop drilling
    maintained state at top level,whenever any state changes all components were rendered.

    https://codesandbox.io/s/form-initial-implementation-uxw8v?file=/src/components/personal-info-section.tsx

b)Used context to pass data.It reduced rendering of intermediate componetes, now each component that uses
    context is rendered.Prevented re-renders of components that are just passing data around.
    https://codesandbox.io/s/form-implementation-with-context-2-3wd2i?file=/src/form-api.tsx
    
    Optimizations -

        a)Splitting data and API.we used 2 contexts.Then we memorized the value using useMemo, but here state was dependency.
            so every time state changes API is also updated. solution -

            a)use functional form of setState, that way olderState is not required.(mentioned in comments)
            b)use useReducer. one benefit that this approach has is, if in some component we want to submit the form, we don't need
                get data via context, we can just dispatch a action.
            code iwth useReducer - https://codesandbox.io/s/form-implementation-split-api-2-g9q3e?file=/src/App.tsx

        b)Now splitted for form data firther into contexts.
            Now countyList data needed country data but data was changing even when names was typed.so we further splitted them into
            a separate context.

               code - https://codesandbox.io/s/form-implementation-split-api-and-state-0tvq0?file=/src/form-api.tsx

c)In last we saw that instead of using this context implementation we can replace the setup with a state management library.
    At component level we will use same hooks chnages needs to be made just at form-api.tsx.

        code - https://codesandbox.io/s/form-implementation-redux-2-t5w30?file=/src/form-api.tsx
*/