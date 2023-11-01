/**
 * Important Typescript types learn
 * 
 * React.FC<PropType>, (ShortForm of Functional Component)
 *      Shortform of React.FunctionComponent<P>. If we do not specify any PropType in generic parameter then default 
 *      PropType is  {}.so you will get error if you try to access any properties on props.This type Returns 
 *      ReactNode.Even if you try to give some manual type to prop, you will get error. Only valid way to define proptype
 *      is to give generic type to component.
 * 
 *      Other properties that exists on React.FC -
 *          propTypes
 *          defaultProps (likely to be depreecated)
 *          displayName
 *          contextTypes
 * 
 *      This is used lesser and lesser today. default way of specifying proptypes is more concise.
 * 
 * 
 *          
 * 
 * React.ReactNode
 *  This is the type that valid return type from functional component or render function of class component.
 *  This is union of these types -
 *      ReactElement(This is a the object that represets the jsx elements, object with these proeprties - type,props,key. there are 
 *          some generic constraints on type proeprty, it should be  a a string or valid component type(both class and functional))
 *      ReactFragment,
 *      ReactPortal,
 *      string,
 *      number,
 *      boolean,
 *      null,
 *      undefined
 *  This can also be used as type of children proeprty.
 * 
 *  Other Similar types -
 *          JSX.Element is more specific Implementation of ReactElement, where both type generic has value any
 *              interface Element extends React.ReactElement<any, any> { }
 *              React.Element is interface with three properties whose data type is generic -0
 *                  type:T
 *                  props:P
 *                  key:K
 * 
 * 
 * 
 * React.ComponentProps<Component Type>
 *      Here "Component Type" is generic with constraint that it can be string(built in html component) or valid react Component(functional 
 *          or class)
 *  It helps us to get prop type of inbuilt HTML components as well as our custom HTML componnts.
 *      ComponentProps<"button"> (Lecture 8 for details)
 *      ComponentProps<typeof CustomComponent> (see Lecture 10 to see its use with Custom Components)
 *      
 *      See Lecture 9, to see how we can omit some types from Prop Type and reuses rest.
 * 
 * Component props accepts a type which is union of these type 
 *      JSX.IntrinsicElements - Default HTML elements
 *      JSXElementConstructor - This is union of both functional component and class component. see it in generic params of ComponentProps.
 */




/**
 *  Some HTML types in React -
 * 
 *  a)onClick: React.MouseEventHandler<HTMLButtonElement>;
 *      See lecture 7.
 *  b)first parameter of onClick - 
 *      e: React.MouseEvent<HTMLButtonElement, MouseEvent>
 */