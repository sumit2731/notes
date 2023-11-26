import { ElementType, ReactNode } from "react";

type IconButtonProps = {
  children: ReactNode;
  onClick: () => void;
  Icon: ElementType;
};
export default function IconButton({
  Icon,
  children,
  ...otherProps
}: IconButtonProps) {
  return (
    <button {...otherProps}>
      <span>
        <Icon />
      </span>
      <span>{children}</span>
    </button>
  );
}
