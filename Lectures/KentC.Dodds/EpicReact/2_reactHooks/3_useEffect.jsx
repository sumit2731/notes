/**
 * Problem - Store the value enetered by user in local storage and retrieve it when component loads.
 * 
 * a)way 1 - stored value in local storage in useEffect hook(component should be pure, sideeffects should be done either in event handlers
 *  or in useEffect hook)
 *  in useState return the either value in localStorage or intialValue
 * 
 * b)way 2 -
 *      lazy initialization in useState
 *          To avoid this problem, React's useState hook allows you to pass a function instead of the actual value, and then it will only
 *           call that function to get the state value when the component is rendered the first time. So you can go from this: 
 *              React.useState(someExpensiveComputation()) To this: React.useState(() => someExpensiveComputation())
    c)way 3 -
        Using dependency array in useEffect.comparison is done shallowly(===), internally react uses Object.is

    d)way4 - Here we extracted state retrieval and interaction with local storage logic into another custom hook

    e)Here we made our custom hook super customizable and added ton of functonalities. see code for detauls
 *     
 */