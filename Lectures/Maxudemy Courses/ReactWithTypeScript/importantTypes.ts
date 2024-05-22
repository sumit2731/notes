import { type ReactNode, type PropsWithChildren, Component, FC } from "react";

/**
 * 1)ReactNode
 * this can be  used here -
 *  a)type of children prop
 *  b)return type of functional component
 * this is union of some types where JSX elements are represented by ReactElement
 */

/**
 * 2)ReactElement
 * 
 *  interface ReactElement<
        P = any,
        T extends string | JSXElementConstructor<any> = string | JSXElementConstructor<any>,
    > {
        type: T;
        props: P;
        key: string | null;
    }
 * 
 * This represents the the JSXElement(Converted Object form of JSX element) both built in as well
 * as custom.
 *  
 * this is used in 
 *  a)to represent JSX element in reactNode type
 *  b)Function component types has return type of JSX.Element. JSX Element extends this interface only
 */

/**
 * 3)JSXElementConstructor<P>
 *
 * a)Used in type property of ReactElement to represent custom components
 * b)In ComponentProps this is used to
 *      a)Place restriction that passed generic should be a component(along with union of inbuilt Components)
 *      b)used in infer to get prop type
 *
 * This is union of FunctionComponent type and Class Component Type.propTYpes is passed as
 * generics for this
 *
 *  a)Functional Component is function which accepts argument of prototype and returns ReactNode
 *  b)Class Component is  Constructor Function, this is called with props and returns - Component<P,S>
 *
 *
 * Alternate Type - ElementType (this also  InBuilt ReactComponent for HTML plus CustomComponent)
 *  how ElementType differs from JSXElementConstructor is, Element Type is Union of -
 *
 *  a)All strings that represent nuilt in components like 'div', 'span'.
 *  b)Custom Components - FunctionComponent and ComponentClass
 */

/**
 * 4)Component
 *
 * Our custom class components extends this class.It is defined at 2 places
 *
 * a)There is interface of this name which has all lifeCycle methods defined.
 *  componentDidMount?()
 *  shouldComponentUpdate?(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): boolean;
 *  componentWillUnmount?(): void;
 *  componentDidCatch?(error: Error, errorInfo: ErrorInfo): void;
 *  getSnapshotBeforeUpdate?(prevProps: Readonly<P>, prevState: Readonly<S>): SS | null;
 *  componentDidUpdate?(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot?: SS): void;
 * b)then there is class defined with this name which has these types -
 *  a)static contextType
 *  b)context: unknown;
 *  c)constructor(props: Readonly<P> | P);
 *  d)setState
 *  e)forceUpdate
 *  f)render
 *  g)props
 *  h)state
 *  i)refs
 *
 *
 *  used in defining your custom class component - class Foo extends React.Component
 *  This class has fields like props, state,setState, static ContextType.
 * Because of declaration merging these 2 types are combined
 */

/**
 * 5)PropsWithChildren<PropType>
 *
 * Used to define prop type of component.
 *
 * children property with value type ReactNode is already defined.Rest types are defined by generic
 */

/**
 * 6)FC<PropType>
 *
 * type FC<P = {}> = FunctionComponent<P>;
 *
 * This represents the Functional Component Type, with some Extra properties
 *
 * This is alternative to define type of Functional Component.
 */

/**
 * 7)FunctionalComponent<P = {}>
 * 
 * This represents the FunctionalComponent, with some Extra Type
 * 
 *  interface FunctionComponent<P = {}> {
        (props: P, context?: any): ReactNode;
        propTypes?: WeakValidationMap<P> | undefined;
        contextTypes?: ValidationMap<any> | undefined;
        defaultProps?: Partial<P> | undefined;
        displayName?: string | undefined;
    }
 */

/**
 * 7)ComponentProps<ComponentType>
 *
 * returns the prop types for given component. primarily used to get prop types of built in html elements
 *  div, button and a.
 *
 * Generic has following constraints -
 *  a)string can only be built in HTMLElement (JSX.IntrinsicElements, key represents HTML name, value is PropType)
 *  b)CustomComponent Type - JSXElementConstructor<any>
 *
 * used in Section4/code2/src/components/input lecture 51
 *
 * Other variations -
 *      ComponentPropsWithRef<ComponentType>
 *      ComponentPropsWithoutRef<ComponentType> - here In constraints see descriptive type of ClassComponents
 */

/**
 * 8)
 * @ElementType - THis represent either a string form of inbuilt jsx element or Ref to CustomReactElement
 *      a)checks whether this genericType is prop types of inbuilt elements if yes returns component type for that.
 *      b)otherwise it returns- ComponentType<P>. which is either Functional or class component
 * <as></as>
 *
 * Union of -
 *
 *  a)Built in HTML element(string like - h1,div, span) - checks whether this genericType is prop types of inbuilt
 *      elements if yes return component representing that type
 *  b)CustomComponent(Functional or Class) - ComponentClass<P> represents this
 *
 * ComponentClass is union of -
 *      a)ClassComponent (represent class component with extra props) and
 *      b)FunctionalComponent(function with extra properties)
 *
 *
 * Similar to - @JSXElementConstructor<P> plus adds inbuilt component types also.
 *
 * used in section 4. code2/src/components/Container.tsx
 */
