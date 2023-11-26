import { ReactNode } from "react";

type CardComponentProps = {
  title: string;
  children: ReactNode;
  actions: ReactNode;
};

export default function CardComponent({
  title,
  children,
  actions,
}: CardComponentProps) {
  return (
    <section>
      <h2>{title}</h2>
      {children}
      {actions}
    </section>
  );
}
