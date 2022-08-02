import React,{useState} from 'react';


export const ButtonWithIconRenderFunc = ({ children, renderIcon }) => {
  const [isHovered, setIsHovered] = useState();
    // getting the Element from the function
    const icon = renderIcon({color:'orange', isHovered});
    return (
      <button onMouseEnter={() => setIsHovered(true)} onMouseLeave = {() => setIsHovered(false)}>
        {icon}
        {children}
      </button>
    );
  };