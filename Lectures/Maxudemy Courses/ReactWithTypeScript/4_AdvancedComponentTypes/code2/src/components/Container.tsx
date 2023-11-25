import {
  Children,
  ComponentPropsWithoutRef,
  type ElementType,
  type ReactNode,
  FC,
} from "react";

/**
 * Here we want to pass additional props that are accepted by component that is passed as as to my Container component.
 * For that we can use ComponentPropsWithoutRef type, biut here we do not know which type we will be rendering so we do
 * not know which type to pass as generic, like this -
 *
 * ComponentPropsWithoutRef<'a'>
 *
 * so we commneted out this code and defined type after that
 *
 * solutio to this is to use genric type
 */

// type ContainerProps = {
//   /**
//    * ElementType simply means that the value should be some valid identifier of a component.So of anything that can be output as JSX.
//    * Not the JSX code itself, that would be ReactNode. But instead the identifier of the component that's used in JSX. for example -
//    *
//    * <button></button>
//    *
//    * here button is identifier
//    */
//   as: ElementType;
//   children: ReactNode;
// }

/** */
type ContainerProps<T extends ElementType> = {
  /**
   * ElementType simply means that the value should be some valid identifier of a component.So of anything that can be output as JSX.
   * Not the JSX code itself, that would be ReactNode. But instead the identifier of the component that's used in JSX. for example -
   *
   * <button></button>
   *
   * here button is identifier
   */
  as?: T;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;
/**
 * This is PolymorphicComponent, these are a wrapper components where we don't know in advance,which component it will wrap.Instead,
 * it should be able to wrap all kinds of components.
 */

export default function Container<C extends ElementType>({
  as,
  children,
  ...props
}: ContainerProps<C>) {
  /**
   * I'm remapping that just so that I have a constant or variable, that starts with an uppercase character.Because that allows me to
   * then use it in my JSX code, like this.
   *
   *  <as></as>
   *
   * This would not work with 'as' because it starts with a lowercase character.Therefore React would be looking for a built-in element
   * called 'as' and there is no such element. another alternative to use 'As' instead of 'as'
   */
  //const Component = as;

  /**
   * This is done to remove typing error that we were getting. see lectures 55 for details
   */
  const Component = as || "div";
  return <Component {...props}>{children}</Component>;
}
