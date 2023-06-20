/* 
1)Use css variables instead of prop interpolation expressions

2)Single Source of styles. Single component across multiple contexts.
    Problem - component Child is included in Component Parent.We want to apply some styles to Child specufifcally when it is 
        inside Parent.
    Solution -
        a)Include child , while defining styles of parent.It is evaluated to class that is applied to Child Component.
        b)Include Parent while defining styles for child, that way , we are fully confident that all styles of child
            are at one place and we have full encapsulation.(This makes sense if child component is primarily used inside
            Parent or if Parent is Core Part of our application)
        C)Within Parent we can define a new component based on child using composiition(This makes sense when child is
            very generic component)

3)Isolated CSS 
        Example of margins.
            Solutions for avoiding margins
        Example og Stacking Context


Little Minor Tips -
    a)as prop for semantic html
    b)increasing specificity in styled component styles.
        a)Using &&
        b)Using !important
    c)Use babel Plugin
            This gives better class names for debugging. 
    d)Descendent selectors should be limited to styling the contetnt that belong in same component.

*/