import { ElementType, ReactNode, type ComponentProps } from "react";

type IconButtonProps = {
  Icon: ElementType;
  onClick: () => void;
  children: ReactNode;
} & ComponentProps<"button">;
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

// Example Usage:

function HeartIcon() {
  return <span>❤️</span>;
}

export function Demo() {
  return (
    <IconButton Icon={HeartIcon} onClick={() => console.log("Button clicked!")}>
      Like
    </IconButton>
  );
}
