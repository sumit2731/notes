import React, { ButtonHTMLAttributes } from "react";


/**
 * @Desc WE got this type by hovering over button, cpying its type and then by playing around and removing some types.
 *  By just using this we get autocomplete of all button props in our custom Button Components
 */
export const Button = ({
  className,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button {...rest} className={`default-classname ${className}`}></button>
  );
};

const Parent = () => {
  return <Button onClick={() => {}} type="button"></Button>;
};
