import React from "react";


/**
 * Your challenge is to figure out how to extract all of the property types from the native HTML button component, and then use that to type our 
 * custom Button.
 */
export const Button = ({ className, ...rest }: {}) => {
  return (
    <button {...rest} className={`default-classname ${className}`}></button>
  );
};

const Parent = () => {
  return <Button onClick={() => {}} type="button"></Button>;
};


type t1 = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;