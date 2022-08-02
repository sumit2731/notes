import React,{useState} from 'react';

export const ButtonWithIconComponent = ({ children, Icon }) => {
  const [isHovered, setIsHovered] = useState();
    return (
      <button onMouseEnter={() => setIsHovered(true)} onMouseLeave = {() => setIsHovered(false)}>
        <Icon color="orange" isHovered = {isHovered} />
        {children}
      </button>
    );
  };