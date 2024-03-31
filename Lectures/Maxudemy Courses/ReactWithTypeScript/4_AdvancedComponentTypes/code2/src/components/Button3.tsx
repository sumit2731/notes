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
    return (
      <a className="link" {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className="btn" {...props}>
      {children}
    </button>
  );
}
