import {
  Children,
  ComponentPropsWithoutRef,
  type ElementType,
  type ReactNode,
  FC,
} from "react";

/**
 * This is PolymorphicComponent, these are a wrapper components where we don't know in advance,which component it will wrap.
 *  Instead,it should be able to wrap all kinds of components.
 */

/**
 * Approach 1
 */

type ContainerProps1 = {
  // some valid identifier of component
  as: ElementType;
};

const Container1 = ({ as }: ContainerProps1) => {
  const Component = as;
  return <Component></Component>;
};

const div1 = <Container1 as="div"></Container1>;

/**
 * Here we want to pass additional props that are accepted by component that is passed as as to my Container component.
 * For that we can use ComponentPropsWithoutRef type, but here we do not know which type we will be rendering so we do
 * not know which type to pass as generic, like this -
 *
 * ComponentPropsWithoutRef<'a'>
 *
 * so we commneted out this code and defined type after that
 *
 * solution to this is to use generic type
 */

/* type ContainerProps = {
  as: ElementType;
  children: ReactNode;
} & ComponentPropsWithoutRef<>; */

type ContainerProps<T extends ElementType> = {
  /**
   * ElementType simply means that the value should be some valid identifier of a component.So of anything that can be output
   * as JSX.Not the JSX code itself, that would be ReactNode. But instead the identifier of the component that's used in
   * JSX. for example -
   *
   * <button></button>
   *
   * here button is identifier
   */
  // as: T;
  as?: T;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

export default function Container<C extends ElementType>({
  as,
  children,
  ...props
}: ContainerProps<C>) {
  /**
   * here we get a unique typing error, 2 ways to get past this -
   *  a)Use TypeCast to give type ElementType to Component as of now it is different.
   *  b) make 'as' as optional in props and give some default value to Component
   */
  // const Component = as;
  // return <Component {...props}>{children}</Component>;

  const Component = as || "div";
  return <Component {...props}>{children}</Component>;
}
