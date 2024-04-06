import type { ComponentPropsWithoutRef } from "react";

/**
 * Solution give in QandA - https://www.udemy.com/course/react-typescript-the-practical-guide/learn/lecture/40470582#questions/20859366
 */

type ButtonProps = ComponentPropsWithoutRef<"button">;
type AnchorProps = ComponentPropsWithoutRef<"a"> & {
  href: string;
};

function Button({ children, ...props }: AnchorProps): JSX.Element;
function Button({ children, ...props }: ButtonProps): JSX.Element;
function Button({ children, ...props }: AnchorProps | ButtonProps) {
  if ("href" in props) {
    //props type is AnchorProps
    return (
      <a className="link" target="blank" {...props}>
        {children}
      </a>
    );
  }
  //props type is ButtonProps
  return (
    <button className="btn" disabled {...props}>
      {children}
    </button>
  );
}
/**
 * Here props is exactly of 1 type.We get around all disadvantages of
 *
 * All mandatory props in each type should be provided and we cannot mix and match these
 */
const div1 = <Button href="google.com" target="blank"></Button>;
const div1 = <Button disabled></Button>;
