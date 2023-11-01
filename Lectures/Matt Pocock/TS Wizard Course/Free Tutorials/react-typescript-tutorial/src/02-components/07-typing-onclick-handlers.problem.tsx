import React from 'react';

interface ButtonProps {
  className: string;
  children: React.ReactNode;
}

/**
 * Your challenge is to determine how to type the component's onClick property to match the type of the native <button>'s onClick.
 */
export const Button = ({ children, className, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};
