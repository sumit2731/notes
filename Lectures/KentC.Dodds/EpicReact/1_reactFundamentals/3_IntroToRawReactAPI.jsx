/* workshop Intro to react API -
    React - creates react element
    React DOM - Take React Elements and put them on page

    DOCS -
        https://react.dev/reference/react/createElement

    Also we learn about diffrenet ways of passing childern prop -
        Single chidren - 
        */
        const reactElement = React.createElement(elementType,{className: 'container', children: 'HelloWorld'});
        const reactElement2 = React.createElement(elementType,{className: 'container'}, 'HelloWorld');
        //multiple childern
        const reactElement4 = React.createElement(elementType,
            {
                className: 'container', 
                children: [
                    React.createElement('span',null,'Hello'),
                    React.createElement('span',null,'World')
                ]
        });
        const reactElement3 = React.createElement(elementType,{className: 'container'}, 
            React.createElement('span',null,'Hello'),
            React.createElement('span',null,'World')
        );

    /**
     * About Key warning from docs
     * 
     * You should only pass children as multiple arguments to createElement if they are all statically known, like 
     *  createElement('h1', {}, child1, child2, child3). 
     * If your children are dynamic, pass the entire array as the third argument: 
     *  createElement('ul', {}, listItems). 
     * This ensures that React will warn you about missing keys for any dynamic lists. 
     * For static lists this is not necessary because they never reorder.
     */