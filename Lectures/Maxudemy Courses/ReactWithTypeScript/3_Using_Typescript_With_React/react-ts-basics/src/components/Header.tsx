import { type ReactNode } from "react";

type HeaderProps = {
  image: {
    src: string;
    alt: string;
  };
  children: ReactNode;
};

export const Header = ({ image, children }: HeaderProps) => {
  return (
    <header>
      <img {...image}></img>
      {children}
    </header>
  );
};
