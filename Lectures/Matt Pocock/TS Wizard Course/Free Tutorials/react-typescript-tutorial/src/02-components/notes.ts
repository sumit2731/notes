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
 *  This is a vlalid type that any Functional Component can return(For class component defination is different see ComponentProps type).
 *  this is union of these types -
 *      ReactElement,ReactFragment,ReactPortal,string,number,boolean,null,undefined
 *  This can also be used as type of children proeprty.
 * 
 *  Other Similar types -
 *          JSX.Element is more specific Implementation of ReactElement
 *              interface Element extends React.ReactElement<any, any> { }
 *              React.Element is interface with three properties whose data type is generic -0
 *                  type:T
 *                  props:P
 *                  key:K
 * 
 * 
 * 
 * React.ComponentProps<Component Type>
 *  It helps us to get prop type of inbuilt HTML components as well as our custom HTML componnts.
 *      ComponentProps<"button"> (Lecture 8 for details)
 *      ComponentProps<typeof CustomComponent> (see Lecture 10 to see its use with Custom Components)
 *      
 *      See Lecture 9, to see how we can omit some types from Prop Type and reuses rest.
 */




/**
 *  * Some HTML types in React -
 * 
 *  a)onClick: React.MouseEventHandler<HTMLButtonElement>;
 *      See lecture 7.
 *  b)first parameter of onClick - 
 *      e: React.MouseEvent<HTMLButtonElement, MouseEvent>
 */