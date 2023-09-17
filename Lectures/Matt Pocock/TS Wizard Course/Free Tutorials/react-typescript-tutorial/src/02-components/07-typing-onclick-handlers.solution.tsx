import React from "react";

interface ButtonProps {
  className: string;
  children: React.ReactNode;
  /**
   * 
   * Propblem -We wanted type of onClick to be same as prop onClick of html buttom component.
   * 
   * We copied this type from by hovering over onClick prop of button element.
   * 
   * 
   * You can use React.MouseEventHandler<HTMLButtonElement> or you can us eless specififc type like React.MouseEventHandler.
   * In Parent component when we define onClick function, This generic type passed to React.MouseEventhandler is type of e.
   * currentTarget,IF you do not provide anything then type of e.currentTarget is HTMLElement.
   * we get these types propagated to first argument,i.e e.currentTarget
   * type is the type passed between <> to React.MouseEventHandler.
   * 
   * Learning here is how you can get native prop types and how you can make them less specififc if you want.
   */
  //onClick: React.MouseEventHandler;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({ children, className, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

const Parent = () => {
  return (
    <Button className="" onClick = {(e) => {
      console.log(e);
    }}>
      Children
    </Button>
  );
}
